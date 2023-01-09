require('dotenv').config()
const path = require('path')
const routes = require('./routes')

const lti = require('./ltijs').Provider


let consumerAccessTokenURL = "https://api.coursera.org/api/lti/auth/accessToken/1220~ltitoolonrendercom";
let consumerAuthorizationURL = "https://api.coursera.org/api/lti/auth/token";
let consumerToolClientID = "DR-n_kniQZafp_5J4mGWFA" ;
let consumerName = "coursera";
let consumerUrl = "https://coursera.org";
let consumerAuthorizationconfig = {
  method: "JWK_SET",
  key: "https://api.coursera.org/api/lti/keyset"
};


// Setup
lti.setup(process.env.LTI_KEY,
  {
    url: process.env.DB_HOST + '/' + process.env.DB_NAME ,
    connection: { user: process.env.DB_USER, pass: process.env.DB_PASS }
  }, {
    staticPath: path.join(__dirname, './public'), // Path to static files
    cookies: {
      secure: true, // Set secure to true if the testing platform is in a different domain and https is being used
      sameSite: 'None' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
    },
    
    devMode: true // Set DevMode to true if the testing platform is in a different domain and https is not being used
  })

// When receiving successful LTI launch redirects to app
lti.onConnect(async (token, req, res) => {
  return res.sendFile(path.join(__dirname, './public/index.html'))
})

// When receiving deep linking request redirects to deep screen
lti.onDeepLinking(async (token, req, res) => {
  return lti.redirect(res, '/deeplink', { newResource: true })
})

// Setting up routes
lti.app.use(routes)

// Setup function
const setup = async () => {
  await lti.deploy({ port: process.env.PORT })

  /**
   * Register platform
   */
   await lti.registerPlatform({
    url: consumerUrl,
    name: consumerName,
    clientId: consumerToolClientID,
    authenticationEndpoint: consumerAuthorizationURL,
    accesstokenEndpoint: consumerAccessTokenURL,
    authConfig: consumerAuthorizationconfig
  }) 
}

setup()
