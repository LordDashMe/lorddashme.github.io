(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[27],{tNWe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n("91GP");var i=n("q1tI"),a=n.n(i),o=n("V8YE"),l=n("6/LZ"),d=n("gWyl"),s=n.n(d);var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).state={headline:{id:"",content:"",visibility:!0}},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var d=i.prototype;return d.componentDidMount=function(){Object(o.a)()||this.fetchHeadlineOnFireStore()},d.fetchHeadlineOnFireStore=function(){var e=this;void 0===window.lorddashme_headline?(l.a.clearInstance(),l.a.initialize(),l.a.getInstance().collection("headlines").where("active","==",!0).limit(1).get().then((function(t){if(void 0!==t.docs[0]){var n=t.docs[0].data(),i=Object.assign({},e.state.headline);i.id=t.docs[0].id,i.content=n.content,window.lorddashme_headline=i,e.setState({headline:i}),console.log("Headline_Component: Fresh headline!")}}))):this.setState({headline:{id:window.lorddashme_headline.id,content:window.lorddashme_headline.content,visibility:window.lorddashme_headline.visibility}})},d.getHeadlineContent=function(){return a.a.createElement("div",{className:s.a.content},a.a.createElement("small",{dangerouslySetInnerHTML:{__html:this.state.headline.content}}))},d.getHeadlineCloseButton=function(){return a.a.createElement("div",{className:s.a.close,onClick:this.onClickHeadlineCloseButton.bind(this)},a.a.createElement("i",{className:"fas fa-times","aria-hidden":"true"}))},d.onClickHeadlineCloseButton=function(){var e=Object.assign({},this.state.headline);e.visibility=!1,window.lorddashme_headline=e,this.setState({headline:e})},d.render=function(){return this.state.headline.content&&this.state.headline.visibility?a.a.createElement("div",{id:"headline-component",className:s.a.container},this.getHeadlineContent(),this.getHeadlineCloseButton()):null},i}(i.Component)}}]);
//# sourceMappingURL=components-Headline-Headline-fb63f307eef9232fe003.js.map