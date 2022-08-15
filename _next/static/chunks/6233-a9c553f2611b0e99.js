"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6233],{9132:function(n,e){e.Z={tablecontainer:{marginTop:function(n){return n.spacing(1)},border:function(n){return"1px solid ".concat(n.palette.bacap.border)},borderRadius:function(n){return n.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(n){return n.spacing(4)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(n){return n.palette.secondary.light}},legend:{margin:function(n){return n.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"center"},"& ul":{listStyle:"none","& li":{float:"left",marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},caption:{color:function(n){return n.palette.text.secondary},"& a":{color:function(n){return n.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(n){return n.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}}},2509:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(5893),o=t(1163),a=t(7357),c=t(7906),i=t(295),s=t(3252),u=t(2882),l=t(3184),f=t(3816),d=t(5861),p=t(1033),h=t(8078),x={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var b=function(n){var e=n.rows,t=void 0===e?3:e,o=n.cols,c=void 0===o?3:o;return(0,r.jsx)(a.Z,{sx:x.container,children:Array.from(Array(t).keys()).map((function(n,e){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(c).keys()).map((function(n,e){return(0,r.jsx)(h.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/c),"%")}},"col-".concat(e))}))},"row-".concat(e))}))})},y=t(7426),g=t(9132);var m=function(n){var e=n.weatherData,t=n.provinces,h=n.withBorder,x=void 0!==h&&h,m=n.fsLoading,v=void 0===m||m,w=(0,o.useRouter)(),j=function(n){var e="";try{e=t.filter((function(e){return e.province===n}))[0].format}catch(r){e="n/a"}return e},S=function(n){var e=n.children;return x?(0,r.jsx)(u.Z,{sx:g.Z.tablecontainer,children:e}):(0,r.jsx)(u.Z,{children:e})};return(0,r.jsx)("div",{children:v?(0,r.jsx)(b,{rows:7,cols:7}):e.length>0?(0,r.jsxs)(S,{children:[(0,r.jsxs)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(l.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(s.Z,{sx:{width:"20%"},children:"Province"}),e[0].mos.map((function(n,e){return(0,r.jsx)(s.Z,{sx:{textAlign:"center"},children:"".concat(n[0].toUpperCase()).concat(n.slice(1))},"".concat(n,"-").concat(e))}))]})}),(0,r.jsx)(i.Z,{children:e.map((function(n){return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(s.Z,{children:j(n.name)}),n.months.map((function(n,e){return(0,r.jsx)(s.Z,{sx:{backgroundColor:y.tN[n.con],border:"1px solid #000",textAlign:"center",fontSize:"14px",padding:"10px",color:["wetter","drier"].includes(n.con)?"#fff":"#000"},children:n.val},"".concat(n.mo,"-").concat(e))}))]},n.name)}))})]}),(0,r.jsxs)(a.Z,{sx:g.Z.legend,children:[(0,r.jsxs)(d.Z,{component:"p",variant:"caption",sx:g.Z.caption,children:["Encoded from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal (Rainfall) Forecast"})," web page",(0,r.jsx)("br",{}),"by ","/admin/weather"===w.pathname?e[0].updated_by:"an admin"," on \xa0",e[0].date_created.toDate().toDateString()]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:y.tN[y.MW.NORMAL.label]}}),y.MW.NORMAL.sync]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:y.tN[y.MW.DRIER.label]}}),y.MW.DRIER.sync]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:y.tN[y.MW.WETTER.label]}}),y.MW.WETTER.sync]})]})]})]}):(0,r.jsx)(p.Z,{})})}},1033:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(5893),o=t(5675),a=t(7357),c=t(5861),i=t(120),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var u=function(n){var e=n.message,t=void 0===e?"Failed to load data":e;return(0,r.jsxs)(a.Z,{sx:s.container,children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,i.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:i.imageLoader,alt:"Empty data"}),(0,r.jsx)(c.Z,{variant:"subtitle1",children:t})]})}},1234:function(n,e,t){t.d(e,{vx:function(){return o},cp:function(){return a}});var r=new(t(560).D),o=(r.getWeatherForecast.bind(r),r.getSeasonalMonths.bind(r),r.getTenDayStats.bind(r)),a=r.getTenDayProvince.bind(r)},560:function(n,e,t){t.d(e,{M:function(){return g},D:function(){return m}});var r=t(4051),o=t.n(r),a=t(4763);function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n,e,t,r,o,a,c){try{var i=n[a](c),s=i.value}catch(u){return void t(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function c(n){i(a,r,o,c,s,"next",n)}function s(n){i(a,r,o,c,s,"throw",n)}c(void 0)}))}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},d(n)}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){f(n,e,t[e])}))}return n}function h(n,e){return!e||"object"!==b(e)&&"function"!==typeof e?c(n):e}function x(n,e){return x=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},x(n,e)}var b=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=d(n);if(e){var o=d(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return h(this,t)}}var g={WEATHER_FORECASTS:"weather_forecasts",SUB_SEASONAL:"seasonal",SUB_TEN_DAY:"ten_day"},m=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&x(n,e)}(i,n);var e,t,r,a=y(i);function i(){var n;u(this,i);var e=c(n=a.apply(this,arguments));return f(c(n),"getWeatherForecast",function(){var n=s(o().mark((function n(t,r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getNestedCollectionData(g.WEATHER_FORECASTS,t,r,"name");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),n}return e=i,(t=[{key:"getSeasonalMonths",value:function(){var n=this;return s(o().mark((function e(){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query(n.collection(n.db,g.WEATHER_FORECASTS,"bicol","seasonal"),n.orderBy("name"),n.limit(1)),e.next=3,n.getDocs(t);case 3:return r=e.sent,a=r.docs.map((function(n){return p({},n.data())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}},{key:"getTenDayStats",value:function(){var n=this;return s(o().mark((function e(){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query(n.collection(n.db,g.WEATHER_FORECASTS,"bicol","ten_day"),n.orderBy("name"),n.limit(1)),e.next=3,n.getDocs(t);case 3:return r=e.sent,a=r.docs.map((function(n){return p({},n.data())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}},{key:"getTenDayProvince",value:function(n){var e=this;return s(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query(e.collection(e.db,g.WEATHER_FORECASTS,"bicol","ten_day"),e.where("name","==",n)),t.next=3,e.getDocs(r);case 3:return a=t.sent,t.abrupt("return",a.docs.map((function(n){return p({},n.data())})));case 5:case"end":return t.stop()}}),t)})))()}}])&&l(e.prototype,t),r&&l(e,r),i}(a.Z)}}]);