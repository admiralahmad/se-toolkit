(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{83454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(77663)},91118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(78510)}])},78510:function(e,t,r){"use strict";r.r(t);var n=r(26042),o=r(85893),i=r(9008),c=r.n(i);r(74003);var a=r(50259);t.default=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("title",{children:"MDX University"}),(0,o.jsx)("meta",{name:"description",content:"Study at Middlesex University in Dubai on the pre-university Foundation Programme, Undergraduate or Postgraduate Degree. More than just a quality UK Degree."})]}),(0,o.jsx)(a.pm,{reCaptchaKey:"6LdcCisjAAAAANfejwuMw19nSiObhOYYUoPOCNtP",children:(0,o.jsx)(t,(0,n.Z)({},r))})]})}},74003:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(n){r=c}}();var u=[],s=!1,l=-1;function f(){s&&n&&(s=!1,n.length?u=n.concat(u):l=-1,u.length&&p())}function p(){if(!s){var e=a(f);s=!0;for(var t=u.length;t;){for(n=u,u=[];++l<t;)n&&n[l].run();l=-1,t=u.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||s||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},c=!0;try{t[e](i,i.exports,n),c=!1}finally{c&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(5443)},50259:function(e,t,r){"use strict";r.d(t,{mP:function(){return y},pm:function(){return d}});var n,o,i=r(67294),c=r(83454),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e){var t;e?function(e){if(e)for(;e.lastChild;)e.lastChild.remove()}("string"==typeof e?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},s=function(e,t){u(t),window.___grecaptcha_cfg=void 0;var r,n=document.querySelector("#"+e);n&&n.remove(),(r=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]'))&&r.remove()},l=function(e){var t,r=e.render,n=e.onLoadCallbackName,o=e.language,i=e.onLoad,c=e.useRecaptchaNet,a=e.useEnterprise,u=e.scriptProps,s=void 0===u?{}:u,l=s.nonce,f=void 0===l?"":l,p=s.defer,d=s.async,y=s.id,m=s.appendTo,h=(void 0===y?"":y)||"google-recaptcha-v3";if(document.querySelector("#"+h))i();else{var v,b="https://www."+((v={useEnterprise:a,useRecaptchaNet:c}).useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(v.useEnterprise?"enterprise.js":"api.js"),g=document.createElement("script");g.id=h,g.src=b+"?render="+r+("explicit"===r?"&onload="+n:"")+(o?"&hl="+o:""),f&&(g.nonce=f),g.defer=!!(void 0!==p&&p),g.async=!!(void 0!==d&&d),g.onload=i,("body"===m?document.body:document.getElementsByTagName("head")[0]).appendChild(g)}},f=function(e){void 0===c||c.env,console.warn(e)};(o=n||(n={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var p=(0,i.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});function d(e){var t=e.reCaptchaKey,r=e.useEnterprise,o=void 0!==r&&r,c=e.useRecaptchaNet,u=void 0!==c&&c,d=e.scriptProps,y=e.language,m=e.container,h=e.children,v=(0,i.useState)(null),b=v[0],g=v[1],w=(0,i.useRef)(t),x=JSON.stringify(d),C=JSON.stringify(null==m?void 0:m.parameters);(0,i.useEffect)(function(){if(t){var e=(null==d?void 0:d.id)||"google-recaptcha-v3",r=(null==d?void 0:d.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[r]=function(){var e=o?window.grecaptcha.enterprise:window.grecaptcha,r=a({badge:"inline",size:"invisible",sitekey:t},(null==m?void 0:m.parameters)||{});w.current=e.render(null==m?void 0:m.element,r)},l({render:(null==m?void 0:m.element)?"explicit":t,onLoadCallbackName:r,useEnterprise:o,useRecaptchaNet:u,scriptProps:d,language:y,onLoad:function(){if(window&&window.grecaptcha){var e=o?window.grecaptcha.enterprise:window.grecaptcha;e.ready(function(){g(e)})}else f("<GoogleRecaptchaProvider /> "+n.SCRIPT_NOT_AVAILABLE)},onError:function(){f("Error loading google recaptcha script")}}),function(){s(e,null==m?void 0:m.element)}}f("<GoogleReCaptchaProvider /> recaptcha key not provided")},[o,u,x,C,y,t,null==m?void 0:m.element]);var S=(0,i.useCallback)(function(e){if(!b||!b.execute)throw Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return b.execute(w.current,{action:e})},[b,w]),P=(0,i.useMemo)(function(){return{executeRecaptcha:b?S:void 0,container:null==m?void 0:m.element}},[S,b,null==m?void 0:m.element]);return i.createElement(p.Provider,{value:P},h)}function y(e){var t=this,r=e.action,n=e.onVerify,o=e.refreshReCaptcha,c=(0,i.useContext)(p);(0,i.useEffect)(function(){var e,o,i,a,u=c.executeRecaptcha;u&&(e=t,o=void 0,i=void 0,a=function(){var e;return function(e,t){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(t){switch(t.label){case 0:return[4,u(r)];case 1:return e=t.sent(),n?(n(e),[2]):(f("Please define an onVerify function"),[2])}})},new(i||(i=Promise))(function(t,r){function n(e){try{u(a.next(e))}catch(t){r(t)}}function c(e){try{u(a.throw(e))}catch(t){r(t)}}function u(e){var r;e.done?t(e.value):((r=e.value)instanceof i?r:new i(function(e){e(r)})).then(n,c)}u((a=a.apply(e,o||[])).next())}))},[r,n,o,c]);var a=c.container;return"string"==typeof a?i.createElement("div",{id:a}):null}function m(e,t){return e(t={exports:{}},t.exports),t.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ }p.Consumer;var h="function"==typeof Symbol&&Symbol.for,v=h?Symbol.for("react.element"):60103,b=h?Symbol.for("react.portal"):60106,g=h?Symbol.for("react.fragment"):60107,w=h?Symbol.for("react.strict_mode"):60108,x=h?Symbol.for("react.profiler"):60114,C=h?Symbol.for("react.provider"):60109,S=h?Symbol.for("react.context"):60110,P=h?Symbol.for("react.async_mode"):60111,E=h?Symbol.for("react.concurrent_mode"):60111,T=h?Symbol.for("react.forward_ref"):60112,$=h?Symbol.for("react.suspense"):60113,R=h?Symbol.for("react.suspense_list"):60120,_=h?Symbol.for("react.memo"):60115,N=h?Symbol.for("react.lazy"):60116,j=h?Symbol.for("react.block"):60121,k=h?Symbol.for("react.fundamental"):60117,O=h?Symbol.for("react.responder"):60118,M=h?Symbol.for("react.scope"):60119;function L(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:switch(e=e.type){case P:case E:case g:case x:case w:case $:return e;default:switch(e=e&&e.$$typeof){case S:case T:case N:case _:case C:return e;default:return t}}case b:return t}}}function A(e){return L(e)===E}var F={AsyncMode:P,ConcurrentMode:E,ContextConsumer:S,ContextProvider:C,Element:v,ForwardRef:T,Fragment:g,Lazy:N,Memo:_,Portal:b,Profiler:x,StrictMode:w,Suspense:$,isAsyncMode:function(e){return A(e)||L(e)===P},isConcurrentMode:A,isContextConsumer:function(e){return L(e)===S},isContextProvider:function(e){return L(e)===C},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===v},isForwardRef:function(e){return L(e)===T},isFragment:function(e){return L(e)===g},isLazy:function(e){return L(e)===N},isMemo:function(e){return L(e)===_},isPortal:function(e){return L(e)===b},isProfiler:function(e){return L(e)===x},isStrictMode:function(e){return L(e)===w},isSuspense:function(e){return L(e)===$},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===g||e===E||e===x||e===w||e===$||e===R||"object"==typeof e&&null!==e&&(e.$$typeof===N||e.$$typeof===_||e.$$typeof===C||e.$$typeof===S||e.$$typeof===T||e.$$typeof===k||e.$$typeof===O||e.$$typeof===M||e.$$typeof===j)},typeOf:L},G=m(function(e,t){}),z=(G.AsyncMode,G.ConcurrentMode,G.ContextConsumer,G.ContextProvider,G.Element,G.ForwardRef,G.Fragment,G.Lazy,G.Memo,G.Portal,G.Profiler,G.StrictMode,G.Suspense,G.isAsyncMode,G.isConcurrentMode,G.isContextConsumer,G.isContextProvider,G.isElement,G.isForwardRef,G.isFragment,G.isLazy,G.isMemo,G.isPortal,G.isProfiler,G.isStrictMode,G.isSuspense,G.isValidElementType,G.typeOf,m(function(e){e.exports=F})),V={};V[z.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[z.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0}},14924:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},26042:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(14924);function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){(0,n.Z)(e,t,r[t])})}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(90387)}),_N_E=e.O()}]);