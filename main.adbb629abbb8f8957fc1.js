!function(e){function t(t){for(var r,l,u=t[0],o=t[1],c=t[2],d=0,f=[];d<u.length;d++)l=u[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&f.push(s[l][0]),s[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(i&&i(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==s[o]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},s={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=o;a.push([296,1]),n()}({296:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(297),n(298);var s=r(n(0)),a=n(21),l=n(303),u=r(n(99)),o=n(536),c=n(60),i=r(n(533)),d=n(91);u.default.defaults.baseURL="https://portfolio-1-server.herokuapp.com",u.default.defaults.headers.post["Content-Type"]="application/json",u.default.defaults.headers.post["Access-Control-Allow-Origin"]="https://g0tt0n.github.io",u.default.defaults.headers.post["Access-Control-Allow-Methods"]="GET, POST, PATCH, PUT, DELETE, OPTIONS",u.default.defaults.headers.post["Access-Control-Allow-Headers"]="Origin, X-Auth-Token,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";var f="object"==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):c.compose,j=c.createStore(o.rootReducer,f(c.applyMiddleware(i.default)));a.render(s.default.createElement(s.default.StrictMode,null,s.default.createElement(d.Provider,{store:j},s.default.createElement(l.App,null))),document.getElementById("root"))},298:function(e,t,n){},303:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n(304);var s=r(n(0)),a=n(98),l=n(309),u=n(310),o=n(311);t.App=function(){return s.default.createElement(a.HashRouter,null,s.default.createElement(o.Header,null),s.default.createElement(a.Switch,null,s.default.createElement(a.Route,{exact:!0,path:"/"},s.default.createElement(u.Home,null)),s.default.createElement(a.Route,{exact:!0,path:"/login"},s.default.createElement(l.Login,null))))}},304:function(e,t,n){},309:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;var s=r(n(0));t.Login=function(){return s.default.createElement("div",null,"login")}},310:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var s=r(n(0)),a=n(24);t.Home=function(){a.useHistory();return s.default.createElement("div",{className:"app__wrapper"},"HOME COMPONENT")}},311:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(312);var u=a(n(0)),o=n(91),c=n(314),i=l(n(99)),d=n(91),f=n(98),j=n(535),m=n(534);t.Header=function(){var e=o.useDispatch(),t=d.useSelector((function(e){return e.app.town})),n=u.useState([]),r=n[0],s=n[1];u.useEffect((function(){var t=localStorage.getItem("town");i.default.get("/townApi/getTownList").then((function(n){var r=n.data.map((function(e){return e.name}));e(t?c.changeTown(t):c.changeTown(r[0])),s(r)}))}),[]);var a=u.default.createElement(j.Menu,null,r.map((function(t){return u.default.createElement(j.Menu.Item,{key:t,onClick:function(){return function(t){e(c.changeTown(t)),localStorage.setItem("town",t)}(t)}},t)})));return u.default.createElement("div",{className:"app__wrapper"},u.default.createElement("p",null,document.documentElement.clientWidth),u.default.createElement("div",{className:"header_top"},u.default.createElement("div",{className:"header_top__town"},u.default.createElement(m.EnvironmentOutlined,null),u.default.createElement(j.Dropdown,{overlay:a,trigger:["click"]},u.default.createElement("p",null,t)),u.default.createElement(m.CaretDownOutlined,{className:"arrow-icon"})),u.default.createElement("ul",{className:"header_top__menu"},u.default.createElement("li",{className:"header_top__menu__item"},u.default.createElement(f.NavLink,{to:"/delivery"},"Доставка и оплата")),u.default.createElement("li",{className:"header_top__menu__item"},u.default.createElement(f.NavLink,{to:"/contacts"},"Магазины")),u.default.createElement("li",{className:"header_top__menu__item"},u.default.createElement("a",null,u.default.createElement(m.UserOutlined,null)," ",u.default.createElement("span",null,"Войти"))))))}},312:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t),n.d(t,"changeTown",(function(){return s}));var r=n(70);function s(e){return{type:r.a,payload:e}}},380:function(e,t,n){var r={"./af":113,"./af.js":113,"./ar":114,"./ar-dz":115,"./ar-dz.js":115,"./ar-kw":116,"./ar-kw.js":116,"./ar-ly":117,"./ar-ly.js":117,"./ar-ma":118,"./ar-ma.js":118,"./ar-sa":119,"./ar-sa.js":119,"./ar-tn":120,"./ar-tn.js":120,"./ar.js":114,"./az":121,"./az.js":121,"./be":122,"./be.js":122,"./bg":123,"./bg.js":123,"./bm":124,"./bm.js":124,"./bn":125,"./bn.js":125,"./bo":126,"./bo.js":126,"./br":127,"./br.js":127,"./bs":128,"./bs.js":128,"./ca":129,"./ca.js":129,"./cs":130,"./cs.js":130,"./cv":131,"./cv.js":131,"./cy":132,"./cy.js":132,"./da":133,"./da.js":133,"./de":134,"./de-at":135,"./de-at.js":135,"./de-ch":136,"./de-ch.js":136,"./de.js":134,"./dv":137,"./dv.js":137,"./el":138,"./el.js":138,"./en-au":139,"./en-au.js":139,"./en-ca":140,"./en-ca.js":140,"./en-gb":141,"./en-gb.js":141,"./en-ie":142,"./en-ie.js":142,"./en-il":143,"./en-il.js":143,"./en-in":144,"./en-in.js":144,"./en-nz":145,"./en-nz.js":145,"./en-sg":146,"./en-sg.js":146,"./eo":147,"./eo.js":147,"./es":148,"./es-do":149,"./es-do.js":149,"./es-us":150,"./es-us.js":150,"./es.js":148,"./et":151,"./et.js":151,"./eu":152,"./eu.js":152,"./fa":153,"./fa.js":153,"./fi":154,"./fi.js":154,"./fil":155,"./fil.js":155,"./fo":156,"./fo.js":156,"./fr":157,"./fr-ca":158,"./fr-ca.js":158,"./fr-ch":159,"./fr-ch.js":159,"./fr.js":157,"./fy":160,"./fy.js":160,"./ga":161,"./ga.js":161,"./gd":162,"./gd.js":162,"./gl":163,"./gl.js":163,"./gom-deva":164,"./gom-deva.js":164,"./gom-latn":165,"./gom-latn.js":165,"./gu":166,"./gu.js":166,"./he":167,"./he.js":167,"./hi":168,"./hi.js":168,"./hr":169,"./hr.js":169,"./hu":170,"./hu.js":170,"./hy-am":171,"./hy-am.js":171,"./id":172,"./id.js":172,"./is":173,"./is.js":173,"./it":174,"./it-ch":175,"./it-ch.js":175,"./it.js":174,"./ja":176,"./ja.js":176,"./jv":177,"./jv.js":177,"./ka":178,"./ka.js":178,"./kk":179,"./kk.js":179,"./km":180,"./km.js":180,"./kn":181,"./kn.js":181,"./ko":182,"./ko.js":182,"./ku":183,"./ku.js":183,"./ky":184,"./ky.js":184,"./lb":185,"./lb.js":185,"./lo":186,"./lo.js":186,"./lt":187,"./lt.js":187,"./lv":188,"./lv.js":188,"./me":189,"./me.js":189,"./mi":190,"./mi.js":190,"./mk":191,"./mk.js":191,"./ml":192,"./ml.js":192,"./mn":193,"./mn.js":193,"./mr":194,"./mr.js":194,"./ms":195,"./ms-my":196,"./ms-my.js":196,"./ms.js":195,"./mt":197,"./mt.js":197,"./my":198,"./my.js":198,"./nb":199,"./nb.js":199,"./ne":200,"./ne.js":200,"./nl":201,"./nl-be":202,"./nl-be.js":202,"./nl.js":201,"./nn":203,"./nn.js":203,"./oc-lnc":204,"./oc-lnc.js":204,"./pa-in":205,"./pa-in.js":205,"./pl":206,"./pl.js":206,"./pt":207,"./pt-br":208,"./pt-br.js":208,"./pt.js":207,"./ro":209,"./ro.js":209,"./ru":210,"./ru.js":210,"./sd":211,"./sd.js":211,"./se":212,"./se.js":212,"./si":213,"./si.js":213,"./sk":214,"./sk.js":214,"./sl":215,"./sl.js":215,"./sq":216,"./sq.js":216,"./sr":217,"./sr-cyrl":218,"./sr-cyrl.js":218,"./sr.js":217,"./ss":219,"./ss.js":219,"./sv":220,"./sv.js":220,"./sw":221,"./sw.js":221,"./ta":222,"./ta.js":222,"./te":223,"./te.js":223,"./tet":224,"./tet.js":224,"./tg":225,"./tg.js":225,"./th":226,"./th.js":226,"./tk":227,"./tk.js":227,"./tl-ph":228,"./tl-ph.js":228,"./tlh":229,"./tlh.js":229,"./tr":230,"./tr.js":230,"./tzl":231,"./tzl.js":231,"./tzm":232,"./tzm-latn":233,"./tzm-latn.js":233,"./tzm.js":232,"./ug-cn":234,"./ug-cn.js":234,"./uk":235,"./uk.js":235,"./ur":236,"./ur.js":236,"./uz":237,"./uz-latn":238,"./uz-latn.js":238,"./uz.js":237,"./vi":239,"./vi.js":239,"./x-pseudo":240,"./x-pseudo.js":240,"./yo":241,"./yo.js":241,"./zh-cn":242,"./zh-cn.js":242,"./zh-hk":243,"./zh-hk.js":243,"./zh-mo":244,"./zh-mo.js":244,"./zh-tw":245,"./zh-tw.js":245};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=380},536:function(e,t,n){"use strict";n.r(t),n.d(t,"rootReducer",(function(){return l}));var r=n(60),s=n(70);const a={town:""},l=Object(r.combineReducers)({app:(e=a,t)=>{switch(t.type){case s.a:return{...e,town:t.payload};default:return e}}})},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="CHANGE_TOWN"}});