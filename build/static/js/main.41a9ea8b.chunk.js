(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(e,t,n){e.exports=n(599)},329:function(e,t,n){},593:function(e,t,n){},599:function(e,t,n){"use strict";n.r(t);n(279),n(308),n(312),n(314);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a,r=n(1),o=n.n(r),c=n(45),i=n.n(c),u=(n(329),n(77)),l=n(78),s=n(81),p=n(79),d=n(80),m=n(608),f=n(609),b=n(277),h=n(275),g=n(35),v=n(63),E=!1,O=n(276),j=n(158),w=n(268),y=n.n(w),k=Object(j.has)("asMutable"),C=Object(j.when)(k,function(e){return e.asMutable({deep:!0})}),I={active:!0,reducerVersion:"1.0",storeConfig:{storage:localStorage,blacklist:["login","search","nav"],transforms:[{out:function(e){return t=e,y()(t);var t},in:function(e){return C(e)}}]}},S=n(76),x=n(159),M=n(160),R=Object(M.createActions)({init:null,initSuccess:null,fetchInitialData:null,initFailure:["error"],authenticated:null}),U=R.Types,z=R.Creators,N=(Object(M.createReducer)({isInitiated:!1,error:null,isConnected:!1},(a={},Object(S.a)(a,U.INIT_SUCCESS,function(e){return Object(x.a)({},e,{isInitiated:!0,error:null})}),Object(S.a)(a,U.INIT_FAILURE,function(e,t){return Object(x.a)({},e,{isInitiated:!1,error:t.error})}),a)),function(e){var t=I.reducerVersion,n=I.storeConfig,a=function(){return e.dispatch(z.init())},r=localStorage.getItem("reducerVersion");r?r!==t?(Object(v.b)(e,n,a).purge(),localStorage.setItem("reducerVersion",t),localStorage.removeItem("authorization")):Object(v.b)(e,n,a):(Object(v.b)(e,n,a),localStorage.setItem("reducerVersion",t))}),A=n(62),L=n.n(A),V=(n(600),n(269)),_=n(270),T=n.n(_),J=n(46),D=Object(J.a)({}),F=function(e){var t=T.a.create({baseURL:e,headers:{Accept:"application/json"}});t.addAsyncRequestTransform(function(e){return Object(V.a)(L.a.mark(function t(){var n;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=JSON.parse(localStorage.getItem("access_token")))&&(e.headers["x-access-token"]=n);case 2:case"end":return t.stop()}},t)}))}),t.addMonitor(function(e){e.ok}),t.addMonitor(function(e){return console.log("response: ",e)});return{doLogin:function(e,n){return t.post("/access-token",{email:e,password:n})},logout:function(e){return t.delete("/access-token/".concat(e))},checkAuth:function(e){return t.get("/access-token/".concat(e))},postUserCollection:function(e){return t.post("/user",e)},patchUserResource:function(e,n){return t.patch("/user/".concat(e),n)},deleteUserResource:function(e){return t.delete("/user/".concat(e))},getUserCollection:function(e){return t.get("/user",e)},getUserResource:function(e){return t.get("/user/".concat(e))}}},q=L.a.mark(B);F("http://localhost:8000/api/");function B(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},q)}var G=n(271),H=Object(g.c)({routing:G.routerReducer}),P=(n(589),n(590),n(591),n(592),n(593),n(607)),K=n(606),Q=n(36),W={items:[{title:!0,name:"Components",wrapper:{element:"",attributes:{}}},{name:"Inicio",url:"/dashboard",icon:"icon-home"},{name:"Cotizaciones",url:"/price",icon:"fa fa-tags"},{name:"Soporte",url:"https://coreui.io/react/",icon:"icon-phone",class:"mt-auto",variant:"success",attributes:{target:"_blank",rel:"noopener"}}]},X=n(111),Y=n.n(X);function Z(){return o.a.createElement("div",{style:{color:"white"}},"Cargando...")}var $=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Inicio",component:Y()({loader:function(){return n.e(8).then(n.bind(null,627))},loading:Z})},{path:"/price",name:"Cotizaciones",component:Y()({loader:function(){return n.e(6).then(n.bind(null,637))},loading:Z})},{path:"/create_price",name:"Generar cotizaci\xf3n",component:Y()({loader:function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,638))},loading:Z})}],ee=(o.a.lazy(function(){return n.e(5).then(n.bind(null,636))}),o.a.lazy(function(){return n.e(7).then(n.bind(null,626))})),te=o.a.lazy(function(){return n.e(4).then(n.bind(null,635))}),ne=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(Q.c,{fixed:!0},o.a.createElement(r.Suspense,{fallback:this.loading()},o.a.createElement(te,{onLogout:function(t){return e.signOut(t)}}))),o.a.createElement("div",{className:"app-body"},o.a.createElement(Q.f,{fixed:!0,display:"lg"},o.a.createElement(Q.i,null),o.a.createElement(Q.h,null),o.a.createElement(r.Suspense,null,o.a.createElement(Q.k,Object.assign({navConfig:W},this.props))),o.a.createElement(Q.g,null),o.a.createElement(Q.j,null)),o.a.createElement("main",{className:"main"},o.a.createElement(Q.a,{appRoutes:$}),o.a.createElement(K.a,{fluid:!0},o.a.createElement(r.Suspense,{fallback:this.loading()},o.a.createElement(f.a,null,$.map(function(e,t){return e.component?o.a.createElement(b.a,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return o.a.createElement(e.component,t)}}):null}),o.a.createElement(P.a,{from:"/",to:"/dashboard"})))))),o.a.createElement(Q.b,null,o.a.createElement(r.Suspense,{fallback:this.loading()},o.a.createElement(ee,null))))}}]),t}(r.Component),ae=function(){var e=function(e,t){var n=[],a=[],r=E?console.tron.createSagaMonitor():null,o=Object(O.a)({sagaMonitor:r});n.push(o),a.push(g.a.apply(void 0,n)),I.active&&(a.push(Object(v.a)()),console.log("ok"));var c=(E?console.tron.createStore:g.e)(e,g.d.apply(void 0,a));return I.active&&N(c),{store:c,sagasManager:o.run(t),sagaMiddleware:o}}(H,B),t=e.store;e.sagasManager,e.sagaMiddleware;return t}(),re=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{store:ae},o.a.createElement(m.a,{history:D},o.a.createElement(f.a,null,o.a.createElement(b.a,{path:"/",component:ne}))))}}]),t}(r.Component);i.a.render(o.a.createElement(re,null),document.getElementById("root"))}},[[278,1,2]]]);
//# sourceMappingURL=main.41a9ea8b.chunk.js.map