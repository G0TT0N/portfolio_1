!function(e){function t(t){for(var r,l,o=t[0],u=t[1],i=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);f.length;)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},s=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var c=u;s.push([299,1]),n()}({101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SAVE_CURRENT_USER=t.CHANGE_TOWN=void 0,t.CHANGE_TOWN="CHANGE_TOWN",t.SAVE_CURRENT_USER="SAVE_CURRENT_USER"},299:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(300),n(301);var a=r(n(0)),s=n(21),l=n(306),o=r(n(255)),u=n(537),i=n(71),c=r(n(539)),d=n(60);o.default.defaults.baseURL="https://portfolio-1-server.herokuapp.com",o.default.defaults.headers.post["Content-Type"]="application/json",o.default.defaults.headers.post["Access-Control-Allow-Origin"]="https://g0tt0n.github.io",o.default.defaults.headers.post["Access-Control-Allow-Methods"]="GET, POST, PATCH, PUT, DELETE, OPTIONS",o.default.defaults.headers.post["Access-Control-Allow-Headers"]="Origin, X-Auth-Token,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";var f=i.compose,m=i.createStore(u.rootReducer,f(i.applyMiddleware(c.default)));s.render(a.default.createElement(a.default.StrictMode,null,a.default.createElement(d.Provider,{store:m},a.default.createElement(l.App,null))),document.getElementById("root"))},301:function(e,t,n){},306:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n(307);var a=r(n(0)),s=n(100),l=n(312),o=n(313),u=n(314),i=n(70),c=n(60),d=n(93),f=n(84);i.message.config({duration:2,maxCount:3,rtl:!0}),t.App=function(){var e=c.useDispatch(),t=localStorage.getItem("token");return t&&d.sendHttpReq("post","/authApi/checkToken",{prevToken:t}).then((function(t){t.data.userId?e(f.saveCurrentUser(t.data.userId)):localStorage.removeItem("token")})),a.default.createElement(s.HashRouter,null,a.default.createElement(u.Header,null),a.default.createElement(s.Switch,null,a.default.createElement(s.Route,{exact:!0,path:"/"},a.default.createElement(o.Home,null)),a.default.createElement(s.Route,{exact:!0,path:"/login"},a.default.createElement(l.Login,null))))}},307:function(e,t,n){},312:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;var a=r(n(0));t.Login=function(){return a.default.createElement("div",null,"login")}},313:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var a=r(n(0)),s=n(24);t.Home=function(){s.useHistory();return a.default.createElement("div",{className:"app__wrapper"},"HOME COMPONENT")}},314:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(315);var l=s(n(0)),o=n(60),u=n(84),i=n(60),c=n(100),d=n(70),f=n(519),m=n(93),p=n(540);t.Header=function(){var e=o.useDispatch(),t=i.useSelector((function(e){return e.app.town})),n=l.useState([]),r=n[0],a=n[1];l.useEffect((function(){var t=localStorage.getItem("town");m.sendHttpReq("get","/townApi/getTownList").then((function(n){var r=n.data.map((function(e){return e.name}));e(t?u.changeTown(t):u.changeTown(r[0])),a(r)}))}),[]);var s=l.default.createElement(d.Menu,null,r.map((function(t){return l.default.createElement(d.Menu.Item,{key:t,onClick:function(){return function(t){e(u.changeTown(t)),localStorage.setItem("town",t)}(t)}},t)}))),j=l.useState(!1),h=j[0],_=j[1];return l.default.createElement("div",{className:"app__wrapper"},l.default.createElement("div",{className:"header_top"},l.default.createElement("div",{className:"header_top__town"},l.default.createElement(p.EnvironmentOutlined,null),l.default.createElement(d.Dropdown,{overlay:s,trigger:["click"]},l.default.createElement("p",null,t)),l.default.createElement(p.CaretDownOutlined,{className:"arrow-icon"})),l.default.createElement("ul",{className:"header_top__menu"},l.default.createElement("li",{className:"header_top__menu__item"},l.default.createElement(c.NavLink,{to:"/delivery"},"Delivery and payment ")),l.default.createElement("li",{className:"header_top__menu__item"},l.default.createElement(c.NavLink,{to:"/contacts"},"Shops")),l.default.createElement("li",{className:"header_top__menu__item",onClick:function(){return _(!0)}},l.default.createElement("a",null,l.default.createElement(p.UserOutlined,null)," ",l.default.createElement("span",null,"Sign In"),l.default.createElement(f.AuthModal,{closeModal:function(){return _(!1)},visible:h}))))))}},315:function(e,t,n){},366:function(e,t,n){var r={"./af":107,"./af.js":107,"./ar":108,"./ar-dz":109,"./ar-dz.js":109,"./ar-kw":110,"./ar-kw.js":110,"./ar-ly":111,"./ar-ly.js":111,"./ar-ma":112,"./ar-ma.js":112,"./ar-sa":113,"./ar-sa.js":113,"./ar-tn":114,"./ar-tn.js":114,"./ar.js":108,"./az":115,"./az.js":115,"./be":116,"./be.js":116,"./bg":117,"./bg.js":117,"./bm":118,"./bm.js":118,"./bn":119,"./bn.js":119,"./bo":120,"./bo.js":120,"./br":121,"./br.js":121,"./bs":122,"./bs.js":122,"./ca":123,"./ca.js":123,"./cs":124,"./cs.js":124,"./cv":125,"./cv.js":125,"./cy":126,"./cy.js":126,"./da":127,"./da.js":127,"./de":128,"./de-at":129,"./de-at.js":129,"./de-ch":130,"./de-ch.js":130,"./de.js":128,"./dv":131,"./dv.js":131,"./el":132,"./el.js":132,"./en-au":133,"./en-au.js":133,"./en-ca":134,"./en-ca.js":134,"./en-gb":135,"./en-gb.js":135,"./en-ie":136,"./en-ie.js":136,"./en-il":137,"./en-il.js":137,"./en-in":138,"./en-in.js":138,"./en-nz":139,"./en-nz.js":139,"./en-sg":140,"./en-sg.js":140,"./eo":141,"./eo.js":141,"./es":142,"./es-do":143,"./es-do.js":143,"./es-us":144,"./es-us.js":144,"./es.js":142,"./et":145,"./et.js":145,"./eu":146,"./eu.js":146,"./fa":147,"./fa.js":147,"./fi":148,"./fi.js":148,"./fil":149,"./fil.js":149,"./fo":150,"./fo.js":150,"./fr":151,"./fr-ca":152,"./fr-ca.js":152,"./fr-ch":153,"./fr-ch.js":153,"./fr.js":151,"./fy":154,"./fy.js":154,"./ga":155,"./ga.js":155,"./gd":156,"./gd.js":156,"./gl":157,"./gl.js":157,"./gom-deva":158,"./gom-deva.js":158,"./gom-latn":159,"./gom-latn.js":159,"./gu":160,"./gu.js":160,"./he":161,"./he.js":161,"./hi":162,"./hi.js":162,"./hr":163,"./hr.js":163,"./hu":164,"./hu.js":164,"./hy-am":165,"./hy-am.js":165,"./id":166,"./id.js":166,"./is":167,"./is.js":167,"./it":168,"./it-ch":169,"./it-ch.js":169,"./it.js":168,"./ja":170,"./ja.js":170,"./jv":171,"./jv.js":171,"./ka":172,"./ka.js":172,"./kk":173,"./kk.js":173,"./km":174,"./km.js":174,"./kn":175,"./kn.js":175,"./ko":176,"./ko.js":176,"./ku":177,"./ku.js":177,"./ky":178,"./ky.js":178,"./lb":179,"./lb.js":179,"./lo":180,"./lo.js":180,"./lt":181,"./lt.js":181,"./lv":182,"./lv.js":182,"./me":183,"./me.js":183,"./mi":184,"./mi.js":184,"./mk":185,"./mk.js":185,"./ml":186,"./ml.js":186,"./mn":187,"./mn.js":187,"./mr":188,"./mr.js":188,"./ms":189,"./ms-my":190,"./ms-my.js":190,"./ms.js":189,"./mt":191,"./mt.js":191,"./my":192,"./my.js":192,"./nb":193,"./nb.js":193,"./ne":194,"./ne.js":194,"./nl":195,"./nl-be":196,"./nl-be.js":196,"./nl.js":195,"./nn":197,"./nn.js":197,"./oc-lnc":198,"./oc-lnc.js":198,"./pa-in":199,"./pa-in.js":199,"./pl":200,"./pl.js":200,"./pt":201,"./pt-br":202,"./pt-br.js":202,"./pt.js":201,"./ro":203,"./ro.js":203,"./ru":204,"./ru.js":204,"./sd":205,"./sd.js":205,"./se":206,"./se.js":206,"./si":207,"./si.js":207,"./sk":208,"./sk.js":208,"./sl":209,"./sl.js":209,"./sq":210,"./sq.js":210,"./sr":211,"./sr-cyrl":212,"./sr-cyrl.js":212,"./sr.js":211,"./ss":213,"./ss.js":213,"./sv":214,"./sv.js":214,"./sw":215,"./sw.js":215,"./ta":216,"./ta.js":216,"./te":217,"./te.js":217,"./tet":218,"./tet.js":218,"./tg":219,"./tg.js":219,"./th":220,"./th.js":220,"./tk":221,"./tk.js":221,"./tl-ph":222,"./tl-ph.js":222,"./tlh":223,"./tlh.js":223,"./tr":224,"./tr.js":224,"./tzl":225,"./tzl.js":225,"./tzm":226,"./tzm-latn":227,"./tzm-latn.js":227,"./tzm.js":226,"./ug-cn":228,"./ug-cn.js":228,"./uk":229,"./uk.js":229,"./ur":230,"./ur.js":230,"./uz":231,"./uz-latn":232,"./uz-latn.js":232,"./uz.js":231,"./vi":233,"./vi.js":233,"./x-pseudo":234,"./x-pseudo.js":234,"./yo":235,"./yo.js":235,"./zh-cn":236,"./zh-cn.js":236,"./zh-hk":237,"./zh-hk.js":237,"./zh-mo":238,"./zh-mo.js":238,"./zh-tw":239,"./zh-tw.js":239};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=366},519:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthModal=void 0,n(520);var l=s(n(0)),o=n(70),u=n(93),i=n(60),c=n(84);t.AuthModal=function(e){var t=e.visible,n=e.closeModal,r=i.useDispatch(),a=l.useState("loginTab"),s=a[0],d=a[1],f=function(e){u.sendHttpReq("post","/authApi/login",{email:e.email,password:e.password}).then((function(e){localStorage.removeItem("token"),r(c.saveCurrentUser(e.data.userId)),localStorage.setItem("token",e.data.token),n()}))};return l.default.createElement(o.Modal,{className:"loginModal__form",visible:t,footer:null,onCancel:function(e){e.stopPropagation(),n(),setTimeout((function(){return d("loginTab")}),1e3)}},"loginTab"===s?l.default.createElement(o.Form,{onFinish:f,size:"large"},l.default.createElement(o.Form.Item,{label:"Email",name:"email",rules:[{type:"email",message:"The input is not valid E-mail"},{required:!0,message:"Please input your E-mail"}],className:"loginModal__input"},l.default.createElement(o.Input,null)),l.default.createElement(o.Form.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password"}],className:"loginModal__input"},l.default.createElement(o.Input.Password,null)),l.default.createElement(o.Form.Item,{className:"loginModal__controls"},l.default.createElement(o.Button,{type:"ghost",htmlType:"submit"},"Sign In"),l.default.createElement("span",{style:{marginLeft:"20px"}},"or"),l.default.createElement("span",{className:"loginModal__controls_signUp",onClick:function(){return d("registerTab")}},"Sign Up"))):l.default.createElement(o.Form,{onFinish:function(e){u.sendHttpReq("post","/userApi/createUser",{email:e.email,password:e.password,name:e.name,phone:"+7"+e.phone}).then((function(){f({email:e.email,password:e.password})}))},size:"large"},l.default.createElement(o.Form.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name"}],className:"loginModal__input"},l.default.createElement(o.Input,{type:"text"})),l.default.createElement(o.Form.Item,{label:"Email",name:"email",rules:[{type:"email",message:"The input is not valid E-mail"},{required:!0,message:"Please input your E-mail"}],className:"loginModal__input"},l.default.createElement(o.Input,null)),l.default.createElement(o.Form.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password"}],className:"loginModal__input"},l.default.createElement(o.Input.Password,null)),l.default.createElement(o.Form.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject("The two passwords that you entered do not match"):Promise.resolve()}}}],className:"loginModal__input"},l.default.createElement(o.Input.Password,null)),l.default.createElement(o.Form.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Incorrect phone number",max:10,min:10}],className:"loginModal__input"},l.default.createElement(o.Input,{addonBefore:"+7",type:"number"})),l.default.createElement(o.Form.Item,{className:"loginModal__controls"},l.default.createElement(o.Button,{type:"ghost",htmlType:"submit"},"Register"),l.default.createElement("span",{style:{marginLeft:"20px"}},"or"),l.default.createElement("span",{className:"loginModal__controls_signUp",onClick:function(){return d("loginTab")}},"Sign In"))))}},520:function(e,t,n){},537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0;var r=n(71),a=n(538);t.rootReducer=r.combineReducers({app:a.appReducer})},538:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.appReducer=void 0;var a=n(101),s={town:"",userId:""};t.appReducer=function(e,t){switch(void 0===e&&(e=s),t.type){case a.CHANGE_TOWN:return r(r({},e),{town:t.payload});case a.SAVE_CURRENT_USER:return r(r({},e),{userId:t.payload});default:return e}}},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.saveCurrentUser=t.changeTown=void 0;var r=n(101);t.changeTown=function(e){return{type:r.CHANGE_TOWN,payload:e}},t.saveCurrentUser=function(e){return{type:r.SAVE_CURRENT_USER,payload:e}}},93:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function l(e){try{u(r.next(e))}catch(e){s(e)}}function o(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1],a=s;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(s);break}a[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendHttpReq=void 0;var l=s(n(255)),o=n(70);t.sendHttpReq=function(e,t,n){return r(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,l.default[e](t,n).then((function(e){return e})).catch((function(e){return o.message.error(e.response.data),e.response}))];case 1:return[2,r.sent()]}}))}))}}});