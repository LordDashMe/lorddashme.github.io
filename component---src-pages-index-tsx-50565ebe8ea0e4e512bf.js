(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[7,1,21,22,23,24,25,27,31],{"/EqY":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("PGQh"),i=n.n(o);var l=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{id:"page-layout-component",className:i.a.container},this.props.children)},r}(r.Component)},"/rku":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("q1tI");n("zaOR");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},"2iuQ":function(e,t,n){e.exports={container:"NavigationBar-module--container--3rwO-","navigation-bar":"NavigationBar-module--navigation-bar--1E7L6",navigationBar:"NavigationBar-module--navigation-bar--1E7L6","navigation-bar-title":"NavigationBar-module--navigation-bar-title--2jREp",navigationBarTitle:"NavigationBar-module--navigation-bar-title--2jREp","navigation-bar-toggle":"NavigationBar-module--navigation-bar-toggle--O-Yt6",navigationBarToggle:"NavigationBar-module--navigation-bar-toggle--O-Yt6","navigation-bar-collapse":"NavigationBar-module--navigation-bar-collapse--2sBAR",navigationBarCollapse:"NavigationBar-module--navigation-bar-collapse--2sBAR"}},"3mPH":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n("91GP");var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("2iuQ"),l=n.n(i);var c=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={brandName:"JOSHUA CLIFFORD REYES",routes:[{id:"home",href:"/",label:"HOME",icon:"fas fa-home"},{id:"contact",href:"/contact/",label:"CONTACT",icon:"fas fa-paper-plane"},{id:"projects",href:"/projects/",label:"PROJECTS",icon:"fas fa-magic"},{id:"tools",href:"/tools/",label:"TOOLS",icon:"fas fa-heart"}],collapseStyle:{display:"none"},toggleCollapse:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.defaultDetails=function(){return a.a.createElement("div",{className:"navbar-header page-scroll"},a.a.createElement("button",{onClick:this.toggleCollapse.bind(this,""),type:"button",className:"navbar-toggle "+l.a["navigation-bar-toggle"],"data-toggle":"collapse","data-target":"#navigation-bar-collapsable"},a.a.createElement("span",{className:"sr-only"},"Toggle navigation"),a.a.createElement("i",{className:"fa fa-bars"})," MENU"),a.a.createElement("h1",{className:"navbar-brand "+l.a["navigation-bar-title"]},this.state.brandName))},i.toggleCollapse=function(){var e=!1,t={display:"none"};this.state.toggleCollapse||(e=!0,t={display:"block"});var n=Object.assign({},this.state);n.collapseStyle=t,n.toggleCollapse=e,this.setState(n)},i.getMenuLinks=function(){return a.a.createElement("div",{className:"collapse navbar-collapse "+l.a["navigation-bar-collapse"],id:"navigation-bar-collapsable",style:this.state.collapseStyle},a.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.getRoutes()))},i.getRoutes=function(){return this.state.routes.map((function(e){var t=e.href;return"home"===e.id?a.a.createElement("li",{key:e.id,className:"page-scroll"},a.a.createElement("a",{href:t},a.a.createElement("i",{className:e.icon,"aria-hidden":"true"})," ",e.label)):a.a.createElement("li",{key:e.id,className:"page-scroll"},a.a.createElement(o.a,{to:t},a.a.createElement("i",{className:e.icon,"aria-hidden":"true"})," ",e.label))}))},i.render=function(){return a.a.createElement("div",{id:"navigation-bar-component",className:l.a.container},a.a.createElement("nav",{className:"navbar navbar-fixed-top "+l.a["navigation-bar"]},a.a.createElement("div",{className:"container"},this.defaultDetails(),this.getMenuLinks())))},r}(r.Component)},"4iMH":function(e,t,n){e.exports={container:"Author-module--container--1WlCJ","display-photo":"Author-module--display-photo--2mTwH",displayPhoto:"Author-module--display-photo--2mTwH",description:"Author-module--description--3bbw9"}},"5ZsN":function(e,t,n){e.exports={container:"Section-module--container--1TV5_",hide:"Section-module--hide--1W487",title:"Section-module--title--3xgiF",breaker:"Section-module--breaker--1h6vr"}},"9CTw":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("q1tI");n("v1vO");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},EbGp:function(e,t,n){},OFwx:function(e,t,n){},Ox8O:function(e,t,n){},PGQh:function(e,t,n){e.exports={container:"PageLayout-module--container--3zlEr"}},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("MKeS"),c=n("V8YE"),s=n("q7f/"),u=n("hn+G"),m=n("/rku"),p=n("pxo3"),f=n("pPUN"),d=n("9CTw"),h=n("TrBH"),v=n("/EqY"),g=n("r7TR"),y=n("3mPH"),b=n("iyNj"),E=Object(l.a)({resolved:{},chunkName:function(){return"components-Headline-Headline"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(26).then(n.bind(null,"tNWe"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"tNWe"}},{fallback:Object(c.d)("#headline-component")}),O=Object(l.a)({resolved:{},chunkName:function(){return"components-SkillTechnology-Chart-StatusPieChart"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(32).then(n.bind(null,"21pL"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"21pL"}},{fallback:Object(c.d)("#skill-technology-chart-status-pie-chart-component")}),N=Object(l.a)({resolved:{},chunkName:function(){return"components-SkillTechnology-SkillTechnology"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(33).then(n.bind(null,"jBZ+"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"jBZ+"}},{fallback:Object(c.d)("#skill-technology")}),A=Object(l.a)({resolved:{},chunkName:function(){return"components-Statement-Statement"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(38).then(n.bind(null,"2i1N"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"2i1N"}},{fallback:Object(c.d)("#statement-component")}),k=Object(l.a)({resolved:{},chunkName:function(){return"components-Footer-Footer"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(20).then(n.bind(null,"sGC4"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"sGC4"}},{fallback:Object(c.d)("#footer-component")}),w=Object(l.a)({resolved:{},chunkName:function(){return"components-Ads-Ads"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(15).then(n.bind(null,"BO3X"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"BO3X"}},{fallback:Object(c.d)("#ads-component")}),_=Object(l.a)({resolved:{},chunkName:function(){return"components-Ads-GoogleAdsense-GoogleAdsense"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(16).then(n.bind(null,"tLO/"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"tLO/"}},{fallback:null}),j=Object(l.a)({resolved:{},chunkName:function(){return"components-Ads-GoogleAdsense-GoogleAdsenseResponsiveAds"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(17).then(n.bind(null,"Rzrf"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"Rzrf"}},{fallback:Object(c.d)("#ads-google-adsense-responsive-ads-component")}),S=Object(l.a)({resolved:{},chunkName:function(){return"components-Analytics-GoogleAnalytics-GoogleAnalytics"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(18).then(n.bind(null,"WiP2"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"WiP2"}},{fallback:null}),C=function(){var e=s.a.title.main,t="/",n=Object(r.useState)(!1),i=n[0],l=n[1],C=Object(r.useState)(!1),T=C[0],B=C[1];Object(r.useEffect)((function(){t=document.location.href;var e=Object(c.a)((function(){Object(c.b)(document.getElementById("skills-technologies"))&&!i&&l(!0),Object(c.b)(document.getElementById("section-skip-1"))&&i&&!T&&B(!0)}),500);return i&&T||window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[i,T]);var q={"@context":"https://schema.org","@type":"website",url:t,name:e,author:s.a.author,image:s.a.image.src,description:s.a.description};return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,{defer:!1},a.a.createElement("html",{lang:"en"}),a.a.createElement("title",null,e),a.a.createElement("link",{rel:"shortcut icon",href:s.a.favicon}),a.a.createElement("link",{rel:"apple-touch-icon",href:s.a.favicon}),a.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),a.a.createElement("meta",{name:"robots",content:"index"}),a.a.createElement("meta",{name:"author",content:s.a.author}),a.a.createElement("meta",{name:"description",content:s.a.description}),a.a.createElement("link",{rel:"canonical",href:t}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:site",content:s.a.twitter.site}),a.a.createElement("meta",{name:"twitter:title",content:e}),a.a.createElement("meta",{name:"twitter:description",content:s.a.description}),a.a.createElement("meta",{name:"twitter:creator",content:s.a.twitter.creator}),a.a.createElement("meta",{name:"twitter:image",content:s.a.image.src}),a.a.createElement("meta",{name:"twitter:image:alt",content:s.a.image.alt}),a.a.createElement("meta",{name:"og:url",content:t}),a.a.createElement("meta",{name:"og:type",content:"website"}),a.a.createElement("meta",{name:"og:title",content:e}),a.a.createElement("meta",{name:"og:image",content:s.a.image.src}),a.a.createElement("meta",{name:"og:description",content:s.a.description}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(q)),a.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"}),a.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"}),a.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"})),a.a.createElement(u.default,null),a.a.createElement(m.default,null),a.a.createElement(p.default,null),a.a.createElement(f.default,null),a.a.createElement(d.default,null),a.a.createElement(h.a,null),a.a.createElement(y.default,null),i?a.a.createElement(E,null):null,a.a.createElement(v.default,null,a.a.createElement(g.default,{id:"author",title:"HELLO, WORLD!",showThematicBreak:!0,showBorderTop:!0},a.a.createElement(b.a,null)),a.a.createElement(g.default,{id:"skills-technologies",title:"SKILLS | TECHNOLOGIES",showThematicBreak:!0,showBorderTop:!0},i?a.a.createElement(O,null):null,i?a.a.createElement(N,null):null),a.a.createElement(g.default,{id:"section-skip-1",title:"",showThematicBreak:!1,showBorderTop:!0},T?a.a.createElement(w,{appearance:"horizontal"},a.a.createElement(j,{adClient:"ca-pub-3427694918014398",adSlot:"4220072227"})):null,T?a.a.createElement(A,null):null)),T?a.a.createElement(k,{isFixedPosition:!1}):null,T?a.a.createElement(_,null):null,a.a.createElement(S,{trackingId:"UA-128894279-1"}))};t.default=C},TrBH:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");n("EbGp");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},Wbzz:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("+ZDr"),i=n.n(o);n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return o.navigate}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},"hn+G":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("q1tI");n("lGP2");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},iyNj:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("4iMH"),i=n.n(o);var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={author:{image:{path:"/resources/img/author/profile-tianzifang-min-super.jpg",alt:"Joshua Clifford Reyes"},description:"CLEAN CODE | DOMAIN DRIVEN | TEST DRIVEN | DESIGN PATTERNS AND BEST PRACTICES"}},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{id:"author-component",className:i.a.container},a.a.createElement("div",{className:i.a["display-photo"]},a.a.createElement("img",{src:this.state.author.image.path,alt:this.state.author.image.alt})),a.a.createElement("p",{className:i.a.description},this.state.author.description))},r}(r.Component)},lGP2:function(e,t,n){},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},pPUN:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("q1tI");n("OFwx");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},pxo3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("q1tI");n("Ox8O");var a=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null},r}(r.Component)},r7TR:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("5ZsN"),i=n.n(o);var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getBorderTopStyleClassName=function(){return this.props.showBorderTop?"":i.a.hide},o.getTitle=function(){return this.props.title?a.a.createElement("h2",{className:i.a.title},this.props.title):null},o.getThematicBreak=function(){return this.props.showThematicBreak?a.a.createElement("hr",{className:i.a.breaker}):a.a.createElement("br",null)},o.render=function(){return a.a.createElement("section",{id:this.props.id,className:i.a.container+" "+this.getBorderTopStyleClassName()},this.getTitle(),this.getThematicBreak(),this.props.children)},r}(r.Component)},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1vO:function(e,t,n){},zaOR:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-50565ebe8ea0e4e512bf.js.map