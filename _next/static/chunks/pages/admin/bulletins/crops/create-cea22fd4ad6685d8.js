(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{5326:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/create",function(){return n(9919)}])},7513:function(e,t){"use strict";t.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},welcome:{display:"grid",placeContent:"center",marginTop:function(e){return e.spacing(10)},textAlign:"center","& h5":{marginTop:function(e){return e.spacing(2)}}},conditionLegend:{maxWidth:{md:"100%",lg:"270px"},marginBottom:"32px",padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(1)},"& p, ul":{fontSize:"14px"}},datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}},gridContainer:{marginTop:"24px",minHeight:500,width:1,"& .normal":{backgroundColor:"yellow"},"& .drier":{backgroundColor:"red"},"& .wetter":{backgroundColor:"blue"}},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}}}},3080:function(e,t,n){"use strict";var r=n(5893),i=n(7357),o=n(8456);t.Z=function(e){var t=e.text,n=void 0===t?"":t,a=e.size,l=void 0===a?24:a,c=e.children;return(0,r.jsxs)(i.Z,{sx:{width:"100%",textAlign:"center",height:"20vh"},children:[(0,r.jsxs)(i.Z,{sx:{width:"100%",textAlign:"center",marginTop:function(e){return e.spacing(12)},marginBottom:"32px",display:"flex",justifyContent:"center"},children:[(0,r.jsx)("span",{children:""!==n?n:"Loading..."})," \xa0",(0,r.jsx)(o.Z,{size:l})]}),c]})}},9919:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return fe},default:function(){return be}});var r=n(4051),i=n.n(r),o=n(5893),a=n(7294),l=n(1163),c=n(3835),s=n(2848),u=n(1652),d=n(4680),p=n(560),f=n(8152),b=n(7682),h=n(7426),m=[{label:"Select a province",description:"Select a province within the Bicol region.",opt_name:"sel_province"},{label:"Select a municipality",description:"Select a municipality included in the province you have selected on step no. 1.",opt_name:"sel_municipality"},{label:"Select a crop type",description:"Listed below are available crops for your selected province and municipality.",opt_name:"sel_crop"},{label:"Select a month",description:"Select a target month from the current Seasonal Weather Forecast.",opt_name:"sel_month"},{label:"Select crop stages",description:"Listed below are the available crop stages for your selected crop on the target month.",opt_name:"sel_stage"},{label:"Select activities",description:"Here are available activities for the previously-selected parameters.",opt_name:"sel_activity"}],v=n(5697),g=n.n(v),x=n(1664),y=n(5675),_=n(6295),j=n(7357),w=n(9368),O=n(8456),S=n(1057),Z=n(6863),R=n(657),C=n(1425),k=n(6580),P=n(8951),E=n(7645),T=n(7720),B=n(6886),A=n(5113),F=n(6624),I=n(4472),q=n(3578),D=n(6229),L=n(1903),M=n(5861),N=n(8409),W=n(44),z=n(120),U=n(1033),G=n(3080),V=n(7702),H=n(9794),K=n(9628),J=n(7171),$=n(7513);function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}function Y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ee=["sel_province","sel_municipality","sel_crop","sel_month","sel_stage","sel_activity"];var te=function(e){var t=function(e){var t=e.children,n=e.value,r=e.index,i=Y(e,["children","value","index"]);return(0,o.jsx)("div",Q({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:n===r&&(0,o.jsx)(j.Z,{sx:{p:3},children:(0,o.jsx)(M.Z,{children:t})})}))},n=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},r=(0,a.useState)(0),i=r[0],c=r[1],s=(0,a.useRef)(!0),u=(0,l.useRouter)(),d=(0,a.useState)(!0),p=d[0],f=d[1],b=(0,a.useState)(0),m=b[0],v=b[1],X=e.sel_options,te=e.provinces,ne=e.recommendations,re=e.onSelectItemChange,ie=e.optsmunicipalities,oe=e.optscrops,ae=e.optscropstages,le=e.optsactivities,ce=e.optsmonths,se=e.open,ue=e.pdfPreview,de=e.steps,pe=e.getStepLabel,fe=e.isContinueDisabled,be=e.handleSave,he=e.handlePreview,me=e.toggleViewerOpen,ve=(0,o.jsx)(K.Z,{fontSize:"small"}),ge=(0,o.jsx)(J.Z,{fontSize:"small"});(0,a.useEffect)((function(){return s.current=!0,function(){s.current=!1}}),[]);var xe=function(){f(!1),setTimeout((function(){(s.current=!0)&&f(!0)}),500),c((function(e){return e+1}))},ye=function(){c((function(e){return e-1}))},_e=function(){var e="Loading...";return te.length>0&&(e=null===X.sel_province?"Select a province":"Province"),e};return t.propTypes={children:g().node,index:g().number.isRequired,value:g().number.isRequired},(0,o.jsxs)(V.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnClick,children:[(0,o.jsxs)(R.Z,{open:se.savesuccess,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(E.Z,{id:"data-saved-success",children:"Success"}),(0,o.jsx)(k.Z,{children:(0,o.jsx)(P.Z,{id:"alert-dialog-description",children:"Success! Bulletin report created."})}),(0,o.jsx)(C.Z,{children:(0,o.jsx)(S.Z,{onClick:function(){u.push("/admin/bulletins/crops/view/?docId=".concat(se.docId))},autoFocus:!0,children:"OK"})})]}),(0,o.jsxs)(R.Z,{open:se.preview,maxWidth:"lg",fullWidth:!0,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(E.Z,{id:"data-saved-success",children:""!==ue.filename?"Bulletin Preview - ".concat(ue.filename):"Bulletin Preview"}),(0,o.jsx)(k.Z,{sx:{padding:0,overflow:"hidden"},children:(0,o.jsx)(j.Z,{id:"alert-dialog-description",children:X.loading?(0,o.jsx)("div",{style:{width:"100%",height:"90vh",textAlign:"center"},children:(0,o.jsx)(G.Z,{text:"Loading Preview...",children:(0,o.jsx)(y.default,{unoptimized:!0,src:(0,z.assetPrefixer)("images/icons/data-processing-128.png"),height:100,width:100,loader:z.imageLoader,alt:"Loading Preview"})})}):""!==X.error?(0,o.jsx)("div",{style:{width:"100%",height:"100vh"},children:(0,o.jsx)(U.Z,{message:X.error})}):(0,o.jsx)("embed",{src:ue.url,style:{width:"100%",height:"70vh"}})})}),(0,o.jsx)(C.Z,{children:(0,o.jsx)(S.Z,{variant:"contained",onClick:me,autoFocus:!0,children:"OK"})})]}),(0,o.jsxs)(B.ZP,{container:!0,sx:$.Z.container,children:[(0,o.jsxs)(j.Z,{sx:{marginBottom:"32px"},children:[(0,o.jsx)(M.Z,{variant:"h5",children:"Create Crop Recommendations Bulletins"}),(0,o.jsxs)("p",{children:["Create ",(0,o.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,o.jsxs)(B.ZP,{item:!0,sx:$.Z.item,xs:12,lg:4,children:[(0,o.jsxs)(j.Z,{sx:{minWidth:"100%",paddingRight:function(e){return e.spacing(2)}},children:[(0,o.jsx)(M.Z,{variant:"h6",children:"Selection Options"}),(0,o.jsx)(F.Z,{activeStep:i,orientation:"vertical",children:de.map((function(e,t){return(0,o.jsxs)(I.Z,{children:[(0,o.jsx)(q.Z,{optional:5===t?(0,o.jsx)(M.Z,{variant:"caption",children:"Last step"}):null,children:pe(t)}),(0,o.jsxs)(D.Z,{children:[(0,o.jsx)(M.Z,{variant:"subtitle",children:e.description}),0===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"province",value:X.sel_province,disabled:0===te.length,options:te,sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:_e()}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return re(e,Q({},t,{from:"province"}))}}),1===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"municipality",value:X.sel_municipality,disabled:0===ie.length||X.loading,options:ie,sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:null===X.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return re(e,Q({},t,{from:"municipality"}))}}),2===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"crop",value:X.sel_crop,disabled:0===oe.length,options:oe,sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:null===X.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return re(e,Q({},t,{from:"crop"}))}}),3===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"month",value:X.sel_month,disabled:0===ce.length||null===X.sel_crop,options:ce,sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:null===X.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return re(e,Q({},t,{from:"month"}))}}),4===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"cropstage",multiple:!0,disableCloseOnSelect:!0,limitTags:1,value:X.sel_stage,disabled:0===ae.length,options:ae,sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:0===X.sel_stage.length?"Select crop stages":"Crop Stages"}))},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return re(e,Q({},t,{from:"cropstage"}))},renderOption:function(e,t,n){var r=n.selected;return(0,o.jsxs)("li",Q({},e,{children:[(0,o.jsx)(w.Z,{id:"cropstage",icon:ve,checkedIcon:ge,style:{marginRight:8},checked:r}),t.label]}))}}),5===t&&(0,o.jsx)(_.Z,{disablePortal:!0,id:"activity",multiple:!0,disableCloseOnSelect:!0,limitTags:1,value:X.sel_activity,disabled:0===le.length,options:le.sort((function(e,t){return t.stage.localeCompare(e.stage)})),groupBy:function(e){return e.stage},sx:$.Z.autocomplete,renderInput:function(e){return(0,o.jsx)(L.Z,Q({},e,{label:0===X.sel_activity.length?"Select activities":"Activities"}))},getOptionDisabled:function(e){return e.disabled},onChange:function(e,t){return re(e,Q({},t,{from:"activity"}))},renderOption:function(e,t,n){var r=n.selected;return(0,o.jsxs)("li",Q({},e,{children:[(0,o.jsx)(w.Z,{id:"activity",icon:ve,checkedIcon:ge,style:{marginRight:8},checked:r}),t.label]}))}}),""!==X.error&&(0,o.jsx)(M.Z,{variant:"caption",sx:{color:"red"},children:X.error}),(0,o.jsx)(j.Z,{sx:{mb:2,marginTop:"24px"},children:(0,o.jsxs)("div",{children:[(0,o.jsx)(S.Z,{variant:"contained",disabled:fe(t)||X.loading||!p,onClick:xe,children:t===de.length-1?"Finish":"Continue"}),(0,o.jsx)(S.Z,{disabled:X.loading||!p||0===t,onClick:ye,children:"Back"})]})})]})]},e.label)}))}),i===de.length&&(0,o.jsxs)(A.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,o.jsx)(M.Z,{children:"All steps completed"}),(0,o.jsx)(S.Z,{onClick:function(){c(0),re(null,{from:"province"})},sx:{mt:1,mr:1},children:"Restart"}),(0,o.jsx)(S.Z,{onClick:ye,sx:{mt:1,mr:1},children:"Back"})]})]}),null!==X.sel_month&&(0,o.jsxs)(j.Z,{sx:$.Z.conditionLegend,style:{backgroundColor:h.tN[X.sel_condition.label]},children:[(0,o.jsx)(M.Z,{variant:"subtitle2",children:"Seasonal Weather Condition"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:X.sel_month.label})," \xa0",(0,o.jsxs)("span",{children:["".concat(X.sel_condition.label.charAt(0).toUpperCase()).concat(X.sel_condition.label.slice(1))," ","(",X.sel_condition.id,"%)"]})]})]})]}),(0,o.jsx)(B.ZP,{item:!0,sx:$.Z.item,xs:12,lg:8,children:null!==X.sel_crop&&null!==X.sel_activity&&6===i?(0,o.jsxs)("div",{children:[null!==X.sel_crop&&null!==X.sel_activity&&(0,o.jsxs)("div",{children:[(0,o.jsxs)(M.Z,{variant:"h4",sx:{display:0===X.sel_activity.length?"none":"flex"},children:[X.sel_crop.label," Recommendations"]}),(0,o.jsx)(M.Z,{variant:"h5",children:"".concat(X.sel_condition.label.charAt(0).toUpperCase()).concat(X.sel_condition.label.slice(1)," Condition")})]}),(0,o.jsxs)(j.Z,{sx:{width:"100%"},children:[(0,o.jsx)(j.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(N.Z,{value:m,onChange:function(e,t){v(t)},"aria-label":"basic tabs example",children:[(0,o.jsx)(W.Z,Q({label:"PDF FORM"},n(0))),(0,o.jsx)(W.Z,Q({label:"SMS FORM"},n(1)))]})}),(0,o.jsx)(t,{value:m,index:0,children:ne.length>0?ne.map((function(e,t){var n="Rice"===X.sel_crop.label?"(".concat(e.crop,")"):"";return(0,o.jsxs)(j.Z,{sx:$.Z.recSeasonal,children:[(0,o.jsxs)(M.Z,{variant:"h5",children:[e.stage," - ",e.activity," ",n]}),e.recommendations().map((function(e,n){return e.ul?(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e.id}),e.subs.length>0&&(0,o.jsx)("ul",{children:e.subs.map((function(e,n){return(0,o.jsx)("li",{children:e},"sub-".concat(t,"-").concat(n))}))})]},"main-".concat(t,"-").concat(n)):(0,o.jsx)("p",{children:e.id},"main-".concat(t,"-").concat(n))}))]},"rec-".concat(t))})):(0,o.jsx)(U.Z,{message:"We cannot find recommendations for your selected options."})}),(0,o.jsx)(t,{value:m,index:1,children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(M.Z,{variant:"body2",sx:{fontStyle:"italic"},children:[(0,o.jsx)("strong",{children:"NOTE:"})," This shortened version will serve as a Text to be sent as SMS."]}),(0,o.jsx)("br",{}),(0,o.jsxs)(M.Z,{variant:"body1",gutterBottom:!0,children:[(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),(0,o.jsx)("p",{children:"Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus"})]})]})})]})]}):Object.values(X).filter((function(e){return e})).length>3?(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:ee.map((function(e,t){var n=["sel_stage","sel_activity"].includes(e)?X[e].length>0&&"weather_condition"!==X[e].from:null!==X[e]&&void 0!==X[e]&&void 0!==X[e].from&&"weather_condition"!==X[e].from,r=["sel_stage","sel_activity"].includes(e)?{from:{sel_stage:"cropstage",sel_activity:"activity"}[e],label:X[e].map((function(e){return e.label})).toString().split(",").join(", ")}:X[e];return n?(0,o.jsx)(H.Z,{info:r,show:t<ee.length-1},"card-opt-".concat(t)):(0,o.jsx)("div",{},"card-opt-".concat(t))}))}):(0,o.jsxs)(j.Z,{sx:$.Z.welcome,children:[(0,o.jsx)(y.default,{unoptimized:!0,src:(0,z.assetPrefixer)("images/icons/finance.svg"),height:120,width:120,loader:z.imageLoader,alt:"Empty data"}),(0,o.jsx)(M.Z,{variant:"h5",children:"Crop Recommendations PDF Bulletins Creator"}),(0,o.jsx)(M.Z,{variant:"p",children:"Please select a province to start."})]})}),(0,o.jsxs)(j.Z,{sx:{marginBottom:"16px",width:"100%",display:6===i?"block":"none"},children:[(0,o.jsx)("br",{}),(0,o.jsx)(T.Z,{}),(0,o.jsx)("br",{}),""!==X.error&&(0,o.jsxs)(M.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",X.error]}),(0,o.jsxs)(Z.Z,{size:"large","aria-label":"large button group",sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,o.jsx)(x.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(S.Z,{disabled:X.loading,children:"Cancel"})}),(0,o.jsxs)(S.Z,{disabled:X.loading,onClick:he,children:[(0,o.jsx)("span",{style:{display:X.loading?"none":"block"},children:"Preview"})," ","\xa0",(0,o.jsx)(O.Z,{size:20,color:"secondary",sx:{display:X.loading?"block":"none"}})]}),(0,o.jsx)(S.Z,{variant:"contained",onClick:be,disableElevation:!0,disabled:X.loading,children:"Save"})]})]})]})]})};function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(e,t,n,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,i)}function ie(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){re(o,r,i,a,l,"next",e)}function l(e){re(o,r,i,a,l,"throw",e)}a(void 0)}))}}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){oe(e,t,n[t])}))}return e}function le(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ce=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var se={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:h.MW.DRIER.label},loading:!1,error:"",success:""},ue={url:"",filename:""},de={preview:!1,savesuccess:!1,docId:""};function pe(e){var t=e.municipalities,n=void 0===t?[]:t,r=(0,c.aC)(),v=(0,l.useRouter)(),g=(0,b.Kx)(d.o.CROP_REC_LIST_RECS_MAIN,"id"),x=g.documents,y=g.loading,_=(0,b.Kx)(d.o.CROP_REC_LIST_RECS_SUB,"id"),j=_.documents,w=_.loading,O=(0,b.m$)(p.M.WEATHER_FORECASTS,"bicol",p.M.SUB_SEASONAL,"name"),S=O.documents,Z=O.loading,R=(0,a.useState)([]),C=R[0],k=R[1],P=(0,a.useState)([]),E=P[0],T=P[1],B=(0,a.useState)([]),A=B[0],F=B[1],I=(0,a.useState)([]),q=I[0],D=I[1],L=(0,a.useState)([]),M=L[0],N=L[1],W=(0,a.useState)({}),z=W[0],U=W[1],G=(0,a.useState)(se),V=G[0],H=G[1],K=(0,a.useState)([]),J=K[0],$=K[1],X=(0,a.useState)([]),Q=X[0],Y=X[1],ee=(0,a.useState)([]),ne=ee[0],re=ee[1],oe=(0,a.useState)([]),pe=oe[0],fe=oe[1],be=(0,a.useState)(ue),he=be[0],me=be[1],ve=(0,a.useState)([]),ge=ve[0],xe=ve[1],ye=(0,a.useState)(de),_e=ye[0],je=ye[1],we=(0,a.useRef)(!1);(0,a.useEffect)((function(){return we.current=!0,function(){we.current=!1}}),[]),(0,a.useEffect)((function(){r.loading||r.user||v.push("/admin/login")}),[r.user,r.loading,v]),(0,a.useEffect)((function(){if(n.length>0&&!y&&!w&&!Z){var e={};S.forEach((function(t){var n=t.name.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");e[n]={},t.months.forEach((function(t){e[n][t.mo]={label:t.con,val:t.val}}))}));var t=[];S[0].mos.forEach((function(e){t.push({id:h.re[e.toUpperCase()].code,label:h.re[e.toUpperCase()].format,disabled:!1})}));var r={},i=[];n.forEach((function(e,t){void 0===r[e.province]?(i.push({id:t,label:e.province}),r[e.province]=[{id:0,label:e.name}]):r[e.province].push({id:r[e.province].length,label:e.name})})),we.current&&(T(r),k(i),xe(t),U(e))}}),[n,S,y,w,Z]);var Oe=function(){var e=ie(i().mark((function e(t,n){var r,o,a,l,c,d,p,f,b,m,v,g,y,_,w,O,S,Z,R,C,k,P,T,B,I;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.from,o=n.label,t&&t.preventDefault(),N([]),me(ue),!(["cropstage","activity"].includes(r)?Object.keys(n).length>1:Object.keys(n).includes("id"))){e.next=93;break}e.t0=r,e.next="province"===e.t0?9:"municipality"===e.t0?15:"crop"===e.t0?48:"month"===e.t0?57:"cropstage"===e.t0?67:"activity"===e.t0?77:90;break;case 9:return H(ae({},V,{sel_province:n,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),$(E[o]),Y([]),re([]),fe([]),e.abrupt("break",91);case 15:return re([]),fe([]),a=[],e.prev=18,H(ae({},V,{loading:!0,error:""})),e.next=22,(0,u.$K)(V.sel_province.label,o);case 22:l=e.sent,((a=l.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).includes("Rainfed Rice")||a.includes("Irrigated Rice"))&&a.push("Rice"),we.current&&F((function(e){return l})),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(18),H((function(t){return ae({},t,{loading:!1,error:e.t1.message})}));case 31:if(0!==a.length){e.next=34;break}return H((function(e){return ae({},e,{loading:!1,error:"There was an error loading data."})})),e.abrupt("return");case 34:return e.prev=34,e.next=37,(0,s.OP)(V.sel_province.label,o);case 37:c=e.sent,d=[],(p=c.map((function(e){return e.crop})).filter((function(e,t,n){return n.indexOf(e)===t}))).forEach((function(e,t){d.push({id:t,label:e,disabled:!a.includes(e)})})),we.current&&(f=0===p.length?{id:"novalues",label:"No crop types for ".concat(o)}:null,H(ae({},V,{sel_municipality:n,sel_crop:f,sel_stage:[],sel_activity:[],sel_month:null,loading:!1,error:""})),re(d),Y((function(e){return d})),D((function(e){return c}))),e.next=47;break;case 44:e.prev=44,e.t2=e.catch(34),H((function(t){return ae({},t,{loading:!1,error:e.t2.message})}));case 47:return e.abrupt("break",91);case 48:return re([]),fe([]),H(ae({},V,{sel_crop:n,sel_stage:[],sel_activity:[],sel_month:null})),b=[],q.filter((function(e){return e.crop===o&&e.province===V.sel_province.label&&e.municipality===V.sel_municipality.label})).forEach((function(e){ge.forEach((function(t){""===e[t.id]||b.includes(t.id)||b.push(t.id)}))})),m=le(ge),ge.forEach((function(e,t){m[t].disabled=!b.includes(e.id)})),xe(m),e.abrupt("break",91);case 57:return v=z[V.sel_province.label][n.id].label,g=z[V.sel_province.label][n.id].val,fe([]),y=[],_=[],q.forEach((function(e,t){var r=Object.values(h.re).find((function(e){return e.format===n.label})).code;if(""!==e[r]&&e.crop===V.sel_crop.label)for(var i=function(e){if(o[e].length>0&&!y.includes(o[e])){y.push(o[e]);var t=A.filter((function(t){return t.stage===h.MZ[o[e].toUpperCase()]&&("Rice"===V.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(t.crop):t.crop===V.sel_crop.label)})).map((function(e){return e.activity})).filter((function(e,t,n){return n.indexOf(e)==t}));_.push({id:_.length,label:h.MZ[o[e].toUpperCase()],disabled:0===t.length})}},o=e[r].split(","),a=0;a<o.length;a+=1)i(a)})),w=0===_.length?[{id:"novalues",label:"No crop stage for ".concat(o)}]:[],re(_),H(ae({},V,{sel_month:n,sel_stage:w,sel_activity:[],sel_condition:{label:v,id:g}})),e.abrupt("break",91);case 67:for(S in O=[],n)"from"!==S&&O.push(n[S]);return Z=[],R=A.filter((function(e){return O.map((function(e){return e.label})).includes(e.stage)&&("Rice"===V.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===V.sel_crop.label)})).map((function(e){return{activity:e.activity,stage:e.stage}})).filter((function(e,t,n){return n.map((function(e){return e.activity})).indexOf(e.activity)===t})),C=0===R.length?[{id:"novalues",label:"No activities for selected options"}]:[],H(ae({},V,{sel_stage:le(O),sel_activity:le(C)})),k=[],R.forEach((function(e,t){k.includes(e.activity)||(Z.push({id:t,label:e.activity,stage:e.stage}),k.push(e.activity))})),fe((function(e){return Z})),e.abrupt("break",91);case 77:e.t3=regeneratorRuntime.keys(V);case 78:if((e.t4=e.t3()).done){e.next=84;break}if(P=e.t4.value,null!==V[P]||"sel_activity"===P){e.next=82;break}return e.abrupt("return");case 82:e.next=78;break;case 84:for(B in T=[],n)"from"!==B&&T.push(n[B]);return I=A.filter((function(e){return T.map((function(e){return e.label})).includes(e.activity)&&V.sel_stage.map((function(e){return e.label})).includes(e.stage)&&("Rice"===V.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===V.sel_crop.label)})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(V.sel_condition.label){case h.MW.NORMAL.label:return JSON.parse(e.normal).map((function(e){return{id:x.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}));case h.MW.WETTER.label:return JSON.parse(e.wetter).map((function(e){return{id:x.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}));case h.MW.DRIER.label:return JSON.parse(e.drier).map((function(e){return{id:x.find((function(t){return t.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return j.find((function(t){return t.id===e})).description}))}}))}}}})),H(ae({},V,{sel_activity:le(T)})),N(I),e.abrupt("break",91);case 90:return e.abrupt("break",91);case 91:e.next=94;break;case 93:"province"===r?(H(se),$([]),Y([]),re([]),fe([])):"municipality"===r?(H(ae({},V,{sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),Y([]),re([]),fe([])):"crop"===r?(H(ae({},V,{sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),re([]),fe([])):"month"===r?(H(ae({},V,{sel_month:null,sel_stage:[],sel_activity:[]})),re([]),fe([])):"cropstage"===r?(H(ae({},V,{sel_stage:[],sel_activity:[]})),fe([])):"activity"===r&&H(ae({},V,{sel_activity:[]}));case 94:case"end":return e.stop()}}),e,null,[[18,28],[34,44]])})));return function(t,n){return e.apply(this,arguments)}}(),Se=function(){var e=ie(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=ie(i().mark((function e(){var t,n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H((function(e){return ae({},e,{loading:!0,error:"",success:""})})),t=Object.values(h.re).find((function(e){return e.format===V.sel_month.label})).code,e.prev=2,n={region:"bicol",province:V.sel_province.label,municipality:V.sel_municipality.label,crop:V.sel_crop.label,month:t,stages:V.sel_stage.map((function(e){return e.label})),activities:V.sel_activity.map((function(e){return e.label})),operation:"create"},H((function(e){return ae({},e,{loading:!0,error:""})})),e.next=7,(0,f.Zn)(n);case 7:r=e.sent,H((function(e){return ae({},e,{loading:!1,success:"Bulletin report created."})})),je(ae({},de,{savesuccess:!0,docId:r.id})),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),o="",void 0!==e.t0.response&&(o=void 0!==e.t0.response.data&&"[object Blob]"===ce(e.t0.response.data)?e.t0.response.data:""),""===o&&(o=e.t0.message),H((function(e){return ae({},e,{loading:!1,error:o})}));case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=ie(i().mark((function e(){var t,n,r,o,a,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===he.url){e.next=3;break}return je(ae({},de,{preview:!0})),e.abrupt("return");case 3:return H((function(e){return ae({},e,{loading:!0,error:"",success:""})})),t=Object.values(h.re).find((function(e){return e.format===V.sel_month.label})).code,e.prev=5,n={region:"bicol",province:V.sel_province.label,municipality:V.sel_municipality.label,crop:V.sel_crop.label,month:t,stages:V.sel_stage.map((function(e){return e.label})),activities:V.sel_activity.map((function(e){return e.label})),operation:"preview"},je(ae({},de,{preview:!0})),H((function(e){return ae({},e,{loading:!0,error:""})})),e.next=11,(0,f.pl)(n);case 11:r=e.sent,o=new Blob([r],{type:"application/pdf"}),(a={}).href=URL.createObjectURL(o),a.download="".concat(V.sel_province.label,"_").concat(V.sel_municipality.label,"-").concat(V.sel_crop.label,".pdf"),me((function(e){return ae({},e,{url:a.href,filename:a.download})})),H((function(e){return ae({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=27;break;case 20:e.prev=20,e.t0=e.catch(5),l="",void 0!==e.t0.response&&(l=void 0!==e.t0.response.data&&"[object Blob]"===ce(e.t0.response.data)?e.t0.response.data:""),""===l&&(l=e.t0.message),l+="\n---heeeere!",H((function(e){return ae({},e,{loading:!1,error:l})}));case 27:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(te,{loading:r.loading,user:r.user,onBtnClick:Se,sel_options:V,open:_e,provinces:C,recommendations:M,optsmunicipalities:J,optscrops:Q,optscropstages:ne,optsactivities:pe,optsmonths:ge,pdfPreview:he,steps:m,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:Oe,getStepLabel:function(e){var t=m[e].opt_name,n=["sel_stage","sel_activity"],r=n.includes(t)?0===V[t].length?m[e].label:"".concat(m[e].label,": ").concat(V[t].map((function(e){return e.label})).toString()):null===V[t]?m[e].label:"".concat(m[e].label,": ").concat(V[t].label);return n.includes(t)?0===V[t].length?m[e].label:r:null!==V[t]&&"novalues"===V[t].id?m[e].label:r},isContinueDisabled:function(e){switch(e){case 0:return null===V.sel_province;case 1:return null===V.sel_municipality;case 2:return null===V.sel_crop||"novalues"===V.sel_crop.id;case 3:return null===V.sel_month;case 4:return 0===V.sel_stage.length;case 5:return 0===V.sel_activity.length;default:return!1}},handlePreview:Re,handleSave:Ze,toggleViewerOpen:function(){je((function(e){return!e}))}})}pe.customLayout=!0,pe.adminPage=!0;var fe=!0,be=pe},8152:function(e,t,n){"use strict";n.d(t,{Zn:function(){return I},GR:function(){return q},fL:function(){return L},pr:function(){return M},pl:function(){return D}});var r=n(4051),i=n.n(r),o=n(9669),a=n.n(o),l=n(9431);function c(e,t,n,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){c(o,r,i,a,l,"next",e)}function l(e){c(o,r,i,a,l,"throw",e)}a(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function h(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var x={BASE_API_URL:"https://amia-cis.herokuapp.com/api",CREATE_REPORT:"".concat("https://amia-cis.herokuapp.com/api","/reports/seasonal/crops"),REPORTS_CROPS:"reports_crops"},y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,n,r,o=g(l);function l(){return u(this,l),o.apply(this,arguments)}return t=l,(n=[{key:"createReport",value:function(e){var t=this;return s(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,a()(b({},r,{url:x.CREATE_REPORT,method:"POST"}));case 5:return o=n.sent,n.abrupt("return",o.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"deleteReport",value:function(e){var t=this;return s(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={docId:e},n.next=3,t.createRequestObject({body:r});case 3:return o=n.sent,n.next=6,a()(b({},o,{url:x.CREATE_REPORT,method:"DELETE"}));case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()}},{key:"previewBulletin",value:function(e){var t=this;return s(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e,responseType:"blob"});case 2:return r=n.sent,n.next=5,a()(b({},r,{url:x.CREATE_REPORT,method:"POST"}));case 5:return o=n.sent,n.abrupt("return",o.data);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(t.prototype,n),r&&d(t,r),l}(l.Z),_=n(4763);function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,i)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){w(o,r,i,a,l,"next",e)}function l(e){w(o,r,i,a,l,"throw",e)}a(void 0)}))}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function C(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?j(e):t}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}var P=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var i=R(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return C(this,n)}}var T="reports_crops",B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,e);var t=E(n);function n(){var e;S(this,n);var r=j(e=t.apply(this,arguments));Z(j(e),"getBulletin",function(){var e=O(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getDocumentData(T,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var o=j(e);return Z(j(e),"getBulletins",function(){var e=O(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.collection(o.db,T),r=o.query(n,o.where("uid","==",t)),e.next=4,o.getCollectionData(T,"",r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}return n}(_.Z),A=new y,F=new B,I=A.createReport.bind(A),q=A.deleteReport.bind(A),D=A.previewBulletin.bind(A),L=F.getBulletin.bind(F),M=F.getBulletins.bind(F)}},function(e){e.O(0,[3,669,203,572,27,771,899,974,774,888,179],(function(){return t=5326,e(e.s=t);var t}));var t=e.O();_N_E=t}]);