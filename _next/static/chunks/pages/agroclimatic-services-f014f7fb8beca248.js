(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7720:function(e,t,n){"use strict";var i=n(3366),r=n(7462),l=n(7294),o=n(6010),a=n(7192),c=n(1796),s=n(1496),u=n(3616),d=n(5097),p=n(5893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),m=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=l.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:l=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:b=!1,light:g=!1,orientation:_="horizontal",role:x=("hr"!==v?"separator":void 0),textAlign:y="center",variant:j="fullWidth"}=n,S=(0,i.Z)(n,f),w=(0,r.Z)({},n,{absolute:l,component:v,flexItem:b,light:g,orientation:_,role:x,textAlign:y,variant:j}),Z=(e=>{const{absolute:t,children:n,classes:i,flexItem:r,light:l,orientation:o,textAlign:c,variant:s}=e,u={root:["root",t&&"absolute",s,l&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,a.Z)(u,d.V,i)})(w);return(0,p.jsx)(h,(0,r.Z)({as:v,className:(0,o.Z)(Z.root,s),role:x,ref:t,ownerState:w},S,{children:c?(0,p.jsx)(m,{className:Z.wrapper,ownerState:w,children:c}):null}))}));t.Z=v},5097:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var i=n(8979);function r(e){return(0,i.Z)("MuiDivider",e)}const l=(0,n(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=l},7741:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agroclimatic-services",function(){return n(9932)}])},9932:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return U},default:function(){return B}});var i=n(4051),r=n.n(i),l=n(5893),o=n(7294),a=n(2848),c=n(1652),s=n(4680),u=n(560),d=n(5675),p=n(1903),f=n(6295),h=n(7357),m=n(1057),v=n(7720),b=n(5861),g=n(6886),_=n(6624),x=n(4472),y=n(3578),j=n(6229),S=n(5113),w=n(9794),Z=n(1033),C=n(120),R={container:{marginTop:function(e){return e.spacing(3)},minHeight:"400px"},controls:{marginTop:function(e){return e.spacing(6)}},selectContainer:{borderRight:{sm:"none",md:"1px solid gray"}},recsContainer:{marginTop:"-24px",paddingLeft:{sm:"none",md:"54px !important"}},autocomplete:{maxWidth:{sm:"100%",md:"310px"},marginTop:function(e){return e.spacing(1)}},conditionLegend:{maxWidth:{sm:"100%"},margin:{md:"24px"},padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center"},welcome:{display:"grid",placeContent:"center",marginTop:function(e){return e.spacing(10)},textAlign:"center","& h5":{marginTop:function(e){return e.spacing(2)}}}},O=n(7426);function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){E(e,t,n[t])}))}return e}var k=["sel_province","sel_municipality","sel_crop","sel_month","sel_stage","sel_activity"];var P=function(e){var t=(0,o.useState)(0),n=t[0],i=t[1],r=(0,o.useRef)(!0),a=(0,o.useState)(!0),c=a[0],s=a[1],u=e.sel_options,E=e.provinces,P=e.recommendations,I=e.onSelectItemChange,T=e.optsmunicipalities,N=e.optscrops,L=e.optscropstages,W=e.optsactivities,M=e.optsmonths,D=e.steps,V=e.getStepLabel,U=e.isContinueDisabled;(0,o.useEffect)((function(){return r.current=!0,function(){r.current=!1}}),[]);var B=function(){s(!1),setTimeout((function(){(r.current=!0)&&s(!0)}),500),i((function(e){return e+1}))},$=function(){i((function(e){return e-1}))},q=function(){var e="Loading...";return E.length>0&&(e=null===u.sel_province?"Select a province":"Province"),e};return(0,l.jsxs)(h.Z,{sx:{minHeight:"75vh"},id:"seasonal-recommendations",children:[(0,l.jsx)(b.Z,{variant:"h4",children:"Crop Recommendations"}),(0,l.jsx)(b.Z,{variant:"label",children:"Seasonal Recommendations"}),(0,l.jsxs)(g.ZP,{container:!0,spacing:2,sx:R.container,children:[(0,l.jsxs)(g.ZP,{item:!0,xs:12,md:4,sx:R.selectContainer,children:[(0,l.jsxs)(h.Z,{sx:{minWidth:"100%",paddingRight:function(e){return e.spacing(2)}},children:[(0,l.jsx)(_.Z,{activeStep:n,orientation:"vertical",children:D.map((function(e,t){return(0,l.jsxs)(x.Z,{children:[(0,l.jsx)(y.Z,{optional:5===t?(0,l.jsx)(b.Z,{variant:"caption",children:"Last step"}):null,children:V(t)}),(0,l.jsxs)(j.Z,{children:[(0,l.jsx)(b.Z,{children:e.description}),0===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"province",value:u.sel_province,disabled:0===E.length,options:E,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:q()}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return I(e,A({},t,{from:"province"}))}}),1===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"municipality",value:u.sel_municipality,disabled:0===T.length||u.loading,options:T,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:null===u.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return I(e,A({},t,{from:"municipality"}))}}),2===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"crop",value:u.sel_crop,disabled:0===N.length,options:N,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:null===u.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return I(e,A({},t,{from:"crop"}))}}),3===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"month",value:u.sel_month,disabled:0===M.length||null===u.sel_crop,options:M,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:null===u.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return I(e,A({},t,{from:"month"}))}}),4===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"cropstage",value:u.sel_stage,disabled:0===L.length,options:L,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:null===u.sel_stage?"Select a crop stage":"Crop Stage"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return I(e,A({},t,{from:"cropstage"}))}}),5===t&&(0,l.jsx)(f.Z,{disablePortal:!0,id:"activity",value:u.sel_activity,disabled:0===W.length,options:W,sx:R.autocomplete,renderInput:function(e){return(0,l.jsx)(p.Z,A({},e,{label:null===u.sel_activity?"Select an activity":"Activity"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return I(e,A({},t,{from:"activity"}))}}),""!==u.error&&(0,l.jsx)(b.Z,{variant:"caption",sx:{color:"red"},children:u.error}),(0,l.jsx)(h.Z,{sx:{mb:2,marginTop:"24px"},children:(0,l.jsxs)("div",{children:[(0,l.jsx)(m.Z,{variant:"contained",disabled:U(t)||u.loading||!c,onClick:B,children:t===D.length-1?"Finish":"Continue"}),(0,l.jsx)(m.Z,{disabled:0===t,onClick:$,children:"Back"})]})})]})]},e.label)}))}),n===D.length&&(0,l.jsxs)(S.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,l.jsx)(b.Z,{children:"All steps completed"}),(0,l.jsx)(m.Z,{onClick:function(){i(0),I(null,{from:"province"})},sx:{mt:1,mr:1},children:"Restart"}),(0,l.jsx)(m.Z,{onClick:$,sx:{mt:1,mr:1},children:"Back"})]})]}),(0,l.jsx)("br",{}),(0,l.jsx)(v.Z,{}),(0,l.jsx)("br",{}),null!==u.sel_month&&(0,l.jsxs)(h.Z,{sx:R.conditionLegend,style:{backgroundColor:O.tN[u.sel_condition.label]},children:[(0,l.jsx)(b.Z,{variant:"subtitle2",children:"Seasonal Weather Condition"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:u.sel_month.label})," \xa0",(0,l.jsxs)("span",{children:["".concat(u.sel_condition.label.charAt(0).toUpperCase()).concat(u.sel_condition.label.slice(1))," (",u.sel_condition.id,"%)"]})]})]})]}),(0,l.jsx)(g.ZP,{item:!0,xs:12,md:8,sx:R.recsContainer,children:null!==u.sel_crop&&null!==u.sel_activity&&6===n?(0,l.jsxs)("div",{children:[null!==u.sel_crop&&null!==u.sel_activity&&(0,l.jsxs)(b.Z,{variant:"h5",sx:{display:"novalues"===u.sel_activity.id?"none":"flex"},children:[u.sel_crop.label," Recommendations"]}),P.length>0?P.map((function(e,t){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:["".concat(u.sel_condition.label.charAt(0).toUpperCase()).concat(u.sel_condition.label.slice(1)),"Rice"===u.sel_crop.label?" (".concat(e.crop,")"):""]}),e.recommendations().map((function(e,n){return e.ul?(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e.id}),e.subs.length>0&&(0,l.jsx)("ul",{children:e.subs.map((function(e,n){return(0,l.jsx)("li",{children:e},"sub-".concat(t,"-").concat(n))}))})]},"main-".concat(t,"-").concat(n)):(0,l.jsx)("p",{children:e.id},"main-".concat(t,"-").concat(n))}))]},"rec-".concat(t))})):(0,l.jsx)(Z.Z,{message:"We cannot find recommendations for your selected options."})]}):Object.values(u).filter((function(e){return e})).length>1?(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:k.map((function(e,t){return null!==u[e]&&void 0!==u[e].from&&"weather_condition"!==u[e].from?(0,l.jsx)(w.Z,{info:u[e],show:t<k.length-1},"card-opt-".concat(t)):(0,l.jsx)("div",{},"card-opt-".concat(t))}))}):(0,l.jsxs)(h.Z,{sx:R.welcome,children:[(0,l.jsx)(d.default,{unoptimized:!0,src:(0,C.assetPrefixer)("images/icons/finance.svg"),height:120,width:120,loader:C.imageLoader,alt:"Empty data"}),(0,l.jsx)(b.Z,{variant:"h5",children:"Welcome to the Crop Recommendations Page"}),(0,l.jsx)(b.Z,{variant:"p",children:"Please select a province to start."})]})})]})]})},I=n(7682),T=[{label:"Select a province",description:"Select a province within the Bicol region.",opt_name:"sel_province"},{label:"Select a municipality",description:"Select a municipality included in the province you have selected on step no. 1.",opt_name:"sel_municipality"},{label:"Select a crop type",description:"Listed below are available crops for your selected province and municipality.",opt_name:"sel_crop"},{label:"Select a month",description:"Select a target month from the current Seasonal Weather Forecast.",opt_name:"sel_month"},{label:"Select a crop stage",description:"Listed below are the available crop stages for your selected crop on the target month.",opt_name:"sel_stage"},{label:"Select an activity",description:"Here are available activities for the previously-selected parameters.",opt_name:"sel_activity"}];function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function L(e,t,n,i,r,l,o){try{var a=e[l](o),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(i,r)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){W(e,t,n[t])}))}return e}function D(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null,sel_condition:{id:0,from:"weather_condition",label:O.MW.DRIER},loading:!1,error:""};var U=!0,B=function(e){var t=e.municipalities,n=void 0===t?[]:t,i=(0,I.Kx)(s.o.CROP_REC_LIST_RECS_MAIN,"id"),d=i.documents,p=i.loading,f=(0,I.Kx)(s.o.CROP_REC_LIST_RECS_SUB,"id"),h=f.documents,m=f.loading,v=(0,I.m$)(u.M.WEATHER_FORECASTS,"bicol",u.M.SUB_SEASONAL,"name"),b=v.documents,g=v.loading,_=(0,o.useState)([]),x=_[0],y=_[1],j=(0,o.useState)([]),S=j[0],w=j[1],Z=(0,o.useState)([]),C=Z[0],R=Z[1],E=(0,o.useState)([]),A=E[0],k=E[1],N=(0,o.useState)([]),U=N[0],B=N[1],$=(0,o.useState)({}),q=$[0],F=$[1],H=(0,o.useState)(V),z=H[0],J=H[1],K=(0,o.useState)([]),X=K[0],G=K[1],Y=(0,o.useState)([]),Q=Y[0],ee=Y[1],te=(0,o.useState)([]),ne=te[0],ie=te[1],re=(0,o.useState)([]),le=re[0],oe=re[1],ae=(0,o.useState)([]),ce=ae[0],se=ae[1],ue=(0,o.useRef)(!1);(0,o.useEffect)((function(){return ue.current=!0,function(){ue.current=!1}}),[]),(0,o.useEffect)((function(){if(n.length>0&&!p&&!m&&!g){var e={};b.forEach((function(t){var n=t.name.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");e[n]={},t.months.forEach((function(t){e[n][t.mo]={label:t.con,val:t.val}}))}));var t=[];b[0].mos.forEach((function(e){t.push({id:O.re[e.toUpperCase()].code,label:O.re[e.toUpperCase()].format,disabled:!1})}));var i={},r=[];n.forEach((function(e,t){void 0===i[e.province]?(r.push({id:t,label:e.province}),i[e.province]=[{id:0,label:e.name}]):i[e.province].push({id:i[e.province].length,label:e.name})})),ue.current&&(w(i),y(r),se(t),F(e))}}),[n,b,p,m,g]);var de=function(){var e,t=(e=r().mark((function e(t,n){var i,l,o,s,u,p,f,m,v,b,g,_,x,y,j,w,Z,E,P,I;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.from,l=n.label,B([]),!Object.keys(n).includes("id")){e.next=85;break}e.t0=i,e.next="province"===e.t0?6:"municipality"===e.t0?12:"crop"===e.t0?45:"month"===e.t0?54:"cropstage"===e.t0?64:"activity"===e.t0?71:82;break;case 6:return J(M({},z,{sel_province:n,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),G(S[l]),ee([]),ie([]),oe([]),e.abrupt("break",83);case 12:return ie([]),oe([]),o=[],e.prev=15,J(M({},z,{loading:!0,error:""})),e.next=19,(0,c.$K)(z.sel_province.label,l);case 19:s=e.sent,((o=s.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).includes("Rainfed Rice")||o.includes("Irrigated Rice"))&&o.push("Rice"),ue.current&&R((function(e){return s})),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(15),J((function(t){return M({},t,{loading:!1,error:e.t1.message})}));case 28:if(0!==o.length){e.next=31;break}return J((function(e){return M({},e,{loading:!1,error:"There was an error loading data."})})),e.abrupt("return");case 31:return e.prev=31,e.next=34,(0,a.OP)(z.sel_province.label,l);case 34:u=e.sent,p=[],(f=u.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).forEach((function(e,t){p.push({id:t,label:e,disabled:!o.includes(e)})})),ue.current&&(m=0===f.length?{id:"novalues",label:"No crop types for ".concat(l)}:null,J(M({},z,{sel_municipality:n,sel_crop:m,sel_stage:null,sel_activity:null,sel_month:null,loading:!1,error:""})),ie(p),ee((function(e){return p})),k((function(e){return u}))),e.next=44;break;case 41:e.prev=41,e.t2=e.catch(31),J((function(t){return M({},t,{loading:!1,error:e.t2.message})}));case 44:return e.abrupt("break",83);case 45:return ie([]),oe([]),J(M({},z,{sel_crop:n,sel_stage:null,sel_activity:null,sel_month:null})),v=[],A.filter((function(e){return e.crop===l&&e.province===z.sel_province.label&&e.municipality===z.sel_municipality.label})).forEach((function(e){ce.forEach((function(t){""===e[t.id]||v.includes(t.id)||v.push(t.id)}))})),b=D(ce),ce.forEach((function(e,t){b[t].disabled=!v.includes(e.id)})),se(b),e.abrupt("break",83);case 54:return g=q[z.sel_province.label][n.id].label,_=q[z.sel_province.label][n.id].val,oe([]),x=[],y=[],A.forEach((function(e,t){var i=Object.values(O.re).find((function(e){return e.format===n.label})).code;if(""!==e[i]&&e.crop===z.sel_crop.label)for(var r=function(e){if(l[e].length>0&&!x.includes(l[e])){x.push(l[e]);var t=C.filter((function(t){return t.stage===O.MZ[l[e].toUpperCase()]&&("Rice"===z.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(t.crop):t.crop===z.sel_crop.label)})).map((function(e){return e.activity})).filter((function(e,t,n){return n.indexOf(e)==t}));y.push({id:y.length,label:O.MZ[l[e].toUpperCase()],disabled:0===t.length})}},l=e[i].split(","),o=0;o<l.length;o+=1)r(o)})),j=0===y.length?{id:"novalues",label:"No crop stage for ".concat(l)}:null,ie(y),J(M({},z,{sel_month:n,sel_stage:j,sel_activity:null,sel_condition:{label:g,id:_}})),e.abrupt("break",83);case 64:return w=[],Z=C.filter((function(e){return e.stage===l&&("Rice"===z.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===z.sel_crop.label)})).map((function(e){return e.activity})).filter((function(e,t,n){return n.indexOf(e)==t})),E=0===Z.length?{id:"novalues",label:"No activities for selected options"}:null,J(M({},z,{sel_stage:n,sel_activity:E})),Z.forEach((function(e,t){w.push({id:t,label:e})})),oe((function(e){return w})),e.abrupt("break",83);case 71:e.t3=regeneratorRuntime.keys(z);case 72:if((e.t4=e.t3()).done){e.next=78;break}if(P=e.t4.value,null!==z[P]||"sel_activity"===P){e.next=76;break}return e.abrupt("return");case 76:e.next=72;break;case 78:return I=C.filter((function(e){return e.activity===l&&e.stage===z.sel_stage.label&&("Rice"===z.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===z.sel_crop.label)})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(z.sel_condition.label){case O.MW.NORMAL:return JSON.parse(e.normal).map((function(e){return{id:d.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return h.find((function(t){return t.id===e})).description}))}}));case O.MW.WETTER:return JSON.parse(e.wetter).map((function(e){return{id:d.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return h.find((function(t){return t.id===e})).description}))}}));case O.MW.DRIER:return JSON.parse(e.drier).map((function(e){return{id:d.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return h.find((function(t){return t.id===e})).description}))}}))}}}})),J(M({},z,{sel_activity:n})),B(I),e.abrupt("break",83);case 82:return e.abrupt("break",83);case 83:e.next=86;break;case 85:"province"===i?(J(V),G([]),ee([]),ie([]),oe([])):"municipality"===i?(J(M({},z,{sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),ee([]),ie([]),oe([])):"crop"===i?(J(M({},z,{sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),ie([]),oe([])):"month"===i?(J(M({},z,W({sel_month:null,sel_stage:null,sel_activity:null},"sel_activity",null))),ie([]),oe([])):"cropstage"===i?(J(M({},z,{sel_stage:null,sel_activity:null})),oe([])):"activity"===i&&J(M({},z,{sel_activity:null}));case 86:case"end":return e.stop()}}),e,null,[[15,25],[31,41]])})),function(){var t=this,n=arguments;return new Promise((function(i,r){var l=e.apply(t,n);function o(e){L(l,i,r,o,a,"next",e)}function a(e){L(l,i,r,o,a,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,l.jsx)(P,{sel_options:z,provinces:x,recommendations:U,optsmunicipalities:X,optscrops:Q,optscropstages:ne,optsactivities:le,optsmonths:ce,steps:T,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:de,getStepLabel:function(e){var t=T[e].opt_name,n=null===z[t]?T[e].label:"".concat(T[e].label,": ").concat(z[t].label);return null!==z[t]&&"novalues"===z[t].id?T[e].label:n},isContinueDisabled:function(e){switch(e){case 0:return null===z.sel_province;case 1:return null===z.sel_municipality;case 2:return null===z.sel_crop||"novalues"===z.sel_crop.id;case 3:return null===z.sel_month;case 4:return null===z.sel_stage||"novalues"===z.sel_stage.id;case 5:return null===z.sel_activity||"novalues"===z.sel_activity.id;default:return!1}}})}}},function(e){e.O(0,[369,295,27,328,642,774,888,179],(function(){return t=7741,e(e.s=t);var t}));var t=e.O();_N_E=t}]);