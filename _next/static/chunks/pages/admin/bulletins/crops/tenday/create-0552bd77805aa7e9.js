(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5507],{7947:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/tenday/create",function(){return t(1206)}])},5322:function(e,n,t){"use strict";var r=t(5893),i=t(7294),a=t(5697),o=t.n(a),l=t(4866),c=t(6901);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,a=e.severity,o=e.closeHandlerCB,c=void 0===o?function(){}:o,s=(0,i.useState)(n),d=s[0],p=s[1];(0,i.useEffect)((function(){p(n)}),[n]);var f=function(){p(!1),c()};return(0,r.jsx)(l.Z,{open:d,autoHideDuration:3e3,onClose:f,children:(0,r.jsx)(u,{onClose:f,severity:a,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:o().bool,message:o().string,severity:o().string},n.Z=d},1206:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return fe},default:function(){return me}});var r=t(4051),i=t.n(r),a=t(5893),o=t(7294),l=t(9473),c=t(7682),s=t(1163),u=t(1664),d=t(5675),p=t(120),f=t(1023),m=t(6295),b=t(1057),v=t(6863),h=t(7357),y=t(6886),x=t(3946),g=t(1903),j=t(5861),_=t(9758),w=t(8456),O=t(7720),S=t(44),Z=t(8409),k=t(7426),E=t(901),P={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",borderColor:"#E2E8F0"},welcome:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},width:"100%",display:"grid",placeContent:"center",padding:"20px",marginTop:function(e){return e.spacing(1)},textAlign:"center","& h6":{lineHeight:"20px"}},summary:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(1)},padding:function(e){return e.spacing(3)}},selectionSummary:{minWidth:"100%",paddingLeft:{xs:0,lg:"16px"}},conditionLegend:{borderRadius:function(e){return e.spacing(1)},width:"100%",padding:function(e){return e.spacing(1)},border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",float:"left"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(1)},"& p, ul":{fontSize:"14px"}},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}},pdfcontent:{ul:{paddingLeft:3}}};function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}function R(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var D=function(e){var n=function(e){var n=e.children,t=e.value,r=e.index,i=R(e,["children","value","index"]);return(0,a.jsx)("div",N({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:t===r&&(0,a.jsx)(h.Z,{sx:{p:3},children:n})}))},t=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},r=e.options,i=e.handleSave,c=e.handlePreview,s=(0,l.v9)((function(e){return e.recommendations})),d=s.status,p=s.filtered_recommendations,f=(0,l.v9)((function(e){return e.reports})),m=f.error,x=f.status,g=(0,l.v9)((function(e){return e.cropcalendar.status})),_=(0,l.v9)((function(e){return e.tendayweather.status})),D=(0,o.useState)({}),L=D[0],I=D[1],A=(0,o.useState)([]),F=A[0],G=A[1],M=(0,o.useState)(0),T=M[0],W=M[1],B=(0,o.useState)(!1),z=B[0],V=B[1];return(0,o.useEffect)((function(){p.length>0&&(I(p.reduce((function(e,n){return void 0===e?e=C({},n.crop,[n]):void 0===e[n.crop]?e[n.crop]=[n]:e[n.crop].push(n),e}),{})),G(p.map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)===n}))))}),[p]),(0,o.useEffect)((function(){V(r.loading||x===E.G.PENDING)}),[r.loading,x]),(0,a.jsxs)(y.ZP,{container:!0,sx:P.container,gap:3,style:{marginTop:"24px"},children:[(0,a.jsxs)(y.ZP,{item:!0,sx:P.item,xs:12,lg:12,children:[(0,a.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(j.Z,{variant:"h6",children:"Crop Recommendations"}),(0,a.jsx)(w.Z,{size:24,color:"primary",sx:{display:d===E.G.PENDING||g===E.G.PENDING||_===E.G.PENDING?"block":"none"}})]}),p.length>0&&(0,a.jsxs)(h.Z,{children:[(0,a.jsxs)(h.Z,{sx:{display:{md:"block",lg:"flex"}},children:[(0,a.jsx)(j.Z,{variant:"h5",sx:{display:0===r.sel_activity.length?"none":"block",flexGrow:{xs:12,sm:3}},children:"10-Day Farm Weather Outlook and Advisory"}),(0,a.jsx)(h.Z,{sx:{flexGrow:{xs:12,sm:1}},children:null!==r.sel_month&&(0,a.jsxs)(h.Z,{sx:P.conditionLegend,style:{color:[k.MW.ABOVE_NORMAL.label,k.MW.WAY_BELOW_NORMAL.label].includes(r.sel_condition.label)?"#fff":"#000",backgroundColor:k.tN[r.sel_condition.label]},children:[(0,a.jsx)(j.Z,{variant:"subtitle2",children:"Rainfall Intensity"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:r.sel_condition.current_date})," \xa0",(0,a.jsxs)("span",{children:[r.sel_condition.format," ","(",r.sel_condition.tenday,")"]})]})]})})]}),(0,a.jsxs)(h.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"}},children:[(0,a.jsx)(h.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,a.jsxs)(Z.Z,{value:T,onChange:function(e,n){W(n)},"aria-label":"basic tabs example",children:[(0,a.jsx)(S.Z,N({label:"PDF FORM"},t(0))),(0,a.jsx)(S.Z,N({label:"SMS FORM"},t(1)))]})}),(0,a.jsx)(n,{value:T,index:0,children:F.map((function(e,n){return(0,a.jsxs)(h.Z,{sx:P.recSeasonal,children:[(0,a.jsx)(j.Z,{variant:"h5",children:e}),L[e].map((function(e,n){return(0,a.jsxs)(h.Z,{sx:P.recSeasonal,children:[(0,a.jsxs)(j.Z,{variant:"h6",children:[e.stage," - ",e.activity]}),e.recommendations.map((function(e,t){return e.ul?(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:e.id}),e.subs.length>0&&(0,a.jsx)("ul",{children:e.subs.map((function(e,t){return(0,a.jsx)("li",{children:e},"sub-".concat(n,"-").concat(t))}))})]},"main-".concat(n,"-").concat(t)):(0,a.jsx)("p",{children:e.id},"main-".concat(n,"-").concat(t))}))]},"rec-".concat(n))})),n<F.length-1&&(0,a.jsx)(O.Z,{sx:{margin:"48px 0 48px 0"}})]},"rec-".concat(n))}))}),(0,a.jsx)(n,{value:T,index:1,children:p.reduce((function(e,n){return e+=n.smsRecommendations+" "}),"")})]})]})]}),(0,a.jsxs)(h.Z,{sx:{marginBottom:"16px",width:"100%",display:p.length>0?"block":"none"},children:[(0,a.jsx)("br",{}),(0,a.jsx)(O.Z,{}),(0,a.jsx)("br",{}),""!==m&&(0,a.jsxs)(j.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",m]}),(0,a.jsxs)(v.Z,{size:"large","aria-label":"large button group",sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,a.jsx)(u.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,a.jsx)(b.Z,{disabled:z,children:"Cancel"})}),(0,a.jsxs)(b.Z,{onClick:c,children:[(0,a.jsx)("span",{style:{display:z?"none":"block"},children:"Preview"})," ","\xa0",(0,a.jsx)(w.Z,{size:20,color:"secondary",sx:{display:z?"block":"none"}})]}),(0,a.jsx)(b.Z,{variant:"contained",onClick:i,disableElevation:!0,disabled:z,children:"Save"})]})]})]})},L=t(3501),I=t(5322),A=t(2094),F=t(2671),G=t(6938);function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){M(e,n,t[n])}))}return e}var W=[{key:"sel_province",label:"Province"},{key:"sel_municipality",label:"Municipality"},{key:"sel_crop",label:"Crop"},{key:"sel_month",label:"Date"},{key:"sel_stage",label:"Crop Stages"},{key:"sel_activity",label:"Activities"}];var B=function(e){var n=(0,s.useRouter)(),t=(0,l.I0)(),r=e.sel_options,i=e.provinces,o=e.optsmunicipalities,c=e.error,w=e.open,O=e.loading,S=e.onSelectItemChange,Z=e.handlePreview,k=e.toggleViewerOpen,P=e.pdfPreview,C=e.resetSelections,N=e.generateRecommendations,R=e.handleSave,M=(0,l.v9)((function(e){return e.reports})),B=M.report,z=M.status,V=function(){B&&(t((0,F.s_)()),n.push("/admin/bulletins/crops/report/view/?docId=".concat(B.id)))},H=function(){var e="Loading...";return i.length>0&&(e=null===r.sel_province?"Select a province":"Province"),e};return(0,a.jsxs)("div",{children:[(0,a.jsx)(L.Z,{isOpen:w.savesuccess,maxWidth:"xs",openButtonText:null,title:"Success",contentText:"Success! Bulletin report created.",modalConfirmHandlerCB:V,modalCancelHandlerCB:V}),(0,a.jsx)(A.Z,{open:w,pdfPreview:P,error:r.error,loading:r.loading,toggleViewerOpen:k}),(0,a.jsx)(I.Z,{openSnackbar:""!==c,message:c,severity:"warning"}),(0,a.jsxs)(y.ZP,{container:!0,sx:G.Z.container,children:[(0,a.jsxs)(h.Z,{sx:G.Z.headerText,children:[(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(j.Z,{variant:"h5",children:"10-Day Farm Weather Outlook and Advisory Bulletin"}),(0,a.jsxs)("p",{children:["Create ",(0,a.jsx)("strong",{children:"10-Day Farm Weather Outlook and Advisory"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(x.Z,{"aria-label":"exit",size:"medium",children:(0,a.jsx)(u.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,a.jsx)(f.Z,{fontSize:"inherit"})})})})]}),(0,a.jsxs)(y.ZP,{item:!0,sx:G.Z.item,xs:12,lg:4,children:[(0,a.jsx)(j.Z,{variant:"h6",children:"Selection Options"}),(0,a.jsx)(m.Z,{disablePortal:!0,id:"province",value:r.sel_province,disabled:0===i.length||O||z===E.G.PENDING,options:i,sx:G.Z.autocomplete,size:"small",PaperComponent:_.Z,renderInput:function(e){return(0,a.jsx)(g.Z,T({},e,{label:H()}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return S(e,T({},n,{from:"province"}))}}),(0,a.jsx)(m.Z,{disablePortal:!0,id:"municipality",value:r.sel_municipality,disabled:0===o.length||O||z===E.G.PENDING,options:o,sx:G.Z.autocomplete,size:"small",PaperComponent:_.Z,renderInput:function(e){return(0,a.jsx)(g.Z,T({},e,{label:null===r.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return S(e,T({},n,{from:"municipality"}))}}),(0,a.jsxs)(v.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:z===E.G.PENDING||0===i.length||null===r.sel_municipality||"-"===r.sel_crop,sx:{marginTop:"16px",float:"right"},children:[(0,a.jsx)(b.Z,{variant:"outlined",onClick:C,children:"Reset"}),(0,a.jsx)(b.Z,{variant:"contained",onClick:N,children:"Generate"})]})]}),(0,a.jsx)(y.ZP,{item:!0,sx:G.Z.item,xs:12,lg:8,children:(0,a.jsxs)(h.Z,{sx:G.Z.selectionSummary,children:[(0,a.jsx)(j.Z,{variant:"h6",children:"Selection Summary"}),null===r.sel_province?(0,a.jsxs)(h.Z,{sx:G.Z.welcome,children:[(0,a.jsx)(d.default,{unoptimized:!0,src:(0,p.assetPrefixer)("images/icons/finance.svg"),height:85,width:85,loader:p.imageLoader,alt:"Empty data"}),(0,a.jsxs)(h.Z,{sx:{marginTop:"16px"},children:[(0,a.jsx)(j.Z,{variant:"subtitle2",children:"Crop Recommendations PDF Bulletins Creator"}),(0,a.jsx)(j.Z,{variant:"subtitle2",children:"Please select a province to start."})]})]}):(0,a.jsx)(h.Z,{sx:G.Z.summary,children:W.map((function(e,n){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(j.Z,{variant:"subtitle2",style:{display:"inline-block"},children:[e.label,": \xa0"]}),(0,a.jsx)(j.Z,{variant:"body2",style:{display:"inline-block"},children:null!==r[e.key]?["sel_stage","sel_crop","sel_activity","sel_month"].includes(e.key)?r[e.key]:r[e.key].label:""})]},"selected-".concat(n))}))}),""!==c&&(0,a.jsx)(j.Z,{variant:"caption",sx:{color:"red"},children:c})]})})]}),(0,a.jsx)(D,{options:r,handlePreview:Z,toggleViewerOpen:k,pdfPreview:P,handleSave:R})]})},z=t(2530),V=t(3059),H=t(1690),U=t(4680),K=t(6375),Y=t(7599),J=t(6867),q=t(8152),X=t(7246),$=t(7715),Q=t(3063);function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ne(e,n,t,r,i,a,o){try{var l=e[a](o),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,i)}function te(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){ne(a,r,i,o,l,"next",e)}function l(e){ne(a,r,i,o,l,"throw",e)}o(void 0)}))}}function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}}(e,n)||ce(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var le=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ce(e,n){if(e){if("string"===typeof e)return ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,n):void 0}}var se={sel_province:null,sel_municipality:null,sel_crop:"-",sel_stage:"-",sel_activity:"-",sel_month:"-",processed:!1,loading:!1,error:"",success:"",sel_condition:{id:0,from:"weather_condition",label:k.MW.WAY_BELOW_NORMAL.label}},ue={url:"",filename:""},de={preview:!1,savesuccess:!1,docId:""},pe={province:"",municipality:"",rainfall:"",date_range:"",day_format:"",date_now:(new Date).toDateString()};var fe=!0,me=(0,V.Z)((function(e){var n=ae((0,c.ky)(U.o.STATIC_RECOMMENDATIONS,"data"),2),t=n[0],r=n[1],s=(0,l.v9)((function(e){return e.cropcalendar})),u=s.entities,d=s.error,p=s.status,f=(0,l.v9)((function(e){return e.recommendations})),m=f.entities,b=f.error,v=f.status,h=(0,l.v9)((function(e){return e.tendayweather})),y=h.entities,x=h.error,g=h.status,j=(0,l.v9)((function(e){return e.reports})),_=j.error,w=j.status,O=j.report,S=(0,l.v9)((function(e){return e.dashboard.reportType})),Z=(0,o.useState)([]),P=Z[0],C=Z[1],N=(0,o.useState)({}),R=N[0],D=N[1],L=(0,o.useState)(se),I=L[0],A=L[1],G=(0,o.useState)([]),M=G[0],T=G[1],W=(0,o.useState)(pe),V=W[0],ee=W[1],ne=(0,o.useState)(ue),re=ne[0],ce=ne[1],fe=(0,o.useState)(""),me=fe[0],be=fe[1],ve=(0,o.useState)(de),he=ve[0],ye=ve[1],xe=(0,o.useState)(!1),ge=(xe[0],xe[1]),je=(0,l.I0)();(0,o.useEffect)((function(){je((0,X.Km)([])),je((0,F.s_)())}),[je]),(0,o.useEffect)((function(){be((function(e){return x||b||d||_}))}),[x,b,d,_]),(0,o.useEffect)((function(){ge((function(e){return g||v||p}))}),[g,v,p]),(0,o.useEffect)((function(){w===E.G.FULLFILLED&&null!==O&&ye(ie({},de,{savesuccess:!0,docId:O.id}))}),[w,O]),(0,o.useEffect)((function(){if(e.municipalities.length>0&&!r){var n={};C(e.municipalities.reduce((function(e,t){return-1===e.findIndex((function(e){return e.label===t.province}))?(e=oe(e).concat([{id:e.length,label:t.province}]),n[t.province]=[{id:0,label:t.name}]):n[t.province].push({id:n[t.province].length,label:t.name}),e}),[])),D(n)}}),[e.municipalities,r]),(0,o.useEffect)((function(){if(g===E.G.FULLFILLED&&null!==I.sel_municipality){if(0===Object.values(y).length)return void be("Weather data is currently not available.");var e=Object.values(y).find((function(e){return e.municipality===I.sel_municipality.label}));if(!e)return void be("10-Day weather data is not available for the municipality.");var n=JSON.parse(e.data).find((function(e){return e.day_format===(0,$.aV)(!1)}));if(!n)return void be("Weather data for the current date is not available at the moment.");var t=new Date(1e3*n.date_start.seconds),r=(0,$.Mn)(t),i=Object.values(k.MW).find((function(e){return e.tenday===n.rainfall}));ee((function(e){return ie({},e,{province:n.province,municipality:n.municipality,rainfall:n.rainfall,date_range:n.date_range,day_format:n.day_format,condition:i.label||"",condition_acap:i.label_acap,format:i.sync,format_tenday:i.tenday,percentage:i.content,months:r})}))}}),[g,y,I.sel_municipality]);var _e=(0,o.useCallback)((function(e){switch(V.condition){case k.MW.BELOW_NORMAL.label:case k.MW.NEAR_NORMAL.label:return JSON.parse(e.normal).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}));case k.MW.ABOVE_NORMAL.label:return JSON.parse(e.wetter).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}));case k.MW.WAY_BELOW_NORMAL.label:return JSON.parse(e.drier).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}))}}),[V,t]),we=(0,o.useCallback)((function(e){var n="".concat(V.condition_acap,"_sms");return void 0!==e[n]?t.sms.find((function(t){return t.id===e[n]})).description:""}),[V,t]);(0,o.useEffect)((function(){if(p===E.G.FULLFILLED&&v===E.G.FULLFILLED&&null!==I.sel_municipality&&!I.processed&&""!==V.rainfall){var e=Object.values(m).map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)===n}));(e.includes("Rainfed Rice")||e.includes("Irrigated Rice"))&&e.push("Rice");var n=Object.keys(V.months),t=[],r=[];Object.values(u).filter((function(i){var a=[];return n.forEach((function(n){if(""!==i[n]){var o=V.months[n],l=i[n].split(","),c="";if(0===l.length)return;if(!e.includes(i.crop))return;if(o.includes(k.Vs.FIRST_HALF)){if(""===l[0])return;c=l[0]}if(o.includes(k.Vs.SECOND_HALF)&&(1===l.length&&(c=l[0]),2===l.length&&(c=""!==l[1]?l[1]:l[0])),""===c)return;t.includes(c)||t.push(c),r.includes(i.crop)||r.push(i.crop)}a.push(""!==i[n])})),a.includes(!0)}));var i=t.map((function(e){return k.MZ[e.toUpperCase()]})),a=Object.values(m).filter((function(e){return r.includes("Rice")&&["Irrigated Rice","Rainfed Rice"].includes(e.crop)?e.province===I.sel_province.label&&e.municipality===I.sel_municipality.label&&i.includes(e.stage):e.province===I.sel_province.label&&e.municipality===I.sel_municipality.label&&i.includes(e.stage)&&r.includes(e.crop)})).map((function(e){return e.activity})).filter((function(e,n,t){return t.indexOf(e)===n})).toString().split(",").join(", ");A((function(e){return ie({},e,{processed:!0,sel_month:V.date_range,sel_crop:r.length>0?r.toString().split(",").join(", "):"-",sel_stage:t.length>0?t.map((function(e){return k.MZ[e.toUpperCase()]})).toString().split(",").join(", "):"-",sel_activity:a.length>0?a:"-",sel_condition:{label:V.condition,format:V.format,tenday:V.format_tenday,current_date:V.day_format}})}))}}),[p,v,u,m,V,I,_e,we,je]);var Oe=function(){var e=te(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.from,a=t.label,n&&n.preventDefault(),ce(ue),!a){e.next=20;break}e.t0=r,e.next="province"===e.t0?7:"municipality"===e.t0?13:17;break;case 7:return A(ie({},se,{sel_province:t})),be(""),T(R[a]),je((0,J.R)(a)),je((0,X.Km)([])),e.abrupt("break",18);case 13:be(""),A(ie({},I,{sel_municipality:t,processed:!1,sel_crop:"-",sel_stage:"-",sel_activity:"-",sel_month:"-",error:""}));try{je((0,K.a)({province:I.sel_province.label,municipality:a})),je((0,Y.A)({province:I.sel_province.label,municipality:a})),je((0,X.Km)([]))}catch(i){A((function(e){return ie({},e,{loading:!1,error:i.message})}))}return e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:e.next=29;break;case 20:e.t1=r,e.next="province"===e.t1?23:"municipality"===e.t1?25:28;break;case 23:return Ze(),e.abrupt("break",29);case 25:return A(ie({},I,{sel_municipality:null,processed:!1,sel_crop:"-",sel_stage:"-",sel_activity:"-",sel_month:"-"})),je((0,X.Km)([])),e.abrupt("break",29);case 28:return e.abrupt("break",29);case 29:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Se=function(){var e=te(i().mark((function e(){var n,t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===re.url){e.next=3;break}return ye(ie({},de,{preview:!0})),e.abrupt("return");case 3:return A((function(e){return ie({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"bicol",province:I.sel_province.label,municipality:I.sel_municipality.label,date:V.date_now,operation:"preview"},ye(ie({},de,{preview:!0})),A((function(e){return ie({},e,{loading:!0,error:""})})),e.next=10,(0,q.bM)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(a={}).href=URL.createObjectURL(r),a.download="".concat(I.sel_province.label,"_").concat(I.sel_municipality.label,".pdf"),ce((function(e){return ie({},e,{url:a.href,filename:a.download})})),A((function(e){return ie({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),o="",void 0!==e.t0.response&&(o=void 0!==e.t0.response.data&&"[object Blob]"===le(e.t0.response.data)?e.t0.response.data:""),""===o&&(o=e.t0.message),A((function(e){return ie({},e,{loading:!1,error:o})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),Ze=function(){A(se),T([]),je((0,X.Km)([]))},ke=function(){var n=te(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{t={region:"bicol",province:I.sel_province.label,municipality:I.sel_municipality.label,date:V.date_now,operation:"create"},je((0,H.a0)(t)).unwrap().then((function(){S!==k.Ry.TEN_DAY&&(je((0,Q.uq)(k.Ry.TEN_DAY)),je((0,H.RC)({uid:e.user.uid,type:k.Ry.TEN_DAY})))}))}catch(i){r="",void 0!==i.response&&(r=void 0!==i.response.data&&"[object Blob]"===le(i.response.data)?i.response.data:""),""===r&&(r=i.message),A((function(e){return ie({},e,{loading:!1,error:r})}))}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,a.jsx)(z.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:k.DW.ADMIN,children:(0,a.jsx)(B,{sel_options:I,provinces:P,loading:r||g===E.G.PENDING||v===E.G.PENDING||p===E.G.PENDING,optsmunicipalities:M,onSelectItemChange:Oe,handlePreview:Se,toggleViewerOpen:function(){ye((function(e){return!e}))},pdfPreview:re,resetSelections:Ze,generateRecommendations:function(){var e=I.sel_crop.split(", "),n=I.sel_stage.split(", "),t=Object.values(m).filter((function(t){return e.includes("Rice")&&["Irrigated Rice","Rainfed Rice"].includes(t.crop)?t.province===I.sel_province.label&&t.municipality===I.sel_municipality.label&&n.includes(t.stage):t.province===I.sel_province.label&&t.municipality===I.sel_municipality.label&&n.includes(t.stage)&&e.includes(t.crop)}));je((0,X.Km)(t.map((function(e){return ie({},e,{recommendations:_e(e),smsRecommendations:we(e)})}))))},handleSave:ke,error:me,open:he})})}))}},function(e){e.O(0,[9351,6153,9964,1704,1903,7823,6295,4039,2882,6572,1433,6873,3728,542,9774,2888,179],(function(){return n=7947,e(e.s=n);var n}));var n=e.O();_N_E=n}]);