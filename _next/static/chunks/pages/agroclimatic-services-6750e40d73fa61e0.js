(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7741:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agroclimatic-services",function(){return t(2925)}])},2925:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return be},default:function(){return ve}});var r=t(4051),i=t.n(r),o=t(5893),a=t(7294),c=t(4763);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,c,"next",e)}function c(e){s(o,r,i,a,c,"throw",e)}a(void 0)}))}}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function b(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?l(e):n}function v(e,n){return v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},v(e,n)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=d(e);if(n){var i=d(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return b(this,t)}}var x="misc_crop_calendars",_="n_cropping_calendar_merged",y=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(t,e);var n=g(t);function t(){var e;p(this,t);var r=l(e=n.apply(this,arguments));f(l(e),"getCropCalendarsHi",u(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCollectionData(x,"filename");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var o=l(e);f(l(e),"getCroppingCalendarMerged",u(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getCollectionData(_,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var a=l(e);return f(l(e),"getCroppingCalendarSimplified",function(){var e=u(i().mark((function e(n,t){var r,o,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==n&&void 0!==t){e.next=2;break}return e.abrupt("return");case 2:return r=a.collection(a.db,_),o=a.query(r,a.where("province","==",n),a.where("municipality","==",t)),e.next=6,a.getDocs(o);case 6:return c=e.sent,l=c.docs.map((function(e){return m({},e.data())})),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),e}return t}(c.Z),j=new y,w=(j.getCropCalendarsHi.bind(j),j.getCroppingCalendarMerged.bind(j),j.getCroppingCalendarSimplified.bind(j));function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){C(o,r,i,a,c,"next",e)}function c(e){C(o,r,i,a,c,"throw",e)}a(void 0)}))}}function k(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function E(e,n){return!n||"object"!==T(n)&&"function"!==typeof n?S(e):n}function R(e,n){return R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},R(e,n)}var T=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function D(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=P(e);if(n){var i=P(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return E(this,t)}}var N="rec_selections",M="n_crop_recommendations",A="n_list_recommendations",W="n_list_subrecommendations",I=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(t,e);var n=D(t);function t(){var e;k(this,t);var r=S(e=n.apply(this,arguments));Z(S(e),"getSelections",O(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCollectionData(N,"prov");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var o=S(e);Z(S(e),"getActivities",function(){var e=O(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return t=o.collection(o.db,N),r=o.query(t,o.where("prov","==",n)),e.next=6,o.getCollectionData(N,"",r);case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var a=S(e);Z(S(e),"getRecommendations",function(){var e=O(i().mark((function e(n,t){var r,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==n&&void 0!==t){e.next=2;break}return e.abrupt("return");case 2:return r=a.collection(a.db,M),o=a.query(r,a.where("province","==",n),a.where("municipality","==",t)),e.next=6,a.getCollectionData(M,"",o);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var c=S(e);Z(S(e),"getMainCropRecommendations",O(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getCollectionData(A,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var l=S(e);return Z(S(e),"getSubCropRecommendations",O(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getCollectionData(W,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e}return t}(c.Z),L=new I,q=(L.getSelections.bind(L),L.getActivities.bind(L),L.getRecommendations.bind(L)),B=(L.getMainCropRecommendations.bind(L),L.getSubCropRecommendations.bind(L),t(560)),H=t(1903),U=t(6295),V=t(7357),F=t(1057),J=t(7720),z=t(5861),K=t(6886),X=t(6624),G=t(4472),Y=t(3578),$=t(6229),Q=t(5113),ee=t(6613),ne={container:{display:"flex",flexDirection:"column"},cardContainer:{display:{xs:"none",md:"grid"},"& h6":{fontSize:"1.2rem",lineHeight:"1.6rem"},"& h6:nth-child(2)":{fontWeight:"bold"},placeContent:"center",width:"100%",maxWidth:"430px",minHeight:"85px",border:"2px solid #cc00cc",borderRadius:"40px",padding:function(e){return e.spacing(2)},margin:"auto",marginBottom:"6px",marginTop:"6px",textAlign:"center",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"},arrowIcon:{margin:"auto",color:"#cc00cc",display:{xs:"none",md:"block"}}};var te=function(e){var n=e.info,t=e.show,r=void 0===t||t;return(0,o.jsxs)(V.Z,{sx:ne.container,children:[(0,o.jsxs)(V.Z,{sx:ne.cardContainer,children:[(0,o.jsx)(z.Z,{variant:"subtitle1",children:"You have selected ".concat("cropstage"===n.from?"crop stage":n.from)}),(0,o.jsx)(z.Z,{variant:"subtitle1",children:n.label})]}),r&&(0,o.jsx)(ee.Z,{size:24,sx:ne.arrowIcon})]})},re={container:{marginTop:function(e){return e.spacing(3)},minHeight:"400px"},controls:{marginTop:function(e){return e.spacing(6)}},selectContainer:{borderRight:{sm:"none",md:"1px solid gray"}},recsContainer:{marginTop:"-24px",paddingLeft:{sm:"none",md:"54px !important"}},autocomplete:{maxWidth:{sm:"100%",md:"310px"},marginBottom:function(e){return e.spacing(3)},marginTop:function(e){return e.spacing(1)}},conditionLegend:{maxWidth:{sm:"100%"},margin:{md:"24px"},padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center"}},ie=t(7426);function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){oe(e,n,t[n])}))}return e}var ce=["sel_province","sel_municipality","sel_crop","sel_month","sel_stage","sel_activity"];var le=function(e){var n=(0,a.useState)(0),t=n[0],r=n[1],i=e.sel_options,c=e.provinces,l=e.recommendations,s=e.onSelectItemChange,u=e.optsmunicipalities,p=e.optscrops,f=e.optscropstages,d=e.optsactivities,m=e.optsmonths,b=e.steps,v=e.getStepLabel,h=e.isContinueDisabled,g=function(){r((function(e){return e+1}))},x=function(){r((function(e){return e-1}))},_=function(){var e="Loading...";return c.length>0&&(e=null===i.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)(V.Z,{sx:{minHeight:"75vh"},id:"seasonal-recommendations",children:[(0,o.jsx)(z.Z,{variant:"h4",children:"Crop Recommendations"}),(0,o.jsx)(z.Z,{variant:"label",children:"Seasonal Recommendations"}),(0,o.jsxs)(K.ZP,{container:!0,spacing:2,sx:re.container,children:[(0,o.jsxs)(K.ZP,{item:!0,xs:12,md:4,sx:re.selectContainer,children:[(0,o.jsxs)(V.Z,{sx:{minWidth:"100%",paddingRight:function(e){return e.spacing(2)}},children:[(0,o.jsx)(X.Z,{activeStep:t,orientation:"vertical",children:b.map((function(e,n){return(0,o.jsxs)(G.Z,{children:[(0,o.jsx)(Y.Z,{optional:5===n?(0,o.jsx)(z.Z,{variant:"caption",children:"Last step"}):null,children:v(n)}),(0,o.jsxs)($.Z,{children:[(0,o.jsx)(z.Z,{children:e.description}),0===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"province",value:i.sel_province,disabled:0===c.length,options:c,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:_()}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"province"}))}}),1===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"municipality",value:i.sel_municipality,disabled:0===u.length,options:u,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:null===i.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"municipality"}))}}),2===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"crop",value:i.sel_crop,disabled:0===p.length,options:p,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:null===i.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"crop"}))}}),3===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"month",value:i.sel_month,disabled:0===m.length||null===i.sel_crop,options:m,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:null===i.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"month"}))}}),4===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"cropstage",value:i.sel_stage,disabled:0===f.length,options:f,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:null===i.sel_stage?"Select a crop stage":"Crop Stage"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"cropstage"}))}}),5===n&&(0,o.jsx)(U.Z,{disablePortal:!0,id:"activity",value:i.sel_activity,disabled:0===d.length,options:d,sx:re.autocomplete,renderInput:function(e){return(0,o.jsx)(H.Z,ae({},e,{label:null===i.sel_activity?"Select an activity":"Activity"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ae({},n,{from:"activity"}))}}),(0,o.jsx)(V.Z,{sx:{mb:2},children:(0,o.jsxs)("div",{children:[(0,o.jsx)(F.Z,{variant:"contained",disabled:h(n)&&n!==b.length-1,onClick:g,children:n===b.length-1?"Finish":"Continue"}),(0,o.jsx)(F.Z,{disabled:0===n,onClick:x,children:"Back"})]})})]})]},e.label)}))}),t===b.length&&(0,o.jsxs)(Q.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,o.jsx)(z.Z,{children:"All steps completed"}),(0,o.jsx)(F.Z,{onClick:function(){r(0),s(null,{from:"province"})},sx:{mt:1,mr:1},children:"Restart"}),(0,o.jsx)(F.Z,{onClick:x,sx:{mt:1,mr:1},children:"Back"})]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(J.Z,{}),(0,o.jsx)("br",{}),null!==i.sel_month&&(0,o.jsxs)(V.Z,{sx:re.conditionLegend,style:{backgroundColor:ie.tN[i.sel_condition.label]},children:[(0,o.jsx)(z.Z,{variant:"subtitle2",children:"Seasonal Weather Condition"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:i.sel_month.label})," \xa0",(0,o.jsxs)("span",{children:["".concat(i.sel_condition.label.charAt(0).toUpperCase()).concat(i.sel_condition.label.slice(1))," (",i.sel_condition.id,"%)"]})]})]})]}),(0,o.jsx)(K.ZP,{item:!0,xs:12,md:8,sx:re.recsContainer,children:null!==i.sel_crop&&null!==i.sel_activity&&6===t?(0,o.jsxs)("div",{children:[null!==i.sel_crop&&null!==i.sel_activity&&(0,o.jsxs)(z.Z,{variant:"h5",sx:{display:"novalues"===i.sel_activity.id?"none":"flex"},children:[i.sel_crop.label," Recommendations"]}),l.length>0&&l.map((function(e,n){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"".concat(i.sel_condition.label.charAt(0).toUpperCase()).concat(i.sel_condition.label.slice(1))}),e.recommendations().map((function(e,t){return e.ul?(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e.id}),e.subs.length>0&&(0,o.jsx)("ul",{children:e.subs.map((function(e,t){return(0,o.jsx)("li",{children:e},"sub-".concat(n,"-").concat(t))}))})]},"main-".concat(n,"-").concat(t)):(0,o.jsx)("p",{children:e.id},"main-".concat(n,"-").concat(t))}))]},"rec-".concat(n))}))]}):(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:ce.map((function(e,n){return null!==i[e]&&void 0!==i[e].from&&"weather_condition"!==i[e].from?(0,o.jsx)(te,{info:i[e],show:n<ce.length-1},"card-opt-".concat(n)):(0,o.jsx)("div",{},"card-opt-".concat(n))}))})})]})]})},se=t(7682),ue=[{label:"Select a province",description:"Select a province within the Bicol region.",opt_name:"sel_province"},{label:"Select a municipality",description:"Select a municipality included in the province you have selected on step no. 1.",opt_name:"sel_municipality"},{label:"Select a crop type",description:"Listed below are available crops for your selected province and municipality.",opt_name:"sel_crop"},{label:"Select a month",description:"Select a target month from the current Seasonal Weather Forecast.",opt_name:"sel_month"},{label:"Select a crop stage",description:"Listed below are the available crop stages for your selected crop on the target month.",opt_name:"sel_stage"},{label:"Select an activity",description:"Here are available activities for the previously-selected parameters.",opt_name:"sel_activity"}];function pe(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}function fe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){fe(e,n,t[n])}))}return e}var me={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null,sel_condition:{id:0,from:"weather_condition",label:ie.MW.DRIER}};var be=!0,ve=function(e){var n=e.municipalities,t=void 0===n?[]:n,r=(0,se.Kx)(A,"id"),c=r.documents,l=r.loading,s=(0,se.Kx)(W,"id"),u=s.documents,p=s.loading,f=(0,se.m$)(B.M.WEATHER_FORECASTS,"bicol",B.M.SUB_SEASONAL,"name"),d=f.documents,m=f.loading,b=(0,a.useState)([]),v=b[0],h=b[1],g=(0,a.useState)([]),x=g[0],_=g[1],y=(0,a.useState)([]),j=y[0],S=y[1],C=(0,a.useState)([]),O=C[0],k=C[1],Z=(0,a.useState)([]),P=Z[0],E=Z[1],R=(0,a.useState)({}),T=R[0],D=R[1],N=(0,a.useState)(me),M=N[0],I=N[1],L=(0,a.useState)([]),H=L[0],U=L[1],V=(0,a.useState)([]),F=V[0],J=V[1],z=(0,a.useState)([]),K=z[0],X=z[1],G=(0,a.useState)([]),Y=G[0],$=G[1],Q=(0,a.useState)([]),ee=Q[0],ne=Q[1],te=(0,a.useRef)(!1);(0,a.useEffect)((function(){return te.current=!0,function(){te.current=!1}}),[]),(0,a.useEffect)((function(){if(t.length>0&&!l&&!p&&!m){var e={};d.forEach((function(n){var t=n.name.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");e[t]={},n.months.forEach((function(n){e[t][n.mo]={label:n.con,val:n.val}}))}));var n=[];d[0].mos.forEach((function(e){n.push({id:ie.re[e.toUpperCase()].code,label:ie.re[e.toUpperCase()].format})}));var r={},i=[];t.forEach((function(e,n){void 0===r[e.province]?(i.push({id:n,label:e.province}),r[e.province]=[{id:0,label:e.name}]):r[e.province].push({id:r[e.province].length,label:e.name})})),te.current&&(_(r),h(i),ne(n),D(e))}}),[t,d,l,p,m]);var re=function(){var e,n=(e=i().mark((function e(n,t){var r,o,a,l,s,p,f,d,m,b,v,h,g,_,y,C,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.from,o=t.label,E([]),!Object.keys(t).includes("id")){e.next=73;break}e.t0=r,e.next="province"===e.t0?6:"municipality"===e.t0?12:"crop"===e.t0?38:"month"===e.t0?42:"cropstage"===e.t0?52:"activity"===e.t0?59:70;break;case 6:return I(de({},M,{sel_province:t,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),U(x[o]),J([]),X([]),$([]),e.abrupt("break",71);case 12:return X([]),$([]),e.prev=14,e.next=17,q(M.sel_province.label,o);case 17:a=e.sent,te.current&&S((function(e){return a})),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(14),console.error(e.t1.message);case 24:return e.prev=24,e.next=27,w(M.sel_province.label,o);case 27:l=e.sent,s=[],(p=l.map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)==n}))).forEach((function(e,n){s.push({id:n,label:e})})),te.current&&(f=0===p.length?{id:"novalues",label:"No crop types for ".concat(o)}:null,I(de({},M,{sel_municipality:t,sel_crop:f,sel_stage:null,sel_activity:null,sel_month:null})),X(s),J((function(e){return s})),k((function(e){return l}))),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(24),console.error(e.t2.message);case 37:return e.abrupt("break",71);case 38:return X([]),$([]),I(de({},M,{sel_crop:t,sel_stage:null,sel_activity:null,sel_month:null})),e.abrupt("break",71);case 42:return d=T[M.sel_province.label][t.id].label,m=T[M.sel_province.label][t.id].val,$([]),b=[],v=[],O.forEach((function(e,n){var r=Object.values(ie.re).find((function(e){return e.format===t.label})).code;if(""!==e[r]&&e.crop===M.sel_crop.label)for(var i=e[r].split(","),o=0;o<i.length;o+=1)i[o].length>0&&!b.includes(i[o])&&(b.push(i[o]),v.push({id:v.length,label:ie.MZ[i[o].toUpperCase()]}))})),h=0===v.length?{id:"novalues",label:"No crop stage for ".concat(o)}:null,X(v),I(de({},M,{sel_month:t,sel_stage:h,sel_activity:null,sel_condition:{label:d,id:m}})),e.abrupt("break",71);case 52:return g=[],_=j.filter((function(e){return e.stage===o&&e.crop===M.sel_crop.label})).map((function(e){return e.activity})).filter((function(e,n,t){return t.indexOf(e)==n})),y=0===_.length?{id:"novalues",label:"No activities for ".concat(o)}:null,I(de({},M,{sel_stage:t,sel_activity:y})),_.forEach((function(e,n){g.push({id:n,label:e})})),$((function(e){return g})),e.abrupt("break",71);case 59:e.t3=regeneratorRuntime.keys(M);case 60:if((e.t4=e.t3()).done){e.next=66;break}if(C=e.t4.value,null!==M[C]||"sel_activity"===C){e.next=64;break}return e.abrupt("return");case 64:e.next=60;break;case 66:return Z=j.filter((function(e){return e.activity===o&&e.stage===M.sel_stage.label&&e.crop===M.sel_crop.label})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(M.sel_condition.label){case ie.MW.NORMAL:return JSON.parse(e.normal).map((function(e){return{id:c.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return u.find((function(n){return n.id===e})).description}))}}));case ie.MW.WETTER:return JSON.parse(e.wetter).map((function(e){return{id:c.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return u.find((function(n){return n.id===e})).description}))}}));case ie.MW.DRIER:return JSON.parse(e.drier).map((function(e){return{id:c.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return u.find((function(n){return n.id===e})).description}))}}))}}}})),I(de({},M,{sel_activity:t})),E(Z),e.abrupt("break",71);case 70:return e.abrupt("break",71);case 71:e.next=74;break;case 73:"province"===r?(I(me),U([]),J([]),X([]),$([])):"municipality"===r?(I(de({},M,{sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),J([]),X([]),$([])):"crop"===r?(I(de({},M,{sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),X([]),$([])):"month"===r?(I(de({},M,fe({sel_month:null,sel_stage:null,sel_activity:null},"sel_activity",null))),X([]),$([])):"cropstage"===r?(I(de({},M,{sel_stage:null,sel_activity:null})),$([])):"activity"===r&&I(de({},M,{sel_activity:null}));case 74:case"end":return e.stop()}}),e,null,[[14,21],[24,34]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){pe(o,r,i,a,c,"next",e)}function c(e){pe(o,r,i,a,c,"throw",e)}a(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,o.jsx)(le,{sel_options:M,provinces:v,recommendations:P,optsmunicipalities:H,optscrops:F,optscropstages:K,optsactivities:Y,optsmonths:ee,steps:ue,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:re,getStepLabel:function(e){var n=ue[e].opt_name,t=null===M[n]?ue[e].label:"".concat(ue[e].label,": ").concat(M[n].label);return null!==M[n]&&"novalues"===M[n].id?ue[e].label:t},isContinueDisabled:function(e){switch(e){case 0:return null===M.sel_province;case 1:return null===M.sel_municipality;case 2:return null===M.sel_crop||"novalues"===M.sel_crop.id;case 3:return null===M.sel_month;case 4:return null===M.sel_stage||"novalues"===M.sel_stage.id;case 5:return null===M.sel_activity||"novalues"===M.sel_activity.id;default:return!1}}})}}},function(e){e.O(0,[369,295,450,802,774,888,179],(function(){return n=7741,e(e.s=n);var n}));var n=e.O();_N_E=n}]);