(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3755],{5326:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/create",function(){return t(1990)}])},1990:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return M}});var r=t(4051),i=t.n(r),a=t(5893),o=t(7294),c=t(2848),l=t(1652),u=t(560),s=t(4680),p=t(8152),f=t(7682),d=t(7426),b=t(3059),m=t(4824),v=t(2530);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){h(a,r,i,o,c,"next",e)}function c(e){h(a,r,i,o,c,"throw",e)}o(void 0)}))}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(e,n)||R(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e,n){if(e){if("string"===typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}var A={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:d.MW.WAY_BELOW_NORMAL.label},loading:!1,error:"",success:""},k={url:"",filename:""},N={preview:!1,savesuccess:!1,docId:""};var M=!0;n.default=(0,b.Z)((function(e){var n=w((0,f.ky)(s.o.STATIC_RECOMMENDATIONS,"data"),2),t=n[0],r=n[1],b=(0,f.m$)(u.M.WEATHER_FORECASTS,"bicol",u.M.SUB_SEASONAL,"name"),_=b.documents,h=b.loading,g=(0,o.useState)([]),R=g[0],M=g[1],x=(0,o.useState)([]),j=x[0],W=x[1],L=(0,o.useState)([]),C=L[0],B=L[1],I=(0,o.useState)([]),P=I[0],T=I[1],U=(0,o.useState)([]),D=U[0],Z=U[1],J=(0,o.useState)({}),V=J[0],Y=J[1],$=(0,o.useState)(A),X=$[0],F=$[1],G=(0,o.useState)([]),H=G[0],K=G[1],q=(0,o.useState)([]),z=q[0],Q=q[1],ee=(0,o.useState)(k),ne=ee[0],te=ee[1],re=(0,o.useState)([]),ie=re[0],ae=re[1],oe=(0,o.useState)(N),ce=oe[0],le=oe[1],ue=(0,o.useRef)(!1);(0,o.useEffect)((function(){return ue.current=!0,function(){ue.current=!1}}),[]),(0,o.useEffect)((function(){if(e.municipalities.length>0&&!h&&!r){var n={};_.forEach((function(e){var t=e.name.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");n[t]={},e.months.forEach((function(e){var r=Object.values(d.MW).find((function(n){return n.label===e.con}));n[t][e.mo]={label:e.con,format:r.sync,val:e.val}}))}));var t=[];_[0].mos.forEach((function(e){t.push({id:d.re[e.toUpperCase()].code,label:d.re[e.toUpperCase()].format,disabled:!1})}));var i={},a=[];e.municipalities.forEach((function(e,n){void 0===i[e.province]?(a.push({id:n,label:e.province}),i[e.province]=[{id:0,label:e.name}]):i[e.province].push({id:i[e.province].length,label:e.name})})),ue.current&&(W(i),M(a),ae(t),Y(n))}}),[e.municipalities,_,h,r]);var se=function(e){var n="";switch(e){case d.MW.WAY_BELOW_NORMAL.label:n="drier";break;case d.MW.BELOW_NORMAL.label:case d.MW.NEAR_NORMAL.label:n="normal";break;case d.MW.ABOVE_NORMAL.label:n="wetter"}return n},pe=function(){var e=y(i().mark((function e(n,r){var a,o,u,s,p,f,b,m,v,_,h,y,g,w,E,R,N,M,x;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.from,o=r.label,n&&n.preventDefault(),Z([]),te(k),!(["cropstage","activity"].includes(a)?Object.keys(r).length>1:Object.keys(r).includes("id"))){e.next=64;break}e.t0=a,e.next="province"===e.t0?9:"municipality"===e.t0?13:"crop"===e.t0?44:"month"===e.t0?51:61;break;case 9:return F(O({},X,{sel_province:r,sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),K(j[o]),Q([]),e.abrupt("break",62);case 13:return u=[],e.prev=14,F(O({},X,{loading:!0,error:""})),e.next=18,(0,l.$K)(X.sel_province.label,o);case 18:s=e.sent,((u=s.map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)===n}))).includes("Rainfed Rice")||u.includes("Irrigated Rice"))&&u.push("Rice"),ue.current&&B((function(e){return s})),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(14),F((function(n){return O({},n,{loading:!1,error:e.t1.message})}));case 27:if(0!==u.length){e.next=30;break}return F((function(e){return O({},e,{loading:!1,error:"There was an error loading data."})})),e.abrupt("return");case 30:return e.prev=30,e.next=33,(0,c.OP)(X.sel_province.label,o);case 33:p=e.sent,f=[],(b=p.map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)===n}))).forEach((function(e,n){f.push({id:n,label:e,disabled:!u.includes(e)})})),ue.current&&(m=0===b.length?{id:"novalues",label:"No crop types for ".concat(o)}:null,F(O({},X,{sel_municipality:r,sel_crop:m,sel_stage:[],sel_activity:[],sel_month:null,loading:!1,error:""})),Q((function(e){return f})),T((function(e){return p}))),e.next=43;break;case 40:e.prev=40,e.t2=e.catch(30),F((function(n){return O({},n,{loading:!1,error:e.t2.message})}));case 43:return e.abrupt("break",62);case 44:return F(O({},X,{sel_crop:r,sel_stage:[],sel_activity:[],sel_month:null})),v=[],P.filter((function(e){return e.crop===o&&e.province===X.sel_province.label&&e.municipality===X.sel_municipality.label})).forEach((function(e){ie.forEach((function(n){""===e[n.id]||v.includes(n.id)||v.push(n.id)}))})),_=S(ie),ie.forEach((function(e,n){_[n].disabled=!v.includes(e.id)})),ae(_),e.abrupt("break",62);case 51:return h=V[X.sel_province.label][r.id],y=h.label,g=h.val,w=h.format,E=[],R=[],P.forEach((function(e,n){var t=Object.values(d.re).find((function(e){return e.format===r.label})).code;if(""!==e[t]&&e.crop===X.sel_crop.label)for(var i=function(e){a[e].length>0&&!E.includes(a[e])&&(E.push(a[e]),C.filter((function(n){return n.stage===d.MZ[a[e].toUpperCase()]&&("Rice"===X.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(n.crop):n.crop===X.sel_crop.label)})).map((function(e){return e.activity})).filter((function(e,n,t){return t.indexOf(e)==n})).length>0&&R.push({id:R.length,label:d.MZ[a[e].toUpperCase()]}))},a=e[t].split(","),o=0;o<a.length;o+=1)i(o)})),N=C.filter((function(e){return R.map((function(e){return e.label})).includes(e.stage)&&("Rice"===X.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===X.sel_crop.label)})).map((function(e){return{activity:e.activity,stage:e.stage}})).filter((function(e,n,t){return t.map((function(e){return e.activity})).indexOf(e.activity)===n})),M=N.reduce((function(e,n,t){return e.includes(n.activity)||e.push({id:t,label:n.activity,stage:n.stage}),S(e)}),[]),F(O({},X,{sel_month:r,sel_stage:R,sel_activity:M,sel_condition:{id:g,format:w,label:y}})),x=C.filter((function(e){return M.map((function(e){return e.label})).includes(e.activity)&&R.map((function(e){return e.label})).includes(e.stage)&&("Rice"===X.sel_crop.label?["Irrigated Rice","Rainfed Rice"].includes(e.crop):e.crop===X.sel_crop.label)})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(y){case d.MW.BELOW_NORMAL.label:case d.MW.NEAR_NORMAL.label:return JSON.parse(e.normal).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}));case d.MW.ABOVE_NORMAL.label:return JSON.parse(e.wetter).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}));case d.MW.WAY_BELOW_NORMAL.label:return JSON.parse(e.drier).map((function(e){return{id:t.mains.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return t.subs.find((function(n){return n.id===e})).description}))}}))}},smsRecommendations:function(){var n="".concat(se(y),"_sms");return void 0!==e[n]?t.sms.find((function(t){return t.id===e[n]})).description:""}}})),Z(x),e.abrupt("break",62);case 61:return e.abrupt("break",62);case 62:e.next=65;break;case 64:"province"===a?(F(A),K([]),Q([])):"municipality"===a?(F(O({},X,{sel_municipality:null,sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})),Q([])):"crop"===a?F(O({},X,{sel_crop:null,sel_stage:[],sel_activity:[],sel_month:null})):"month"===a&&F(O({},X,{sel_month:null,sel_stage:[],sel_activity:[]}));case 65:case"end":return e.stop()}}),e,null,[[14,24],[30,40]])})));return function(n,t){return e.apply(this,arguments)}}(),fe=function(){var e=y(i().mark((function e(){var n,t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F((function(e){return O({},e,{loading:!0,error:"",success:""})})),n=Object.values(d.re).find((function(e){return e.format===X.sel_month.label})).code,e.prev=2,t={region:"bicol",province:X.sel_province.label,municipality:X.sel_municipality.label,crop:X.sel_crop.label,month:n,stages:X.sel_stage.map((function(e){return e.label})),activities:X.sel_activity.map((function(e){return e.label})),operation:"create"},F((function(e){return O({},e,{loading:!0,error:""})})),e.next=7,(0,p.Zn)(t);case 7:r=e.sent,F((function(e){return O({},e,{loading:!1,success:"Bulletin report created."})})),le(O({},N,{savesuccess:!0,docId:r.id})),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),a="",void 0!==e.t0.response&&(a=void 0!==e.t0.response.data&&"[object Blob]"===E(e.t0.response.data)?e.t0.response.data:""),""===a&&(a=e.t0.message),F((function(e){return O({},e,{loading:!1,error:a})}));case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=y(i().mark((function e(){var n,t,r,a,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===ne.url){e.next=3;break}return le(O({},N,{preview:!0})),e.abrupt("return");case 3:return F((function(e){return O({},e,{loading:!0,error:"",success:""})})),n=Object.values(d.re).find((function(e){return e.format===X.sel_month.label})).code,e.prev=5,t={region:"bicol",province:X.sel_province.label,municipality:X.sel_municipality.label,crop:X.sel_crop.label,month:n,stages:X.sel_stage.map((function(e){return e.label})),activities:X.sel_activity.map((function(e){return e.label})),operation:"preview"},le(O({},N,{preview:!0})),F((function(e){return O({},e,{loading:!0,error:""})})),e.next=11,(0,p.pl)(t);case 11:r=e.sent,a=new Blob([r],{type:"application/pdf"}),(o={}).href=URL.createObjectURL(a),o.download="".concat(X.sel_province.label,"_").concat(X.sel_municipality.label,"-").concat(X.sel_crop.label,".pdf"),te((function(e){return O({},e,{url:o.href,filename:o.download})})),F((function(e){return O({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=26;break;case 20:e.prev=20,e.t0=e.catch(5),c="",void 0!==e.t0.response&&(c=void 0!==e.t0.response.data&&"[object Blob]"===E(e.t0.response.data)?e.t0.response.data:""),""===c&&(c=e.t0.message),F((function(e){return O({},e,{loading:!1,error:c})}));case 26:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(){return e.apply(this,arguments)}}();return(0,a.jsx)(v.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:d.DW.ADMIN,children:(0,a.jsx)(m.Z,{sel_options:X,open:ce,provinces:R,recommendations:D,optsmunicipalities:H,optscrops:z,optsmonths:ie,pdfPreview:ne,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:pe,handlePreview:de,handleSave:fe,toggleViewerOpen:function(){le((function(e){return!e}))}})})}))}},function(e){e.O(0,[3135,9669,3203,6572,3728,8152,113,6529,9774,2888,179],(function(){return n=5326,e(e.s=n);var n}));var n=e.O();_N_E=n}]);