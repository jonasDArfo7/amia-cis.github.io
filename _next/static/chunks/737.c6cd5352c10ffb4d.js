"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{8951:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(3366),o=t(7462),i=t(7294),c=t(7192),a=t(1496),s=t(3616),u=t(5861),l=t(8979);function d(e){return(0,l.Z)("MuiDialogContentText",e)}(0,t(6087).Z)("MuiDialogContentText",["root"]);var f=t(5893);const p=["children"],v=(0,a.ZP)(u.Z,{shouldForwardProp:e=>(0,a.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,n)=>n.root})({});var b=i.forwardRef((function(e,n){const t=(0,s.Z)({props:e,name:"MuiDialogContentText"}),i=(0,r.Z)(t,p),a=(e=>{const{classes:n}=e,t=(0,c.Z)({root:["root"]},d,n);return(0,o.Z)({},n,t)})(i);return(0,f.jsx)(v,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:i},t,{classes:a}))}))},8737:function(e,n,t){t.r(n);var r=t(5893),o=t(7294),i=t(1057),c=t(657),a=t(1425),s=t(6580),u=t(8951),l=t(7645),d=t(6628);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=(0,o.forwardRef)((function(e,n){return(0,r.jsx)(d.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}({in:!0,ref:n},e))}));n.default=function(e){var n=e.title,t=void 0===n?"Modal Title":n,d=e.description,f=void 0===d?"":d,v=e.isOpen,b=void 0!==v&&v,Z=(0,o.useState)(!1),h=Z[0],m=Z[1];(0,o.useEffect)((function(){var e=!0;return setTimeout((function(){e&&b&&(localStorage.removeItem("bacap-home"),m(!0))}),1e3),function(){return e=!1}}),[b]);var j=function(){m(!1)};return(0,r.jsxs)(c.Z,{open:h,TransitionComponent:p,keepMounted:!0,onClose:j,"aria-describedby":"slider-modal-description",id:"bacap-intro",children:[(0,r.jsx)(l.Z,{children:t}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(u.Z,{id:"slider-modal-description",children:f})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{variant:"outlined",onClick:j,children:"Close"})})]})}}}]);