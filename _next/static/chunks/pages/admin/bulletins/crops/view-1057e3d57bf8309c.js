(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{1930:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/view",function(){return t(9839)}])},7513:function(e,n){"use strict";n.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},welcome:{display:"grid",placeContent:"center",marginTop:function(e){return e.spacing(10)},textAlign:"center","& h5":{marginTop:function(e){return e.spacing(2)}}},conditionLegend:{maxWidth:{md:"100%",lg:"270px"},marginBottom:"32px",padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(1)},"& p, ul":{fontSize:"14px"}},gridContainer:{marginTop:"24px",minHeight:500,width:1,"& .normal":{backgroundColor:"yellow"},"& .drier":{backgroundColor:"red"},"& .wetter":{backgroundColor:"blue"}},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}},pdfcontent:{ul:{paddingLeft:3}}}},1033:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(5675),o=t(7357),a=t(5861),l=t(120),c={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var s=function(e){var n=e.message,t=void 0===n?"Failed to load data":n;return(0,r.jsxs)(o.Z,{sx:c.container,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,l.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:l.imageLoader,alt:"Empty data"}),(0,r.jsx)(a.Z,{variant:"subtitle1",children:t})]})}},3501:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(5893),i=t(7294),o=t(5697),a=t.n(o),l=t(1057),c=t(9536),s=t(8456),u=t(657),d=t(1425),p=t(7645),x=t(6580),f=t(3946),m={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",height:{xs:"40px",sm:"50px"},"& .text":{display:{xs:"block",sm:"none"}},"& .shortText":{display:{xs:"inline-block",sm:"none"},fontSize:"24px"}},icon:{display:{xs:"block",sm:"none"}},dialogContent:{"& .error":{fontSize:"12px",color:"red"}},dialogActions:{"& button":{minWidth:"100px"}},closeButton:{position:"absolute",right:"8px",top:"8px",color:function(e){return e.palette.grey[500]}}};function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){var n=v(i.useState({open:null}),2),t=n[0],o=n[1],a=e.loading,g=void 0!==a&&a,h=e.isOpen,j=void 0!==h&&h,y=e.maxWidth,w=void 0===y?"sm":y,Z=e.IconSVG,k=void 0===Z?null:Z,C=e.modalExtraHandlerCB,O=void 0===C?null:C,S=e.modalCancelHandlerCB,B=void 0===S?null:S,T=e.modalConfirmHandlerCB,F=void 0===T?null:T,E=e.modalOpenHandlerCB,P=void 0===E?null:E,q=e.openButtonText,_=void 0===q?"Click":q,D=e.title,W=void 0===D?"Window Title":D,A=e.extraBtnText,z=void 0===A?"":A,R=e.cancelBtnText,H=void 0===R?"Cancel":R,I=e.confirmBtnText,L=void 0===I?"Ok":I,M=e.contentText,N=void 0===M?"":M,G=e.error,V=void 0===G?"":G;(0,i.useEffect)((function(){o((function(e){return b({},e,{open:j})}))}),[j]);var X=function(){o(b({},t,{open:!1})),B&&B()};return(0,r.jsxs)("div",{children:[_&&(0,r.jsxs)(l.Z,{disableElevation:!0,variant:"contained",color:"primary",onClick:function(){o(b({},t,{open:!0})),P&&P()},sx:m.button,children:[k&&(0,r.jsx)(k,{sx:m.icon}),_]}),(0,r.jsxs)(u.Z,{maxWidth:w,fullWidth:!0,open:t.open||!1,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)("span",{children:W}),(0,r.jsx)(f.Z,{"aria-label":"close",sx:m.closeButton,onClick:X,children:(0,r.jsx)(c.Z,{})})]}),(0,r.jsxs)(x.Z,{sx:m.dialogContent,children:[""!==N&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:N}),(0,r.jsx)("div",{className:"error",children:V})]}),e.children]}),(0,r.jsxs)(d.Z,{sx:m.dialogActions,children:[""!==z&&(0,r.jsx)(l.Z,{onClick:O||X,disabled:g,children:z}),(0,r.jsx)(l.Z,{onClick:B||X,disabled:g,children:H}),(0,r.jsxs)(l.Z,{variant:"contained",disabled:g,onClick:F,children:[(0,r.jsx)("span",{style:{display:g?"none":"block"},children:L}),(0,r.jsx)(s.Z,{size:24,color:"secondary",sx:{display:g?"block":"none"}})]})]})]})]})}j.propTypes={loading:a().bool,isOpen:a().bool,maxWidth:a().string,IconSVG:a().elementType,modalCancelHandlerCB:a().func,modalConfirmHandlerCB:a().func,modalOpenHandlerCB:a().func,modalExtraHandlerCB:a().func,openButtonText:a().string,cancelBtnText:a().string,confirmBtnText:a().string,extraBtnText:a().string,title:a().string,contentText:a().string,children:a().node,error:a().string};var y=j},9839:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(4051),i=t.n(r),o=t(5893),a=t(7294),l=t(1163),c=t(8152),s=t(7426),u=t(3059),d=t(2530),p=t(5697),x=t.n(p),f=t(7357),m=t(1057),g=t(6863),h=t(7720),b=t(8409),v=t(44),j=t(5861),y=t(8078),w={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},divider:{marginTop:"32px",marginBottom:"32px"},text:{marginTop:"16px",marginBottom:"16px"}};var Z=function(){return(0,o.jsxs)(f.Z,{sx:w.container,children:[(0,o.jsx)(f.Z,{sx:{width:"300px"},children:[1,2,3,4,5,6,7,8].map((function(e){return(0,o.jsx)(y.Z,{variant:"text"},"up-".concat(e))}))}),(0,o.jsx)(h.Z,{sx:w.divider}),(0,o.jsx)(f.Z,{children:[1,2,3,4,5,6,7,8].map((function(e){return(0,o.jsx)(y.Z,{variant:"rectangular",sx:w.text},"down-".concat(e))}))})]})},k=t(1033),C=t(3501),O=t(7513),S=t(5799),B=t(1927),T=t(8396);function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function P(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var q=(0,S.Z)();function _(e){var n=e.children,t=e.value,r=e.index,i=P(e,["children","value","index"]);return(0,o.jsx)("div",E({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:t===r&&(0,o.jsx)(f.Z,{sx:{p:i.smallScreen?2:3},children:(0,o.jsx)(j.Z,{children:n})})}))}function D(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}q.typography.h5=F({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},q.breakpoints.up("md"),{fontSize:"2rem"}),_.propTypes={children:x().node,index:x().number.isRequired,value:x().number.isRequired};var W=function(e){var n=e.report,t=e.loading,r=e.onBackBtnClick,i=e.onDeleteClick,l=(0,a.useState)(0),c=l[0],s=l[1],u=(0,T.Z)(q.breakpoints.between("xs","md"));return(0,o.jsx)("div",{children:t||n.loading?(0,o.jsx)(Z,{}):void 0!==n.stages?(0,o.jsxs)(f.Z,{container:!0,sx:O.Z.container,children:[(0,o.jsxs)(f.Z,{sx:{marginBottom:"32px",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(B.Z,{theme:q,children:(0,o.jsx)(j.Z,{variant:"h5",children:"Crop Recommendation Summary"})}),(0,o.jsxs)(g.Z,{orientation:u?"vertical":"horizontal",children:[(0,o.jsx)(m.Z,{disableElevation:!0,variant:"contained",color:"primary",sx:O.Z.button,onClick:r,children:"Back"})," ","\xa0",(0,o.jsx)(C.Z,{isOpen:!1,maxWidth:"sm",openButtonText:"Delete",title:"Delete Report",contentText:""!==n.info?n.info:"Are you sure you want to delete this Bulletin report log?",confirmBtnText:""!==n.info?"Ok":"Delete",modalConfirmHandlerCB:i,loading:n.deleting})]})]}),(0,o.jsxs)(f.Z,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Province:"})," ",n.province]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Municipality:"})," ",n.municipality]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Crop:"})," ",n.crop]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Month:"})," ",n.month]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Crop Stage(s):"})," ",n.stages.toString().split(",").join(", ")]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Activities:"})," ",n.activities.toString().split(",").join(", ")]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Created by:"})," ",n.updated_by]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Date created:"})," ",n.date_created.toDate().toDateString()]}),(0,o.jsxs)(j.Z,{variant:"caption",children:[(0,o.jsx)("strong",{children:"ID:"})," ",n.id]}),(0,o.jsx)(h.Z,{sx:{marginTop:"32px"}})]}),(0,o.jsxs)(f.Z,{sx:{width:"100%"},children:[(0,o.jsx)(f.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(b.Z,{value:c,onChange:function(e,n){s(n)},"aria-label":"basic tabs example",children:[(0,o.jsx)(v.Z,E({label:"PDF FORM"},D(0))),(0,o.jsx)(v.Z,E({label:"SMS FORM"},D(1)))]})}),(0,o.jsx)(_,{value:c,index:0,smallScreen:u,children:(0,o.jsx)(f.Z,{sx:{ul:u?O.Z.pdfcontent.ul:"none"},dangerouslySetInnerHTML:{__html:n.recommendations}})}),(0,o.jsx)(_,{value:c,index:1,children:(0,o.jsxs)(j.Z,{variant:"body1",gutterBottom:!0,children:[(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),(0,o.jsx)("p",{children:"Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus"})]})})]})]}):(0,o.jsx)(k.Z,{})})};function A(e,n,t,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,i)}function z(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){A(o,r,i,a,l,"next",e)}function l(e){A(o,r,i,a,l,"throw",e)}a(void 0)}))}}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){R(e,n,t[n])}))}return e}var I={loading:!0,error:"",info:"",deleting:!1};var L=(0,u.Z)((function(e){var n=(0,a.useState)(I),t=n[0],r=n[1],u=(0,l.useRouter)();(0,a.useEffect)((function(){if(t.loading&&Object.keys(u.query).length>0){var e=function(){var e=z(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.fL)(u.query.docId);case 3:n=e.sent,r((function(e){return H({},e,{loading:!1},n)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(H({},I,{loading:!1,error:e.t0.message}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[u,t.loading]);var p=function(){var e=z(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.info){e.next=13;break}return e.prev=1,r(H({},t,{deleting:!0})),e.next=5,(0,c.GR)(t.id);case 5:r((function(e){return H({},e,{deleting:!1,info:"Report deleted."})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(H({},I,{deleting:!1,error:e.t0.message}));case 11:e.next=14;break;case 13:u.push("/admin/bulletins/crops");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(d.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:s.DW.ADMIN,children:(0,o.jsx)(W,{report:t,loading:e.loading,onBackBtnClick:function(){u.push("/admin/bulletins/crops")},onDeleteClick:p})})}))}},function(e){e.O(0,[135,669,203,572,877,728,152,774,888,179],(function(){return n=1930,e(e.s=n);var n}));var n=e.O();_N_E=n}]);