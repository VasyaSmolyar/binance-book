(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{56:function(e,t,n){var l=n(57);"string"==typeof l&&(l=[[e.i,l,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(l,a);l.locals&&(e.exports=l.locals)},57:function(e,t,n){(e.exports=n(30)(!1)).push([e.i,".table-responsive {\n    height: 80vh;\n    overflow-y: hidden;\n}\n\n.table-responsive:hover {\n    overflow-y: scroll;\n}\n\nthead tr:nth-child(1) th {\n    background: white;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n}\n\n@media all and (max-device-width: 600px) {\n    h1 {\n        font-size: 18px;\n    }\n\n    th, tr, td { \n       font-size: 10px; \n    }\n    .table td, .table th {\n        padding: 5px;\n    }\n}",""])},67:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(22),o=n(68),c=n(3),u=(n(56),n(58));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],l=!0,a=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(l=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==c.return||c.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=Object(l.useContext)(r.b),t=i(Object(l.useState)([]),2),n=t[0],s=t[1],d=i(Object(l.useState)(""),2),m=d[0],E=d[1],b=Object(c.f)(),h=n.map((function(e){var t=e.bid,n=e.ask;return u.isMobile?a.a.createElement("tr",null,a.a.createElement("td",null,t[1]),a.a.createElement("td",null,t[0]),a.a.createElement("td",null,n[1]),a.a.createElement("td",null,n[0])):a.a.createElement("tr",null,a.a.createElement("td",null,t[1]),a.a.createElement("td",null,t[0]),a.a.createElement("td",null,t[0]*t[1]),a.a.createElement("td",null,n[1]),a.a.createElement("td",null,n[0]),a.a.createElement("td",null,n[0]*n[1]))}));return Object(l.useEffect)((function(){if(void 0===e.binance)return console.log("BIN IS NOT LOADED"),void console.log(e);var t=e.bus.read("symbol");return E(t),e.binance.getBook(t,(function(e){console.log(e)})),e.bus.subscribe("book",(function(e){var t=e.bids.map((function(t,n){return{bid:t,ask:e.asks[n]}}));s(t)})),function(){e.bus.unsubscribe("book")}}),[b]),a.a.createElement("div",null,a.a.createElement("h1",null,m),a.a.createElement(u.BrowserView,null,a.a.createElement("div",{className:"table-responsive"},a.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Amount"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Total"),a.a.createElement("th",null,"Amount"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Total"))),a.a.createElement("tbody",null,h)))),a.a.createElement(u.MobileView,null,a.a.createElement("div",{className:"table-responsive"},a.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Amount"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Amount"),a.a.createElement("th",null,"Price"))),a.a.createElement("tbody",null,h)))))}}}]);