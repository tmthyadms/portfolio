(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,8,18],{277:function(e,t,n){"use strict";var r=n(2),o=n(278),l=n(134);r({target:"Array",proto:!0},{fill:o}),l("fill")},278:function(e,t,n){"use strict";var r=n(25),o=n(82),l=n(30);e.exports=function(e){for(var t=r(this),n=l(t),c=arguments.length,d=o(c>1?arguments[1]:void 0,n),f=c>2?arguments[2]:void 0,v=void 0===f?n:o(f,n);v>d;)t[d++]=e;return t}},281:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String},desc:{type:String},center:{type:Boolean,default:!0}}},o=n(43),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"hero min-h-screen"},[t("div",{staticClass:"hero-content flex-col",class:{"text-center":e.center,"flex-col lg:flex-row-reverse text-center lg:text-left":!e.center}},[e.center?e._e():e._t("figure"),e._v(" "),t("div",[t("div",{staticClass:"mx-auto max-w-md"},[e._t("title",(function(){return[e.title?t("h1",{staticClass:"font-thin text-3xl md:text-4xl lg:text-5xl",class:e.desc?"mb-4":"mb-6"},[e._v("\n            "+e._s(e.title)+"\n          ")]):e._e()]})),e._v(" "),e.desc?t("p",{staticClass:"mb-6 text-sm md:text-base lg:text-2xl opacity-60",domProps:{innerHTML:e._s(e.desc)}}):e._e()],2),e._v(" "),e._t("default")],2)],2)])}),[],!1,null,null,null);t.default=component.exports},285:function(e,t,n){"use strict";n.r(t);n(277),n(196);var r={props:{width:{type:Number,default:16},height:{type:Number},fill:{type:String,default:"currentColor"}},computed:{fallbackHeight:function(){return this.height||this.width}}},o=n(43),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("svg",{staticClass:"bi bi-box-arrow-up-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.fallbackHeight,fill:e.fill,viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),e._v(" "),t("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("9f397bf4",content,!0,{sourceMap:!1})},293:function(e,t,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("fdd93006",content,!0,{sourceMap:!1})},294:function(e,t,n){"use strict";n(288)},295:function(e,t,n){var r=n(83)((function(i){return i[1]}));r.push([e.i,".avatar-ring[data-v-09545924]{outline-color:var(--fallback-p,oklch(var(--p)/1));outline-offset:4px;outline-style:dashed;outline-width:4px}",""]),r.locals={},e.exports=r},304:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{hasLoaded:!1}},mounted:function(){var e=document.getElementById("profile-pic"),t=e.complete,n=e.naturalWidth>0;this.hasLoaded=t&&n}},o=(n(294),n(43)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"avatar",class:{"avatar-placeholder":!e.hasLoaded}},[t("div",{staticClass:"avatar-ring group !flex w-48 items-center justify-center rounded-full md:w-64"},[e.hasLoaded?e._e():t("span",{staticClass:"text-7xl"},[e._v("TA")]),e._v(" "),t("img",{directives:[{name:"show",rawName:"v-show",value:e.hasLoaded,expression:"hasLoaded"}],staticClass:"transition-transform duration-500 ease-out group-hover:scale-125",attrs:{src:"profile-pic.png",alt:"Profile picture",id:"profile-pic"}})])])}),[],!1,null,"09545924",null);t.default=component.exports},317:function(e,t,n){(function(t){var n;"undefined"!=typeof self&&self,n=()=>(()=>{var e={75:function(e){(function(){var n,r,o,l,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,l=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*t.uptime(),a=l-i):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],l=0;!s&&l<a.length;l++)s=o[a[l]+"Request"+i],u=o[a[l]+"Cancel"+i]||o[a[l]+"CancelRequest"+i];if(!s||!u){var c=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";r.d(o,{default:()=>C});var e=r(4087),t=r.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var i="TYPE_CHARACTER",s="REMOVE_CHARACTER",u="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",c="PAUSE_FOR",p="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",v="CHANGE_DELAY",h="CHANGE_CURSOR",m="PASTE_STRING",y="HTML_TAG";function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}const C=function(){function r(o,g){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),x(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),x(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),x(this,"setupWrapperElement",(function(){w.state.elements.container&&(w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor))})),x(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),x(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),x(this,"stop",(function(){return w.state.eventLoop&&((0,e.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),x(this,"pauseFor",(function(e){return w.addEventToQueue(c,{ms:e}),w})),x(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(w.options.pauseFor),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)})),w)})),x(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return w.typeOutHTMLString(e,t);if(e){var r=(w.options||{}).stringSplitter,o="function"==typeof r?r(e):e.split("");w.typeCharacters(o,t)}return w})),x(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(m,{character:e,node:t}),w)})),x(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes}(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],i=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",w.addEventToQueue(d,{node:a,parentNode:t}),n?w.pasteString(i,a):w.typeString(i,a)):a.textContent&&(n?w.pasteString(a.textContent,t):w.typeString(a.textContent,t))}return w})),x(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(u,{speed:e}),w})),x(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(f,{speed:e}),w})),x(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(v,{delay:e}),w})),x(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(h,{cursor:e}),w})),x(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(s);return w})),x(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callback must be a function");return w.addEventToQueue(p,{cb:e,thisArg:t}),w})),x(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(i,{character:e,node:t})})),w})),x(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(s)})),w})),x(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),x(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.options.loop?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),x(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return w.state[r]=n?[o].concat(b(w.state[r])):[].concat(b(w.state[r]),[o]),w})),x(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),n=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=b(w.state.calledEvents),w.state.calledEvents=[],w.options=E({},w.state.initialOptions)}if(w.state.eventLoop=t()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var r,o=b(w.state.eventQueue),g=o.shift();if(!(n<=(r=g.eventName===l||g.eventName===s?"natural"===w.options.deleteSpeed?a(40,80):w.options.deleteSpeed:"natural"===w.options.delay?a(120,160):w.options.delay))){var _=g.eventName,x=g.eventArgs;switch(w.logInDevMode({currentEvent:g,state:w.state,delay:r}),_){case m:case i:var T=x.character,C=x.node,A=document.createTextNode(T),S=A;w.options.onCreateTextNode&&"function"==typeof w.options.onCreateTextNode&&(S=w.options.onCreateTextNode(T,A)),S&&(C?C.appendChild(S):w.state.elements.wrapper.appendChild(S)),w.state.visibleNodes=[].concat(b(w.state.visibleNodes),[{type:"TEXT_NODE",character:T,node:S}]);break;case s:o.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case c:var N=g.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(N);break;case p:var L=g.eventArgs,O=L.cb,k=L.thisArg;O.call(k,{elements:w.state.elements});break;case d:var M=g.eventArgs,j=M.node,P=M.parentNode;P?P.appendChild(j):w.state.elements.wrapper.appendChild(j),w.state.visibleNodes=[].concat(b(w.state.visibleNodes),[{type:y,node:j,parentNode:P||w.state.elements.wrapper}]);break;case u:var D=w.state.visibleNodes,R=x.speed,H=[];R&&H.push({eventName:f,eventArgs:{speed:R,temp:!0}});for(var F=0,Q=D.length;F<Q;F++)H.push({eventName:l,eventArgs:{removingCharacterNode:!1}});R&&H.push({eventName:f,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,H);break;case l:var I=g.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var U=w.state.visibleNodes.pop(),q=U.type,V=U.node,G=U.character;w.options.onRemoveNode&&"function"==typeof w.options.onRemoveNode&&w.options.onRemoveNode({node:V,character:G}),V&&V.parentNode.removeChild(V),q===y&&I&&o.unshift({eventName:l,eventArgs:{}})}break;case f:w.options.deleteSpeed=g.eventArgs.speed;break;case v:w.options.delay=g.eventArgs.delay;break;case h:w.options.cursor=g.eventArgs.cursor,w.state.elements.cursor.innerHTML=g.eventArgs.cursor}w.options.loop&&(g.eventName===l||g.eventArgs&&g.eventArgs.temp||(w.state.calledEvents=[].concat(b(w.state.calledEvents),[g]))),w.state.eventQueue=o,w.state.lastFrameTime=e}}})),o)if("string"==typeof o){var _=document.querySelector(o);if(!_)throw new Error("Could not find container element");this.state.elements.container=_}else this.state.elements.container=o;g&&(this.options=E(E({},this.options),g)),this.state.initialOptions=E({},this.options),this.init()}var o,g;return o=r,(g=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(h,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}(o.prototype,g),Object.defineProperty(o,"prototype",{writable:!1}),r}()})(),o.default})(),e.exports=n()}).call(this,n(198))},318:function(e,t,n){"use strict";n(293)},319:function(e,t,n){var r=n(83)((function(i){return i[1]}));r.push([e.i,"[data-theme=cupcake] .bi-linkedin[data-v-57452f7a]{fill:#0072b1}[data-theme=cupcake] .bi-github[data-v-57452f7a]{fill:#171515}",""]),r.locals={},e.exports=r},333:function(e,t,n){"use strict";n.r(t);var r=n(317),o=n.n(r),l={data:function(){return{socials:[{url:"https://www.linkedin.com/in/tmthyadms",tip:"LinkedIn",component:"IconLinkedin"},{url:"https://github.com/tmthyadms",tip:"GitHub",component:"IconGithub"}]}},mounted:function(){new o.a("#introduce",{loop:!0}).pauseFor(750).typeString("Hello, I'm Timothy!").pauseFor(750).deleteChars(5).typeString("!").pauseFor(1e3).start()}},c=(n(318),n(43)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("AppHero",{attrs:{desc:"A final year Computer Science student with expertize in web development using <em>Vue.js</em>, <em>Tailwind CSS</em>, and <em>Bootstrap</em> as well as experienced in mobile development using <em>Flutter</em>.",center:!1},scopedSlots:e._u([{key:"figure",fn:function(){return[t("AppAvatar")]},proxy:!0},{key:"title",fn:function(){return[t("h1",{staticClass:"mb-4 text-3xl font-thin md:text-4xl lg:text-5xl",attrs:{id:"introduce"}},[t("div",{staticClass:"skeleton mx-auto h-9 w-60 md:h-10 md:w-72 lg:mx-[initial] lg:h-12 lg:w-96"})])]},proxy:!0}])},[e._v(" "),e._v(" "),[t("div",{staticClass:"mb-6 flex justify-center lg:justify-normal"},e._l(e.socials,(function(e){return t("div",{staticClass:"tooltip tooltip-secondary",attrs:{"data-tip":e.tip}},[t("a",{staticClass:"btn btn-square btn-ghost",attrs:{role:"button",href:e.url,target:"_blank"}},[t(e.component,{tag:"component",attrs:{width:32}})],1)])})),0),e._v(" "),t("a",{staticClass:"group btn btn-primary btn-sm btn-wide mb-2 md:btn-md lg:mr-2",attrs:{role:"button",href:"resume.pdf",type:"application/pdf",target:"_blank"}},[e._v("\n      View Resume\n      "),t("IconBoxArrowUpRight",{staticClass:"transition-transform duration-300 group-hover:translate-x-1 group-hover:ease-out"})],1),e._v(" "),t("span",{staticClass:"block text-xs md:text-base lg:inline"},[e._v("or download it\n      "),t("span",{staticClass:"tooltip tooltip-bottom tooltip-secondary",attrs:{"data-tip":"timothy-resume.pdf"}},[t("a",{staticClass:"link-hover link-accent link",attrs:{href:"resume.pdf",type:"application/pdf",download:"timothy-resume.pdf"}},[e._v("here")])])])]],2)}),[],!1,null,"57452f7a",null);t.default=component.exports;installComponents(component,{AppAvatar:n(304).default,IconBoxArrowUpRight:n(285).default,AppHero:n(281).default})}}]);