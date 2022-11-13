(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8943],{7903:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/login",function(){return r(8188)}])},4846:function(n,e,r){"use strict";r.d(e,{Z:function(){return b}});var t=r(4051),o=r.n(t),i=r(5893),a=r(7294),c=r(1163),u=r(3835),s=r(7426),l=r(1057),p=r(7357),d=r(1903),g=r(719),f=r(5861),m=r(4229),v={container:{width:"100%",display:"grid",minHeight:"50vh",placeItems:"center"},loginContainer:{width:{xs:"100%",sm:"400px"},display:"flex",flexDirection:"column",textAlign:"center",padding:function(n){return n.spacing(1)},"& .MuiTextField-root, button":{marginTop:function(n){return n.spacing(2)}},"& h5":{marginBottom:function(n){return n.spacing(2)}},"& svg":{fontSize:"45px",margin:"auto",marginBottom:"8px"}},btnContainer:{display:"flex",gap:3,"& button":{flexGrow:1}}};var x=function(n){var e=n.loading,r=n.hasUser,t=n.state,o=n.loginTitle,a=n.onInputChange,c=n.onInputClick,u=n.onBtnClick;return(0,i.jsxs)("div",{children:[e&&(0,i.jsx)(g.Z,{}),!e&&!r&&(0,i.jsx)(p.Z,{sx:v.container,id:"bacap-login",children:(0,i.jsxs)(p.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:v.loginContainer,children:["Superadmin"===o&&(0,i.jsx)(m.Z,{color:"primary",size:"large"}),(0,i.jsxs)(f.Z,{variant:"h5",children:["ACAP ",(0,i.jsx)("br",{}),o||"Admin"," Login"]}),(0,i.jsx)(d.Z,{error:""!==t.error,id:"email",label:"Enter email",variant:"outlined",value:t.email,onChange:a,onClick:c}),(0,i.jsx)(d.Z,{error:""!==t.error,id:"password",label:"Enter password",type:"password",variant:"outlined",value:t.password,onChange:a,onClick:c,helperText:t.error}),(0,i.jsx)(l.Z,{variant:"contained",size:"large",onClick:u,children:"Log in"})]})})]})};function h(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function j(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){h(i,t,o,a,c,"next",n)}function c(n){h(i,t,o,a,c,"throw",n)}a(void 0)}))}}function w(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function y(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){w(n,e,r[e])}))}return n}var C={email:"",password:"",error:""};var b=function(n){var e=n.accLevel,r=void 0===e?2:e,t=n.loginTitle,l=void 0===t?"":t,p=(0,a.useState)(C),d=p[0],g=p[1],f=(0,u.aC)(),m=(0,c.useRouter)();(0,a.useEffect)((function(){if(f.user&&!f.loading&&""===f.error){var n=r===s.DW.ADMIN?"/admin":"/superadmin";f.user.accountlevel===r?m.push(n):(f.logOut(),g((function(n){return y({},n,{error:"Unauthorized account level."})})))}}),[f,r,m]),(0,a.useEffect)((function(){""!==f.error&&g((function(n){return y({},n,{error:f.error})}))}),[f.error]);var v=function(){var n=j(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.signIn({email:d.email,password:d.password});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),g((function(e){return y({},e,{error:(0,u.Z)(n.t0.message)})}));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=j(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.logOut();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,i.jsx)(x,{loading:f.loading,hasUser:f.user,state:d,loginTitle:l,onInputChange:function(n){var e=n.target,r=e.id,t=e.value;g((function(n){return y({},n,w({},r,t))})),""!==d.error&&g(y({},d,{error:""}))},onInputClick:function(n){g((function(e){var r;return y({},e,(w(r={},n.target.id,""),w(r,"error",""),r))}))},onBtnClick:v,onBtnLogoutClick:h})}},3370:function(n,e,r){"use strict";var t=r(5893),o=r(9008);e.Z=function(n){var e=n.title,r=n.ogDescription,i=n.ogImageURL,a=n.ogImgAlt,c=void 0===a?"Picture":a,u=n.ogSiteName,s=void 0===u?"ACAP-BICOL":u,l=n.ogURL;return(0,t.jsxs)(o.default,{children:[(0,t.jsx)("meta",{name:"description",content:r}),(0,t.jsx)("meta",{name:"og:description",content:r}),(0,t.jsx)("meta",{property:"og:title",content:e}),(0,t.jsx)("meta",{property:"og:site_name",content:s}),(0,t.jsx)("meta",{property:"og:image",content:i}),(0,t.jsx)("meta",{property:"og:image:width",content:"600"}),(0,t.jsx)("meta",{property:"og:image:height",content:"315"}),(0,t.jsx)("meta",{property:"og:image:alt",content:c}),(0,t.jsx)("meta",{property:"og:url",content:l}),(0,t.jsx)("title",{children:e})]})}},719:function(n,e,r){"use strict";r.d(e,{Z:function(){return u}});var t=r(5893),o=r(7357),i=r(8456),a=r(5861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var u=function(){return(0,t.jsx)(o.Z,{sx:c.container,children:(0,t.jsxs)(o.Z,{sx:c.loading,children:[(0,t.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(i.Z,{size:"32px"})]})})}},8188:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return c}});var t=r(5893),o=r(7426),i=r(4846),a=r(3370);var c=!0;e.default=function(n){var e=n.media;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) Superadmin Login",ogDescription:e.description,ogImageURL:e.url,ogURL:e.path}),(0,t.jsx)(i.Z,{loginTitle:"Superadmin",accLevel:o.DW.SUPERADMIN})]})}}},function(n){n.O(0,[9351,6153,9964,1704,1903,4295,9774,2888,179],(function(){return e=7903,n(n.s=e);var e}));var e=n.O();_N_E=e}]);