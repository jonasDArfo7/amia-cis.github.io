(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2254],{3052:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/users",function(){return t(8406)}])},3501:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(5893),a=t(7294),i=t(5697),o=t.n(i),s=t(1057),l=t(9536),c=t(8456),u=t(657),d=t(1425),f=t(7645),p=t(6580),m=t(3946),v={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",height:{xs:"40px",sm:"50px"},"& .text":{display:{xs:"block",sm:"none"}},"& .shortText":{display:{xs:"inline-block",sm:"none"},fontSize:"24px"}},icon:{display:{xs:"block",sm:"none"}},dialogContent:{"& .error":{fontSize:"12px",color:"red"}},dialogActions:{"& button":{minWidth:"100px"}},closeButton:{position:"absolute",right:"8px",top:"8px",color:function(e){return e.palette.grey[500]}}};function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var n=x(a.useState({open:null}),2),t=n[0],i=n[1],o=e.loading,b=void 0!==o&&o,h=e.isOpen,g=void 0!==h&&h,w=e.maxWidth,j=void 0===w?"sm":w,E=e.IconSVG,T=void 0===E?null:E,S=e.modalExtraHandlerCB,C=void 0===S?null:S,k=e.modalCancelHandlerCB,O=void 0===k?null:k,P=e.modalConfirmHandlerCB,A=void 0===P?null:P,_=e.modalOpenHandlerCB,I=void 0===_?null:_,U=e.isDisabled,B=void 0!==U&&U,Z=e.openButtonText,D=void 0===Z?"Click":Z,R=e.title,V=void 0===R?"Window Title":R,L=e.extraBtnText,z=void 0===L?"":L,H=e.cancelBtnText,N=void 0===H?"Cancel":H,W=e.confirmBtnText,M=void 0===W?"Ok":W,F=e.contentText,G=void 0===F?"":F,q=e.error,$=void 0===q?"":q;(0,a.useEffect)((function(){i((function(e){return y({},e,{open:g})}))}),[g]);var X=function(){i(y({},t,{open:!1})),O&&O()};return(0,r.jsxs)("div",{children:[D&&(0,r.jsxs)(s.Z,{disabled:B,disableElevation:!0,variant:"contained",color:"primary",onClick:function(){i(y({},t,{open:!0})),I&&I()},sx:v.button,children:[T&&(0,r.jsx)(T,{sx:v.icon}),D]}),(0,r.jsxs)(u.Z,{maxWidth:j,fullWidth:!0,open:t.open||!1,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("span",{children:V}),(0,r.jsx)(m.Z,{"aria-label":"close",sx:v.closeButton,onClick:X,children:(0,r.jsx)(l.Z,{})})]}),(0,r.jsxs)(p.Z,{sx:v.dialogContent,children:[""!==G&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:G}),(0,r.jsx)("div",{className:"error",children:$})]}),e.children]}),(0,r.jsxs)(d.Z,{sx:v.dialogActions,children:[""!==z&&(0,r.jsx)(s.Z,{onClick:C||X,disabled:b,children:z}),(0,r.jsx)(s.Z,{onClick:O||X,disabled:b,children:N}),(0,r.jsxs)(s.Z,{variant:"contained",disabled:b,onClick:A,children:[(0,r.jsx)("span",{style:{display:b?"none":"block"},children:M}),(0,r.jsx)(c.Z,{size:24,color:"secondary",sx:{display:b?"block":"none"}})]})]})]})]})}g.propTypes={loading:o().bool,isOpen:o().bool,maxWidth:o().string,IconSVG:o().elementType,modalCancelHandlerCB:o().func,modalConfirmHandlerCB:o().func,modalOpenHandlerCB:o().func,modalExtraHandlerCB:o().func,openButtonText:o().string,cancelBtnText:o().string,confirmBtnText:o().string,extraBtnText:o().string,title:o().string,contentText:o().string,children:o().node,error:o().string,isDisabled:o().bool};var w=g},5322:function(e,n,t){"use strict";var r=t(5893),a=t(7294),i=t(5697),o=t.n(i),s=t(4866),l=t(6901);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=a.forwardRef((function(e,n){return(0,r.jsx)(l.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,i=e.severity,o=e.closeHandlerCB,l=void 0===o?function(){}:o,c=(0,a.useState)(n),d=c[0],f=c[1],p=function(){f(!1),l()};return(0,r.jsx)(s.Z,{open:d,autoHideDuration:3e3,onClose:p,children:(0,r.jsx)(u,{onClose:p,severity:i,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:o().bool,message:o().string,severity:o().string},n.Z=d},8406:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ke}});var r=t(4051),a=t.n(r),i=t(5893),o=t(5697),s=t.n(o),l=t(7294),c=t(7426),u=t(9669),d=t.n(u),f=t(9431);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))}}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function g(e,n){return!n||"object"!==j(n)&&"function"!==typeof n?p(e):n}function w(e,n){return w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},w(e,n)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(n){var a=y(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return g(this,t)}}var T=new(function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(o,e);var n,t,r,i=E(o);function o(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o);var n=p(e=i.call(this));return h(p(e),"getUsers",v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get(n.USERS_API_LIST);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e.BASE_URL="https://amia-cis.herokuapp.com/api",e.USERS_API="".concat(e.BASE_URL,"/user"),e.USERS_API_LIST="".concat(e.BASE_URL,"/users"),e}return n=o,(t=[{key:"createUser",value:function(e){var n=this;return v(a().mark((function t(){var r,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["email","displayname","password","account_level","disabled","emailverified"].forEach((function(n){if(void 0===e[n]||""===e[n])throw new Error("Please check your input.");r[n]=e[n]})),t.next=5,n.createRequestObject({body:r});case 5:return i=t.sent,t.next=8,d()(x({},i,{url:n.USERS_API,method:"POST"}));case 8:return o=t.sent,t.abrupt("return",o.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"updateUser",value:function(e){var n=this;return v(a().mark((function t(){var r,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["uid","email","displayname","password","disabled","emailverified","account_level"].forEach((function(n){if(void 0!==e[n.toLowerCase()]&&"password"!==n&&""===e[n])throw new Error("Please check your input.");r[n]=e[n]})),t.next=5,n.createRequestObject({body:r});case 5:return i=t.sent,t.next=8,d()(x({},i,{url:n.USERS_API,method:"PATCH"}));case 8:return o=t.sent,t.abrupt("return",o.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"deleteUser",value:function(e){var n=this;return v(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({});case 2:return r=t.sent,t.next=5,d().delete("".concat(n.USERS_API,"/").concat(e),r);case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getUser",value:function(e){var n=e.uid,t=e.email,r=this;return v(a().mark((function e(){var i,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},n&&(i={uid:n}),t&&(i={email:t}),e.next=5,r.createRequestObject({params:i});case 5:return o=e.sent,e.next=8,d().get("".concat(r.BASE_URL,"/user"),o);case 8:return s=e.sent,e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))()}}])&&b(n.prototype,t),r&&b(n,r),o}(f.Z)),S=T.createUser.bind(T),C=T.updateUser.bind(T),k=T.deleteUser.bind(T),O=T.getUser.bind(T),P=T.getUsers.bind(T);function A(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function _(){var e=(0,l.useState)(null),n=e[0],t=e[1],r=(0,l.useState)(!0),i=r[0],o=r[1],s=(0,l.useState)(""),c=s[0],u=s[1];return(0,l.useEffect)((function(){var e=function(){var e,n=(e=a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:n=e.sent,o(!1),t(n.data),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),r="",void 0!==e.t0.response&&(r=void 0!==e.t0.response.data?e.t0.response.data:""),""===r&&(r=e.t0.message),u(r);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){A(i,r,a,o,s,"next",e)}function s(e){A(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),{users:n,loading:i,error:c}}function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,t=[{key:"isValidEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)&&""!==e}},{key:"isValidName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/[a-zA-Z. ]+$/.test(e.trim())&&""!==e}},{key:"isValidPassword",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>0}}],t&&I(n.prototype,t),r&&I(n,r),e}(),B=new U,Z=B.isValidEmail.bind(B),D=B.isValidName.bind(B),R=B.isValidPassword.bind(B),V=t(3059),L=t(2530),z=t(7357),H=t(5861),N=t(3501),W=t(5322),M=t(2176),F=t(6132),G=t(853),q=t(4343),$=t(480),X=t(3841),J=t(8972),K=t(8360),Q=t(2852),Y=t(1903),ee={container:{width:"parent",display:"flex",flexDirection:"column","& .MuiTextField-root, button":{marginTop:function(e){return e.spacing(2)}}},formlabel:{fontSize:"12px",marginTop:function(e){return e.spacing(3)},marginBottom:"4px"},selectBox:{marginBottom:function(e){return e.spacing(2)}}};function ne(e){var n=e.state,t=e.loadstatus,r=e.onTextChange,a=e.type,o=void 0===a?"create":a,s=e.inputValidation,l=e.handleInputClick;return(0,i.jsxs)(z.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:ee.container,children:["create"!==o&&(0,i.jsx)(Y.Z,{id:"uid",label:"Enter UID",variant:"standard",size:"small",disabled:!0,value:n.uid}),(0,i.jsx)(Y.Z,{id:"email",label:"Enter email",variant:"standard",size:"small",error:""!==s.email,helperText:""!==s.email?s.email:"",disabled:t.isLoading,value:n.email,onChange:r,onClick:l}),(0,i.jsx)(Y.Z,{id:"displayname",label:"Enter display name",variant:"standard",size:"small",error:""!==s.displayname,helperText:""!==s.displayname?s.displayname:"",disabled:t.isLoading,value:n.displayname,onChange:r,onClick:l}),(0,i.jsx)(Y.Z,{id:"password",label:"Enter password",type:"password",placeholder:"create"===n.mode?"Enter password":"Password will not be updated if left blank",variant:"standard",size:"small",error:""!==s.password&&"create"===o,helperText:""!==s.password&&"create"===o?s.password:"",disabled:t.isLoading,value:n.password,onChange:r,onClick:l}),(0,i.jsx)(X.Z,{sx:ee.formlabel,id:"accountlevel-label",children:"Account Type"}),(0,i.jsxs)(K.Z,{labelId:"accountlevel-label",id:"account_level",size:"small",sx:ee.selectBox,disabled:t.isLoading,value:n.account_level,onChange:r,children:[(0,i.jsx)(J.Z,{value:1,size:"small",children:"Superadmin"}),(0,i.jsx)(J.Z,{value:2,size:"small",children:"Admin"})]}),(0,i.jsx)($.Z,{control:(0,i.jsx)(Q.Z,{checked:n.disabled,disabled:t.isLoading,id:"disabled",name:"disabled",onChange:r}),label:"Account Disabled"}),(0,i.jsx)($.Z,{control:(0,i.jsx)(Q.Z,{checked:n.emailverified,disabled:t.isLoading,id:"emailverified",name:"emailverified",onChange:r}),label:"Email Verified"})]})}ne.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,type:s().string,inputValidation:s().object,handleInputClick:s().func};var te=ne,re={container:{width:"parent"},infoRow:{width:"parent",display:"flex",justifyContent:"space-between",fontSize:"14px",alignItems:"center",padding:"12px",borderBottom:"1px solid #f0f0f0","& div:first-child":{color:"#a0a0a0"},"& div:last-child":{color:"#000"}}},ae={email:"Email",displayName:"Display Name",acclevel:"Acc. Type",emailVerified:"Email Verified",disabled:"Acc. Disabled",last_signin:"Last Signin"};function ie(e){var n=e.userinfo;return(0,i.jsx)(z.Z,{children:Object.keys(ae).map((function(e){return(0,i.jsxs)(z.Z,{sx:re.infoRow,children:[(0,i.jsx)("div",{children:ae[e]}),(0,i.jsx)("div",{children:n[e].toString()})]},e)}))})}ie.propTypes={userinfo:s().object};var oe=ie,se={gridContainer:{marginTop:"24px",minHeight:500}},le=t(5337);function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ce(e,n,t[n])}))}return e}function de(e){return(0,i.jsxs)(M.D,ue({},e,{children:[(0,i.jsx)(F.S,{}),(0,i.jsx)(G.M,{})]}))}var fe,pe={CREATE:0,VIEW:1,EDIT:2,DELETE:3},me=(ce(fe={},pe.CREATE,{windowTitle:"Create a New User",buttonText:"Create User",yesBtnText:"Save"}),ce(fe,pe.VIEW,{windowTitle:"User Information",buttonText:"View",yesBtnText:"Edit"}),ce(fe,pe.EDIT,{windowTitle:"Update User Information",buttonText:"Edit",yesBtnText:"Update"}),ce(fe,pe.DELETE,{windowTitle:"User Information",buttonText:"Delete",yesBtnText:"Delete"}),fe);function ve(e){var n=e.state,t=e.loadstatus,r=e.loadingusers,a=e.rows,o=e.columns,s=e.onTextChange,c=e.onEditStart,u=e.handleCreateUser,d=e.handleDeleteUser,f=e.handleUpdateUser,p=e.handleInputClick,m=e.inputValidation,v=e.usersLoadingError,b=(0,l.useState)({}),h=b[0],y=b[1],x=(0,l.useState)(!1),g=x[0],w=x[1],j=(0,l.useState)(pe.CREATE),E=j[0],T=j[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(H.Z,{variant:"h5",children:"Users Management"}),(0,i.jsx)("p",{children:"Manage admin user accounts"}),(0,i.jsx)("br",{}),(0,i.jsx)(N.Z,{isOpen:t.dialogOpen&&[pe.CREATE,pe.DELETE].includes(E)||g&&[pe.VIEW,pe.EDIT].includes(E),maxWidth:"xs",openButtonText:"Create User",title:me[E].windowTitle,confirmBtnText:me[E].yesBtnText,extraBtnText:E===pe.VIEW?me[pe.DELETE].buttonText:"",loading:t.isLoading,modalConfirmHandlerCB:function(){switch(E){case pe.CREATE:u();break;case pe.VIEW:T(pe.EDIT);break;case pe.EDIT:f(),T(pe.CREATE)}},modalCancelHandlerCB:function(){p(),w(!1)},modalOpenHandlerCB:function(){T(pe.CREATE),w(!0)},modalExtraHandlerCB:function(){T(pe.DELETE),d(h.uid,h.email)},children:E===pe.CREATE||E===pe.EDIT?(0,i.jsx)(te,{state:n,loadstatus:t,onTextChange:s,inputValidation:m,handleInputClick:p,type:"create"}):(0,i.jsx)(oe,{userinfo:h})}),(0,i.jsx)(z.Z,{sx:se.gridContainer,style:{height:a.length<=4?"500px":"unset"},children:(0,i.jsx)(q._,{rows:a,columns:o,sx:le.Z.datagrid,rowHeight:48,autoHeight:a.length>=5,disableDensitySelector:!0,rowsPerPageOptions:[15,30,100],error:""!==v?v:null,components:{Toolbar:de},loading:r,initialState:{columns:{columnVisibilityModel:{rowId:!1}},pagination:{pageSize:12}},onRowClick:function(e){var n=ue({},e.row);n.account_level="Admin"===n.acclevel?2:1,n.displayname=n.displayName,n.emailverified=n.emailVerified,c(n.uid,"edit"),y(n),T(pe.VIEW),w(!0)}})}),(""!==t.error||""!==t.message)&&(0,i.jsx)(W.Z,{openSnackbar:!0,message:""!==t.error?t.error:t.message,severity:""!==t.error?"error":"success"})]})}ve.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,onEditStart:s().func,handleCreateUser:s().func,handleDeleteUser:s().func,handleUpdateUser:s().func,handleInputClick:s().func,inputValidation:s().object,usersLoadingError:s().string};var be=ve;function he(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ye(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function xe(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){ye(i,r,a,o,s,"next",e)}function s(e){ye(i,r,a,o,s,"throw",e)}o(void 0)}))}}function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function we(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}function je(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return he(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return he(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ee={email:"",displayname:"",password:"",account_level:2,disabled:!1,emailverified:!0,mode:"create"},Te={isLoading:!1,dialogOpen:!1,error:"",message:""},Se={email:"",displayname:"",password:"",account_level:"",disabled:"",emailverified:""};function Ce(e){var n=(0,l.useState)(Ee),t=n[0],r=n[1],o=(0,l.useState)(Te),s=o[0],u=o[1],d=(0,l.useState)(Se),f=d[0],p=d[1],m=(0,l.useState)([]),v=m[0],b=m[1],h=_(),y=h.users,x=h.loading,g=h.error,w=(0,l.useState)([]),j=w[0],E=w[1],T=(0,l.useState)([]),A=T[0],I=T[1];(0,l.useEffect)((function(){null!==y&&b((function(e){return y.users}))}),[y]),(0,l.useEffect)((function(){if(v.length>0){var e={email:{label:"Email",width:280},displayName:{label:"Display Name",width:200},acclevel:{label:"Acc. Type",width:120},emailVerified:{label:"Email Verified",width:125},disabled:{label:"Acc. Disabled",width:120},last_signin:{label:"Last Signin",width:250}},n=["email","displayName","acclevel","emailVerified","disabled","last_signin"].reduce((function(n,t,r){return n.push({field:t,headerName:e[t].label,width:e[t].width,align:r>1?"center":"left",headerAlign:r>1?"center":"left",editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,i.jsx)("div",{style:{fontSize:"last_signin"===t?"13px":"14px"},children:e.value.toString()})}}),n}),[]),t=v.filter((function(e){return void 0!==e.customClaims})).map((function(e,n){return{id:n,uid:e.uid,email:e.email,displayName:e.displayName,acclevel:1===e.customClaims.account_level?"Superadmin":"Admin",emailVerified:e.emailVerified,disabled:e.disabled,date_created:e.metadata.creationTime,last_signin:e.metadata.lastSignInTime?e.metadata.lastSignInTime:"-"}}));E(t),I(n)}}),[v]);var U=function(e){var n=Object.keys(Ee).reduce((function(n,t){return n[t]=e[t],n}),{});if(null!==n)return n.uid=e.uid,n.account_level=e.customClaims.account_level,n.displayname=e.displayName,n.emailverified=e.emailVerified,n.password="",n},B=function(){u(we({},Te,{dialogOpen:!0,isLoading:!0}))},V=function(e){var n=e.message,t=void 0===n?"":n,a=e.error,i=void 0===a?"":a;u((function(e){return we({},Te,{message:t,error:i})})),r((function(e){return we({},Ee)}))},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create",n=0,r={};return Z(t.email)||(r.email="Please check your email input.",n+=1),D(t.displayname)||(r.displayname="Please check your display name.",n+=1),"create"===e&&(R(t.password)||(r.password="Please check your password input.",n+=1)),p(we({},f,r)),0===n},H=function(){var e=xe(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z("create")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,B(),e.next=6,S(t);case 6:return e.next=8,P();case 8:n=e.sent.data,b(n.users),V({message:"User successfully ".concat(t.email," created!")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),V({error:e.t0.response?e.t0.response.data:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=xe(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(),e.next=4,k(n);case 4:return e.next=6,P();case 6:r=e.sent.data,b(r.users),V({message:"Successfully deleted user ".concat(t,"!")}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),V({error:e.t0.response?e.t0.response.data:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}(),W=function(){var e=xe(a().mark((function e(){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z("edit")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,B(),e.next=6,C(t);case 6:return e.next=8,O({uid:t.uid,email:t.email});case 8:n=e.sent,(r=v.findIndex((function(e){return e.uid===n.uid})))>=0&&((i=je(v))[r]=n,b(i)),V({message:"Successfully updated ".concat(t.email,"'s details!")}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),V({error:e.t0.response?e.t0.response.data:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(L.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:c.DW.SUPERADMIN,children:(0,i.jsx)(be,{state:t,loadstatus:s,loadingusers:x,rows:j,columns:A,onTextChange:function(e){var n=e.target,a=n.id,i=n.value,o=n.checked,l=void 0!==a?a:"account_level";["emailverified","disabled"].includes(l)&&(i=o),r(we({},t,ge({},l,i))),(""!==s.error||""!==s.message||Object.keys(f).filter((function(e){return""!==f[e]})).length>0)&&(u(Te),p(Se))},onEditStart:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",t=v.find((function(n){return n.uid===e})),a=U(t);a=we({},a,{mode:n}),r(a)},handleCreateUser:H,handleDeleteUser:N,handleUpdateUser:W,handleInputClick:function(e){if(e){var n=e.target.id;r(we({},t,ge({},n,"")))}else r(Ee),u(Te);p(Se)},inputValidation:f,usersLoadingError:g})})}Ce.propTypes={loading:s().bool,user:s().object,onBtnLogoutClick:s().func,accLevel:s().number};var ke=(0,V.Z)(Ce)},5337:function(e,n){"use strict";n.Z={datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}}}},9431:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(4051),a=t.n(r),i=t(5152);function o(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){o(i,r,a,s,l,"next",e)}function l(e){o(i,r,a,s,l,"throw",e)}s(void 0)}))}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"setAuthHeaders",value:function(e){return s(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,i.I8.currentUser.getIdToken(!0);case 4:t=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0.message);case 10:e.headers.Authorization=t?"Bearer ".concat(t):"";case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},{key:"createRequestObject",value:function(e){var n=e.body,t=e.params,r=e.responseType,i=this;return s(a().mark((function e(){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={headers:{}},n&&(o.data=n),t&&(o.params=t),r&&(o.responseType=r),e.next=6,i.setAuthHeaders(o);case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))()}}])&&l(n.prototype,t),r&&l(n,r),e}()}},function(e){e.O(0,[3135,9669,3203,4343,5165,3728,9774,2888,179],(function(){return n=3052,e(e.s=n);var n}));var n=e.O();_N_E=n}]);