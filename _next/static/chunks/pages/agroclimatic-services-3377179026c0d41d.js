(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7741:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agroclimatic-services",function(){return t(599)}])},599:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return E},default:function(){return P}});var r=t(4051),i=t.n(r),l=t(5893),a=t(7294),o=t(7467),c=t(7720),s=t(1903),u=t(6295),p=t(5861),d=t(6886),f=t(6872),b=t(2890),m=t(480),h=t(4054),v=t(4854);var _=function(e){var n=e.value,t=e.handleChange;return(0,l.jsx)(h.Z,{children:(0,l.jsxs)(b.Z,{"aria-labelledby":"weather-condition-group-label",value:n,onChange:t,name:"weather-condition-group",id:"weather_condition",children:[(0,l.jsx)(m.Z,{value:v.MW.NORMAL,control:(0,l.jsx)(f.Z,{}),label:"Normal"}),(0,l.jsx)(m.Z,{value:v.MW.WETTER,control:(0,l.jsx)(f.Z,{}),label:"Wetter"}),(0,l.jsx)(m.Z,{value:v.MW.DRIER,control:(0,l.jsx)(f.Z,{}),label:"Drier"})]})})};var g=function(e){var n=e.onSelectWeather,t=e.value;return(0,l.jsx)(_,{value:t,handleChange:function(e){var t=e.target.value;n(e,{label:t,from:"weather_condition",id:0})}})},x={container:{marginTop:function(e){return e.spacing(3)},minHeight:"400px"},controls:{marginTop:function(e){return e.spacing(6)}},selectContainer:{borderRight:{xs:"none",md:"1px solid gray"}},recsContainer:{paddingLeft:{sm:"none",md:"54px !important"}},autocomplete:{maxWidth:{sm:"100%",md:"310px"},marginBottom:function(e){return e.spacing(3)},marginTop:function(e){return e.spacing(1)}}};function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}var S=function(e){var n=e.sel_options,t=e.provinces,r=e.recommendations,i=e.setWeatherCondition,a=e.onSelectItemChange,o=e.optsmunicipalities,f=e.optscrops,b=e.optscropstages,m=e.optsactivities,h=e.optsmonths,v=function(){var e="Loading...";return t.length>0&&(e=null===n.sel_province?"Select a province":"Province"),e};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{variant:"h4",children:"Agroclimatic Service"}),(0,l.jsx)(p.Z,{variant:"label",children:"Crop Recommendations"}),(0,l.jsxs)(d.ZP,{container:!0,spacing:2,sx:x.container,children:[(0,l.jsxs)(d.ZP,{item:!0,xs:12,md:4,sx:x.selectContainer,children:[(0,l.jsx)(p.Z,{variant:"subtitle2",children:"Select Parameters"}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"province",disabled:0===t.length,options:t,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:v()}))},onChange:function(e,n){return a(e,j({},n,{from:"province"}))}}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"municipality",value:n.sel_municipality,disabled:0===o.length,options:o,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:null===n.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,j({},n,{from:"municipality"}))}}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"crop",value:n.sel_crop,disabled:0===f.length,options:f,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:null===n.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,j({},n,{from:"crop"}))}}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"month",value:n.sel_month,disabled:0===h.length||null===n.sel_crop,options:h,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:null===n.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,j({},n,{from:"month"}))}}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"cropstage",value:n.sel_stage,disabled:0===b.length,options:b,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:null===n.sel_stage?"Select a crop stage":"Crop Stage"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,j({},n,{from:"cropstage"}))}}),(0,l.jsx)(u.Z,{disablePortal:!0,id:"activity",value:n.sel_activity,disabled:0===m.length,options:m,sx:x.autocomplete,renderInput:function(e){return(0,l.jsx)(s.Z,j({},e,{label:null===n.sel_activity?"Select an activity":"Activity"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,j({},n,{from:"activity"}))}}),(0,l.jsx)("br",{}),(0,l.jsx)(c.Z,{}),(0,l.jsx)("br",{}),(0,l.jsx)(p.Z,{variant:"subtitle2",children:"Weather Condition (Temporary Selection)"}),(0,l.jsx)(g,{onSelectWeather:i,value:n.sel_condition.label})]}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:8,sx:x.recsContainer,children:(0,l.jsxs)("div",{children:[null!==n.sel_crop&&null!==n.sel_activity&&(0,l.jsxs)(p.Z,{variant:"h5",children:[n.sel_crop.label," Recommendations"]}),r.length>0&&r.map((function(e,t){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"".concat(n.sel_condition.label.charAt(0).toUpperCase()).concat(n.sel_condition.label.slice(1))}),e.recommendations().map((function(e,n){return e.ul?(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e.id}),e.subs.length>0&&(0,l.jsx)("ul",{children:e.subs.map((function(e,n){return(0,l.jsx)("li",{children:e},"sub-".concat(t,"-").concat(n))}))})]},"main-".concat(t,"-").concat(n)):(0,l.jsx)("p",{children:e.id},"main-".concat(t,"-").concat(n))}))]},"rec-".concat(t))}))]})})]})]})};function O(e,n,t,r,i,l,a){try{var o=e[l](a),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,i)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function a(e){O(l,r,i,a,o,"next",e)}function o(e){O(l,r,i,a,o,"throw",e)}a(void 0)}))}}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}var k={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null,sel_condition:{id:0,from:"weather_condition",label:v.MW.DRIER}};var E=!0,P=function(e){var n=e.municipalities,t=void 0===n?[]:n,r=(0,a.useState)([]),c=r[0],s=r[1],u=(0,a.useState)([]),p=u[0],d=u[1],f=(0,a.useState)([]),b=f[0],m=f[1],h=(0,a.useState)([]),_=h[0],g=h[1],x=(0,a.useState)([]),y=x[0],j=x[1],O=(0,a.useState)([]),E=O[0],P=O[1],W=(0,a.useState)([]),N=W[0],T=W[1],M=(0,a.useState)([]),R=M[0],I=M[1],D=(0,a.useState)(k),V=D[0],q=D[1],A=(0,a.useState)([]),L=A[0],U=A[1],J=(0,a.useState)([]),G=J[0],X=J[1],B=(0,a.useState)([]),F=B[0],H=B[1],K=(0,a.useState)([]),$=K[0],z=K[1],Q=(0,a.useState)([]),Y=Q[0],ee=Q[1];(0,a.useEffect)((function(){var e=function(){var e=w(i().mark((function e(){var n,r,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Promise.all([(0,o.Mw)(),(0,o.Ob)(),(0,o.GV)("bicol","seasonal")]);case 5:n=e.sent,m((function(e){return n[0]})),g((function(e){return n[1]})),I((function(e){return n[2][0].mos})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.message);case 14:try{r={},l=[],t.forEach((function(e,n){void 0===r[e.province]?(l.push({id:n,label:e.province}),r[e.province]=[{id:0,label:e.name}]):r[e.province].push({id:r[e.province].length,label:e.name})})),d((function(e){return r})),s((function(e){return l}))}catch(i){console.error(i.message)}case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return!0}}),[t]);var ne=function(){var e=w(i().mark((function e(n,t){var r,l,a,c,s,u,d,f,m,h,g,x,S,O,w;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.from,l=t.label,T([]),!Object.keys(t).includes("id")){e.next=78;break}e.t0=r,e.next="province"===e.t0?6:"municipality"===e.t0?13:"crop"===e.t0?42:"month"===e.t0?47:"cropstage"===e.t0?54:"activity"===e.t0||"weather_condition"===e.t0?60:75;break;case 6:return q(Z({},V,{sel_province:t,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),U(p[l]),X([]),ee([]),H([]),z([]),e.abrupt("break",76);case 13:return q(Z({},V,{sel_municipality:t,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),ee([]),H([]),z([]),e.prev=17,e.next=20,(0,o.$K)(V.sel_province.label,l);case 20:a=e.sent,j((function(e){return a})),c=[],a.map((function(e){return e.crop})).filter((function(e,n,t){return t.indexOf(e)==n})).forEach((function(e,n){c.push({id:n,label:e})})),X((function(e){return c})),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1.message);case 31:return e.prev=31,e.next=34,(0,o.OP)(V.sel_province.label,l);case 34:s=e.sent,P((function(e){return s})),e.next=41;break;case 38:e.prev=38,e.t2=e.catch(31),console.error(e.t2.message);case 41:return e.abrupt("break",76);case 42:q(Z({},V,{sel_crop:t,sel_stage:null,sel_activity:null,sel_month:null})),H([]),z([]);try{u=[],d=[],E.forEach((function(e,n){for(var t=0;t<R.length;t+=1)""!==e[R[t]]&&(u.includes(R[t])||(u.push(R[t]),d.push({id:v.re[R[t].toUpperCase()].code,label:v.re[R[t].toUpperCase()].format})))})),0===d.length&&d.push({id:0,label:"n/a"}),ee(d)}catch(n){console.error(n.message)}return e.abrupt("break",76);case 47:return q(Z({},V,{sel_month:t,sel_stage:null,sel_activity:null})),z([]),f=[],m=[],E.forEach((function(e,n){var r=Object.values(v.re).find((function(e){return e.format===t.label})).code;if(""!==e[r])for(var i=e[r].split(","),l=0;l<i.length;l+=1)f.includes(i[l])||(f.push(i[l]),m.push({id:m.length,label:v.MZ[i[l].toUpperCase()]}))})),H(m),e.abrupt("break",76);case 54:return h=[],g=y.filter((function(e){return e.stage===l&&e.crop===V.sel_crop.label})).map((function(e){return e.activity})).filter((function(e,n,t){return t.indexOf(e)==n})),q(Z({},V,{sel_stage:t,sel_activity:null})),g.forEach((function(e,n){h.push({id:n,label:e})})),z((function(e){return h})),e.abrupt("break",76);case 60:if("weather_condition"!==r){e.next=69;break}q(Z({},V,{sel_condition:t})),e.t3=regeneratorRuntime.keys(V);case 63:if((e.t4=e.t3()).done){e.next=69;break}if(x=e.t4.value,null!==V[x]||"weather_condition"===x){e.next=67;break}return e.abrupt("return");case 67:e.next=63;break;case 69:return S="weather_condition"===r?l:V.sel_condition.label,O="activity"===r?l:V.sel_activity.label,w=y.filter((function(e){return e.activity===O&&e.stage===V.sel_stage.label&&e.crop===V.sel_crop.label})).map((function(e){return{province:e.province,municipality:e.municipality,crop:e.crop,stage:e.stage,activity:e.activity,recommendations:function(){switch(S){case v.MW.NORMAL:return JSON.parse(e.normal).map((function(e){return{id:b.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return _.find((function(n){return n.id===e})).description}))}}));case v.MW.WETTER:return JSON.parse(e.wetter).map((function(e){return{id:b.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return _.find((function(n){return n.id===e})).description}))}}));case v.MW.DRIER:return JSON.parse(e.drier).map((function(e){return{id:b.find((function(n){return n.id===e.id})).description,ul:e.ul,subs:e.subs.map((function(e){return _.find((function(n){return n.id===e})).description}))}}))}}}})),"activity"===r&&q(Z({},V,{sel_activity:t})),T(w),e.abrupt("break",76);case 75:return e.abrupt("break",76);case 76:e.next=79;break;case 78:"province"===r?(q(k),U([]),X([]),H([]),z([])):"municipality"===r?(q(Z({},V,{sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),X([]),ee([]),H([]),z([])):"crop"===r?(q(Z({},V,{sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null})),H([]),z([])):"month"===r?(q(Z({},V,C({sel_month:null,sel_stage:null,sel_activity:null},"sel_activity",null))),H([]),z([])):"cropstage"===r?(q(Z({},V,{sel_stage:null,sel_activity:null})),z([])):"activity"===r&&q(Z({},V,{sel_activity:null}));case 79:case"end":return e.stop()}}),e,null,[[17,28],[31,38]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,l.jsx)(S,{sel_options:V,provinces:c,recommendations:N,optsmunicipalities:L,optscrops:G,optscropstages:F,optsactivities:$,optsmonths:Y,conditions:[{id:"norm",label:"Normal Conditions"},{id:"wet",label:"Wetter than Normal Conditions"},{id:"dry",label:"Drier than Normal Conditions"}],onSelectItemChange:ne,setWeatherCondition:function(e,n){q(Z({},V,{sel_condition:n.label})),ne(null,n)}})}}},function(e){e.O(0,[46,903,295,250,785,774,888,179],(function(){return n=7741,e(e.s=n);var n}));var n=e.O();_N_E=n}]);