"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+r.source,"gu"),c=new RegExp("\\d+"+r.source,"gu"),l=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),l=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?l(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,o=!1;for(let c=0;c<e.length;c++){const l=e[c];i&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),i=!1,o=s,s=!0,c++):s&&o&&a.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),o=s,s=!1,i=!0):(i=n(l)===l&&r(l)!==l,o=s,s=r(l)===l&&n(l)!==l)}return e})(e,i,l)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,c.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return c}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,o,c){const l={};i&&(l.backgroundColor=i,"fixed"===a?(l.width=n,l.height=r,l.backgroundColor=i,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),c&&(l.objectPosition=c);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,p);return n.createElement(n.Fragment,null,n.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:c}=e,l=o(e,f);return n.createElement("img",s({},l,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:i}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=o(e,h);const c=i.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,s({},i,t,{sizes:c,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:c})})),l):l};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?n.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(b=w.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(w,s({},e)),n.createElement("noscript",null,n.createElement(w,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=w.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:N},M=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],D=new Set;let T,I;const A=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=o(e,M);const{width:y,height:w,layout:b}=r,v=l(y,w,b),{style:E,className:k}=v,C=o(v,_),S=(0,n.useRef)(),L=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);p&&(u=p);const N=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,w);return(0,n.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void D.add(L);if(I&&D.has(L))return;let t,n;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:D.has(L),image:r},h)),D.has(L)||(t=requestAnimationFrame((()=>{S.current&&(n=o(S.current,L,D,i,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{D.has(L)&&I&&(S.current.innerHTML=I(s({isLoading:D.has(L),isLoaded:D.has(L),image:r},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},C,{style:s({},E,i,{backgroundColor:d}),className:k+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(A,e):null}));O.propTypes=x,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function j(e){return function(t){let{src:a,__imageData:r,__error:i}=t,c=o(t,R);return i&&console.warn(i),r?n.createElement(e,s({image:r},c)):(console.warn("Image not loaded",a),null)}}const q=j((function(e){let{as:t="div",className:a,class:r,style:i,image:c,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:w}=e,b=o(e,C);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=s({objectFit:y,objectPosition:w,backgroundColor:h},f);const{width:v,height:N,layout:x,images:M,placeholder:_,backgroundColor:D}=c,T=l(v,N,x),{style:I,className:A}=T,O=o(T,S),R={fallback:void 0,sources:[]};return M.fallback&&(R.fallback=s({},M.fallback,{srcSet:M.fallback.srcSet?L(M.fallback.srcSet):void 0})),M.sources&&(R.sources=M.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,s({},O,{style:s({},I,i,{backgroundColor:h}),className:A+(a?" "+a:"")}),n.createElement(g,{layout:x,width:v,height:N},n.createElement(E,s({},u(_,!1,x,v,N,D,y,w))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:m},b,d("eager"===p,!1,R,p,f)))))})),z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:N,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=F;const H=j(O);H.displayName="StaticImage",H.propTypes=F},6160:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(4578),r=a(7294);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"Banner-module--banner--896e5"},r.createElement("div",{className:"banner-wrapper container container-padding"},r.createElement("div",{className:"Banner-module--innerBanner--2ff31"},r.createElement("div",{className:"Banner-module--content--94f55"},this.props.children))))},t}(r.Component)},5146:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(4578),r=a(1883),i=a(7294),s=a(8032);let o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isDarkMode:null},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){if("undefined"!=typeof window&&"undefined"!==window.__theme){let e=!1;window.__theme===window.__themeConstant.DARK&&(e=!0),this.setState({isDarkMode:e})}},a.onClick=function(){let e=!1,t=window.__themeConstant.LIGHT;!1===this.state.isDarkMode&&(e=!0,t=window.__themeConstant.DARK),window.__setTheme(t),this.setState({isDarkMode:e})},a.render=function(){let e=i.createElement(i.Fragment,null);return"boolean"==typeof this.state.isDarkMode&&(e=i.createElement("i",{className:"fas "+(this.state.isDarkMode?"DarkModeButton-module--faSun--3d3f6":"DarkModeButton-module--faMoon--ee376")})),i.createElement("div",{className:"DarkModeButton-module--container--fe970",onClick:this.onClick.bind(this)},e)},t}(i.Component);let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return i.createElement("header",null,i.createElement("div",{className:"container container-padding"},i.createElement("div",{className:"Header-module--innerHeader--48294"},i.createElement(r.Link,{to:"/"},i.createElement(s.S,{src:"../images/my-logo.svg",loading:"eager",width:38,quality:100,formats:["auto","webp","avif"],placeholder:"none",backgroundColor:"transparent",alt:"Dash",title:"Dash",__imageData:a(4489)})),i.createElement("div",{className:"Header-module--navigation--0d9ed"},i.createElement(r.Link,{to:"/#about-me"},"About Me"),i.createElement(o,null)))))},t}(i.Component)},1858:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(4578),r=a(7294);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return r.createElement("main",null,this.props.children)},t}(r.Component)},4690:function(e,t,a){var n=a(4578),r=a(7294),i=a(1883);let s=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.setSiteMetaData=function(e){return this.siteMetaData=e,this},a.render=function(){let e=this.siteMetaData.title,t=this.siteMetaData.description,a="",n="",i="",s=this.siteMetaData.author.twitterUsername,o=this.siteMetaData.site.name;void 0!==this.props.title&&this.props.title&&(e=this.props.title),void 0!==this.props.description&&this.props.description&&(t=this.props.description),void 0!==this.props.canonical&&this.props.canonical&&(a=this.siteMetaData.site.url+(this.props.canonical?this.props.canonical.replace(/^(\/)/g,""):"")),void 0!==this.props.image&&this.props.image&&(n=this.siteMetaData.site.url+this.props.image),void 0!==this.props.imageAlt&&this.props.imageAlt&&(i=this.props.imageAlt),void 0!==this.props.authorTwitter&&this.props.authorTwitter&&(s=this.props.authorTwitter),void 0!==this.props.siteName&&this.props.siteName&&(o=this.props.siteName);const c={"@context":"https://schema.org","@type":"website",url:a,name:e,description:t,image:n};return r.createElement(r.Fragment,null,r.createElement("title",null,e),r.createElement("meta",{name:"description",content:t}),a?r.createElement("link",{rel:"canonical",href:a}):"",r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:site_name",content:o}),r.createElement("meta",{property:"og:title",content:e}),r.createElement("meta",{property:"og:description",content:t}),r.createElement("meta",{property:"og:url",content:a}),n?r.createElement("meta",{property:"og:image",content:n}):"",r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:site",content:s}),r.createElement("meta",{name:"twitter:creator",content:s}),r.createElement("meta",{name:"twitter:title",content:e}),r.createElement("meta",{name:"twitter:description",content:t}),n?r.createElement("meta",{name:"twitter:image",content:n}):"",i?r.createElement("meta",{name:"twitter:image:alt",content:i}):"",r.createElement("script",{type:"application/ld+json"},JSON.stringify(c)))},t}(r.Component);t.Z=e=>{const{site:t}=(0,i.useStaticQuery)("1872069085");return new s(e).setSiteMetaData(t.siteMetadata).render()}},4489:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/9710a8ec4d133ff4d9cf7668a9cbec6d/05a85/my-logo.svg","srcSet":"/static/9710a8ec4d133ff4d9cf7668a9cbec6d/a64db/my-logo.svg 10w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/6a28f/my-logo.svg 19w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/05a85/my-logo.svg 38w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/5953b/my-logo.svg 76w","sizes":"(min-width: 38px) 38px, 100vw"},"sources":[{"srcSet":"/static/9710a8ec4d133ff4d9cf7668a9cbec6d/2f662/my-logo.avif 10w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/d87ae/my-logo.avif 19w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/a4453/my-logo.avif 38w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/904c7/my-logo.avif 76w","type":"image/avif","sizes":"(min-width: 38px) 38px, 100vw"},{"srcSet":"/static/9710a8ec4d133ff4d9cf7668a9cbec6d/97a32/my-logo.webp 10w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/7afd0/my-logo.webp 19w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/fe0f2/my-logo.webp 38w,\\n/static/9710a8ec4d133ff4d9cf7668a9cbec6d/66fb9/my-logo.webp 76w","type":"image/webp","sizes":"(min-width: 38px) 38px, 100vw"}]},"width":38,"height":29}')}}]);
//# sourceMappingURL=commons-5cb26050771459a38bd5.js.map