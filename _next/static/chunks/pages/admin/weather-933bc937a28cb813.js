(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{1158:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/weather",function(){return t(1333)}])},4623:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(7357),a=t(8456),i=t(5861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var s=function(){return(0,r.jsx)(o.Z,{sx:c.container,children:(0,r.jsxs)(o.Z,{sx:c.loading,children:[(0,r.jsx)(i.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(a.Z,{size:"32px"})]})})}},7702:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),o=t(7357),a=t(7294),i=t(2293),c=t(6720),s=t(7948),u=t(7720),l=t(7533),f=t(3946),d=t(8462),p=t(891),h=t(7594),b=t(9334),v=t(155),x=t(5861),m=t(1664),y=t(7520),g=t(9662),j=t(3384),w=t(326),O=t(7427),S=t(1898),k=t(8349),P={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"}},listitem:{"& a":{textDecoration:"none"}}};function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=280,C=[{text:"Get Started",link:"/admin",icon:(0,r.jsx)(j.Z,{})},{text:"Weather Services",link:"/admin/weather",icon:(0,r.jsx)(k.Z,{})},{text:"Create Crops Bulletins",link:"/admin/bulletins/crops",icon:(0,r.jsx)(S.Z,{})},{text:"Create Risks Bulletins",link:"/admin/bulletins/risks",icon:(0,r.jsx)(S.Z,{})}],E=[{text:"BACAP Website",link:"/",icon:(0,r.jsx)(y.Z,{})},{text:"Profile",link:"/admin/profile",icon:(0,r.jsx)(O.Z,{})},{text:"Logout",link:"#",icon:(0,r.jsx)(g.Z,{})}];function R(e){var n=e.window,t=_(a.useState(!1),2),y=t[0],g=t[1],j=e.user,O=e.onBtnClick,S=function(){g(!y)},k=(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(d.Z,{sx:P.list,children:C.map((function(e,n){return(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]})},n)}))}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(d.Z,{sx:P.list,children:E.map((function(e,n){return"Logout"===e.text?(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,onClick:O,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]})},n):(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]},n)},n)}))})]}),Z=void 0!==n?function(){return n().document.body}:void 0;return(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(c.ZP,{}),(0,r.jsx)(i.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(A,"px)")},ml:{sm:"".concat(A,"px")}},children:(0,r.jsxs)(v.Z,{sx:P.toolbar,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(f.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:S,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(w.Z,{})}),(0,r.jsx)(x.Z,{variant:"h6",noWrap:!0,component:"div",children:"BACAP Admin"})]}),(0,r.jsxs)(o.Z,{sx:P.profileToolbar,children:["Welcome, ",j.email,"!"]})]})}),(0,r.jsxs)(o.Z,{component:"nav",sx:{width:{sm:A},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,r.jsx)(l.ZP,{container:Z,variant:"temporary",open:y,onClose:S,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:A}},children:k}),(0,r.jsx)(l.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:A}},open:!0,children:k})]}),(0,r.jsxs)(o.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(A,"px)")}},children:[(0,r.jsx)(v.Z,{}),(0,r.jsx)(s.Z,{maxWidth:"lg",children:e.children})]})]})}var U=t(4623);var T=function(e){return(0,r.jsxs)(o.Z,{sx:{marginTop:function(e){return e.spacing(4)}},children:[e.loading&&(0,r.jsx)(U.Z,{}),!e.loading&&e.user&&(0,r.jsx)(R,{user:e.user,onBtnClick:e.onBtnLogoutClick,children:e.children})]})}},6601:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(5893),o=t(7357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.children,t=e.value,c=e.index,s=i(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(o.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},1333:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Pe},default:function(){return Ze}});var r=t(4051),o=t.n(r),a=t(5893),i=t(7294),c=t(1163),s=t(4815),u=t(7467),l=t(7357),f=t(44),d=t(8409),p=t(6601),h=t(5861),b=t(7702),v=t(1057),x=t(6863),m=t(657),y=t(1425),g=t(6580),j=t(8951),w=t(7645),O=t(3281),S=t(9669),k=t.n(S),P=t(5048);function Z(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function _(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){Z(a,r,o,i,c,"next",e)}function c(e){Z(a,r,o,i,c,"throw",e)}i(void 0)}))}}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"setAuthHeaders",value:function(e){return _(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,P.I8.currentUser.getIdToken(!0);case 4:t=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0.message);case 10:e.headers.Authorization=t?"Bearer ".concat(t):"";case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},{key:"createRequestObject",value:function(e){var n=e.body,t=e.params,r=this;return _(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{}},n&&(a.data=n),t&&(a.params=t),e.next=5,r.setAuthHeaders(a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}}])&&A(n.prototype,t),r&&A(n,r),e}();function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function U(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){R(a,r,o,i,c,"next",e)}function c(e){R(a,r,o,i,c,"throw",e)}i(void 0)}))}}function T(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){B(e,n,t[n])}))}return e}function M(e,n){return!n||"object"!==N(n)&&"function"!==typeof n?E(e):n}function L(e,n){return L=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},L(e,n)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function H(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=I(e);if(n){var o=I(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return M(this,t)}}var F=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&L(e,n)}(i,e);var n,t,r,a=H(i);function i(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i);var n=E(e=a.call(this));return B(E(e),"getUsers",U(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().get(n.USERS_API_LIST);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e.BASE_URL="https://amia-cis.herokuapp.com/api",e.USERS_API="".concat(e.BASE_URL,"/user"),e.USERS_API_LIST="".concat(e.BASE_URL,"/users"),e}return n=i,(t=[{key:"createUser",value:function(e){var n=this;return U(o().mark((function t(){var r,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["email","displayname","account_level","disabled","emailverified"].forEach((function(n){void 0!==e[n]&&(r[n]=e[n])})),t.next=5,n.createRequestObject({body:r});case 5:return a=t.sent,t.next=8,k()(D({},a,{url:n.USERS_API,method:"POST"}));case 8:return i=t.sent,t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"updateUser",value:function(e){var n=this;return U(o().mark((function t(){var r,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["uid","email","displayname","disabled","emailverified","account_level"].forEach((function(n){void 0!==e[n.toLowerCase()]&&(r[n]=e[n.toLowerCase()])})),t.next=5,n.createRequestObject({body:r});case 5:return a=t.sent,t.next=8,k()(D({},a,{url:n.USERS_API,method:"PATCH"}));case 8:return i=t.sent,t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"deleteUser",value:function(e){var n=this;return U(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({});case 2:return r=t.sent,t.next=5,k().delete("".concat(n.USERS_API,"/").concat(e),r);case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getUser",value:function(e){var n=e.uid,t=e.email,r=this;return U(o().mark((function e(){var a,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},n&&(a={uid:n}),t&&(a={email:t}),e.next=5,r.createRequestObject({params:a});case 5:return i=e.sent,e.next=8,k().get("".concat(r.BASE_URL,"/user"),i);case 8:return c=e.sent,e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})))()}}])&&T(n.prototype,t),r&&T(n,r),i}(C),W=t(4854);function G(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){q(e,n,t[n])}))}return e}function X(e,n){return!n||"object"!==K(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function $(e,n){return $=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},$(e,n)}var K=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Q(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=J(e);if(n){var o=J(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return X(this,t)}}var Y=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&$(e,n)}(i,e);var n,t,r,a=Q(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).BASE_URL="https://amia-cis.herokuapp.com/api",e.WEATHER_FORECAST_SEASONAL="".concat(e.BASE_URL,"/weather/seasonal/region"),e.WEATHER_FORECAST_PROVINCE="".concat(e.BASE_URL,"/weather/seasonal/province"),e}return n=i,t=[{key:"upsertSeasonal",value:function(e){var n,t=this;return(n=o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,k()(V({},r,{url:t.WEATHER_FORECAST_SEASONAL,method:"POST"}));case 5:return a=n.sent,n.abrupt("return",a.data);case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(e){G(a,r,o,i,c,"next",e)}function c(e){G(a,r,o,i,c,"throw",e)}i(void 0)}))})()}},{key:"getweathercondition",value:function(e){var n="";return e<=40&&(n=W.M.DRIER),e>=41&&e<=120&&(n=W.M.NORMAL),e>120&&(n=W.M.WETTER),n}}],t&&z(n.prototype,t),r&&z(n,r),i}(C),ee=new F,ne=new Y,te=(ee.createUser.bind(ee),ee.updateUser.bind(ee),ee.deleteUser.bind(ee),ee.getUser.bind(ee),ee.getUsers.bind(ee),ne.upsertSeasonal.bind(ne)),re=ne.getweathercondition.bind(ne),oe=t(6901),ae=t(8456),ie={datagrid:{borderRadius:2,"& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16,"& select":{width:"100px",height:"32px",border:"none !important",outline:"none !important",fontSize:16}}}};function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function se(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function ue(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ue(e,n,t[n])}))}return e}function fe(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var de={loading:!1,show:!1,error:"",msg:"",saveDisabled:!1};var pe=function(e){var n=e.weatherData,t=e.provinces,r=e.onCancelClick,c=e.onAsyncFinish,s=(0,i.useState)([]),u=s[0],f=s[1],d=(0,i.useState)([]),p=d[0],h=d[1],b=(0,i.useState)([]),m=b[0],y=b[1],g=(0,i.useState)(de),j=g[0],w=g[1],S=[{id:0,label:"Jan"},{id:1,label:"Feb"},{id:2,label:"Mar"},{id:3,label:"Apr"},{id:4,label:"May"},{id:5,label:"Jun"},{id:6,label:"Jul"},{id:7,label:"Aug"},{id:8,label:"Sep"},{id:9,label:"Oct"},{id:10,label:"Nov"},{id:11,label:"Dec"}];(0,i.useEffect)((function(){n.length>0&&E()}),[n.length,E]);var k=function(){return n.length>0?n[0].mos:[]},P=function(){var e,n=(e=o().mark((function e(){var n,t,r,a,i,s,l,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=document.getElementsByTagName("select"),t=[],r=!0,a=0;a<n.length;a+=1)i=document.getElementById("select-mo-".concat(a)),t.push(C(i.value));if(_(t)&&6===u.length){e.next=7;break}return w(le({},de,{show:!0,loading:!1,error:"Invalid months sequence."})),e.abrupt("return");case 7:s=0;case 8:if(!(s<u.length)){e.next=20;break}l=0;case 10:if(!(l<u[s].length)){e.next=17;break}if(Z(u[s][l])){e.next=14;break}return r=!1,e.abrupt("break",17);case 14:l+=1,e.next=10;break;case 17:s+=1,e.next=8;break;case 20:if(r){e.next=23;break}return w(le({},de,{show:!0,error:"Invalid cell values."})),e.abrupt("return");case 23:return e.prev=23,w(le({},de,{loading:!0})),e.next=27,te(A(t));case 27:c(),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(23),f=e.t0.message.replaceAll(/Firebase/g,""),w((function(e){return le({},e,{show:!0,loading:!1,error:f})}));case 34:case"end":return e.stop()}}),e,null,[[23,30]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){se(a,r,o,i,c,"next",e)}function c(e){se(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),Z=function(e){return isNaN(e)||""===e?(w(le({},de,{show:!0,error:"Not a number"})),!1):(w(de),!0)},_=function(e){for(var n=e.map((function(e){return e+1})),t=!0,r=0;r<n.length-1&&(!(1!==Math.abs(n[r+1]-n[r])||n[r+1]<n[r])||(t=!1,12===n[r]&&1===n[r+1]&&(t=!0),t));)r+=1;return t},A=function(e){for(var n={region:t.length>0?t[0].region:"",provinces:[]},r=0;r<u.length;r+=1){for(var o={name:t[r].province,months:[]},a=0;a<e.length;a+=1)o.months.push({mo:S[e[a]].label.toLowerCase(),val:u[r][a],con:re(u[r][a])});n.provinces.push(o)}return n},C=function(e){for(var n=0,t=0;t<S.length;t+=1)if(S[t].label.toLowerCase()===e.toLowerCase()){n=t;break}return n},E=function(){var e=function(e){var t=n[0].mos[e];k().indexOf(t);i.push({field:t,headerName:"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)),width:110,editable:!0,sortable:!1,disableColumnMenu:!0,renderHeader:function(n){return(0,a.jsxs)("select",{onChange:function(n){return function(e,n){var t=e.target.value;document.getElementById("select-mo-".concat(n)).setAttribute("value",C(t))}(n,e)},id:"select-mo-".concat(e),children:[(0,a.jsx)("option",{children:"Month"}),S.map((function(e,n){return(0,a.jsx)("option",{children:e.label},"mo-".concat(n))}))]})}})},r=function(e){var r=function(t){var r=n[e],o=r.months.filter((function(e){return e.mo===r.mos[t]}));1===o.length?(a[r.mos[t]]=o[0].val,i.push(o[0].val)):(a[r.mos[t]]="n/a",i.push("n/a"))},a={},i=[],u=function(e){var n="";try{n=t.filter((function(n){return n.province===e}))[0].format}catch(r){n="n/a"}return n}(n[e].name);s[u]=n[e].name,a.id=e,a.rowId=e,a.province=u,a.editable=!0;for(var l=0;l<n[e].mos.length;l+=1)r(l);o.push(a),c.push(i)},o=[],i=[],c=[],s={};i.push({field:"province",headerName:"Province",width:180,sortable:!1,disableColumnMenu:!0});for(var u=0;u<n[0].mos.length;u+=1)e(u);for(var l=0;l<n.length;l+=1)r(l);y(i),h(o),f(c)};return(0,a.jsxs)("div",{style:{height:500,width:"100%"},children:[(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"baseline",marginBottom:"24px"},children:[(0,a.jsx)("div",{style:{minWidth:"40%"},children:(0,a.jsx)(oe.Z,{severity:""!==j.error?"error":"success",sx:{fontSize:"12px",minHeight:"32px",width:"100%",visibility:j.show?"initial":"hidden"},children:""!==j.error?j.error:j.msg})}),(0,a.jsxs)(x.Z,{variant:"outlined","aria-label":"outlined button controls group",sx:{float:"right",marginTop:"24px","& button":{width:"50%"}},children:[(0,a.jsx)(v.Z,{id:"cancel",onClick:r,disabled:j.loading,children:"Back"}),(0,a.jsxs)(v.Z,{onClick:P,disabled:j.loading||j.saveDisabled,variant:"contained",children:[(0,a.jsx)("span",{style:{display:j.loading?"none":"block"},children:"Save"})," \xa0",(0,a.jsx)(ae.Z,{size:20,color:"secondary",sx:{display:j.loading?"block":"none"}})]})]})]}),(0,a.jsx)(O._,{rows:p,columns:m,sx:ie.datagrid,customH:!0,editMode:"row",rowsPerPageOptions:[],onEditCellPropsChange:function(e){w(de),function(e){var n=e.props.value,t=Z(n)?n:"ERROR",r=e.id,o=k().indexOf(e.field),a=fe(u),i=a[r];i[o]=t,a[r]=i,f((function(e){return a}))}(e)},initialState:{columns:{columnVisibilityModel:{rowId:!1}}}})]})},he=t(9898),be=t(9132);function ve(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var xe={seasonal_update:!1,tenday_update:!1};var me=function(e){var n=e.weatherData,t=e.provinces,r=(0,i.useState)(xe),o=r[0],s=r[1],u=(0,i.useState)(!1),f=u[0],d=u[1],p=(0,c.useRouter)(),b=function(e){var n=e.target.id;s("cancel"===n?xe:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ve(e,n,t[n])}))}return e}({},o,ve({},n,!0)))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(m.Z,{open:f,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,a.jsx)(w.Z,{id:"data-saved-success",children:"Success"}),(0,a.jsx)(g.Z,{children:(0,a.jsx)(j.Z,{id:"alert-dialog-description",children:"The seasonal weather data are saved successfully."})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(v.Z,{onClick:function(){p.push("/weather-services")},autoFocus:!0,children:"OK"})})]}),(0,a.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:function(e){return e.spacing(1)}},children:[(0,a.jsx)(h.Z,{variant:"h6",children:"Seasonal Weather Forecast Updater"}),(0,a.jsx)(x.Z,{variant:"outlined","aria-label":"outlined button controls group",children:!o.seasonal_update&&!o.tenday_update&&(0,a.jsx)(v.Z,{id:"seasonal_update",onClick:b,children:"Update"})})]}),(0,a.jsxs)(h.Z,{variant:"body2",sx:be.Z.subheader,children:["Copy the Bicol Region's ",(0,a.jsx)("strong",{children:"Rainfall Analysis Forecast"})," from PAGASA's ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal Forecast"})," page for each province. Press the ",(0,a.jsx)("strong",{children:"Update"})," button and double click a cell to start editing."]}),!o.seasonal_update&&(0,a.jsx)(he.Z,{weatherData:n,provinces:t,withBorder:!0}),o.seasonal_update&&(0,a.jsx)(pe,{weatherData:n,provinces:t,onCancelClick:b,onAsyncFinish:function(){return d((function(e){return!e}))}})]})},ye={tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.primary.dark)},minHeight:"800px",borderRadius:"8px"},tabsMain:{marginTop:function(e){return e.spacing(4)}}};function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function je(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}var we=function(e){var n=(0,i.useState)(0),t=n[0],r=n[1];return(0,a.jsxs)(b.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnClick,children:[(0,a.jsx)(h.Z,{variant:"h5",children:"Weather Services Updater"}),(0,a.jsxs)("p",{children:["Update the site-wide ",(0,a.jsx)("strong",{children:"Weather Services"})," information for the ",(0,a.jsx)("strong",{children:"Seasonal"})," and ",(0,a.jsx)("strong",{children:"10-Day"})," Weather Forecasts by manually encoding the required data with reference from PAGASA's weather forecasts on ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast"}),"."]}),(0,a.jsxs)("p",{children:["Please take caution in updating these information because it will be automatically referenced by all site admins when creating crop and climate risks bulletins on the ",(0,a.jsx)("strong",{children:"Create Crop Bulletins"})," and ",(0,a.jsx)("strong",{children:"Create Risks Bulletins"})," pages, and on the site's public ",(0,a.jsx)("strong",{children:"Agroclimatic Services - Crop Recommendations"})," page."]}),(0,a.jsxs)(l.Z,{sx:ye.tabsContainer,children:[(0,a.jsxs)(d.Z,{value:t,onChange:function(e,n){r(n)},"aria-label":"weather services updater",children:[(0,a.jsx)(f.Z,je({label:"Seasonal Forecast Updater"},(0,p.P)(0))),(0,a.jsx)(f.Z,je({label:"10-Day Forecast Updater"},(0,p.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(p.x,{value:t,index:0,children:(0,a.jsx)(me,{weatherData:e.seasonal,provinces:e.provinces})}),(0,a.jsxs)(p.x,{value:t,index:1,children:[(0,a.jsx)(h.Z,{sx:{marginTop:function(e){return e.spacing(1)}},variant:"h6",children:"10-Day Weather Forecast Updater"}),(0,a.jsx)("p",{children:"To be updated."})]})]})]})]})};function Oe(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function Se(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){Oe(a,r,o,i,c,"next",e)}function c(e){Oe(a,r,o,i,c,"throw",e)}i(void 0)}))}}function ke(e){var n=e.provinces,t=(0,i.useState)([]),r=t[0],l=t[1],f=(0,s.aC)(),d=(0,c.useRouter)();(0,i.useState)((function(){var e=function(){var e=Se(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.GV)("bicol","seasonal");case 3:(n=e.sent).length>0&&l((function(e){return n})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){f.loading||f.user||d.push("/admin/login")}),[f.user,f.loading,d]);var p=function(){var e=Se(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,a.jsx)(we,{loading:f.loading,user:f.user,provinces:n,seasonal:r,onBtnClick:p})}ke.customLayout=!0;var Pe=!0,Ze=ke}},function(e){e.O(0,[46,744,903,984,295,572,411,977,379,774,888,179],(function(){return n=1158,e(e.s=n);var n}));var n=e.O();_N_E=n}]);