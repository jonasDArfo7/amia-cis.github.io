(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8031],{65468:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cropping-calendar",function(){return r(6314)}])},43370:function(e,n,r){"use strict";var t=r(85893),i=r(9008);n.Z=function(e){var n=e.title,r=e.ogDescription,a=e.ogImageURL,o=e.ogImgAlt,c=void 0===o?"Picture":o,l=e.ogSiteName,s=void 0===l?"ACAP-BICOL":l,u=e.ogURL;return(0,t.jsxs)(i.default,{children:[(0,t.jsx)("meta",{name:"description",content:r}),(0,t.jsx)("meta",{name:"og:description",content:r}),(0,t.jsx)("meta",{property:"og:title",content:n}),(0,t.jsx)("meta",{property:"og:site_name",content:s}),(0,t.jsx)("meta",{property:"og:image",content:a}),(0,t.jsx)("meta",{property:"og:image:width",content:"600"}),(0,t.jsx)("meta",{property:"og:image:height",content:"315"}),(0,t.jsx)("meta",{property:"og:image:alt",content:c}),(0,t.jsx)("meta",{property:"og:url",content:u}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:title",content:n}),(0,t.jsx)("meta",{name:"twitter:image",content:a}),(0,t.jsx)("title",{children:n})]})}},37634:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(85893),i=r(25675),a=r(87357),o=r(15861),c=r(26660),l={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var s=function(e){var n=e.message,r=void 0===n?"Failed to load data":n,s=e.style,u=void 0===s?{}:s;return(0,t.jsxs)(a.Z,{sx:l.container,style:u,children:[(0,t.jsx)(i.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,t.jsx)(o.Z,{variant:"subtitle1",children:r})]})}},53577:function(e,n,r){"use strict";var t=r(85893),i=r(87357),a=r(98456);n.Z=function(e){var n=e.text,r=void 0===n?"":n,o=e.size,c=void 0===o?24:o,l=e.children;return(0,t.jsxs)(i.Z,{sx:{width:"100%",textAlign:"center",height:"20vh"},children:[(0,t.jsxs)(i.Z,{sx:{width:"100%",textAlign:"center",marginTop:function(e){return e.spacing(12)},marginBottom:"32px",display:"flex",justifyContent:"center"},children:[(0,t.jsx)("span",{children:""!==r?r:"Loading..."})," \xa0",(0,t.jsx)(a.Z,{size:c})]}),l]})}},6314:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return M},default:function(){return D}});var t=r(85893),i=r(67294),a=r(15861),o=r(59111),c=r(76490),l=r(47426),s=r(27179);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){var n=(0,i.useState)(null),r=n[0],t=n[1],a=(0,i.useState)(""),o=a[0],c=a[1];return(0,i.useEffect)((function(){if(c(""),e)try{var n=Object.values(l.re).reduce((function(n,r){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({},n,u({},r.code,e[r.code].split(",").map((function(e){return e===s.HB?"cropCalnocolor":"cropCal".concat(s.TE[e]||"nocolor")}))))}),{});t(n)}catch(r){c(r.message)}}),[e]),{stagesforviz:r,error:o}}var d=r(33050),f=r(23766),m=r(45697),x=r.n(m),g=r(98396),h=r(76295),v=r(87357),b=r(66242),j=r(37634),y=r(50480),C=r(86886),Z=r(36872),_=r(72890),w=r(61903),P=r(53577),S={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCalprep":{backgroundColor:"#ffd966"},"& .cropCalgrow":{backgroundColor:"#375623"},"& .cropCalharv":{backgroundColor:"#203764"},"& .cropCalplant":{backgroundColor:"#a9d08e"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCalprep:"#ffd966",cropCalgrow:"#375623",cropCalharv:"#203764",cropCalplant:"#a9d08e",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};var O=function(){return(0,t.jsxs)(C.ZP,{container:!0,sx:S.calendar,children:[(0,t.jsx)(C.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsx)(C.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(l.re).map((function(e,n){return(0,t.jsx)(v.Z,{className:"cal-mo-container",style:{borderRight:"1px solid rgba(0, 0, 0, 0.4)"},children:(0,t.jsx)("div",{className:"cropCalnocolor"})},"cal-mo-itm-".concat(n,"-1"))}))})]})};function k(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){k(e,n,r[n])}))}return e}function N(e){var n=e.optsprovinces,r=e.optsmunicipalities,i=e.subcalendar,o=e.processedCalendar,c=e.sel_options,s=e.loading,u=e.onSelectItemChange,p=(0,g.Z)("(max-width:600px)");return(0,t.jsxs)(b.Z,{variant:"outlined",sx:S.card,children:[(0,t.jsxs)(C.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",sx:{marginBottom:"48px"},children:[(0,t.jsx)(C.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(a.Z,{variant:"h6",children:"Location Selector"}),(0,t.jsx)(h.Z,{disablePortal:!0,id:"province",size:"small",value:c.sel_province,disabled:0===n.length||s,options:n,renderInput:function(e){return(0,t.jsx)(w.Z,E({},e,{label:0===n.length?"Loading...":"Select a province"}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return u(e,E({},n,{from:"province"}))}}),(0,t.jsx)(h.Z,{disablePortal:!0,id:"municipality",size:"small",value:c.sel_municipality,disabled:0===r.length||s,options:r,sx:S.autoMuni,renderInput:function(e){return(0,t.jsx)(w.Z,E({},e,{label:null===c.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return u(e,E({},n,{from:"municipality"}))}})]})}),(0,t.jsx)(C.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(a.Z,{variant:"h6",children:"Crop Type"}),(0,t.jsxs)(_.Z,{row:!0,"aria-labelledby":"crop-calendar-croptype-selector",name:"crop-calendar-croptype-selector",children:[(0,t.jsx)(y.Z,{value:"rice",control:(0,t.jsx)(Z.Z,{onClick:function(e){return u(e,{label:"Rice",from:"rice"})}}),label:"Rice",checked:"Rice"===c.sel_crop,disabled:null===c.sel_municipality||s}),(0,t.jsx)(y.Z,{value:"corn",control:(0,t.jsx)(Z.Z,{onClick:function(e){return u(e,{label:"Corn",from:"corn"})}}),label:"Corn",checked:"Corn"===c.sel_crop,disabled:!0})]})]})})]}),s&&""===c.error?(0,t.jsx)(P.Z,{text:"Loading data..."}):""!==c.error?(0,t.jsx)(j.Z,{message:"Error loading data."}):null===i&&null!==c.sel_municipality&&null!==c.sel_province?(0,t.jsx)(v.Z,{sx:S.infoMsg,children:"Data for the requested resource is not yet available."}):null!==i&&null!==o?(0,t.jsxs)(v.Z,{children:[(0,t.jsxs)(C.ZP,{container:!0,sx:S.calendar,children:[(0,t.jsx)(C.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem",children:(0,t.jsx)(a.Z,{variant:"subtitle1",children:(0,t.jsx)("strong",{children:"Crop Name"})})}),(0,t.jsx)(C.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(l.re).map((function(e,n){return(0,t.jsx)(v.Z,{className:"monthlabels",children:p?(0,t.jsx)("span",{children:e.format.substring(0,1)}):(0,t.jsx)("span",{children:e.format.substring(0,3)})},"cal-mo-".concat(n))}))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{}),(0,t.jsxs)(C.ZP,{container:!0,sx:S.calendar,children:[(0,t.jsx)(C.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname",children:c.sel_crop}),(0,t.jsx)(C.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(l.re).map((function(e,n){var r=o[e.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",i=S.calendar.cellBorderColor[o[e.code][0]],a=S.calendar.cellBorderColor[o[e.code][1]];return(0,t.jsxs)(v.Z,{className:"cal-mo-container",style:{borderRight:""!==r?r:a.includes("#f7f7ff")?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(a)},children:[(0,t.jsx)("div",{style:{backgroundColor:i||"#f7f7ff"}}),(0,t.jsx)("div",{style:{backgroundColor:a||"#f7f7ff"}})]},"cal-mo-itm-".concat(n,"-1"))}))})]}),(0,t.jsx)(O,{})]}),(0,t.jsxs)(C.ZP,{container:!0,style:{marginTop:"32px"},children:[(0,t.jsx)(C.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsxs)(C.ZP,{item:!0,xs:10,md:9,sx:S.legend,className:"calendar-header-months",children:[(0,t.jsx)("strong",{children:"Legend"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:"#ffd966"}}),"Preparation Stage"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:"#a9d08e"}}),"Newly Planted"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:"#375623"}}),"Vegetative/Reproductive"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:"#203764"}}),"Maturing"]})]})]})]})]}):(0,t.jsx)(v.Z,{sx:S.infoMsg,children:"Please select a province and a municipality."})]})}N.propTypes={optsprovinces:x().array,optsmunicipalities:x().array,subcalendar:x().object,processedCalendar:x().object,sel_options:x().object,loading:x().bool,onSelectItemChange:x().func};var R=N,z=r(43370);function A(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function L(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){A(e,n,r[n])}))}return e}var T="Rice",I="Corn",B={sel_province:null,sel_municipality:null,sel_crop:T,error:""};var M=!0,D=function(e){var n=e.provinces,r=void 0===n?[]:n,l=e.media,s=(0,i.useState)(B),u=s[0],m=s[1],x=(0,i.useState)(null),g=x[0],h=x[1],v=(0,i.useState)([]),b=v[0],j=v[1],y=(0,f.Z)(u.sel_province,r),C=(0,d.Z)(u.sel_province),Z=C.cropcalendar,_=C.loading,w=C.error,P=(0,c.Z)(Z,u.sel_municipality),S=p(g),O=S.stagesforviz,k=S.error,E=(0,i.useState)(!0),N=E[0],A=E[1],M=(0,i.useCallback)((function(e){h(Z.find((function(n){return n.municipality===e&&n.crop===u.sel_crop})))}),[Z,u.sel_crop]);return(0,i.useEffect)((function(){if(r.length>0){var e=(0,o.m)(r);j(e),m((function(n){return L({},n,{sel_province:e[0].label})}))}}),[r]),(0,i.useEffect)((function(){var e,n;y.length>0&&Z.length>0&&u.sel_province===(null!==(n=null===(e=Z[0])||void 0===e?void 0:e.province)&&void 0!==n?n:"")&&(M(y[0].label),m((function(e){return L({},e,{sel_municipality:y[0].label})})))}),[y,Z,M,u.sel_province]),(0,i.useEffect)((function(){A(_)}),[_]),(0,i.useEffect)((function(){if(""!==w||""!==k){var e=w||k;m((function(n){return L({},n,{error:e})}))}else m((function(e){return L({},e,{error:""})}))}),[w,k]),(0,t.jsxs)("div",{id:"bacap-cropping-calendar",children:[(0,t.jsx)(z.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) Cropping Calendar",ogDescription:l.description,ogImageURL:l.url,ogURL:l.path}),(0,t.jsx)(a.Z,{variant:"h4",children:"Cropping Calendar"}),(0,t.jsx)(a.Z,{variant:"label",children:"Cropping Calendar page"}),(0,t.jsx)(R,{optsprovinces:b,optsmunicipalities:y,subcalendar:g,processedCalendar:O,optscrops:P,sel_options:u,loading:N,onSelectItemChange:function(e,n){var r=n.label,t=n.from;if(""!==u.error&&m(L({},u,{error:""})),void 0!==r)switch(t){case"province":h(null),m(L({},B,{sel_province:r}));break;case"municipality":M(r),m(L({},u,{sel_municipality:r}));break;case T:case I:h(null),m(L({},u,{sel_crop:t}))}else"province"===t?m(B):"municipality"===t&&m(L({},u,{sel_municipality:null,sel_crop:null}))}})]})}},76490:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(67294);function i(e,n){var r=(0,t.useState)([]),i=r[0],a=r[1];return(0,t.useEffect)((function(){if(e&&n){var r=e&&n?e.filter((function(e){return e.municipality===n})).map((function(e){return e.crop})).filter((function(e,n,r){return r.indexOf(e)===n})).map((function(e,n){return{id:n,label:e,disabled:!1}})):[];a(r)}}),[e,n]),i}},33050:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(34051),i=r.n(t),a=r(67294),o=r(32848);function c(e,n,r,t,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void r(s)}c.done?n(l):Promise.resolve(l).then(t,i)}function l(e){var n=(0,a.useState)([]),r=n[0],t=n[1],l=(0,a.useState)(!1),s=l[0],u=l[1],p=(0,a.useState)(""),d=p[0],f=p[1];return(0,a.useEffect)((function(){var n=function(){var n,r=(n=i().mark((function n(){var r,a,c,l,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,(0,o.i)(e);case 4:r=n.sent,u(!1),f(""),t(null!==(a=null===r||void 0===r?void 0:r.data)&&void 0!==a?a:[]),n.next=19;break;case 11:n.prev=11,n.t0=n.catch(0),s=null!==(l=null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c?void 0:c.data)&&void 0!==l?l:n.t0.message,f(s),u(!1),t([]);case 19:case"end":return n.stop()}}),n,null,[[0,11]])})),function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function o(e){c(a,t,i,o,l,"next",e)}function l(e){c(a,t,i,o,l,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();e&&(f(""),n())}),[e]),{cropcalendar:r,loading:s,error:d}}},23766:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(67294);function i(e,n){var r=(0,t.useState)([]),i=r[0],a=r[1];return(0,t.useEffect)((function(){var r,t;a(e&&n&&null!==(t=null===(r=n.find((function(n){return n.label===e})))||void 0===r?void 0:r.municipalities)&&void 0!==t?t:[])}),[e,n]),i}},27179:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{ax:function(){return p},Xz:function(){return f},Vs:function(){return m},TE:function(){return d},HB:function(){return u}});var i,a,o="plant/trans",c="veg/repro",l="mat",s="lprep",u="none",p=(t(i={},s,"Preparation Stage"),t(i,o,"Newly Planted"),t(i,c,"Vegetative/Reproductive"),t(i,l,"Maturing"),i),d=(p["plant/trans"],p["veg/repro"],p.mat,p.lprep,t(a={},o,"plant"),t(a,c,"grow"),t(a,l,"harv"),t(a,s,"prep"),a),f=Object.keys(p).map((function(e){return e.toLowerCase()})),m=(Object.values(p),{FIRST_HALF:"1st_half",SECOND_HALF:"2nd_half"})},59111:function(e,n,r){"use strict";r.d(n,{m:function(){return t}});var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return e.map((function(e,r){return{id:r,label:e[n]}}))}}},function(e){e.O(0,[6284,2866,9964,9522,1903,6295,9845,9774,2888,179],(function(){return n=65468,e(e.s=n);var n}));var n=e.O();_N_E=n}]);