(this["webpackJsonpltijs-demo-grade"]=this["webpackJsonpltijs-demo-grade"]||[]).push([[0],{276:function(e,a,t){e.exports=t(311)},281:function(e,a,t){},311:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),i=(t(281),t(11)),l=t.n(i),s=t(19),u=t(33),m=t(108),p=t.n(m),d=t(175),g=(t(292),t(56)),b=t(48),f=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer",width:"300px",maxWidth:"100%"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),marginRight:e.spacing(2),marginLeft:e.spacing(2),backgroundColor:"#013b6c"},table1:{marginBottom:e.spacing(4)},table2:{marginTop:e.spacing(4)}}}));function h(){f(),Object(b.b)().enqueueSnackbar;var e=Object(n.useState)(),a=Object(u.a)(e,2),t=(a[0],a[1]),o=function(){var e=new URLSearchParams(window.location.search),a=e.get("ltik");e.get("response_type");if(!a)throw new Error("Missing lti key.");if(a.indexOf("api.coursera.org/api/lti/auth/token")>-1){console.log("link",window.location.search),window.open(window.location.search.split("?ltik=")[1],"_self")}return a};return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/info",{credentials:"include",headers:{Authorization:"Bearer "+o()}}).json();case 3:(a=e.sent)&&a.context&&a.context.custom&&a.context.custom.custom_channel_redirect&&window.open(a.context.custom.custom_channel_redirect+"?username="+a.name+"&useremail="+a.email,"_self"),t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null)}var v=t(67),w=t(72),x=t(339),k=t(340),E=t(338),y=t(342),j=t(143),C=t(341),O=t(144),N=t.n(O),S=t(145),T=t.n(S),B=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:e.spacing(4)},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"}}}));function P(){var e=B(),a=Object(b.b)().enqueueSnackbar,t=Object(n.useState)(70),o=Object(u.a)(t,2),c=o[0],i=o[1],m=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},d=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a("Grade "+t+" succesfully sent!",{variant:"success"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c,e.prev=1,a.preventDefault(),n={grade:t},e.next=6,g.a.post("/grade",{credentials:"include",json:n,headers:{Authorization:"Bearer "+m()}});case 6:d(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),f("Failed sending grade to platform! "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://cvmcosta.me/ltijs","_blank").focus();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(E.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(k.a,{container:!0,className:e.logo},r.a.createElement(k.a,{item:!0,xs:!0,className:e.logo1+" blank"},r.a.createElement(p.a,{className:e.logo,src:"https://raw.githubusercontent.com/Cvmcosta/ltijs/master/docs/logo-300.svg",onClick:O,disableSpinner:!0}))),r.a.createElement(w.a,{variant:"h5",gutterBottom:!0},"Select your grade:"),r.a.createElement(k.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(k.a,{item:!0,xs:!0},r.a.createElement(y.a,{value:"number"===typeof c?c:0,onChange:function(e,a){i(a)},"aria-labelledby":"input-slider",color:"primary",classes:{thumbColorPrimary:e.slider,rail:e.slider,track:e.slider},className:e.sliderstyle})),r.a.createElement(k.a,{item:!0},r.a.createElement(j.a,{className:e.input,value:c,margin:"none",onChange:function(e){i(""===e.target.value?"":Number(e.target.value))},onBlur:function(){c<0?i(0):c>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))),r.a.createElement(C.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin,onClick:h},r.a.createElement(N.a,{className:e.extendedIcon}),"Submit")),r.a.createElement(v.b,{to:{pathname:"/",search:document.location.search}},r.a.createElement(C.a,{color:"primary","aria-label":"home",className:e.home},r.a.createElement(T.a,null))))}var R=t(146),W=t.n(R),I=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{overflow:"hidden",width:"100%",display:"flex",justifyContent:"center"},fab:{marginTop:e.spacing(4)},btnDiv:{display:"flex",justifyContent:"center"},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:"10%"},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"}}}));function _(){var e=I(),a=Object(b.b)().enqueueSnackbar,t=Object(n.useState)(),o=Object(u.a)(t,2),c=o[0],i=o[1],m=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},p=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/members",{credentials:"include",headers:{Authorization:"Bearer "+m()}}).json();case 3:a=e.sent,console.log(a),i(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),p("Failed retrieving members! "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(E.a,{component:"main",maxWidth:"lg"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12,className:e.table},r.a.createElement(W.a,{title:"Members:",data:c,columns:[{name:"name",label:"Name"},{name:"roles",label:"Role"}],options:{filterType:"checkbox",selectableRows:"none",disableToolbarSelect:!0,download:!1,print:!1,searchOpen:!1,viewColumns:!1,filter:!1,selectableRowsOnClick:!1,rowsPerPage:5,responsive:"scrollFullHeight"}})))),r.a.createElement(v.b,{to:{pathname:"/",search:document.location.search}},r.a.createElement(C.a,{color:"primary","aria-label":"home",className:e.home},r.a.createElement(T.a,null))))}var D=t(265),F=t.n(D),z=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{overflow:"hidden",width:"100%",display:"flex",justifyContent:"center"},fab:{marginTop:e.spacing(4)},btnDiv:{display:"flex",justifyContent:"center"},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:"10%"}}}));function A(){var e=z(),a=Object(b.b)().enqueueSnackbar,t=Object(n.useState)(!1),o=Object(u.a)(t,2),c=o[0],i=o[1],m=Object(n.useState)([]),p=Object(u.a)(m,2),d=p[0],f=p[1],h=Object(n.useState)([]),v=Object(u.a)(h,2),w=v[0],y=v[1],j=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},O=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/resources",{credentials:"include",headers:{Authorization:"Bearer "+j()}}).json();case 3:a=e.sent,f(a),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),O("Failed retrieving example resources! "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==c){e.next=4;break}return O("Please select a resource."),e.abrupt("return");case 4:return e.next=6,g.a.post("/deeplink",{credentials:"include",json:d[c],headers:{Authorization:"Bearer "+j()}}).text();case 6:a=e.sent,F()("body").append(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),O("Failed creating deep link! "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T={filterType:"checkbox",selectableRows:"single",disableToolbarSelect:!0,download:!1,print:!1,searchOpen:!1,search:!1,viewColumns:!1,filter:!1,selectableRowsOnClick:!0,onRowsSelect:function(e,a){i(e[0].dataIndex),y(a.map((function(e){return e.dataIndex})))},rowsSelected:w,rowsPerPage:5,responsive:"scrollFullHeight"};return r.a.createElement(E.a,{component:"main",maxWidth:"lg"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12,className:e.table},r.a.createElement(W.a,{title:"Example custom resources:",data:d,columns:[{name:"name",label:"Name"},{name:"value",label:"Value"}],options:T}),r.a.createElement(k.a,{item:!0,xs:!0,className:e.btnDiv},r.a.createElement(C.a,{variant:"extended",color:"primary","aria-label":"add",className:e.fab,onClick:S},r.a.createElement(N.a,{className:e.extendedIcon}),"Submit"))))))}var L=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:e.spacing(4)},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"},maindiv:{display:"flex",flexDirection:"column",justifyContent:"center"}}}));function M(){var e=L(),a=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://cvmcosta.me/ltijs","_blank").focus();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(E.a,{className:e.maindiv,component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(k.a,{container:!0,className:e.logo},r.a.createElement(k.a,{item:!0,xs:!0,className:e.logo1+" blank"},r.a.createElement(p.a,{className:e.logo,src:"https://raw.githubusercontent.com/Cvmcosta/ltijs/master/docs/logo-300.svg",onClick:a,disableSpinner:!0})))))}var q=t(21);function U(){return r.a.createElement(v.a,null,r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(q.a,{path:"/grades"},r.a.createElement(P,null)),r.a.createElement(q.a,{path:"/namesandroles"},r.a.createElement(_,null)),r.a.createElement(q.a,{path:"/deeplink"},r.a.createElement(A,null)),r.a.createElement(q.a,{path:"/nolti"},r.a.createElement(M,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[276,1,2]]]);
//# sourceMappingURL=main.aaca1630.chunk.js.map