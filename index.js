require('dotenv').config()
const path = require('path')
const routes = require('./src/routes')

const lti = require('ltijs').Provider

const testUrl = 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?authSource=admin';
console.log(testUrl);

// Setup
lti.setup(process.env.LTI_KEY,
  {
    url: process.env.DB_HOST + '/' + process.env.DB_NAME,
    connection: { user: process.env.DB_USER, pass: process.env.DB_PASS }
  }, {
  staticPath: path.join(__dirname, './public'), // Path to static files
  cookies: {
    secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
    sameSite: '' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
  },
  devMode: true // Set DevMode to true if the testing platform is in a different domain and https is not being used
})


// Setting up routes
lti.app.use(routes)

const setup = async () => {
  await lti.deploy({port: 3000});
  let platform = await lti.registerPlatform({
    url: "https://www.coursera.org/",
    name: "Coursera",
    clientId: "sMH8RO49SEeB_ETuPXhHDQ",
    authenticationEndpoint: "https://api.coursera.org/api/lti/auth/token",
    accesstokenEndpoint: 'https://api.coursera.org/api/lti/auth/accessToken/1220~ec2-3-89-250-8compute-1amazonawscom',
    authConfig: { method: 'JWK_SET', key: 'https://api.coursera.org/api/lti/keyset' }
  })
  console.log('the platform after the set is', platform);
  const key = await platform.platformPublicKey()
  console.log('key', key)
  lti.onConnect(async (token, req, res, next) => {
    console.log('the token is working:', token);
    lti.redirect(res, '/')
  });
}
setup();
module.exports = lti.app;
