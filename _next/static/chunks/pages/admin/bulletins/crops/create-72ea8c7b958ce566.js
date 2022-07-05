(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{5326:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/create",function(){return n(9919)}])},7513:function(e,t){"use strict";t.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},welcome:{display:"grid",placeContent:"center",marginTop:function(e){return e.spacing(10)},textAlign:"center","& h5":{marginTop:function(e){return e.spacing(2)}}},conditionLegend:{maxWidth:{md:"100%",lg:"270px"},padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(5)},"& p, ul":{fontSize:"14px"}},datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}},gridContainer:{marginTop:"24px",minHeight:500,width:1,"& .normal":{backgroundColor:"yellow"},"& .drier":{backgroundColor:"red"},"& .wetter":{backgroundColor:"blue"}},item:{}}},9919:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ie},default:function(){return oe}});var r=n(4051),i=n.n(r),o=n(5893),a=n(7294),c=n(1163),l=n(3835),s=n(2848),u=n(1652),p=n(4680),d=n(560),f=n(8152),b=n(7682),h=n(7426),m=[{label:"Select a province",description:"Select a province within the Bicol region.",opt_name:"sel_province"},{label:"Select a municipality",description:"Select a municipality included in the province you have selected on step no. 1.",opt_name:"sel_municipality"},{label:"Select a crop type",description:"Listed below are available crops for your selected province and municipality.",opt_name:"sel_crop"},{label:"Select a month",description:"Select a target month from the current Seasonal Weather Forecast.",opt_name:"sel_month"},{label:"Select crop stages",description:"Listed below are the available crop stages for your selected crop on the target month.",opt_name:"sel_stage"},{label:"Select activities",description:"Here are available activities for the previously-selected parameters.",opt_name:"sel_activity"}],v=n(1664),g=n(5675),y=n(6295),x=n(7357),_=n(9368),j=n(8456),S=n(1057),w=n(6863),O=n(657),Z=n(1425),R=n(6580),C=n(8951),k=n(7645),E=n(7720),P=n(6886),T=n(5113),B=n(6624),A=n(4472),D=n(3578),I=n(6229),F=n(1903),L=n(5861),M=n(120),N=n(1033),W=n(7702),U=n(9794),q=n(9628),z=n(7171),G=n(7513);function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}var V=["sel_province","sel_municipality","sel_crop","sel_month","sel_stage","sel_activity"];var J=function(e){var t=(0,a.useState)(0),n=t[0],r=t[1],i=(0,a.useRef)(!0),l=(0,c.useRouter)(),s=(0,a.useState)(!0),u=s[0],p=s[1],d=e.sel_options,f=e.provinces,b=e.recommendations,m=e.onSelectItemChange,H=e.optsmunicipalities,J=e.optscrops,$=e.optscropstages,X=e.optsactivities,Q=e.optsmonths,Y=e.open,ee=e.steps,te=e.getStepLabel,ne=e.isContinueDisabled,re=e.handleSave,ie=(0,o.jsx)(q.Z,{fontSize:"small"}),oe=(0,o.jsx)(z.Z,{fontSize:"small"});(0,a.useEffect)((function(){return i.current=!0,function(){i.current=!1}}),[]);var ae=function(){p(!1),setTimeout((function(){(i.current=!0)&&p(!0)}),500),r((function(e){return e+1}))},ce=function(){r((function(e){return e-1}))},le=function(){var e="Loading...";return f.length>0&&(e=null===d.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)(W.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnClick,children:[(0,o.jsxs)(O.Z,{open:Y,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(k.Z,{id:"data-saved-success",children:"Success"}),(0,o.jsx)(R.Z,{children:(0,o.jsx)(C.Z,{id:"alert-dialog-description",children:"Success! Bulletin report created."})}),(0,o.jsx)(Z.Z,{children:(0,o.jsx)(S.Z,{onClick:function(){l.push("/admin/bulletins/crops")},autoFocus:!0,children:"OK"})})]}),(0,o.jsxs)(P.ZP,{container:!0,sx:G.Z.container,children:[(0,o.jsxs)(x.Z,{sx:{marginBottom:"32px"},children:[(0,o.jsx)(L.Z,{variant:"h5",children:"Create Crop Recommendations Bulletins"}),(0,o.jsxs)("p",{children:["Create ",(0,o.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,o.jsxs)(P.ZP,{item:!0,sx:G.Z.item,xs:12,lg:4,children:[(0,o.jsxs)(x.Z,{sx:{minWidth:"100%",paddingRight:function(e){return e.spacing(2)}},children:[(0,o.jsx)(L.Z,{variant:"h6",children:"Selection Options"}),(0,o.jsx)(B.Z,{activeStep:n,orientation:"vertical",children:ee.map((function(e,t){return(0,o.jsxs)(A.Z,{children:[(0,o.jsx)(D.Z,{optional:5===t?(0,o.jsx)(L.Z,{variant:"caption",children:"Last step"}):null,children:te(t)}),(0,o.jsxs)(I.Z,{children:[(0,o.jsx)(L.Z,{variant:"subtitle",children:e.description}),0===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"province",value:d.sel_province,disabled:0===f.length,options:f,sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:le()}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return m(e,K({},t,{from:"province"}))}}),1===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"municipality",value:d.sel_municipality,disabled:0===H.length||d.loading,options:H,sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:null===d.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return m(e,K({},t,{from:"municipality"}))}}),2===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"crop",value:d.sel_crop,disabled:0===J.length,options:J,sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:null===d.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return m(e,K({},t,{from:"crop"}))}}),3===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"month",value:d.sel_month,disabled:0===Q.length||null===d.sel_crop,options:Q,sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:null===d.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return m(e,K({},t,{from:"month"}))}}),4===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"cropstage",multiple:!0,disableCloseOnSelect:!0,limitTags:1,value:d.sel_stage,disabled:0===$.length,options:$,sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:0===d.sel_stage.length?"Select crop stages":"Crop Stages"}))},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return m(e,K({},t,{from:"cropstage"}))},renderOption:function(e,t,n){var r=n.selected;return(0,o.jsxs)("li",K({},e,{children:[(0,o.jsx)(_.Z,{id:"cropstage",icon:ie,checkedIcon:oe,style:{marginRight:8},checked:r}),t.label]}))}}),5===t&&(0,o.jsx)(y.Z,{disablePortal:!0,id:"activity",multiple:!0,disableCloseOnSelect:!0,limitTags:1,value:d.sel_activity,disabled:0===X.length,options:X.sort((function(e,t){return t.stage.localeCompare(e.stage)})),groupBy:function(e){return e.stage},sx:G.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(F.Z,K({},e,{label:0===d.sel_activity.length?"Select activities":"Activities"}))},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return m(e,K({},t,{from:"activity"}))},renderOption:function(e,t,n){var r=n.selected;return(0,o.jsxs)("li",K({},e,{children:[(0,o.jsx)(_.Z,{id:"activity",icon:ie,checkedIcon:oe,style:{marginRight:8},checked:r}),t.label]}))}}),""!==d.error&&(0,o.jsx)(L.Z,{variant:"caption",sx:{color:"red"},children:d.error}),(0,o.jsx)(x.Z,{sx:{mb:2,marginTop:"24px"},children:(0,o.jsxs)("div",{children:[(0,o.jsx)(S.Z,{variant:"contained",disabled:ne(t)||d.loading||!u,onClick:ae,children:t===ee.length-1?"Finish":"Continue"}),(0,o.jsx)(S.Z,{disabled:d.loading||!u||0===t,onClick:ce,children:"Back"})]})})]})]},e.label)}))}),n===ee.length&&(0,o.jsxs)(T.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,o.jsx)(L.Z,{children:"All steps completed"}),(0,o.jsx)(S.Z,{onClick:function(){r(0),m(null,{from:"province"})},sx:{mt:1,mr:1},children:"Restart"}),(0,o.jsx)(S.Z,{onClick:ce,sx:{mt:1,mr:1},children:"Back"})]})]}),null!==d.sel_month&&(0,o.jsxs)(x.Z,{sx:G.Z.conditionLegend,style:{backgroundColor:h.tN[d.sel_condition.label]},children:[(0,o.jsx)(L.Z,{variant:"subtitle2",children:"Seasonal Weather Condition"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:d.sel_month.label})," \xa0",(0,o.jsxs)("span",{children:["".concat(d.sel_condition.label.charAt(0).toUpperCase()).concat(d.sel_condition.label.slice(1))," (",d.sel_condition.id,"%)"]})]})]})]}),(0,o.jsx)(P.ZP,{item:!0,sx:G.Z.item,xs:12,lg:8,children:null!==d.sel_crop&&null!==d.sel_activity&&6===n?(0,o.jsxs)("div",{children:[null!==d.sel_crop&&null!==d.sel_activity&&(0,o.jsxs)("div",{children:[(0,o.jsxs)(L.Z,{variant:"h4",sx:{display:0===d.sel_activity.length?"none":"flex"},children:[d.sel_crop.label," Recommendations"]}),(0,o.jsx)(L.Z,{variant:"h5",children:"".concat(d.sel_condition.label.charAt(0).toUpperCase()).concat(d.sel_condition.label.slice(1)," Condition")})]}),b.length>0?b.map((function(e,t){var n="Rice"===d.sel_crop.label?"(".concat(e.crop,")"):"";return(0,o.jsxs)(x.Z,{sx:G.Z.recSeasonal,children:[(0,o.jsxs)(L.Z,{variant:"h5",children:[e.stage," - ",e.activity," ",n]}),e.recommendations().map((function(e,n){return e.ul?(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e.id}),e.subs.length>0&&(0,o.jsx)("ul",{children:e.subs.map((function(e,n){return(0,o.jsx)("li",{children:e},"sub-".concat(t,"-").concat(n))}))})]},"main-".concat(t,"-").concat(n)):(0,o.jsx)("p",{children:e.id},"main-".concat(t,"-").concat(n))}))]},"rec-".concat(t))})):(0,o.jsx)(N.Z,{message:"We cannot find recommendations for your selected options."})]}):Object.values(d).filter((function(e){return e})).length>3?(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:V.map((function(e,t){var n=["sel_stage","sel_activity"].includes(e)?d[e].length>0&&"weather_condition"!==d[e].from:null!==d[e]&&void 0!==d[e]&&void 0!==d[e].from&&"weather_condition"!==d[e].from,r=["sel_stage","sel_activity"].includes(e)?{from:{sel_stage:"cropstage",sel_activity:"activity"}[e],label:d[e].map((function(e){return e.label})).toString().split(",").join(", ")}:d[e];return n?(0,o.jsx)(U.Z,{info:r,show:t<V.length-1},"card-opt-".concat(t)):(0,o.jsx)("div",{},"card-opt-".concat(t))}))}):(0,o.jsxs)(x.Z,{sx:G.Z.welcome,children:[(0,o.jsx)(g.default,{unoptimized:!0,src:(0,M.assetPrefixer)("images/icons/finance.svg"),height:120,width:120,loader:M.imageLoader,alt:"Empty data"}),(0,o.jsx)(L.Z,{variant:"h5",children:"Crop Recommendations PDF Bulletins Creator"}),(0,o.jsx)(L.Z,{variant:"p",children:"Please select a province to start."})]})}),(0,o.jsxs)(x.Z,{sx:{marginBottom:"16px",width:"100%",display:6===n?"block":"none"},children:[(0,o.jsx)("br",{}),(0,o.jsx)(E.Z,{}),(0,o.jsx)("br",{}),""!==d.error&&(0,o.jsxs)(L.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",d.error]}),(0,o.jsxs)(w.Z,{size:"large","aria-label":"large button group",sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,o.jsx)(v.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(S.Z,{disabled:d.loading,children:"Cancel"})}),(0,o.jsx)(S.Z,{disabled:d.loading,children:"Preview"}),(0,o.jsxs)(S.Z,{variant:"contained",disableElevation:!0,onClick:re,disabled:d.loading,children:[(0,o.jsx)("span",{style:{display:d.loading?"none":"block"},children:"Save"})," \xa0",(0,o.jsx)(j.Z,{size:20,color:"secondary",sx:{display:d.loading?"block":"none"}})]})]})]})]})]})};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,i)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){X(o,r,i,a,c,"next",e)}function c(e){X(o,r,i,a,c,"throw",e)}a(void 0)}))}}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Y(e,t,n[t])}))}return e}function te(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:h.MW.DRIER.label},loading:!1,error:"",success:""};function re(e){var t=e.municipalities,n=void 0===t?[]:t,r=(0,l.aC)(),v=(0,c.useRouter)(),g=(0,b.Kx)(p.o.CROP_REC_LIST_RECS_MAIN,"id"),y=g.documents,x=g.loading,_=(0,b.Kx)(p.o.CROP_REC_LIST_RECS_SUB,"id"),j=_.documents,S=_.loading,w=(0,b.m$)(d.M.WEATHER_FORECASTS,"bicol",d.M.SUB_SEASONAL,"name"),O=w.documents,Z=w.loading,R=(0,a.useState)([]),C=R[0],k=R[1],E=(0,a.useState)([]),P=E[0],T=E[1],B=(0,a.useState)([]),A=B[0],D=B[1],I=(0,a.useState)([]),F=I[0],L=I[1],M=(0,a.useState)([]),N=M[0],W=M[1],U=(0,a.useState)({}),q=U[0],z=U[1],G=(0,a.useState)(ne),H=G[0],K=G[1],V=(0,a.useState)([]),$=V[0],X=V[1],Y=(0,a.useState)([]),re=Y[0],ie=Y[1],oe=(0,a.useState)([]),ae=oe[0],ce=oe[1],le=(0,a.useState)([]),se=le[0],ue=le[1],pe=(0,a.useState)([]),de=pe[0],fe=pe[1],be=(0,a.useState)(!1),he=be[0],me=be[1],ve=(0,a.useRef)(!1);(0,a.useEffect)((function(){return ve.current=!0,function(){ve.current=!1}}),[]),(0,a.useEffect)((function(){r.loading||r.user||v.push("/admin/login")}),[r.user,r.loading,v]),(0,a.useEffect)((function(){if(n.length>0&&!x&&!S&&!Z){var e={};O.forEach((function(t){var n=t.name.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");e[n]={},t.months.forEach((function(t){e[n][t.mo]={label:t.con,val:t.val}}))}));var t=[];O[0].mos.forEach((function(e){t.push({id:h.re[e.toUpperCase()].code,label:h.re[e.toUpperCase()].format,disabled:!1})}));var r={},i=[];n.forEach((function(e,t){void 0===r[e.province]?(i.push({id:t,label:e.province}),r[e.province]=[{id:0,label:e.name}]):r[e.province].push({id:r[e.province].length,label:e.name})})),ve.current&&(T(r),k(i),fe(t),z(e))}}),[n,O,x,S,Z]);var ge=function(){var e=Q(i().mark((function e(t,n){var r,o,a,c,l,p,d,f,b,m,v,g,x,_,S,w,O,Z,R,C,k,E,T,B,I;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.from,o=n.label,t&&t.preventDefault(),W([]),!(["cropstage","activity"].includes(r)?Object.keys(n).length>1:Object.keys(n).includes("id"))){e.next=92;break}e.t0=r,e.next="province"===e.t0?8:"municipality"===e.t0?14:"crop"===e.t0?47:"month"===e.t0?56:"cropstage"===e.t0?66:"activity"===e.t0?76:89;break;case 8:return K(ee({},H,{sel_province:n,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),X(P[o]),ie([]),ce([]),ue([]),e.abrupt("break",90);case 14:return ce([]),ue([]),a=[],e.prev=17,K(ee({},H,{loading:!0,error:""})),e.next=21,(0,u.$K)(H.sel_province.label,o);case 21:c=e.sent,((a=c.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).includes("Rainfed Rice")||a.includes("Irrigated Rice"))&&a.push("Rice"),ve.current&&D((function(e){return c})),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),K((function(t){return ee({},t,{loading:!1,error:e.t1.message})}));case 30:if(0!==a.length){e.next=33;break}return K((function(e){return ee({},e,{loading:!1,error:"There was an error loading data."})})),e.abrupt("return");case 33:return e.prev=33,e.next=36,(0,s.OP)(H.sel_province.label,o);case 36:l=e.sent,p=[],(d=l.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).forEach((function(e,t){p.push({id:t,label:e,disabled:!a.includes(e)})})),ve.current&&(f=0===d.length?{id:"novalues",label:"No crop types for ".concat(o)}:null,K(ee({},H,{sel_municipality:n,sel_crop:f,sel_stage:[],sel_activity:[],sel_month:null,loading:!1,error:""})),ce(p),ie((function(e){return p})),L((function(e){return l}))),e.next=46;break;case 43:e.prev=43,e.t2=e.catch(33),K((function(t){return ee({},t,{loading:!1,error:e.t2.message})}));case 46:return e.abrupt("break",90);case 47:return ce([]),ue([]),K(ee({},H,{sel_crop:n,sel_stage:[],sel_activity:[],sel_month:null})),b=[],F.filter((function(e){return e.crop===o&&e.province===H.sel_province.label&&e.municipality===H.sel_municipality.label})).forEach((function(e){de.forEach((function(t){""===e[t.id]||b.includes(t.id)||b.push(t.id)}))})),m=te(de),de.forEach((function(e,t){m[t].disabled=!b.includes(e.id)})),fe(m),e.abrupt("break",90);case 56:return v=q[H.sel_province.label][n.id].label,g=q[H.sel_province.label][n.id].val,ue([]),x=[],_=[],F.forEach((function(e,t){var r=Object.values(h.re).find((function(e){return e.format===n.label})).code;if(""!==e[r]&&e.crop===H.sel_crop.label)for(var i=function(e){if(o[e].length>0&&!x.includes(o[e])){x.push(o[e]);var t=A.filter((function(t){return t.stage===h.MZ[o[e].toUpperCase()]&&("Rice"===H.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(t.crop):t.crop===H.sel_crop.label)})).map((function(e){return e.activity})).filter((function(e,t,n){return n.indexOf(e)==t}));_.push({id:_.length,label:h.MZ[o[e].toUpperCase()],disabled:0===t.length})}},o=e[r].split(","),a=0;a<o.length;a+=1)i(a)})),S=0===_.length?[{id:"novalues",label:"No crop stage for ".concat(o)}]:[],ce(_),K(ee({},H,{sel_month:n,sel_stage:S,sel_activity:[],sel_condition:{label:v,id:g}})),e.abrupt("break",90);case 66:for(O in w=[],n)"from"!==O&&w.push(n[O]);return Z=[],R=A.filter((function(e){return w.map((function(e){return e.label})).includes(e.stage)&&("Rice"===H.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===H.sel_crop.label)})).map((function(e){return{activity:e.activity,stage:e.stage}})).filter((function(e,t,n){return n.map((function(e){return e.activity})).indexOf(e.activity)===t})),C=0===R.length?[{id:"novalues",label:"No activities for selected options"}]:[],K(ee({},H,{sel_stage:te(w),sel_activity:te(C)})),k=[],R.forEach((function(e,t){k.includes(e.activity)||(Z.push({id:t,label:e.activity,stage:e.stage}),k.push(e.activity))})),ue((function(e){return Z})),e.abrupt("break",90);case 76:e.t3=regeneratorRuntime.keys(H);case 77:if((e.t4=e.t3()).done){e.next=83;break}if(E=e.t4.value,null!==H[E]||"sel_activity"===E){e.next=81;break}return e.abrupt("return");case 81:e.next=77;break;case 83:for(B in T=[],n)"from"!==B&&T.push(n[B]);return I=A.filter((function(e){return T.map((function(e){return e.label})).includes(e.activity)&&H.sel_stage.map((function(e){return e.label})).includes(e.stage)&&("Rice"===H.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===H.sel_crop.label)})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(H.sel_condition.label){case h.MW.NORMAL.label:return JSON.parse(e.normal).map((function(e){return{id:y.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}));case h.MW.WETTER.label:return JSON.parse(e.wetter).map((function(e){return{id:y.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}));case h.MW.DRIER.label:return JSON.parse(e.drier).map((function(e){return{id:y.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}))}}}})),K(ee({},H,{sel_activity:te(T)})),W(I),e.abrupt("break",90);case 89:return e.abrupt("break",90);case 90:e.next=93;break;case 92:"province"===r?(K(ne),X([]),ie([]),ce([]),ue([])):"municipality"===r?(K(ee({},H,{sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),ie([]),ce([]),ue([])):"crop"===r?(K(ee({},H,{sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),ce([]),ue([])):"month"===r?(K(ee({},H,{sel_month:null,sel_stage:[],sel_activity:[]})),ce([]),ue([])):"cropstage"===r?(K(ee({},H,{sel_stage:[],sel_activity:[]})),ue([])):"activity"===r&&K(ee({},H,{sel_activity:[]}));case 93:case"end":return e.stop()}}),e,null,[[17,27],[33,43]])})));return function(t,n){return e.apply(this,arguments)}}(),ye=function(){var e=Q(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Q(i().mark((function e(){var t,n,r,o,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K((function(e){return ee({},e,{loading:!0,error:"",success:""})})),t=Object.values(h.re).find((function(e){return e.format===H.sel_month.label})).code,e.prev=2,n={region:"bicol",province:H.sel_province.label,municipality:H.sel_municipality.label,crop:H.sel_crop.label,month:t,stages:H.sel_stage.map((function(e){return e.label})),activities:H.sel_activity.map((function(e){return e.label}))},e.next=6,(0,f.Zn)(n);case 6:r=e.sent,o=new Blob([r],{type:"application/pdf"}),(a=document.createElement("a")).href=URL.createObjectURL(o),a.download="".concat(H.sel_province.label,"_").concat(H.sel_municipality.label,"-").concat(H.sel_crop.label,".pdf"),document.body.append(a),a.click(),a.remove(),K((function(e){return ee({},e,{loading:!1,success:"Report created."})})),me(!0),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(2),c="",void 0!==e.t0.response&&(c=void 0!==e.t0.response.data&&"[object Blob]"===((i=e.t0.response.data)&&"undefined"!==typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)?e.t0.response.data:""),""===c&&(c=e.t0.message),K((function(e){return ee({},e,{loading:!1,error:c})}));case 24:case"end":return e.stop()}var i}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(J,{loading:r.loading,user:r.user,onBtnClick:ye,sel_options:H,open:he,provinces:C,recommendations:N,optsmunicipalities:$,optscrops:re,optscropstages:ae,optsactivities:se,optsmonths:de,steps:m,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:ge,getStepLabel:function(e){var t=m[e].opt_name,n=["sel_stage","sel_activity"],r=n.includes(t)?0===H[t].length?m[e].label:"".concat(m[e].label,": ").concat(H[t].map((function(e){return e.label})).toString()):null===H[t]?m[e].label:"".concat(m[e].label,": ").concat(H[t].label);return n.includes(t)?0===H[t].length?m[e].label:r:null!==H[t]&&"novalues"===H[t].id?m[e].label:r},isContinueDisabled:function(e){switch(e){case 0:return null===H.sel_province;case 1:return null===H.sel_municipality;case 2:return null===H.sel_crop||"novalues"===H.sel_crop.id;case 3:return null===H.sel_month;case 4:return 0===H.sel_stage.length;case 5:return 0===H.sel_activity.length;default:return!1}},handleSave:xe})}re.customLayout=!0,re.adminPage=!0;var ie=!0,oe=re},8152:function(e,t,n){"use strict";n.d(t,{Zn:function(){return I},fL:function(){return F},pr:function(){return L}});var r=n(4051),i=n.n(r),o=n(9669),a=n.n(o),c=n(9431);function l(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){l(o,r,i,a,c,"next",e)}function c(e){l(o,r,i,a,c,"throw",e)}a(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function h(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var y={BASE_API_URL:"https://amia-cis.herokuapp.com/api",CREATE_REPORT:"".concat("https://amia-cis.herokuapp.com/api","/bulletins/seasonal/crops"),REPORTS_CROPS:"reports_crops"},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,o=g(c);function c(){return u(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"createReport",value:function(e){var t=this;return s(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e,responseType:"blob"});case 2:return r=n.sent,n.next=5,a()(b({},r,{url:y.CREATE_REPORT,method:"POST"}));case 5:return o=n.sent,n.abrupt("return",o.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"previewBulletin",value:function(e){var t=this;return s(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e,responseType:"blob"});case 2:return r=n.sent,n.next=5,a()(b({},r,{url:y.CREATE_REPORT,method:"POST"}));case 5:return o=n.sent,n.abrupt("return",o.data);case 7:case"end":return n.stop()}}),n)})))()}}])&&p(t.prototype,n),r&&p(t,r),c}(c.Z),_=n(4763);function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,i)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){S(o,r,i,a,c,"next",e)}function c(e){S(o,r,i,a,c,"throw",e)}a(void 0)}))}}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function C(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?j(e):t}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var i=R(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return C(this,n)}}var T="reports_crops",B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,e);var t=P(n);function n(){var e;O(this,n);var r=j(e=t.apply(this,arguments));Z(j(e),"getBulletin",function(){var e=w(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getDocumentData(T,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var o=j(e);return Z(j(e),"getBulletins",function(){var e=w(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.collection(o.db,T),r=o.query(n,o.where("uid","==",t)),e.next=4,o.getCollectionData(T,"",r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}return n}(_.Z),A=new x,D=new B,I=A.createReport.bind(A),F=D.getBulletin.bind(D),L=D.getBulletins.bind(D)}},function(e){e.O(0,[369,295,531,669,864,27,498,328,899,642,774,888,179],(function(){return t=5326,e(e.s=t);var t}));var t=e.O();_N_E=t}]);