"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6454],{7682:function(t,e,r){r.d(e,{ky:function(){return l},Kx:function(){return v},m$:function(){return h},tl:function(){return d}});var n=r(4051),u=r.n(n),c=r(7294),a=r(5321),o=r(5152);function s(t,e,r,n,u,c,a){try{var o=t[c](a),s=o.value}catch(i){return void r(i)}o.done?e(s):Promise.resolve(s).then(n,u)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var c=t.apply(e,r);function a(t){s(c,n,u,a,o,"next",t)}function o(t){s(c,n,u,a,o,"throw",t)}a(void 0)}))}}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){f(t,e,r[e])}))}return t}function l(t,e){var r=(0,c.useState)(null),n=r[0],s=r[1],f=(0,c.useState)(!0),p=f[0],l=f[1],v=(0,c.useState)(""),h=v[0],d=v[1],b=(0,c.useRef)(!0);return(0,c.useEffect)((function(){var r=function(){var r=i(u().mark((function r(){var n,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=(0,a.JU)(o.db,t,e),r.next=4,(0,a.QT)(n);case 4:(c=r.sent).exists()&&b.current&&(s(c.data()),l(!1)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),d(r.t0.message),l(!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return b.current=!1}}),[t,e]),[n,p,h]}function v(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=(0,c.useState)([]),s=n[0],f=n[1],l=(0,c.useState)(!0),v=l[0],h=l[1],d=(0,c.useState)(""),b=d[0],y=d[1],g=(0,c.useRef)(!0);return(0,c.useEffect)((function(){var n=function(){var n=i(u().mark((function n(){var c,s,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=(0,a.hJ)(o.db,t),s=r||(0,a.IO)(c,(0,a.Xo)(e,"asc")),n.next=5,(0,a.PL)(s);case 5:i=n.sent,g.current&&(f(i.docs.map((function(t){return p({},t.data())}))),h(!1)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),y(n.t0.message),h(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return g.current=!1}}),[t,e,r]),{documents:s,loading:v,error:b}}function h(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=(0,c.useState)([]),f=s[0],l=s[1],v=(0,c.useState)(!0),h=v[0],d=v[1],b=(0,c.useState)(""),y=b[0],g=b[1],m=(0,c.useRef)(!0);return(0,c.useEffect)((function(){var c=function(){var c=i(u().mark((function c(){var s,i;return u().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,s=(0,a.IO)((0,a.hJ)(o.db,t,e,r),(0,a.Xo)(n)),u.next=4,(0,a.PL)(s);case 4:i=u.sent,m.current&&(l(i.docs.map((function(t){return p({},t.data())}))),d(!1)),u.next=12;break;case 8:u.prev=8,u.t0=u.catch(0),g(u.t0.message),d(!1);case 12:case"end":return u.stop()}}),c,null,[[0,8]])})));return function(){return c.apply(this,arguments)}}();return c(),function(){return m.current=!1}}),[t,e,r,n]),{documents:f,loading:h,error:y}}function d(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4?arguments[4]:void 0,f=(0,c.useState)([]),l=f[0],v=f[1],h=(0,c.useState)(!0),d=h[0],b=h[1],y=(0,c.useState)(""),g=y[0],m=y[1],S=(0,c.useRef)(!0);return(0,c.useEffect)((function(){var c=function(){var c=i(u().mark((function c(){var i,f;return u().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,i=(0,a.hJ)(o.db,t,e,r),""!==n&&(i=(0,a.IO)(i,(0,a.Xo)(n))),s&&(i=(0,a.IO)(i,(0,a.b9)(s))),u.next=6,(0,a.PL)(i);case 6:f=u.sent,S.current&&(v(f.docs.map((function(t){return p({},t.data())}))),b(!1)),u.next=14;break;case 10:u.prev=10,u.t0=u.catch(0),m(u.t0.message),b(!1);case 14:case"end":return u.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();return c(),function(){return S.current=!1}}),[t,e,r,n,s]),{documents:l,loading:d,error:g}}},1029:function(t,e,r){r.d(e,{K:function(){return g},d:function(){return m}});var n=r(4051),u=r.n(n),c=r(4763),a=r(5152),o=r(7426);function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e,r,n,u,c,a){try{var o=t[c](a),s=o.value}catch(i){return void r(i)}o.done?e(s):Promise.resolve(s).then(n,u)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var c=t.apply(e,r);function a(t){i(c,n,u,a,o,"next",t)}function o(t){i(c,n,u,a,o,"throw",t)}a(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function h(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?s(t):e}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var b=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v(t);if(e){var u=v(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return h(this,r)}}var g={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(r,t);var e=y(r);function r(){var t;p(this,r);var n=s(t=e.apply(this,arguments));l(s(t),"getPageMediaAssets",function(){var t=f(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.prev=1,t.next=4,n.getCollectionData(g.MEDIA_ASSETS,"filename");case 4:r=t.sent,t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(1),console.error(t.t0.message),new Error(t.t0.message);case 11:return t.abrupt("return",r.length>0?r.filter((function(t){return t.page===e})).map((function(t){return t.url})):r);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}());var c=s(t);l(s(t),"getPageAssetsDoc",function(){var t=f(u().mark((function t(e,r){var n,a,o=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],a=[],t.prev=2,t.next=5,c.getDocumentData(g.ASSETS,e);case 5:if(a=t.sent){t.next=8;break}return t.abrupt("return",[]);case 8:if(!n){t.next=12;break}return t.abrupt("return",a.data.filter((function(t){return t.page===r})));case 12:return t.abrupt("return",a.data.filter((function(t){return t.page===r})).map((function(t){return t.url})));case 13:t.next=19;break;case 15:throw t.prev=15,t.t0=t.catch(2),console.error(t.t0.message),new Error(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e,r){return t.apply(this,arguments)}}());var i=s(t);l(s(t),"getTyphoonAdvisory",f(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.doc(i.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),t.next=3,i.getDoc(e);case 3:if(!(r=t.sent).exists()){t.next=6;break}return t.abrupt("return",r.data());case 6:return t.abrupt("return",null);case 7:case"end":return t.stop()}}),t)}))));var v=s(t);return l(s(t),"getWeatherForecast",function(){var t=f(u().mark((function t(e,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getNestedCollectionData(g.WEATHER_FORECASTS,e,r,"name");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),l(s(t),"getPdfDownloadURL",function(){var t=f(u().mark((function t(e){var r,n,c,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:o.Ry.SEASONAL,n=r===o.Ry.SEASONAL?o.Do.PDF_STORAGE_SEASONAL:o.Do.PDF_STORAGE_TENDAY,t.prev=2,c=(0,a.iH)(a.tO,"".concat(n,"/").concat(e)),t.next=6,(0,a.Jt)(c);case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(2),new Error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()),t}return r}(c.Z)}}]);