(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{8359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms",function(){return t(8482)}])},5322:function(e,n,t){"use strict";var r=t(5893),i=t(7294),o=t(5697),a=t.n(o),l=t(4866),c=t(6901);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,o=e.severity,a=(0,i.useState)(n),c=a[0],s=a[1],d=function(){s(!1)};return(0,r.jsx)(l.Z,{open:c,autoHideDuration:3e3,onClose:d,children:(0,r.jsx)(u,{onClose:d,severity:o,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:a().bool.isRequired,message:a().string.isRequired,severity:a().string.isRequired},n.Z=d},6601:function(e,n,t){"use strict";t.d(n,{x:function(){return l},P:function(){return c}});var r=t(5893),i=t(7357);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=function(e){var n=e.children,t=e.value,l=e.index,c=a(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==l,id:"custom-tabpanel-".concat(l),"aria-labelledby":"custom-tab-".concat(l)},c,{children:t===l&&(0,r.jsx)(i.Z,{sx:{p:3},children:n})}))};var c=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},8482:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r=t(4051),i=t.n(r),o=t(5893),a=t(3059),l=t(7294),c=t(5861),s=t(7357),u=t(8409),d=t(44),f=t(6886),m=t(6601),b=t(1057),h=t(1903),p=t(8462),x=t(7212),v=t(8619),g=t(9334),j=t(7948),y={phonebookContainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#fafafa",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},searchPhonebookTextField:{margin:1,background:"#FFFFFF"},contactInformationItem:{display:"flex",alignItems:"baseline"}},C=t(6486),S=t.n(C),O=t(657),E=t(7645),Z=t(6580),w=t(8951),R=t(1425),_=/^09[0-9]{9}$/g,P="Cell number is required.";function k(e,n){var t=e.find((function(e){return e.cellnumber===n}));return Boolean(t)}var I=function(e,n,t,r){if(null!==t){if(""===t)return"ERROR_MISSING_CELLNUMBER";if(function(e){return!e.match(_)}(t))return"ERROR_INVALID_FORMAT_CELLNUMBER";if("EDIT"===e){if(r&&t!==r)return k(n,t)?"ERROR_CONTACT_ALREADY_EXIST":""}else{if("ADD"!==e)return"";if(k(n,t))return"ERROR_CONTACT_ALREADY_EXIST"}}},N=function(e){switch(e){case"ERROR_MISSING_CELLNUMBER":case"ERROR_MISSING_CELLNUMBER":return P;case"ERROR_INVALID_FORMAT_CELLNUMBER":return"Invalid cell number format.";case"ERROR_CONTACT_ALREADY_EXIST":return"Cell number already exists in the conact list.";default:return""}};var A=function(e){var n,t,r=e.contacts,i=e.open,a=e.handleClose,c=e.handleAddContact,u=(0,l.useState)(""),d=u[0],f=u[1],m=(0,l.useState)(null),p=m[0],x=m[1];return(0,o.jsxs)(O.Z,{fullWidth:!0,maxWidth:"xs",open:i,onClose:a,children:[(0,o.jsx)(E.Z,{children:"Add Contact"}),(0,o.jsxs)(Z.Z,{children:[(0,o.jsxs)(s.Z,{sx:y.contactInformationItem,children:[(0,o.jsx)(s.Z,{sx:{mr:9},children:(0,o.jsx)(w.Z,{children:"Name:"})}),(0,o.jsx)(h.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){f(e.target.value)}})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(s.Z,{sx:y.contactInformationItem,children:[(0,o.jsx)(s.Z,{sx:{mr:3},children:(0,o.jsx)(w.Z,{children:"Cell Number:"})}),(0,o.jsx)(h.Z,{error:(null===(n=I("ADD",r,p,null))||void 0===n?void 0:n.length)>0,helperText:N(I("ADD",r,p)),id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){x(e.target.value)},type:"tel"})]})]}),(0,o.jsxs)(R.Z,{children:[(0,o.jsx)(b.Z,{size:"small",onClick:a,children:"CANCEL"}),(0,o.jsx)(b.Z,{disabled:(null===(t=I("ADD",r,p))||void 0===t?void 0:t.length)>0||null===p,size:"small",variant:"contained",onClick:function(){c({name:d,cellnumber:p}),a()},children:"SAVE"})]})]})};var D=function(e){var n,t,r=e.open,i=e.contact,a=e.contacts,c=e.handleClose,u=e.handleDeleteContact,d=e.handleEditContact,f=(0,l.useState)(!1),m=f[0],p=f[1],x=(0,l.useState)(i.name),v=x[0],g=x[1],j=(0,l.useState)(i.cellnumber),C=j[0],S=j[1];return(0,o.jsxs)(O.Z,{fullWidth:!0,maxWidth:"xs",open:r,onClose:c,children:[(0,o.jsx)(E.Z,{children:"Contact Details"}),(0,o.jsxs)(Z.Z,{children:[(0,o.jsxs)(s.Z,{sx:y.contactInformationItem,children:[(0,o.jsx)(s.Z,{sx:{mr:9},children:(0,o.jsx)(w.Z,{children:"Name:"})}),(0,o.jsx)(h.Z,{disabled:!m,id:"outlined-basic",onChange:function(e){g(e.target.value)},value:v,variant:"standard",size:"small"})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(s.Z,{sx:y.contactInformationItem,children:[(0,o.jsx)(s.Z,{sx:{mr:3},children:(0,o.jsx)(w.Z,{children:"Cell Number:"})}),(0,o.jsx)(h.Z,{error:(null===(n=I("EDIT",a,C,i.cellnumber))||void 0===n?void 0:n.length)>0,helperText:N(I("EDIT",a,C,i.cellnumber)),onChange:function(e){S(e.target.value)},disabled:!m,id:"outlined-basic",value:C,variant:"standard",size:"small",type:"tel"})]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(R.Z,{children:[m?(0,o.jsx)(b.Z,{disabled:(null===(t=I("EDIT",a,C,i.cellnumber))||void 0===t?void 0:t.length)>0,size:"small",variant:"outlined",onClick:function(){return d({id:i.id,name:v,cellnumber:C})},children:"SAVE"}):(0,o.jsx)(b.Z,{size:"small",variant:"outlined",onClick:function(){p(!0),S(i.cellnumber)},children:"EDIT"}),m?(0,o.jsx)(b.Z,{size:"small",variant:"outlined",onClick:function(){g(i.name),S(i.cellnumber),p(!1)},children:"CANCEL"}):(0,o.jsx)(b.Z,{size:"small",color:"error",variant:"outlined",onClick:function(){return u(i)},children:"DELETE"}),(0,o.jsx)(b.Z,{size:"small",onClick:c,children:"CLOSE"})]})]})},T=t(5322);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(){var e=[{id:1,name:"",cellnumber:"09053733769"},{id:2,name:"Jon Snow",cellnumber:"09114445555"},{id:3,name:"Tyrion Lannister",cellnumber:"09006667777"}],n=(0,l.useState)(!1),t=n[0],r=n[1],i=(0,l.useState)(null),a=i[0],c=i[1],u=(0,l.useState)(e),d=u[0],f=u[1],m=(0,l.useState)(!1),C=m[0],O=m[1],E=(0,l.useState)(""),Z=E[0],w=E[1],R=(0,l.useState)(!1),_=R[0],P=R[1],k=(0,l.useState)(!1),I=k[0],N=k[1],L=(0,l.useState)({}),z=L[0],B=L[1];return(0,o.jsxs)("div",{children:[I&&(0,o.jsx)(T.Z,{openSnackbar:I,message:z.message,severity:z.severity}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.Z,{variant:"contained",color:"primary",onClick:function(){N(!1),B({}),P(!0)},children:"ADD CONTACT"}),(0,o.jsx)(A,{contacts:e,open:_,handleClose:function(){P(!1)},handleAddContact:function(e){var n=F(d);n.push(e),f(n),N(!0),B({message:"Successfully added a New Contact!",severity:"success"})}})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)(s.Z,{sx:y.phonebookContainer,children:[(0,o.jsx)(s.Z,{sx:y.searchPhonebookTextField,children:(0,o.jsx)(h.Z,{id:"outlined-basic",label:"Search...",onChange:function(n){var t=n.target.value;w(t);var r,i,o=isNaN(t);if(O(o),""===n.target.value)f(e);else{var a=(r=d,i=t,S().filter(r,S().flow(S().identity,S().values,S().join,S().toLower,S().partialRight(S().includes,i))));f(a)}},variant:"outlined",size:"small",style:{width:"100%"}})}),(0,o.jsx)(p.Z,{children:d.length>0?d.map((function(e){var n="checkbox-list-label-".concat(e.cellnumber);return(0,o.jsx)(x.ZP,{disablePadding:!0,children:(0,o.jsx)(v.Z,{role:void 0,dense:!0,onClick:function(){return function(e){N(!1),B({}),r(!0),c(e)}(e)},children:(0,o.jsx)(g.Z,{id:n,primary:""===e.name?e.cellnumber:e.name,secondary:""!==Z&&!C&&""!==e.name&&e.cellnumber})})},e.cellnumber)})):(0,o.jsx)(j.Z,{children:(0,o.jsx)("p",{children:"No Results"})})}),a&&(0,o.jsx)(D,{open:t,contact:a,contacts:d,handleClose:function(){r(!1),c(null)},handleDeleteContact:function(e){var n=d.filter((function(n){return n.id!==e.id}));f(n),r(!1),N(!0),B({message:"Successfully deleted contact: ".concat(""===e.name?e.cellnumber:e.name,"!"),severity:"success"})},handleEditContact:function(e){var n=d.map((function(n){return n.id===e.id?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){M(e,n,t[n])}))}return e}({},n,{name:e.name,cellnumber:e.cellnumber}):n}));f(n),r(!1),N(!0),B({message:"Successfully edit contact: ".concat(""===e.name?e.cellnumber:e.name,"!"),severity:"success"})}})]})]})},B=t(4343);var U=function(e){var n=e.columns,t=e.loadingReports,r=e.rows;return(0,o.jsx)("div",{style:{height:400,width:"100%"},children:(0,o.jsx)(B._,{rows:r,columns:n,loading:t,pageSize:5,rowsPerPageOptions:[5]})})},W={tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"}};function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}var q=function(e){var n=e.columns,t=e.loadingReports,r=e.rows,i=(0,l.useState)(0),a=i[0],b=i[1];return(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{variant:"h5",children:"SMS Management"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"View Text (SMS) versions"})," of generated Crop Recommendations and send them to different individuals via SMS."]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Manage your own phonebook"})," for ease of sending texts to individuals."]}),(0,o.jsxs)(s.Z,{sx:W.tabsContainer,children:[(0,o.jsxs)(u.Z,{value:a,onChange:function(e,n){b(n)},"aria-label":"basic tabs example",children:[(0,o.jsx)(d.Z,X({label:"SMS"},(0,m.P)(0))),(0,o.jsx)(d.Z,X({label:"PHONEBOOK"},(0,m.P)(1)))]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(m.x,{value:a,index:0,children:(0,o.jsx)(U,{columns:n,loadingReports:t,rows:r})}),(0,o.jsx)(m.x,{value:a,index:1,children:(0,o.jsx)(f.ZP,{container:!0,children:(0,o.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,o.jsx)(z,{})})})})]})]})]})},G=t(2530),H=t(7426),Y=t(3835),$=t(1163),J=t(8152);function K(e,n,t,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,i)}function Q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ee=(0,a.Z)((function(e){var n=e.loading,t=e.user,r=e.onBtnLogoutClick,a=(0,Y.aC)(),c=(0,$.useRouter)(),u=(0,l.useState)([]),d=u[0],f=u[1],m=(0,l.useState)([]),h=m[0],p=m[1],x=(0,l.useState)([]),v=x[0],g=x[1];return(0,l.useEffect)((function(){if(null!==a.user&&!a.loading){var e=function(){var e,n=(e=i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.pr)(a.user.uid);case 3:n=e.sent,t=n.map((function(e){return e.textRecommendation="Sample text recommendation",e.logs=[],e})),g(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){K(o,r,i,a,l,"next",e)}function l(e){K(o,r,i,a,l,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}}),[a]),(0,l.useEffect)((function(){if(v.length>0){var e={action:"Action",logs:"Logs",crop:"Crop",text_recommendation:"Text-Form Recommendation",region:"Region",province:"Province",municipality:"Municipality",month:"Month",type:"Type",updated_by:"Updated by",date_created:"Date Created"},n=[];["action","logs","crop","text_recommendation","region","province","municipality","month","type","updated_by","date_created"].forEach((function(t){"action"===t?n.push({field:t,headerName:e[t],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(){return(0,o.jsx)(b.Z,{variant:"outlined",size:"small",onClick:function(e){e.stopPropagation()},children:"SEND"})}}):"logs"===t?n.push({field:t,headerName:e[t],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return e.row.logs.length>0?(0,o.jsx)(b.Z,{variant:"outlined",size:"small",onClick:function(e){e.stopPropagation()},children:"VIEW LOGS"}):(0,o.jsx)(s.Z,{sx:{fontWeight:"bold"},children:"UNSENT"})}}):n.push({field:t,headerName:e[t],width:150,editable:!1,sortable:!1,disableColumnMenu:!0})}));var t=v.map((function(e,n){var t;return Q(t={id:n,docId:e.id,logs:e.logs,crop:e.crop,text_recommendation:e.textRecommendation},"logs",e.logs),Q(t,"region",e.region),Q(t,"province",e.province),Q(t,"municipality",e.municipality),Q(t,"month",e.month),Q(t,"type",e.type),Q(t,"updated_by",e.updated_by),Q(t,"date_created",e.date_created.toDate().toDateString()),t}));f(t),p(n)}}),[v]),(0,l.useEffect)((function(){a.loading||a.user||c.push("/admin/login")}),[a.user,a.loading,c]),(0,o.jsx)(G.Z,{loading:n,user:t,onBtnLogoutClick:r,accLevel:H.DW.ADMIN,children:(0,o.jsx)(q,{columns:h,loading:a.loading,loadingReports:n,onBtnClick:r,rows:d,user:a.user})})}))}},function(e){e.O(0,[662,135,669,203,343,572,433,273,728,152,774,888,179],(function(){return n=8359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);