(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{5861:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var r=t(3366),i=t(7462),o=t(7294),a=t(6010),s=t(9707),l=t(7192),c=t(1496),u=t(3616),d=t(8216),p=t(8979);function h(n){return(0,p.Z)("MuiTypography",n)}(0,t(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=t(5893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,d.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((({theme:n,ownerState:e})=>(0,i.Z)({margin:0},e.variant&&n.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var v=o.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiTypography"}),o=(n=>y[n]||n)(t.color),c=(0,s.Z)((0,i.Z)({},t,{color:o})),{align:p="inherit",className:v,component:b,gutterBottom:j=!1,noWrap:Z=!1,paragraph:w=!1,variant:k="body1",variantMapping:C=g}=c,A=(0,r.Z)(c,m),P=(0,i.Z)({},c,{align:p,color:o,className:v,component:b,gutterBottom:j,noWrap:Z,paragraph:w,variant:k,variantMapping:C}),B=b||(w?"p":C[k]||g[k])||"span",S=(n=>{const{align:e,gutterBottom:t,noWrap:r,paragraph:i,variant:o,classes:a}=n,s={root:["root",o,"inherit"!==n.align&&`align${(0,d.Z)(e)}`,t&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,l.Z)(s,h,a)})(P);return(0,f.jsx)(x,(0,i.Z)({as:B,ref:e,ownerState:P,className:(0,a.Z)(S.root,v)},A))}))},5469:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t(3882)}])},4623:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5893),i=t(7357),o=t(8456),a=t(5861),s={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var l=function(){return(0,r.jsx)(i.Z,{sx:s.container,children:(0,r.jsxs)(i.Z,{sx:s.loading,children:[(0,r.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(o.Z,{size:"32px"})]})})}},7702:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});var r=t(5893),i=t(7357),o=t(7294),a=t(2293),s=t(6720),l=t(7948),c=t(7720),u=t(7533),d=t(3946),p=t(8462),h=t(7594),f=t(9334),m=t(8619),x=t(155),g=t(5861),y=t(1664),v=t(1163),b=t(7520),j=t(9662),Z=t(3384),w=t(326),k=t(7427),C=t(1898),A=t(4229),P={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{padding:function(n){return n.spacing(1)},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},"& .MuiListItemButton-root:hover":{backgroundColor:function(n){return n.palette.primary.light}},"& .listitembutton-styled":{py:0,minHeight:48,color:function(n){return n.palette.primary.dark},borderRadius:function(n){return n.spacing(1)},margin:function(n){return n.spacing(1)},"&:hover, &:focus":{"& .MuiTypography-root":{color:function(n){return n.palette.primary.dark}}}},"& .MuiListItemIcon-root":{marginRight:"-8px"}},listitem:{"& a":{textDecoration:"none"}}};function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return B(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=280,W=[{text:"Get Started",link:"/admin",icon:(0,r.jsx)(Z.Z,{})},{text:"Crop Recommendations",link:"/admin/bulletins/crops",icon:(0,r.jsx)(C.Z,{})},{text:"Risks Recommendations",link:"/admin/bulletins/risks",icon:(0,r.jsx)(C.Z,{})},{text:"BACAP Settings",link:"/admin/weather",icon:(0,r.jsx)(A.Z,{})}],M=[{text:"Profile",link:"/admin/profile",icon:(0,r.jsx)(k.Z,{})},{text:"BACAP Website",link:"/",icon:(0,r.jsx)(b.Z,{})},{text:"Logout",link:"#",icon:(0,r.jsx)(j.Z,{})}];function R(n){var e=n.window,t=S(o.useState(!1),2),b=t[0],j=t[1],Z=S(o.useState(null),2),k=Z[0],C=Z[1],A=(0,v.useRouter)(),B=n.user,R=n.onBtnClick;o.useEffect((function(){var n=A.route.substr(A.route.lastIndexOf("/")+1,A.route.length),e={admin:0,crops:1,risks:2,weather:3,profile:4,create:1};C(e[n]?e[n]:0)}),[A.route]);var N=function(){j(!b)},_=(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(p.Z,{sx:P.list,disablePadding:!0,children:W.map((function(n,e){return(0,r.jsx)(y.default,{href:n.link,passHref:!0,children:(0,r.jsxs)(m.Z,{className:"listitembutton-styled",selected:k===e,children:[(0,r.jsx)(h.Z,{sx:{color:"inherit"},children:n.icon}),(0,r.jsx)(f.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]},n.label)},e)}))}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(p.Z,{sx:P.list,children:M.map((function(n,e){return"Logout"===n.text?(0,r.jsx)(y.default,{href:n.link,passHref:!0,children:(0,r.jsxs)(m.Z,{className:"listitembutton-styled",selected:k===e+4,onClick:R,children:[(0,r.jsx)(h.Z,{sx:{color:"inherit"},children:n.icon}),(0,r.jsx)(f.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},e):(0,r.jsx)(y.default,{href:n.link,passHref:!0,children:(0,r.jsxs)(m.Z,{className:"listitembutton-styled",selected:k===e+4,children:[(0,r.jsx)(h.Z,{sx:{color:"inherit"},children:n.icon}),(0,r.jsx)(f.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},e)}))})]}),D=void 0!==e?function(){return e().document.body}:void 0;return(0,r.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,r.jsx)(s.ZP,{}),(0,r.jsx)(a.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(T,"px)")},ml:{sm:"".concat(T,"px")}},children:(0,r.jsxs)(x.Z,{sx:P.toolbar,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:N,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(w.Z,{})}),(0,r.jsx)(g.Z,{variant:"h6",noWrap:!0,component:"div",children:"BACAP Admin"})]}),(0,r.jsxs)(i.Z,{sx:P.profileToolbar,children:["Welcome, ",B.email,"!"]})]})}),(0,r.jsxs)(i.Z,{component:"nav",sx:{width:{sm:T},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,r.jsx)(u.ZP,{container:D,variant:"temporary",open:b,onClose:N,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:T}},children:_}),(0,r.jsx)(u.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:T,boxShadow:"0px 0px 20px rgb(1 41 112 / 10%)",color:"#444444",border:"none",backgroundColor:"#fff"}},open:!0,children:_})]}),(0,r.jsxs)(i.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(T,"px)")}},children:[(0,r.jsx)(x.Z,{}),(0,r.jsx)(l.Z,{maxWidth:"lg",children:n.children})]})]})}var N=t(4623);var _=function(n){return(0,r.jsxs)(i.Z,{sx:{marginTop:function(n){return n.spacing(4)}},children:[n.loading&&(0,r.jsx)(N.Z,{}),!n.loading&&n.user&&(0,r.jsx)(R,{user:n.user,onBtnClick:n.onBtnLogoutClick,children:n.children})]})}},3882:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(4051),i=t.n(r),o=t(5893),a=t(7294),s=t(1163),l=t(3835),c=t(5861),u=t(7702),d=t(1664);var p=function(n){return(0,o.jsxs)(u.Z,{loading:n.loading,user:n.user,onBtnLogoutClick:n.onBtnClick,children:[(0,o.jsx)(c.Z,{variant:"h4",children:"Get Started"}),(0,o.jsxs)("p",{children:["Welcome to BACAP Admin, a set of administrative pages used for updating BACAP's data-specific content. All data updates made within the admin site will be made available for use by BACAP admins during reports creation on the ",(0,o.jsx)("strong",{children:"Create Bulletins"})," page."]}),(0,o.jsxs)("p",{children:["The finalized (uploaded) PDF reports will be available for public download on BACAP's ",(0,o.jsx)(d.default,{href:"/bulletins",passHref:!0,children:(0,o.jsx)("strong",{children:"Bulletins"})})," downloads page."]}),(0,o.jsx)("br",{}),(0,o.jsx)(c.Z,{variant:"h5",children:"Crop Recommendations"}),(0,o.jsxs)("p",{children:["This page will allow admins to generate 10-Day and Seasonal ",(0,o.jsx)("u",{children:"crops bulletins"})," for preview, with an option to upload the generated bulletins as PDF for site-wide public download."]}),(0,o.jsx)(c.Z,{variant:"h5",children:"Risks Recommendations"}),(0,o.jsxs)("p",{children:["This page will allow admins to generate 10-Day and Seasonal ",(0,o.jsx)("u",{children:"climate risks bulletins"})," for preview, with an option to upload the generated bulletins as PDF for site-wide public download."]}),(0,o.jsx)(c.Z,{variant:"h5",children:"BACAP Settings"}),(0,o.jsxs)("p",{children:["The BACAP Services page will allow admins to manually encode weather data (with references to PAGASA's forecast website), which will be used by other admins during reports creation on ",(0,o.jsx)("strong",{children:"Create Bulletins."})]}),(0,o.jsx)(c.Z,{variant:"h5",children:"Profile"}),(0,o.jsx)("p",{children:"Signed-in user information can be viewed on the Profile page."})]})};function h(n,e,t,r,i,o,a){try{var s=n[o](a),l=s.value}catch(c){return void t(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function f(){var n=(0,l.aC)(),e=(0,s.useRouter)();(0,a.useEffect)((function(){n.loading||n.user||e.push("/admin/login")}),[n.user,n.loading,e]);var t=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.logOut();case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(n){h(o,r,i,a,s,"next",n)}function s(n){h(o,r,i,a,s,"throw",n)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,o.jsx)(p,{user:n.user,loading:n.loading,onBtnClick:t})}f.customLayout=!0,f.adminPage=!0;var m=f}},function(n){n.O(0,[531,774,888,179],(function(){return e=5469,n(n.s=e);var e}));var e=n.O();_N_E=e}]);