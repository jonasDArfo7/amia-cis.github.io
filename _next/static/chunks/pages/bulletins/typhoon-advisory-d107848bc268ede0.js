(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{2963:function(e,r,t){"use strict";t.d(r,{Z:function(){return M}});var n=t(7462),o=t(3366),a=t(7294),i=(t(6607),t(6010)),s=t(7192),l=t(1496),c=t(7623),u=t(5861),p=t(1796),d=t(8169),m=t(5893),h=(0,d.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(7739);const f=(0,l.ZP)(g.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})}))),v=(0,l.ZP)(h)({width:24,height:16});var y=function(e){const r=e;return(0,m.jsx)("li",{children:(0,m.jsx)(f,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,m.jsx)(v,{ownerState:r})}))})},b=t(8979);function Z(e){return(0,b.Z)("MuiBreadcrumbs",e)}var x=(0,t(6087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${x.li}`]:r.li},r.root]})({}),S=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,m.jsx)(C,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var M=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:p="nav",expandText:d="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:g=1,maxItems:f=8,separator:v="/"}=t,b=(0,o.Z)(t,w),[x,C]=a.useState(!1),M=(0,n.Z)({},t,{component:p,expanded:x,expandText:d,itemsAfterCollapse:h,itemsBeforeCollapse:g,maxItems:f,separator:v}),k=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Z,r)})(M),N=a.useRef(null),R=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,m.jsx)("li",{className:k.li,children:e},`child-${r}`)));return(0,m.jsx)(B,(0,n.Z)({ref:r,component:p,color:"text.secondary",className:(0,i.Z)(k.root,u),ownerState:M},b,{children:(0,m.jsx)(S,{className:k.ol,ref:N,ownerState:M,children:j(x||f&&R.length<=f?R:(e=>g+h>=e.length?e:[...e.slice(0,g),(0,m.jsx)(y,{"aria-label":d,onClick:()=>{C(!0);const e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(R),k.separator,v,M)})}))}))},122:function(e,r,t){"use strict";t.d(r,{Z:function(){return B}});var n=t(3366),o=t(7462),a=t(7294),i=t(6010),s=t(7192),l=t(4844),c=t(1796),u=t(8216),p=t(1496),d=t(7623),m=t(8791),h=t(1705),g=t(5861),f=t(8979);function v(e){return(0,f.Z)("MuiLink",e)}var y=(0,t(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=t(5893);const Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=(0,p.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${(0,u.Z)(t.underline)}`],"button"===t.component&&r.button]}})((({theme:e,ownerState:r})=>{const t=(0,l.D)(e,`palette.${(e=>x[e]||e)(r.color)}`)||r.color;return(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,c.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})}));var B=a.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiLink"}),{className:l,color:c="primary",component:p="a",onBlur:g,onFocus:f,TypographyClasses:y,underline:x="always",variant:B="inherit"}=t,S=(0,n.Z)(t,Z),{isFocusVisibleRef:C,onBlur:j,onFocus:M,ref:k}=(0,m.Z)(),[N,R]=a.useState(!1),T=(0,h.Z)(r,k),_=(0,o.Z)({},t,{color:c,component:p,focusVisible:N,underline:x,variant:B}),W=(e=>{const{classes:r,component:t,focusVisible:n,underline:o}=e,a={root:["root",`underline${(0,u.Z)(o)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,s.Z)(a,v,r)})(_);return(0,b.jsx)(w,(0,o.Z)({className:(0,i.Z)(W.root,l),classes:y,color:c,component:p,onBlur:e=>{j(e),!1===C.current&&R(!1),g&&g(e)},onFocus:e=>{M(e),!0===C.current&&R(!0),f&&f(e)},ref:T,ownerState:_,variant:B},S))}))},5861:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(3366),o=t(7462),a=t(7294),i=t(6010),s=t(9707),l=t(7192),c=t(1496),u=t(7623),p=t(8216),d=t(8979);function m(e){return(0,d.Z)("MuiTypography",e)}(0,t(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=t(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r[`align${(0,p.Z)(t.align)}`],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((({theme:e,ownerState:r})=>(0,o.Z)({margin:0},r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiTypography"}),a=(e=>y[e]||e)(t.color),c=(0,s.Z)((0,o.Z)({},t,{color:a})),{align:d="inherit",className:b,component:Z,gutterBottom:x=!1,noWrap:w=!1,paragraph:B=!1,variant:S="body1",variantMapping:C=v}=c,j=(0,n.Z)(c,g),M=(0,o.Z)({},c,{align:d,color:a,className:b,component:Z,gutterBottom:x,noWrap:w,paragraph:B,variant:S,variantMapping:C}),k=Z||(B?"p":C[S]||v[S])||"span",N=(e=>{const{align:r,gutterBottom:t,noWrap:n,paragraph:o,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,p.Z)(r)}`,t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,m,i)})(M);return(0,h.jsx)(f,(0,o.Z)({as:k,ref:r,ownerState:M,className:(0,i.Z)(N.root,b)},j))}))},9409:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins/typhoon-advisory",function(){return t(1232)}])},9403:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),o=t(2963),a=t(122),i=t(1664),s={breacrumbs:{"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.dark}},fontSize:"16px",marginTop:function(e){return e.spacing(2)}}};var l=function(e){var r=e.navdata;return(0,n.jsx)(o.Z,{"aria-label":"breadcrumb",sx:s.breacrumbs,children:r.map((function(e,r){return void 0!==e.href?(0,n.jsx)(a.Z,{underline:"hover",color:"inherit",children:(0,n.jsx)(i.default,{href:e.href,passHref:!0,children:(0,n.jsx)("span",{children:e.name})})},"bcd-".concat(r)):(0,n.jsx)("div",{color:"text.primary",children:e.name},"bcd-".concat(r))}))})}},1232:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(5861),a=t(9403);r.default=function(){return(0,n.jsxs)("div",{role:"presentation",children:[(0,n.jsx)(o.Z,{variant:"h4",children:"Bulletins"}),(0,n.jsx)(o.Z,{variant:"h5",children:"Typhoon Advisory"}),(0,n.jsx)(a.Z,{navdata:[{name:"Bulletins",href:"/bulletins"},{name:"Typhoon Advisory"}]})]})}}},function(e){e.O(0,[774,888,179],(function(){return r=9409,e(e.s=r);var r}));var r=e.O();_N_E=r}]);