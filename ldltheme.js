
(function ($) {
  Drupal.behaviors.ldltheme = {
    attach: function (context, settings) {


            if ($('.mobileMenu').length){
            } else{





/*ScrollReveal*/
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.ScrollReveal=t()}(this,function(e,t,n){return function(){"use strict";var e,t,n;this.ScrollReveal=function(){function i(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==i.prototype?new i(n):(e=this,e.tools=new t,e.isSupported()?(e.tools.extend(e.defaults,n||{}),o(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console,e)}function o(t){var n=t.container;return n&&"string"==typeof n?t.container=window.document.querySelector(n):(n&&!e.tools.isNode(n)&&(t.container=null),null==n&&(t.container=window.document.documentElement),t.container)}function r(){return++e.uid}function s(t,n){t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X","top"!==t.config.origin&&"left"!==t.config.origin||(t.config.distance="-"+t.config.distance)}function a(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!=t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=l(e,0),e.styles.transition.delayed=l(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",c(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",c(e)}function l(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function c(e){var t=e.config,n=e.styles.transform;parseInt(t.distance)&&(n.initial+=" translate"+t.axis+"("+t.distance+")",n.target+=" translate"+t.axis+"(0)"),t.scale&&(n.initial+=" scale("+t.scale+")",n.target+=" scale(1)"),t.rotate.x&&(n.initial+=" rotateX("+t.rotate.x+"deg)",n.target+=" rotateX(0)"),t.rotate.y&&(n.initial+=" rotateY("+t.rotate.y+"deg)",n.target+=" rotateY(0)"),t.rotate.z&&(n.initial+=" rotateZ("+t.rotate.z+"deg)",n.target+=" rotateZ(0)"),n.initial+="; opacity: "+t.opacity+";",n.target+="; opacity: "+e.styles.computed.opacity+";"}function f(t){var n=t.config.container;n&&-1==e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function u(t,n,i){var o={selector:t,config:n,interval:i};e.history.push(o)}function d(){if(e.isSupported()){p();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",y),e.store.containers[t].addEventListener("resize",y);e.initialized||(window.addEventListener("scroll",y),window.addEventListener("resize",y),e.initialized=!0)}return e}function y(){n(p)}function m(){var t,n,i,o;e.tools.forOwn(e.sequences,function(r){o=e.sequences[r],t=!1;for(var s=0;s<o.elemIds.length;s++)i=o.elemIds[s],n=e.store.elements[i],O(n)&&!t&&(t=!0);o.active=t})}function p(){var t,n;m(),e.tools.forOwn(e.store.elements,function(i){n=e.store.elements[i],t=b(n),v(n)?(t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),w("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&g(n,t)):h(n)&&(n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),w("reset",n),n.revealing=!1)})}function g(t,n){var i=0,o=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"==t.config.useDelay&&(o=t.config.delay),t.sequence.timer&&(i=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,y()},Math.abs(r.interval)+o-i)}function w(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function v(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return O(t)&&!t.revealing&&!t.disabled}function b(t){var n=t.config.useDelay;return"always"===n||"onload"===n&&!e.initialized||"once"===n&&!t.seen}function h(t){if(t.sequence){var n=e.sequences[t.sequence.id];return!n.active&&t.config.reset&&t.revealing&&!t.disabled}return!O(t)&&t.config.reset&&t.revealing&&!t.disabled}function x(e){return{width:e.clientWidth,height:e.clientHeight}}function q(e){if(e&&e!==window.document.documentElement){var t=E(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function E(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:n,height:i,width:o}}function O(e){function t(){var t=c+a*s,n=f+l*s,i=u-a*s,y=d-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return g>t&&i>m&&n>p&&w>y}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=E(e.domEl),o=x(e.config.container),r=q(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,u=c+a,d=f+l;return t()||n()}return i.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(e){},afterReset:function(e){}},i.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},i.prototype.reveal=function(t,n,i,l){var c,y,m,p,g,w;if(c=n&&n.container?o(n):e.defaults.container,y=e.tools.isNode(t)?[t]:Array.prototype.slice.call(c.querySelectorAll(t)),!y.length)return e;n&&"number"==typeof n&&(i=n,n={}),i&&"number"==typeof i&&(w=r(),g=e.sequences[w]={id:w,interval:i,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=e.store.elements[p]:(m={id:r(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),s(m,n||{}),a(m),f(m),e.tools.isMobile()&&!m.config.mobile||!e.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!l&&e.isSupported()&&(u(t,n),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(d,0)),e},i.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.selector,n.config,n.interval,!0)}d()}return e},i}(),t=function(){function e(){}return e.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor==Object},e.prototype.isNode=function(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},e.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},e.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},e.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e}(),n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}.call(this),this.ScrollReveal});
/*End ScrollReveal*/

/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});
//# sourceMappingURL=jquery.nanoscroller.min.js.map

//font awesome

window.FontAwesomeCdnConfig = {
  autoA11y: {
    enabled: false
  },
  asyncLoading: {
    enabled: false
  },
  reporting: {

    enabled: false

  },
  useUrl: "use.fontawesome.com",
  faCdnUrl: "https://cdn.fontawesome.com:443",
  code: "feda5854d8"
};

!function(){function a(a){var b,c=[],d=document,e=d.documentElement.doScroll,f="DOMContentLoaded",g=(e?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState);g||d.addEventListener(f,b=function(){for(d.removeEventListener(f,b),g=1;b=c.shift();)b()}),g?setTimeout(a,0):c.push(a)}function b(a,b){var c=!1;return a.split(",").forEach(function(a){var d=new RegExp(a.trim().replace(".","\\.").replace("*","(.*)"));b.match(d)&&(c=!0)}),c}function c(a){"undefined"!=typeof MutationObserver&&new MutationObserver(a).observe(document,{childList:!0,subtree:!0})}function d(a){var b,c,d,e;a=a||"fa",b=document.querySelectorAll("."+a),Array.prototype.forEach.call(b,function(a){c=a.getAttribute("title"),a.setAttribute("aria-hidden","true"),d=a.nextElementSibling?!a.nextElementSibling.classList.contains("sr-only"):!0,c&&d&&(e=document.createElement("span"),e.innerHTML=c,e.classList.add("sr-only"),a.parentNode.insertBefore(e,a.nextSibling))})}!function(){"use strict";function a(a){l.push(a),1==l.length&&k()}function b(){for(;l.length;)l[0](),l.shift()}function c(a){this.a=m,this.b=void 0,this.f=[];var b=this;try{a(function(a){f(b,a)},function(a){g(b,a)})}catch(c){g(b,c)}}function d(a){return new c(function(b,c){c(a)})}function e(a){return new c(function(b){b(a)})}function f(a,b){if(a.a==m){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d)return void d.call(b,function(b){c||f(a,b),c=!0},function(b){c||g(a,b),c=!0})}catch(e){return void(c||g(a,e))}a.a=0,a.b=b,h(a)}}function g(a,b){if(a.a==m){if(b==a)throw new TypeError;a.a=1,a.b=b,h(a)}}function h(b){a(function(){if(b.a!=m)for(;b.f.length;){var a=b.f.shift(),c=a[0],d=a[1],e=a[2],a=a[3];try{0==b.a?e("function"==typeof c?c.call(void 0,b.b):b.b):1==b.a&&("function"==typeof d?e(d.call(void 0,b.b)):a(b.b))}catch(f){a(f)}}})}function i(a){return new c(function(b,c){function d(c){return function(d){g[c]=d,f+=1,f==a.length&&b(g)}}var f=0,g=[];0==a.length&&b(g);for(var h=0;h<a.length;h+=1)e(a[h]).c(d(h),c)})}function j(a){return new c(function(b,c){for(var d=0;d<a.length;d+=1)e(a[d]).c(b,c)})}var k,l=[];k=function(){setTimeout(b)};var m=2;c.prototype.g=function(a){return this.c(void 0,a)},c.prototype.c=function(a,b){var d=this;return new c(function(c,e){d.f.push([a,b,c,e]),h(d)})},window.Promise||(window.Promise=c,window.Promise.resolve=e,window.Promise.reject=d,window.Promise.race=j,window.Promise.all=i,window.Promise.prototype.then=c.prototype.c,window.Promise.prototype["catch"]=c.prototype.g)}(),function(){function a(a){this.el=a;for(var b=a.className.replace(/^\s+|\s+$/g,"").split(/\s+/),c=0;c<b.length;c++)d.call(this,b[c])}function b(a,b,c){Object.defineProperty?Object.defineProperty(a,b,{get:c}):a.__defineGetter__(b,c)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var c=Array.prototype,d=c.push,e=c.splice,f=c.join;a.prototype={add:function(a){this.contains(a)||(d.call(this,a),this.el.className=this.toString())},contains:function(a){return-1!=this.el.className.indexOf(a)},item:function(a){return this[a]||null},remove:function(a){if(this.contains(a)){for(var b=0;b<this.length&&this[b]!=a;b++);e.call(this,b,1),this.el.className=this.toString()}},toString:function(){return f.call(this," ")},toggle:function(a){return this.contains(a)?this.remove(a):this.add(a),this.contains(a)}},window.DOMTokenList=a,b(Element.prototype,"classList",function(){return new a(this)})}}();var e=function(a,b,c){function d(a){return g.body?a():void setTimeout(function(){d(a)})}function e(){h.addEventListener&&h.removeEventListener("load",e),h.media=c||"all"}var f,g=window.document,h=g.createElement("link");if(b)f=b;else{var i=(g.body||g.getElementsByTagName("head")[0]).childNodes;f=i[i.length-1]}var j=g.styleSheets;h.rel="stylesheet",h.href=a,h.media="only x",d(function(){f.parentNode.insertBefore(h,b?f:f.nextSibling)});var k=function(a){for(var b=h.href,c=j.length;c--;)if(j[c].href===b)return a();setTimeout(function(){k(a)})};return h.addEventListener&&h.addEventListener("load",e),h.onloadcssdefined=k,k(e),h},f=null;!function(){function a(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function b(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b),a()}):document.attachEvent("onreadystatechange",function c(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",c),a())})}function c(a){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(a)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function d(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function e(a){var b=a.a.offsetWidth,c=b+100;return a.f.style.width=c+"px",a.c.scrollLeft=c,a.b.scrollLeft=a.b.scrollWidth+100,a.g!==b?(a.g=b,!0):!1}function g(b,c){function d(){var a=f;e(a)&&a.a.parentNode&&c(a.g)}var f=b;a(b.b,d),a(b.c,d),e(b)}function h(a,b){var c=b||{};this.family=a,this.style=c.style||"normal",this.weight=c.weight||"normal",this.stretch=c.stretch||"normal"}function i(){if(null===l){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}l=""!==a.style.font}return l}function j(a,b){return[a.style,a.weight,i()?a.stretch:"","100px",b].join(" ")}var k=null,l=null,m=null;h.prototype.load=function(a,e){var f=this,h=a||"BESbswy",i=e||3e3,l=(new Date).getTime();return new Promise(function(a,e){if(null===m&&(m=!!window.FontFace),m){var n=new Promise(function(a,b){function c(){(new Date).getTime()-l>=i?b():document.fonts.load(j(f,f.family),h).then(function(b){1<=b.length?a():setTimeout(c,25)},function(){b()})}c()}),o=new Promise(function(a,b){setTimeout(b,i)});Promise.race([o,n]).then(function(){a(f)},function(){e(f)})}else b(function(){function b(){var b;(b=-1!=q&&-1!=r||-1!=q&&-1!=s||-1!=r&&-1!=s)&&((b=q!=r&&q!=s&&r!=s)||(null===k&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),k=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=k&&(q==t&&r==t&&s==t||q==u&&r==u&&s==u||q==v&&r==v&&s==v)),b=!b),b&&(w.parentNode&&w.parentNode.removeChild(w),clearTimeout(x),a(f))}function m(){if((new Date).getTime()-l>=i)w.parentNode&&w.parentNode.removeChild(w),e(f);else{var a=document.hidden;!0!==a&&void 0!==a||(q=n.a.offsetWidth,r=o.a.offsetWidth,s=p.a.offsetWidth,b()),x=setTimeout(m,50)}}var n=new c(h),o=new c(h),p=new c(h),q=-1,r=-1,s=-1,t=-1,u=-1,v=-1,w=document.createElement("div"),x=0;w.dir="ltr",d(n,j(f,"sans-serif")),d(o,j(f,"serif")),d(p,j(f,"monospace")),w.appendChild(n.a),w.appendChild(o.a),w.appendChild(p.a),document.body.appendChild(w),t=n.a.offsetWidth,u=o.a.offsetWidth,v=p.a.offsetWidth,m(),g(n,function(a){q=a,b()}),d(n,j(f,'"'+f.family+'",sans-serif')),g(o,function(a){r=a,b()}),d(o,j(f,'"'+f.family+'",serif')),g(p,function(a){s=a,b()}),d(p,j(f,'"'+f.family+'",monospace'))})})},f=h}();var g={observe:function(a,b){for(var c=b.prefix,d=function(a){var b=a.weight?"-"+a.weight:"",d=a.style?"-"+a.style:"",e=a.className?"-"+a.className:"",g=a.className?"-"+a.className+b+d:"",h=document.getElementsByTagName("html")[0].classList,i=function(a){h.add(c+e+"-"+a),h.add(c+g+"-"+a)},j=function(a){h.remove(c+e+"-"+a),h.remove(c+g+"-"+a)};i("loading"),new f(a.familyName).load(a.testString).then(function(){i("ready"),j("loading")},function(){i("failed"),j("loading")})},e=0;e<a.length;e++)d(a[e])}},h={load:function(a){var b=document.createElement("link");b.href=a,b.media="all",b.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(b)},loadAsync:function(a){e(a)}},i={load:function(a){var b=document.createElement("script"),c=document.scripts[0];b.src=a,c.parentNode.appendChild(b)}};try{if(window.FontAwesomeCdnConfig){var j=window.FontAwesomeCdnConfig,k=j.useUrl,l=j.faCdnUrl,m=j.code,n="FontAwesome",o="fa",p="ï‰€",q=d.bind(d,"fa"),r=function(){};j.autoA11y.enabled&&(a(q),c(q)),j.reporting.enabled&&b(j.reporting.domains,location.host)&&i.load(l+"/js/stats.js"),cssUrl="https://"+k+"/"+m+".css",new f(n).load(p).then(function(){var a=(window.FontAwesomeHooks||{}).loaded||r;a()},r),j.asyncLoading.enabled?h.loadAsync(cssUrl):h.load(cssUrl),g.observe([{familyName:n,testString:p}],{prefix:o+"-events-icons"})}}catch(s){}}();


/*! jssocials - v1.4.0 - 2016-10-10
* http://js-socials.com
* Copyright (c) 2016 Artem Tabalin; Licensed MIT */
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(a){return parseInt(a.slice(15,-2).split(", ")[1])}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"}})}(window,jQuery,window.jsSocials);

/*
 *  colourBrightness.js
 *
 *  Copyright 2013-2016, Jamie Brittain - http://jamiebrittain.com
 *  Released under the WTFPL license
 *  http://sam.zoy.org/wtfpl/
 *
 *  Github:  http://github.com/jamiebrittain/colourBrightness.js
 *  Version: 1.2
 */
!function(r){r.fn.colourBrightness=function(){function r(r){for(var t="";"html"!=r[0].tagName.toLowerCase()&&(t=r.css("background-color"),"rgba(0, 0, 0, 0)"==t||"transparent"==t);)r=r.parent();return t}var t,a,s,e,n=r(this);return n.match(/^rgb/)?(n=n.match(/rgba?\(([^)]+)\)/)[1],n=n.split(/ *, */).map(Number),t=n[0],a=n[1],s=n[2]):"#"==n[0]&&7==n.length?(t=parseInt(n.slice(1,3),16),a=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16)):"#"==n[0]&&4==n.length&&(t=parseInt(n[1]+n[1],16),a=parseInt(n[2]+n[2],16),s=parseInt(n[3]+n[3],16)),e=(299*t+587*a+114*s)/1e3,125>e?this.removeClass("light").addClass("dark"):this.removeClass("dark").addClass("light"),this}}(jQuery);



/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var a=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-a:isNaN(this.positionX)?-a/2|0:Math.max(this.positionX,-a)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var a=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-a:isNaN(this.positionY)?r-a/2|0:r+Math.max(this.positionY,-a)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i),r=function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width()},a=function(){var t=h.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,h.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};h.on("resize.px.parallax load.px.parallax",function(){r(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){a(),o.requestRender()}),r(),a(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
//$("#region-header-first").on('click', function(){
  //   window.location = "../";
//});




      window.sr = ScrollReveal();



$(window).on("load", function() {
      sr.reveal('.page-islandora-search .region-sidebar-first-inner', { duration: 200, delay: 100, opacity: 1, easing: 'linear', scale: 1, viewFactor: 0.01, }, 50);
      sr.reveal('.islandora-solr-search-result, .landingMobile', { duration: 200, delay: 100,  easing: 'linear', scale: 1, viewFactor: 0.01,}, 20); //landingMessage normally here; conflicts with mobile landingMessage
      sr.reveal('.landingHero', { duration: 200, delay: 0,  easing: 'linear', scale: 1, viewFactor: 0.01,}, 20);
      sr.reveal('.solr-fields, .islandora-solr-sort li, .page-browse-collections tr, .islandora-pdf-content', { duration: 200, delay: 350,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
      sr.reveal('.solr-thumb img', { duration: 200, delay: 850,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
      sr.reveal('.islandora-basic-collection-grid dl', { duration: 100, delay: 200,  easing: 'ease-in', }, 20);
      sr.reveal('.bookmarkWelcome', { duration: 800, delay: 100,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 50);
      $("a > .institutionLink_meta").each(function() {
        $(this).colourBrightness();//
      });


});




      var title = document.getElementsByTagName("title")[0].innerHTML;
      var urlhref = window.location.href;
      var url = window.location.pathname;
      var namespaces = ['uno','loyno', 'mcneese', 'lsu', 'latech', 'hnoc', 'tulane', 'state', 'nicholls', 'nsu', 'subr', 'ull', 'ulm', 'lsuhsc', 'lsuhscs', 'lsus', 'lsm', 'dcc', 'vville', 'tahil', 'fpoc'];

      for(namespace in namespaces){
	  ns = namespaces[namespace];
	  re = new RegExp(ns +"\\b");
	  if (re.test(url)) {
              $("body").addClass(ns + "Theme institution");
	  };
      }

      $('#switchTheme').click(function(){
          $("html").toggleClass('Dark');
      });



      if ( ($( ".video-js" ).length ) && ( $( "#islandora-pdfjs" ).length )) {
           $("body").addClass("audioPDF");

       }//detection for oral history

      if ( $( ".islandora-basic-collection-item-count" ).length ) {
           $("body").addClass('collectionPageTest');
           $("body").addClass('collectionPage');


       }//allows collection Page styles

      //if ( $( ".islandora-basic-collection-wrapper > p" ).length ) {
           //$("body").addClass('collectionPage');
       //}//allows collection Page styles
      $("h1#page-title").clone().prop({ id: "oh-title", class: "ohtitle"}).prependTo(".islandora-audio-content");
      $(".modsContributor a").clone().prop({ class: "ohcreator"}).insertAfter(".ohtitle");
      $('a.ohcreator').wrapAll('<div class="creatorLinks"/>'); //wraps collectionPage title

    $('<span> items</span>').appendTo('.institution-collection-list-item-count, .child-institution-count-items');
    $('<span> collections</span>').appendTo('.child-institution-count-collections');

//$('.institution-collection-list-li').each(function() {
    //$(this).children('.institution-collection-list-item-label').clone().prop({class: "title-description"}).prependTo( $('.institution-collection-description'));
//
//});

$('.institution-collection-list-li').each(function() {
    $(this).children('.institution-collection-list-item-label').clone().prop({class: "title-description"}).prependTo($(this).children('.institution-collection-description'));
});


      $("div.institution-title").prependTo(".institution-about > p:first-child");
      $(".child-institution-collections").insertAfter(".institution-search");



if($('.institution-collection-list-a').length < 4){
   $('.institution-collection-list-a').css("flex-grow","1");
   $('.institution-collection-list-item-label').css("width", "auto");
}

//if($('.child-institution-collections a').length < 4){
   //$('.child-institution-collections a').css("flex-grow","1");
//}




      $(".islandora-pdf-metadata").clone().prop({ id: "sideMods", class: "newClass" }).prependTo("#region-sidebar-first");
      $(".islandora-large-image-metadata").clone().prop({ id: "sideMods", class: "newClass" }).prependTo("#region-sidebar-first");
      $(".page-islandora-search #page-title").clone().prop({ id: "page-title-header"}).prependTo(".region-header-second-inner");
      $("#page-title").clone().prop({ id: "window-title", class: "object-title"}).prependTo("div.islandora-pdf-content, div.islandora-large-image-content");
      $("#sideMods tr:nth-child(0n+3) td:nth-child(0n+2)").clone().prop({ id: "pdf-object-author", class: "object-author"}).appendTo("#window-title");
      $("a.islandora-pdf-link").appendTo(".islandora-pdf-content");
      $("#sideMods div:nth-child(1)").appendTo("#sideMods");
      $(".islandora-pdf-metadata").appendTo(".islandora-pdf-content");
      $(".islandora-large-image-metadata").appendTo(".islandora-large-image-content");
      $("#islandora-solr-result-count").prop({ id: "header-result-count"}).appendTo("#breadcrumb");
      $("#region-content div.tabs.clearfix").prependTo("#block-system-main");
      $(".bookmark").prependTo("#breadcrumb");
      if ($('#largeSearch').length){
      } else{
      $("#region-header-first #block-islandora-solr-simple").clone().prop({ id: "largeSearch", value:"Search LDL.."}).appendTo( $("#block-block-12 > .block-inner > div.content")).on;
      }//this length check avoids this from firing multiple times from using the + button on the advanced search
      //$("#block-block-1").clone().prop({ id: "landingAdvanced"}).appendTo("#largeSearch");
      $("#largeSearch #edit-simple--2").prop({ id: "largeSearch_form"});
      $(".underHero").appendTo("#landingHero");
      $(".footerImg").clone().prop({ id: "logoMobile"}).prependTo("#zone-header");
      $(".landingMessage").clone().prop({id: "landingMobile", class: "landingMessageMobile"}).appendTo("#zone-header");
      $("#sideMods tr:nth-child(0n+12) td:nth-child(0n+2)").clone().prop({ id: "abstract-temporary", class: "temp"}).appendTo(".islandora-pdf-content, .islandora-large-image-content");
      $(".parent-collections").appendTo(".islandora-large-image-content, .islandora-pdf-content");

      $(".collectionPage span.islandora-basic-collection-item-count").appendTo("#page-title");
      $('.collectionPage #page-title').wrapAll('<div class="collectionHeader"/>'); //wraps collectionPage title
      $(".collectionPage .islandora-basic-collection-wrapper > p").appendTo(".collectionHeader");
      $("div.collection-description-text").appendTo(".collectionHeader");

      $(".collectionPage <div class='collectionLogo'/>").prependTo(".collectionHeader");
      $("<div class='homepageLogo'/>").prependTo(".messageContainer");
      $( ".site-name a span" ).replaceWith( "<span><span class='boldSpan'>Louisiana</span> Digital Library</span>" );

     // $('.child-institution-collections a').wrapAll('<div class="childCollections"/>'); disables overflow fix for many child collections running off the page. this is a reversion because of <a> bug / diff in test vs production


      $(".collectionPage <div class='collectionSearch'/>").insertAfter(".collectionHeader");
      $(".collectionPage #page-title").prependTo(".collectionHeader .collection-description-text");
      $(".collectionPage #block-islandora-collection-search-islandora-collection-search").appendTo(".collectionSearch");
      $("#zone-header input.form-submit").val(' ');
      $(".institution-search input.form-submit").val(' ');
      $(".collectionSearch input.form-submit").val(' ');
      $("#largeSearch input.form-submit").val(' ');
      $("#block-user-login").prependTo(".footerContainer");
      if ($('.mobileMenu').length){
      } else{
              $("<div class='mobileMenu'/>").insertBefore("div#page");
      } //this length check avoids this from firing multiple times from using the + button on the advanced search
      $("<button class='hamburger--elastic hamburger--collapse mobileMenuIcon' type='button'><span class='hamburger-box'><span class='hamburger-inner'></span></span></button>").insertBefore(".logo-img");
      $("<div class='scrollPrompt'></div>").appendTo(".front #block-block-12");
      $(".homepageText > p").prop({class:"homepageText"}).appendTo("#block-block-12 #largeSearch .content");
      $(".block-11 .homepageText p, .block-11 .homepageText br").remove();
      $("<span class='modalExit'/>").insertBefore("#block-islandora-solr-advanced .block-title");
      $("<span class='modalExit2'/>").insertBefore("#block-block-14 h2");
      $("<span class='modalExit3'/>").insertBefore(".about-ldc .view-header");


      if ($('body > #block-islandora-solr-advanced, body > #block-block-14, body > #block-views-meeting-minutes-block-1').length){
      } else {
          $("#block-islandora-solr-advanced, #block-block-14, #block-views-meeting-minutes-block-1").insertBefore(".mobileMenu");
      }//this length check avoids this from firing multiple times from using the + button on the advanced search


    if ($("body").hasClass("audioPDF")){
     $("#block-islandora-compound-object-compound-jail-display").appendTo("#sideMods");
 }


    if ($("body").attr('class').indexOf('datastream') > -1) {
        $("body").addClass('datastreamPage');
    }


//begin compoundObject

   if ( ($('.block-islandora-compound-object').length) && ( !$('body').hasClass('audioPDF') ) && ( !$('body').hasClass('datastreamPage') ) ) {

    $("#sideMods").remove();
    $("body").addClass('compoundObject');

    //find widest image
        var widest = null;
        // remember the width of the "widest" element - probably faster than calling .width() - currently disabled - move addclasswidest to second if to
        var widestWidth = 0;
        $(".compoundSelect").each(function() {
          if (widest == null)
          {
            widest = $(this).addClass('widest');;
            widestWidth = $(this).width();
          }
          else
          if ($(this).width() > widestWidth) {
            widest = $(this)
            widestWidth = $(this).width();
          }
        });
    //done finding widest image
        $("<div class='backgroundDiv'/>").insertBefore(".compoundGallery_header .form-item"); // adds div for item background
    var commentedURL = $('div.widest').find('noscript').addClass('widestIMG').text().split(" ");
    var srcclean = commentedURL[2].match(/"(.*?)"/);
    //assign background image
    $('.backgroundDiv').css('background-image', 'url(' + srcclean[1] + ')');
    $(".compoundObject #block-system-main table").prop({class:"modsTable"}).appendTo(".region-sidebar-first-inner");
    $('.compoundSelect').wrapAll('<div class="compoundGallery"/>'); //wraps collectionPage title
    $("<div class='itemMenu'/>").insertBefore(".backgroundDiv");
    $("<div class='contentLabel'/>").insertBefore(".compoundGallery"); //adds contentLabel div to show content type
    //$("<div class='contentIcon'/>").insertBefore(".compoundGallery_header > .form-item > a:first-child"); //adds contentLabel div to show content type
    $(".parentLink").wrapAll("<div class='headerBreadcrumb'/>");
    var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
    var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
    $(institutionText).addClass("institutionSmall").insertBefore("a.parentLink"); //adds institutionLabel div to show content type
    $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); //needs to be separated from the a href
        $(".compoundObject .contentLabel").addClass("compoundLabel"); //detects contentType and assign new class to contentLabel
        $(".compoundLabel").html("Compound Object"); //text within compoundLabel
        $(".manageParent, ul.tabs").appendTo(".itemMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
        $("<div class='userMenu'/>").insertAfter(".manageMenu");  //inserts compoundGlance
        $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
        $(".downloadLink").appendTo(".userMenu");
        $("#clip").appendTo(".userMenu");
        $(".compoundLabels").insertBefore(".backgroundDiv");
        $("#islandora-ip-embargo-object-embargo-form").insertBefore(".compoundGallery"); // moves ipembargo
        $("<div class='embargoTitle'>Set IP embargo settings</div>").insertBefore(".compoundObject #islandora-ip-embargo-policy-source")//adds title for ip embargo on compounds
        $('.infoToggle').click(function(){
              $(this).toggleClass('menuActive');
              $('#region-sidebar-first').toggleClass('infoOpened');
              $('body').toggleClass('metaOpened');
              $(".nano").nanoScroller({ alwaysVisible: false });
        });

        if ($('.compoundObject #block-system-main .block-inner .content > div').length){
        $("body").addClass('compoundChild');
        }
        else {
        $("body").addClass('compoundParent');
        }
        if ($('.compoundChild #islandora-openseadragon').length){
        $("body").addClass('compoundChildImage');
        }



        $('.compoundChild #block-system-main .block-inner .content > div').insertAfter('.itemMenu');
        $('#window-title').insertAfter('.itemMenu');
        $("<div class='childIcon childImage'/>").insertBefore(".compoundChildImage #window-title");
        $("<div class='contentLabel imageLabel'>Large<br>Image</div>").insertBefore(".compoundChildImage .compoundLabel");
        $(".childIcon, #window-title").wrapAll("<div class='childHeader'/>");
        $('#block-system-main').remove();
        $('<div class="childNotice">Part of</div>').insertBefore('.compoundChild .compoundGallery_header .contentIcon');
        $('.userMenu').insertAfter('#window-title');
        $('<div class="textSelect">clip image</div>').appendTo("#clip");
        $('#clip').addClass('userSelect');
        $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter("#clip");
        $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter(".compoundParent .compoundCount");
        $(".compoundCount").appendTo(".compoundGallery");
        $("#islandora-compound-next-link").insertAfter("#islandora-compound-sequence-position");
        $("<i class='fa fa-arrow-right' aria-hidden='true'></i>").appendTo("#islandora-compound-next-link");
        $("<i class='fa fa-arrow-left' aria-hidden='true'></i>").appendTo("#islandora-compound-previous-link");
        $(".userMenu").insertAfter(".headerBreadcrumb");
        $("#shareToggle").insertAfter(".infoToggle");

        $("<div id='share'/>").insertAfter("#shareToggle");

        $(".parentLink").clone().prop({class:"backContainer"}).insertAfter(".compoundGallery").html("<div class='backCollection'>Back to Collection</div>");
        $(".contentLabel").wrapAll("<div class='labelContainer'/>");

        $("#share").jsSocials({
          url: urlhref,
          text: title,
          showLabel: false,
          showCount: "inside",
          shares: ["twitter", "facebook"]
        });

        $('#shareToggle').click(function(){
          $(this).toggleClass('activeMenu');
          $('#share').toggleClass('shareActive');
          $('.compoundChild .compoundParent').toggleClass('hideme');
        });

        $('table').each(function (){
            $(this).replaceWith( $(this).html()
                .replace(/<tbody/gi, "<div class='metadataContainer'")
                .replace(/<tr/gi, "<div class='metadataRow'")
                .replace(/<\/tr>/gi, "</div>")
                .replace(/<td/gi, "<span")
                .replace(/<\/td>/gi, "</span>")
                .replace(/<\/tbody/gi, "<\/div")
            );
        });

        $("#region-sidebar-first").addClass('nano');
        $(".nano > .region-inner").appendTo('#side');
        $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
        $(".metadataSidebar").addClass('nano-content');
        $(".metadataRow span:first-child").addClass("metadataTitle");
        $(".metadataRow span:nth-child(2n)").addClass("metadataValue");
        $(".metadataContainer div:first-child").remove();  //removes weird h3 titles
        $(".metadataSidebar > .region-inner > .alpha-debug-block").remove();
        $(".metadataSidebar > .region-inner > .metadataContainer:nth-child(2n + 0)").addClass("itemMetadata");
        $(".metadataSidebar > .region-inner > .metadataContainer:nth-child(2n + 1)").addClass("compoundMetadata");
        //$(".infoToggle").clone().addClass("mobileMetaToggle").appendTo("#zone-content");
        $(".mobileMetaToggle .textSelect").replaceWith("<div class='textSelect'>Back to item view</div>");
        $(".mobileMetaToggle .iconSelect").remove();
        $(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.compoundGallery');
        $("<div class='compoundGlance'/>").insertBefore(".metadataVertical");  //inserts compoundGlance
        $(".metadataSidebar .modsDesc").clone().appendTo(".compoundGlance");
        $(".metadataSidebar .modsSubject a").clone().appendTo(".compoundGlance").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
        $(".tagsGlance > .modsSubject br").remove();
        $('.mobileMetaToggle').click(function(){
              $(this).toggleClass('menuActive');
              $('#region-sidebar-first').toggleClass('infoOpened');
              $('body').toggleClass('metaOpened');
              $(".nano").nanoScroller({ alwaysVisible: false });
        });
        $(".manageMenu").appendTo(".userMenu");
        $(".compoundParent #islandora-compound-sequence-position").remove();
        $(".compoundParent .manageParent").remove();
        $(".compoundParent #islandora-compound-next-link").remove();
        $(".manageMenu ul li:first-child").remove();
        $("#clip").remove();

}
//end compoundObject


//begin compoundChild
if ($('body').hasClass('compoundChild')){

    $(".compoundChild .compoundLabel").html("Compound <br> Child"); //text within compoundLabel
    $("<div class='compoundArrows userSelect'/>, .infoToggle, #shareToggle").appendTo(".userMenu");
    $(".infoToggle, #shareToggle").appendTo(".userMenu");
    $('#islandora-compound-sequence-position, #islandora-compound-previous-link, #islandora-compound-next-link').appendTo('.compoundArrows');
    $(".parentLink").insertAfter("#window-title");
    $(".backContainer").remove();
    $(".compoundParent").html("Back");
    $(".infoToggle:last-child").remove();
    $(".infoToggle").insertBefore(".downloadLink");
    $(".infoToggle").html("<div class='userSelect'><div class='iconSelect'><i class='fas fa-align-left'></i></div><div class='textSelect'>Toggle Info</div></div>");
    $(".downloadSelect .iconSelect").html("<i class='fas fa-download'></i>");
    $("#shareToggle .iconSelect").html("<i class='far fa-share-alt'></i>");
    $("#clip.userSelect").html("<div class='iconSelect'><i class='fas fa-crop'></i></div><div class='textSelect'>Clip Image</div>");
    $(".compoundArrows").appendTo(".childHeader");
    $("#share").insertAfter("#shareToggle");
    $(".parentLink").wrapAll("<div class='headerBreadcrumb'/>");
    $(".childImage").remove();
    $(".institutionSmall").insertBefore(".parentLink")
    $(".infoToggle").clone().attr("class", "sidebarToggle").appendTo(".metadataSidebar");
    $(".sidebarToggle .textSelect").html("Close");
    $(".sidebarToggle > div").removeClass("userSelect");

        $('.sidebarToggle').click(function(){
              $(this).toggleClass('menuActive');
              $('#region-sidebar-first').toggleClass('infoOpened');
              $('body').toggleClass('metaOpened');
              $(".nano").nanoScroller({ alwaysVisible: false });
        });

        $(".manageMenu").appendTo(".childHeader");
        $(".manageParent").insertAfter(".manageMenu .tabs");
    $( ".breadcrumbDivider" ).insertAfter( ".institutionSmall" );

  }
  //end compoundChild


// Begin book viewer

   if ( ($('#book-viewer').length) && ( !$('body').hasClass('audioPDF') ) && ( !$('.islandora-newspaper-issue').length ) ){

    $("body").addClass('bookViewer');
    $("<span class='modalExit4'><i class='fa fa-times'></i> Exit</span>").insertBefore("body.bookViewer #BookReader");
    bookTitle = $(".modsTitle").html(); // finds full title for book
    $("#BRreturn a").text(bookTitle); // undoes default title truncation
    $("#book-viewer").wrapAll("<div class='bookContainer'/>"); // adds container to bookViewer



if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
var resizeEvent = window.document.createEvent('UIEvents');
resizeEvent .initUIEvent('resize', true, false, window, 0);
window.dispatchEvent(resizeEvent);
    } else {
       window.dispatchEvent(new Event('resize'));

    }// triggers resize for #book-viewer to adjust to new container size Even Internet explorer 11 does not support resize event. Therefore, I have resolved this by using following solution.


    $("<div class='book_header'/>").insertBefore(".bookContainer"); //creates header for book items
    $("<div class='backgroundDiv'/>").appendTo(".book_header"); //creates header for book items
    thumbnailURL = $(".book-thumbnail img").prop('src');
    $('.backgroundDiv').css('background-image', 'url(' + thumbnailURL + ')');
    $("<div class='book_headerMenu'/>").appendTo(".book_header"); //creates header for book items
    $("#BRreturn a").clone().attr("id", "bookTitle").appendTo(".book_headerMenu"); // undoes default title truncation
    $("#BRreturn a").remove(); // undoes default title truncation
    $("<div class='labelContainer'/>").insertBefore(".bookContainer"); //adds label break
    $("<div class='contentLabel bookLabel'>Book Object</div>").appendTo(".labelContainer"); //adds label break
    $("#pageCount").appendTo(".bookLabel"); // moves count
    $("<div class='headerBreadcrumb'/>").appendTo(".book_headerMenu"); //temporarily moves count

    var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
    var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
    var collectionText = $(".depth-3 > a").clone(); //creates href path from breadcrumb depth-2
    var collectionHome = $(".depth-3 > a").attr('href'); //creates href path from breadcrumb depth-2

    $(institutionText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
    $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); //needs to be separated from the a href
    $(collectionText).addClass("institutionSmall").insertAfter(".breadcrumbDivider"); //creates collection breadcrumb
    $("<div class='userMenu'/>").appendTo(".book_headerMenu"); //temporarily moves count
    $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
    $("#block-system-main > div.tabs > ul.tabs").appendTo(".userMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
    $("#block-system-main > .tabs").remove(); // temporarily removes tabs until menu is set





    //begin metadata move
    $('table').each(function (){
        $(this).replaceWith( $(this).html()
            .replace(/<tbody/gi, "<div class='metadataContainer'")
            .replace(/<tr/gi, "<div class='metadataRow'")
            .replace(/<\/tr>/gi, "</div>")
            .replace(/<td/gi, "<span")
            .replace(/<\/td>/gi, "</span>")
            .replace(/<\/tbody/gi, "<\/div")
        );
    });
    $('.region-sidebar-first-inner').wrapAll('<div class="metadataSidebar"/>');
    $(".islandora-book-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
    $("#region-sidebar-first").addClass('nano');
    $(".nano > .region-inner").appendTo('#side');
    $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
    $(".metadataSidebar").addClass('nano-content'); //adds nanobar
    $(".metadataRow span:first-child").addClass("metadataTitle");//adds styles to metadata divs
    $(".metadataRow span:nth-child(2n)").addClass("metadataValue");//adds styles to metadata divs
    $(".metadataContainer div:first-child").remove();  //removes weird h3 MODS titles
    //end metadata move

    $("<div class='labelContainer descContainer'/>").insertAfter(".bookContainer"); //adds label break
    $("<div class='contentLabel bookDesc'>tags</div>").appendTo(".descContainer"); //adds label break
    $("<div class='descriptionText'/>").insertAfter(".bookDesc"); //adds label break
    $("#book-viewer div div ul li a").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");
    $("<div class='bookPreviewContainer'/>").insertAfter(".bookLabel"); //adds label break
    $("<div class='bookPreview'/>").appendTo(".bookPreviewContainer"); //adds label break
    $(".book-thumbnail").appendTo(".bookPreview");
    $("<div class='book-thumbnailData'/>").appendTo(".bookPreviewContainer");
    //$("#bookTitle").clone().attr("id", "bookTitle2").appendTo(".book-thumbnailData"); // undoes default title truncation
    $("#pageCount").attr("id", "pageCount2").appendTo(".book-thumbnailData"); // undoes default title truncation
    //$("<div class='pageImages'>Browse Pages as Images</div>").appendTo("#pageCount2"); // undoes default title truncation
    $(".metadataSidebar .modsDesc").clone().appendTo(".book-thumbnailData");

$('a[href*="pages"]').each(function() {
    $(this).addClass("pageImages").text("Browse Pages as Images").appendTo("#pageCount2");

});

    //use bookbox
    $("div.bookContainer").insertBefore("div.mobileMenu");
    $(".islandora-book-metadata").remove();
    //end bookbox

    $("<div class='bookMenu'/>").appendTo(".bookPreview"); //adds label break
    //$("#bookTitle").clone().attr("id", "bookmenuTitle").appendTo(".bookMenu"); // undoes default title truncation
    $("<div class='chooseMenu'/>").appendTo(".bookMenu"); //adds label break
    $("<div class='chooseBook chooseViewer'><div class='chooseIcon'><i class='fas fa-book'></i></div><div class='chooseText'>Open Book Viewer</div></div>").appendTo(".chooseMenu"); //adds label break



    $('.infoToggle').click(function(){
          $(this).toggleClass('menuActive');
          $('#region-sidebar-first').toggleClass('infoOpened');
          $('body').toggleClass('metaOpened');
          $(".nano").nanoScroller({ alwaysVisible: false });
    });

        $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter(".infoToggle");
        $("<div id='share'/>").insertAfter("#shareToggle");


        $("#share").jsSocials({
          url: urlhref,
          text: title,
          showLabel: false,
          showCount: "inside",
          shares: ["twitter", "facebook"]
        });

        $('#shareToggle').click(function(){
          $(this).toggleClass('activeMenu');
          $('#share').toggleClass('shareActive');

        });



$(".metadataSidebar .modsSubject a").clone().appendTo(".descContainer .descriptionText").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
$(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.content .descContainer .descriptionText');

$("button .BRicon").css("background-image", "url(https://i.imgur.com/cQTyYRT.png)");

$("button.BRicon.full_text.cboxElement").html("<i class='fa fa-align-left'></i> VIEW TEXT ONLY");
$("<div class='booksearchToggle'/>").insertBefore("#textSrch");
$("form#booksearch .booksearchToggle").html("<i class='fa fa-search'></i>Search");
$("form#booksearch button").html("GO");

$("<div class='viewerTitle'/>").insertBefore("#BRtoolbar");
$(".viewerTitle").text(bookTitle);


    $("<span class='bookDetails'><i class='fa fa-toggle-off'></i>Toggle Details</span>").insertAfter("#btnSrch");
$(".booksearchToggle").click(function(){
            $('#textSrch').toggleClass('active');
            $('#btnSrch').toggleClass('active');
            $('.bookDetails').toggleClass('active');
});


    $("<div class='bookSidebar'><div class='bookMetaContainer'></div></div>").appendTo("#BookReader"); //sets double-bagged container
    $("#region-sidebar-first > .metadataSidebar > .region-inner >  .metadataContainer ").clone().prop({id:"bookMeta"}).appendTo(".bookMetaContainer"); //fills container
        $(".bookMetaContainer").addClass("nano-content");

    $(".bookSidebar").addClass("nano");
    //begins book in-viwer metadata toggle function
    $('.bookDetails').toggle(function() {
        $('.bookDetails').html('<i class="fa fa-toggle-on"></i>Toggle Details');
    }, function() {
        $('.bookDetails').html('<i class="fa fa-toggle-off"></i>Toggle Details');
    });

    $('.bookDetails').click(function(){
              $('.bookMetaContainer').toggleClass('active');
                            $(".nano").nanoScroller({ alwaysVisible: false });


              $('.detailsContainer').toggleClass('detailsContainerActive');

    });

    if ($(window).width() < 900) {
          $('.onepg').trigger('click').once();
          $('.booksearchToggle').trigger('click').once();
          $('#textSrch').attr("placeholder", "Search" );
            $('#btnSrch').toggleClass('active');
            $('.bookDetails').toggleClass('active');
            $('.bookDetails').toggleClass('active');

          }

    //ends book in-viwer metadata toggle function




//begin OCR detection - does not work, timeout is not dependable
 // $(".full_text").trigger( "click" );
//setTimeout(function() {
 // if ( ($('div.textLeft').html() == '') && ( $('div.textRight').html() == '' ) ){
 // $('body').addClass('noOCR');
  //$(".floatShut").trigger( "click" );
 // }
//}, 1);
//end OCR detection

} // end book viewer





// begin newspaper 2.0
if ( ($('.islandora-newspaper-object').length) && ( !$('body').hasClass('audioPDF') ) ){
  $('body').addClass('newspaperSet'); // newspaper body class
  $("<div class='newspaper_header'/>").insertBefore(".islandora-newspaper-object"); //creates header for newspaper items
  $("<div class='backgroundDiv'/>").appendTo(".newspaper_header"); //creates header background for newspaper items
  $('.backgroundDiv').css('background-image', 'url(http://louisianadigitallibrary.org/islandora/object/hnoc-clf:8432/datastream/TN/view)'); //temporary static image
  imageTitle = $(".modsTitle").html(); // finds full title for book
  $("<div class='newspaper_headerMenu'/>").appendTo(".newspaper_header"); //creates header for book items
  $("<div class='newspaperTitle'/>").text(imageTitle).appendTo(".newspaper_headerMenu"); // undoes default title truncation
  //$("<div class='contentLabel newspaperLabel'>Newspaper Summary</div>").appendTo(".labelContainer"); //adds label break
  $("<div class='headerBreadcrumb'/>").appendTo(".newspaper_headerMenu"); //temporarily moves count


  // begin header links
      var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
      var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
      var collectionText = $(".depth-3 > a").clone(); //creates href path from breadcrumb depth-3
      var collectionHome = $(".depth-3 > a").attr('href'); //creates href path from breadcrumb depth-3
      $(institutionText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
      $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); //needs to be separated from the a href
      $(collectionText).addClass("institutionSmall").insertAfter(".breadcrumbDivider"); //creates collection breadcrumb
      $("<div class='userMenu'/>").appendTo(".newspaper_headerMenu"); //temporarily moves count
      $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
      $("#block-system-main > div.tabs > ul.tabs").appendTo(".userMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
      $("#block-system-main > .tabs").remove(); // temporarily removes tabs until menu is set
      $(".islandora-newspaper-object").addClass("newspaperContainer"); //adds label break
  // end header links


  // begin newspaper container
    $("<div class='labelContainer'/>").insertBefore(".newspaperContainer"); //adds label break
    $("<div class='contentLabel newspaperLabel'>newspaper summary</div>").appendTo(".labelContainer"); //adds label break
    $("<div class='newspaperPreview'/>").appendTo(".newspaperContainer"); //adds label break
    $(".newspaper-thumbnail").appendTo(".newspaperPreview");
    $("<div class='newspaper-thumbnailData'/>").insertAfter(".total-issue-count");
    $(".downloadList").insertAfter(".newspaper_headerMenu");
  // end newspaper container


  //begin metadata move
    $('table').each(function (){
        $(this).replaceWith( $(this).html()
            .replace(/<tbody/gi, "<div class='metadataContainer'")
            .replace(/<tr/gi, "<div class='metadataRow'")
            .replace(/<\/tr>/gi, "</div>")
            .replace(/<td/gi, "<span")
            .replace(/<\/td>/gi, "</span>")
            .replace(/<\/tbody/gi, "<\/div")
        );
    });
    $(".islandora-newspaper-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
    $("#region-sidebar-first").addClass('nano');
    $(".nano > .region-inner").appendTo('#side');
    $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
    $(".metadataSidebar").addClass('nano-content'); //adds nanobar
    $(".metadataRow span:first-child").addClass("metadataTitle");//adds styles to metadata divs
    $(".metadataRow span:nth-child(2n)").addClass("metadataValue");//adds styles to metadata divs
    $(".metadataContainer div:first-child").remove();  //removes weird h3 MODS titles
    $("#sideMods").appendTo(".region-sidebar-first-inner");
    $("#sideMods").addClass("metadataContainer");
    $(".islandora-newspaper-metadata").remove();
  //end metadata move


  //begin toggle functions
    $('.infoToggle').click(function(){
          $(this).toggleClass('menuActive');
          $('#region-sidebar-first').toggleClass('infoOpened');
          $('body').toggleClass('metaOpened');
          $(".nano").nanoScroller({ alwaysVisible: false });
    });
    $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter(".infoToggle");
    $("<div id='share'/>").insertAfter("#shareToggle");
    $("#share").jsSocials({
      url: urlhref,
      text: title,
      showLabel: false,
      showCount: "inside",
      shares: ["twitter", "facebook"]
    });
    $('#shareToggle').click(function(){
      $(this).toggleClass('activeMenu');
      $('#share').toggleClass('shareActive');
    });
    downloadHeight = $('.downloadList_container').height();
    $('.downloadSelect').click(function(){
      $('.downloadList').toggleClass('extendList');
      $('.downloadSelect').toggleClass('menuActive');

    });
      $('.downloadSelect').toggle(
        function(){$('.newspaper_header').css({"padding-bottom": "70px"});},
        function(){$('.newspaper_header').css({"padding-bottom": "inherit"});}
      );
  //end toggle funtions


    $(".metadataSidebar .modsDesc").clone().appendTo(".newspaper-thumbnailData");
    $("<div class='labelContainer descContainer'/>").insertAfter(".newspaperContainer"); //adds label break
    $("<div class='contentLabel bookDesc'>tags</div>").appendTo(".descContainer"); //adds label break
    $("a.institutionSmall:last-child").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");
    $("<div class='descriptionText'/>").insertAfter(".bookDesc"); //adds label break
    $(".metadataSidebar .modsSubject a").clone().appendTo(".descContainer .descriptionText").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
    $(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.content .descContainer .descriptionText');
    $(".downloadSelect").insertAfter(".infoToggle");
    $("<i class='fa fa-photo' aria-hidden='true'></i>").appendTo(".newspaperLabel");
    $(".total-issue-count").insertAfter(".newspaper-thumbnailData > span");

//begin newspaper selection

     //Finds first cover of the year and labels loaded months
    $(' .months-container').each(function (){
      if($(this).find("img.lazy").length){
        $(this).find("img.lazy").first().addClass('firstYearCover').parent().parent().parent().parent().addClass('loadedMonth');
      }
    });

     // Finds cover for first day of each month
    $(' .month-container').each(function (){
        $(this).find("img.lazy").first().addClass('firstMonthCover');
    });

    //initializes JAIL for first year covers
    $('.firstYearCover').jail({
     effect: 'fadeIn',
     event: 'load',
     placeholder: 'http://creativeme.guru/app/img/loader.gif',
     id: "firstYear",
    });

    //hover for showing first month covers
    $(".month-container").hover(
      function() {
        if($(".monthLevel").length){
        $( this ).find(".firstMonthCover").jail().clone().appendTo(".issuePreview");
      }
      }, function() {
       $("div.issuePreview").find( ".firstMonthCover:last" ).fadeOut("slow", function() { $(this).remove(); });;
      }
    );

    //hover for showing first day covers
    $("td.highlight").hover(
    function() {
      if($(".issueLevel").length){
      $( this ).find(".dayIssue").jail().clone().appendTo(".issuePreview");
    }
    }, function() {
     $("div.issuePreview").find( ".firstMonthCover:last" ).fadeOut("slow", function() { $(this).remove(); });;
    }
    );

   var monthButton = $('.month-container-label');

  $('.publication-year-container-label').click(function(){

    // choose year, change indicators, change options for datepicker
    $(this).parent().addClass('activeYear'); // choose year
    $(".viewYears").not(".activeYear").addClass("inactiveYear"); // unchoose other years
    $(".islandora-newspaper-navigation").toggleClass('secondStage'); // update progress bar
    $(".yearSelect").removeClass('activeSelect'); // update progress bar
    $(".publication-year-container").removeClass("viewYears"); // unchoose other years
    $(".monthSelect").addClass('activeSelect'); // makes months visible
    $(".newspaperContainer").removeClass("yearLevel"); //updates status for container
    $(".newspaperContainer").addClass("monthLevel"); //updates status for container
    var yearChosen = $(this).find(".publication-year").html(); //determine what year was chosen
    var somestr =  "01/01/" + yearChosen + ""; //determine what year was chosen
    $( "#calendar" ).datepicker( "setDate", somestr ); // initialize year
    $( "#calendar" ).datepicker( "option", "numberOfMonths", 12 ); // initialize months
    $( "#calendar" ).datepicker( "option", "monthNames", [ "Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ] ); // initialize months
    console.log(somestr);

    // move calendars into the links
    $("div#calendar > div.ui-datepicker-inline > div.ui-datepicker-group").each(function(){
       $(this).appendTo('div.activeYear > div.months-container > div.no-calendar > div.month-container-label');
       $(this).parent().parent().removeClass("no-calendar").addClass("with-calendar");
    });


    $("div.with-calendar").each(function(){
       $(this).find("div.ui-datepicker-group:not(:last)").remove();
       if (!($(this).find("td.highlight").length)){
         $(this).addClass("filler-calendar");
       }
    });
    $("<div class='circleDay'></div>").appendTo(".ui-datepicker-calendar td");
    $(".with-calendar").each(function() {
       $( this ).find(".firstMonthCover").jail({
         loadHiddenImages : true,
         id: "firstMonth",
       });
    });
  });



monthButton.click(function(){
  $(this).addClass('activeMonth');
  $(".month-container-label").not(".activeMonth").addClass("inactiveYear");
  $(".islandora-newspaper-navigation").addClass('thirdStage');
  $(".islandora-newspaper-navigation").removeClass('secondStage');
  $(".newsSelect").removeClass('activeSelect');
  $(".issueSelect").addClass('activeSelect');
  $(".newspaperContainer").removeClass("monthLevel");
  $(".newspaperContainer").addClass("issueLevel");
  $( "#calendar" ).datepicker("refresh");
  var monthLabel = $(this).find(".month-container-label-month").clone().addClass("monthTempLabel");
  //monthLabel.insertAfter($(this).parent().parent().parent().find("span.publication-year"));
  var yearChosen = $(this).find(".date-year").html();
  var monthChosen = $(this).find(".date-month").html();
  var somestr2 =  + monthChosen + "/01/" + yearChosen + "";
  $( "#calendar" ).datepicker( "setDate", somestr2 );
  $( "#calendar" ).datepicker( "option", "numberOfMonths", 1 );
  var tdnum =  1; //script for counting days in month and adding classes
  $("div.activeMonth td:not('.ui-state-disabled')").each(function(){ //script for counting days in month and adding classes
      $(this).addClass("dayNumber_" + tdnum); //script for counting days in month and adding classes
      tdnum++; //script for counting days in month and adding classes
  }); //script for counting days in month and adding classes
if (!($(".filler-border").length)){
    $("<span class='filler-border'/>").insertBefore(".ui-datepicker-month");
}
    $('div.activeMonth .issue-container').each(function (){
        var issueDay = ($(this).find("a").html().slice(3, 5).replace(/^0+/, ''));
        $(this).find("img").addClass("dayIssue coverDay_" + issueDay);
        $(this).find("img").clone().appendTo($(".dayNumber_" + issueDay)).jail({
          loadHiddenImages : true,
          id: "eachDay",
        });
    });

if (!($(".dayContainer").length)){
  $('.ui-datepicker-calendar td').each(function (){
     $(this).children().wrapAll("<div class='dayContainer'/>");
  }); //currently making new nest per click
}


  $('.ui-datepicker-calendar tbody tr').each(function (){
    if (!($(this).find("a.ui-state-default").length)){
      $(this).remove();
    }
  }); //currently making new nest per click


$("td.ui-datepicker-unselectable.ui-state-disabled").html().remove;


  $( ".dayContainer" ).promise().done(function() {
       $("td.highlight").hover(
        function() {
          $( this ).find(".dayIssue").clone().appendTo(".issuePreview");
        }, function() {
         $("div.issuePreview").find( "img" ).fadeOut("slow", function() { $(this).remove(); });
        }
      );
  });

});


//back to month
$(".monthSelect, .monthBack").click(function(){
  $(".monthTempLabel").remove();
  $(".newsSelect").removeClass('activeSelect');
  $(".monthSelect").addClass('activeSelect');
  $(".islandora-newspaper-navigation").addClass('secondStage');
  $(".islandora-newspaper-navigation").removeClass('thirdStage');
  $(".newspaperContainer").removeClass("issueLevel");
  $(".month-container-label").removeClass("inactiveYear");
  $(".month-container-label").removeClass("activeMonth");
  $(".newspaperContainer").addClass("monthLevel");
  var yearChosen = $(".activeYear").find(".publication-year").html();
  var somestr =  "01/01/" + yearChosen + "";
  $( "#calendar" ).datepicker( "setDate", somestr );
  $( "#calendar" ).datepicker( "option", "numberOfMonths", 12 );
  $('td.highlight').each(function (){
     $(this).find("img.dayIssue").remove();
   });



});

//back to year
$(".yearSelect, .yearBack").click(function(){
  $(".monthTempLabel").remove();
  $(".newsSelect").removeClass('activeSelect');
  $(".yearSelect").addClass('activeSelect');
  $(".publication-year-container").removeClass("inactiveYear");
  $(".publication-year-container").removeClass("activeYear");
  $(".publication-year-container").addClass("viewYears");
  $(".islandora-newspaper-navigation").removeClass('secondStage');
  $(".islandora-newspaper-navigation").removeClass('thirdStage');
  $(".newspaperContainer").removeClass("monthLevel");
  $(".newspaperContainer").removeClass("issueLevel");
  $(".month-container-label").removeClass("inactiveYear");
  $(".month-container-label").removeClass("activeMonth");
  $(".circleDay").remove();
  //$(".filler-calendar").remove();

});


//$("<div class='contentLabel newspaperLabel2'>Newspaper Selection</div>").insertAfter(".newspaper-thumbnailData");



//end newspaper selection logic


//begin datepicker

$("<div id='calendar'/>").insertAfter(".islandora-newspaper-grid"); //create container for calendars

$.getScript('https://designmodo.com/demo/calendarjquerycss3/js/jquery-ui-datepicker.min.js', function() {
    var monthsQuantity = $(".activeYear .months-container .month-container").length;
    var issueLinks = [];
    $( ".issue-container" ).each(function( index ) { // get links for each day
        var date = new Date($(this).find("a").html());
        issueLinks.push({link: $(this).find("a").attr("href"), Date: date}); // matches link and day in array
    });
    console.log(issueLinks);
    $("#calendar").datepicker({
        beforeShowDay: function(date) { // creates event for particular day
            var result = [true, '', null];
            var matching = $.grep(issueLinks, function(event) {
                return event.Date.valueOf() === date.valueOf();
            });

            if (matching.length) {
                result = [true, 'highlight', null];
            }
            return result;
        },
        onSelect: function(dateText) { // what happens when someone clicks a day
            var date,
                selectedDate = new Date(dateText),
                i = 0,
                event = null;

            while (i < issueLinks.length && !event) { // only iterate as many times are there as issues, and only if none are null
                date = issueLinks[i].Date;

                if (selectedDate.valueOf() === date.valueOf()) {
                    event = issueLinks[i];
                }
                i++;
            }
            if (event) {
              window.open(
                  issueLinks[i - 1].link,
                  '_blank' // <- This is what makes it open in a new window.
                );
            }
        }
    });
});

//end datepicker

}
// end newspaper 2.0



// begin largeImage 2.0

if ( ($('.image-thumbnail').length) && ( !$('body').hasClass('audioPDF') ) ){
  $('body').addClass('largeImage');
  $("<div class='image_header'/>").insertBefore(".islandora-large-image-object"); //creates header for image items
  $("<div class='backgroundDiv'/>").appendTo(".image_header"); //creates header for book items
  thumbnailURL = $(".image-thumbnail img").prop('src');
  $('.backgroundDiv').css('background-image', 'url(' + thumbnailURL + ')');
  imageTitle = $(".modsTitle").html(); // finds full title for book
  $("<div class='image_headerMenu'/>").appendTo(".image_header"); //creates header for book items
  $("<div class='imageTitle'/>").text(imageTitle).appendTo(".image_headerMenu"); // undoes default title truncation
  $("<div class='contentLabel imageLabel'>Large Image Object</div>").appendTo(".labelContainer"); //adds label break
  $("<div class='headerBreadcrumb'/>").appendTo(".image_headerMenu"); //temporarily moves count

  var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
  var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
  var collectionText = $(".depth-3 > a").clone(); //creates href path from breadcrumb depth-2
  var collectionHome = $(".depth-3 > a").attr('href'); //creates href path from breadcrumb depth-2

  $(institutionText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
  $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); //needs to be separated from the a href
  $(collectionText).addClass("institutionSmall").insertAfter(".breadcrumbDivider"); //creates collection breadcrumb
  $("<div class='userMenu'/>").appendTo(".image_headerMenu"); //temporarily moves count
  $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
  $("#block-system-main > div.tabs > ul.tabs").appendTo(".userMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
  $("#block-system-main > .tabs").remove(); // temporarily removes tabs until menu is set
  $(".islandora-large-image-object").addClass("imageContainer"); //adds label break

  $("<div class='labelContainer'/>").insertBefore(".imageContainer"); //adds label break
  $("<div class='contentLabel imageLabel'>Image Object</div>").appendTo(".labelContainer"); //adds label break
    $("<div class='imagePreview'/>").appendTo(".imageContainer"); //adds label break
    $(".image-thumbnail").appendTo(".imagePreview");
    $("<div class='image-thumbnailData'/>").insertAfter(".imagePreview");




    $("<div class='imageMenu'/>").appendTo(".imagePreview"); //adds label break
    //$("#bookTitle").clone().attr("id", "bookmenuTitle").appendTo(".bookMenu"); // undoes default title truncation
    $("<div class='chooseMenu'/>").appendTo(".imageMenu"); //adds label break
    $("<div class='chooseImage chooseViewer'><div class='chooseIcon'><i class='fa fa-photo'></i></div><div class='chooseText'>Open Image Viewer</div></div>").appendTo(".chooseMenu"); //adds label break
    $(".downloadList").insertAfter(".image_headerMenu");




    //begin metadata move
    $('table').each(function (){
        $(this).replaceWith( $(this).html()
            .replace(/<tbody/gi, "<div class='metadataContainer'")
            .replace(/<tr/gi, "<div class='metadataRow'")
            .replace(/<\/tr>/gi, "</div>")
            .replace(/<td/gi, "<span")
            .replace(/<\/td>/gi, "</span>")
            .replace(/<\/tbody/gi, "<\/div")
        );
    });
    $(".islandora-book-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
    $("#region-sidebar-first").addClass('nano');
    $(".nano > .region-inner").appendTo('#side');
    $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
    $(".metadataSidebar").addClass('nano-content'); //adds nanobar
    $(".metadataRow span:first-child").addClass("metadataTitle");//adds styles to metadata divs
    $(".metadataRow span:nth-child(2n)").addClass("metadataValue");//adds styles to metadata divs
    $(".metadataContainer div:first-child").remove();  //removes weird h3 MODS titles
    $("#sideMods").appendTo(".region-sidebar-first-inner");
    $("#sideMods").addClass("metadataContainer");

    //end metadata move



    $('.infoToggle').click(function(){
          $(this).toggleClass('menuActive');
          $('#region-sidebar-first').toggleClass('infoOpened');
          $('body').toggleClass('metaOpened');
          $(".nano").nanoScroller({ alwaysVisible: false });
    });

        $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter(".infoToggle");
        $("<div id='share'/>").insertAfter("#shareToggle");


        $("#share").jsSocials({
          url: urlhref,
          text: title,
          showLabel: false,
          showCount: "inside",
          shares: ["twitter", "facebook"]
        });

        $('#shareToggle').click(function(){
          $(this).toggleClass('activeMenu');
          $('#share').toggleClass('shareActive');
        });


        downloadHeight = $('.downloadList_container').height();
        $('.downloadSelect').click(function(){
          $('.downloadList').toggleClass('extendList');
          $('.downloadSelect').toggleClass('menuActive');

        });
          $('.downloadSelect').toggle(
            function(){$('.image_header').css({"padding-bottom": "70px"});},
            function(){$('.image_header').css({"padding-bottom": "inherit"});}
          );



    $(".metadataSidebar .modsDesc").clone().appendTo(".image-thumbnailData");

    $("<div class='labelContainer descContainer'/>").insertAfter(".imageContainer"); //adds label break
    $("<div class='contentLabel bookDesc'>tags</div>").appendTo(".descContainer"); //adds label break
    $("a.institutionSmall:last-child").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");

    $("<div class='descriptionText'/>").insertAfter(".bookDesc"); //adds label break

$(".metadataSidebar .modsSubject a").clone().appendTo(".descContainer .descriptionText").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
$(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.content .descContainer .descriptionText');


$(".downloadSelect").insertAfter(".infoToggle");


     $("<i class='fa fa-photo' aria-hidden='true'></i>").appendTo(".imageLabel");

    //setup for modal
    $("#islandora-openseadragon > .openseadragon-container").addClass("dragonContainer");
    $("<span class='modalExit5'><i class='fa fa-times'></i> Exit</span>").insertBefore(".dragonContainer");
    $("<span class='modalDetails'><i class='fa fa-toggle-off'></i> Toggle Details</span>").insertAfter(".modalExit5");
    $("#islandora-openseadragon").insertBefore(".mobileMenu");
    $("<div class='detailsContainer nano'/>").insertAfter(".dragonContainer > .openseadragon-canvas");
    $("<div class='imageDetails nano-content'/>").appendTo(".detailsContainer");
    $("#region-sidebar-first > .metadataSidebar > .region-inner >  .metadataContainer").clone().prop({id:"imageMeta"}).appendTo(".imageDetails");
        $('.modalDetails').click(function(){
          $('.imageDetails').toggleClass('imageDetailsActive');
          $('.detailsContainer').toggleClass('detailsContainerActive');
          $(".nano").nanoScroller({ alwaysVisible: false });
        });
    $('.modalDetails').toggle(function() {
        $('.modalDetails').html('<i class="fa fa-toggle-on"></i>Toggle Details');
    }, function() {
        $('.modalDetails').html('<i class="fa fa-toggle-off"></i>Toggle Details');
    });
    $('#islandora-openseadragon > span').wrapAll('<div class="imageToolbar"/>'); //wraps collectionPage title

  $("<div class='innerimageTitle'/>").text(imageTitle).insertAfter('span.modalExit5'); // undoes default title truncation

    //end modalSetup
}

//end largeImage 2.0




if ( ($('body').hasClass('compoundObject')) || ($('body').hasClass('bookViewer')) || ($('body').hasClass('largeImage')) || ($('body').hasClass('newspaperSet'))){
  $('body').addClass('headerversiontwo');

$('.manageMenu').insertBefore('#shareToggle');

}



if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
//alert("Please use Google Chrome, Mozilla Firefox or Safari.");
$("body").addClass("IEuser");
}


    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isSafari && iOS) {
$("body").addClass("iOSuser");
    }

 $("<a href='/'>Home</a>").appendTo(".mobileMenu");


if ($(window).width() < 900) {
$('#block-block-1').find('a').each(function() {
      $(this).appendTo(".mobileMenu");
  });

}
if ($('body').hasClass('compoundChild')){
  if ($(window).width() > 700) {
  $('body').toggleClass("metaOpened")
  $('#region-sidebar-first').toggleClass("infoOpened")
  $('.mobileMetaToggle').toggleClass('menuActive');
  $(".nano").nanoScroller({ alwaysVisible: false });

  }
}

//above - this enables meta to be open by default on larger screens

//modal advsearch

// Get the modal
var modal = document.getElementById('block-islandora-solr-advanced');
var page = document.getElementById('page');

// Get the button that opens the modal
var btn = document.getElementsByClassName("advLink")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modalExit")[0];

//get remaining padding height
var paddingHeight = ($( document ).height() - $('#block-islandora-solr-advanced').height()) + 'px';
var paddingHeight2 = ($( document ).height() - $('#block-block-14').height()) + 'px';
var paddingHeight3 = ($( document ).height() - $('#block-views-meeting-minutes-block-1').height()) + 'px';



    $.fn.menuisActive = function(){
    modal.style.display = "flex";
    $(".page").addClass('blurFilter');
    $(".parallax-slider").addClass('darkFilter');
    $("html").removeClass('mobileMenuActive');
    $("#zone-content-wrapper").addClass('noClick');
    //$('section#block-islandora-solr-advanced').css('padding-bottom',  paddingHeight);
    }

    $('section#block-islandora-solr-advanced').css('padding-bottom',  paddingHeight);
    $('#block-block-14').css('padding-bottom',  paddingHeight2);
    $('#block-views-meeting-minutes-block-1').css('padding-bottom',  paddingHeight3);


// When the user clicks on the button, open the modal
btn.onclick = function() {
        $.fn.menuisActive();

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');

      var uri = window.location.toString();
        if (uri.indexOf("#") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("#"));
            window.history.replaceState({}, document.title, clean_uri);
        }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == page){
        modal.style.display = "none";
        $(".page").removeClass('blurFilter');
        $(".parallax-slider").removeClass('darkFilter');
        $("button").removeClass('is-active');
        $("#zone-content-wrapper").removeClass('noClick');

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
    }
    if (event.target == modal2 || event.target == page) {
        modal2.style.display = "none";
        $(".page").removeClass('blurFilter');
        $(".parallax-slider").removeClass('darkFilter');
        $("#zone-content-wrapper").removeClass('noClick');

            var uri = window.location.toString();
            if (uri.indexOf("#") > 0) {
                var clean_uri = uri.substring(0, uri.indexOf("#"));
                window.history.replaceState({}, document.title, clean_uri);
            }
    }
    if (event.target == modal3 || event.target == page) {
        modal3.style.display = "none";
        $(".page").removeClass('blurFilter');
        $(".parallax-slider").removeClass('darkFilter');
        $("#zone-content-wrapper").removeClass('noClick');

            var uri = window.location.toString();
            if (uri.indexOf("#") > 0) {
                var clean_uri = uri.substring(0, uri.indexOf("#"));
                window.history.replaceState({}, document.title, clean_uri);
            }
    }
    if (event.target == modal4 || event.target == page) {
        modal4.style.display = "none";
        $(".page").removeClass('blurFilter');
        $("#zone-content-wrapper").removeClass('noClick');
    }
    if (event.target == modal5 || event.target == page) {
        modal5.style.display = "none";
        $(".page").removeClass('blurFilter');
        $("#zone-content-wrapper").removeClass('noClick');
    }

}


      $('div.form-type-checkbox input').click(function(){
          $(this).toggleClass('selectedCheck');
      });
      $('#block-islandora-solr-advanced .block-title').html('Advanced Search');

//end modal adv search


//modal contactus

// Get the modal
var modal2 = document.getElementById('block-block-14');

// Get the button that opens the modal
var btn2 = document.getElementsByClassName("contactLink")[0];

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modalExit2")[0];
var page = document.getElementById('page');
// When the user clicks on the button, open the modal


btn2.onclick = function() {
    modal2.style.display = "flex";
    $(".page").addClass('blurFilter');
    $(".parallax-slider").addClass('darkFilter');
    $("html").removeClass('mobileMenuActive');
    $("#zone-content-wrapper").addClass('noClick');

}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}

      $('div.form-type-checkbox').click(function(){
          $(this).toggleClass('selectedCheck');
      });
      $('#block-islandora-solr-advanced .block-title').html('Advanced Search');

//end modal adv search


//modal aboutldc

// Get the modal
var modal3 = document.getElementById('block-views-meeting-minutes-block-1');

// Get the button that opens the modal
var btn3 = document.getElementsByClassName("ldcLink")[0];
$('.about-ldc a');

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("modalExit3")[0];
var page = document.getElementById('page');
// When the user clicks on the button, open the modal


btn3.onclick = function() {
    modal3.style.display = "flex";
    $(".page").addClass('blurFilter');
    $(".parallax-slider").addClass('darkFilter');
    $("html").removeClass('mobileMenuActive');
    $("#zone-content-wrapper").addClass('noClick');

}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}

$('.about-ldc a').onclick = function() {
    modal3.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}

//end modal aboutldc




//modal bookviewer
   if ( ($('#book-viewer').length) && ( !$('body').hasClass('audioPDF') ) ){

// Get the modal
var modal4 = document.getElementsByClassName('bookContainer')[0];
// Get the button that opens the modal
var btn4 = document.getElementsByClassName("bookPreview")[0];
// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("modalExit4")[0];
var page = document.getElementById('page');
// When the user clicks on the button, open the modal


btn4.onclick = function() {
    modal4.style.display = "block";
    $(".page").addClass('blurFilter');
    $("html").removeClass('mobileMenuActive');
    $("#zone-content-wrapper").addClass("noClick"); //somehow not working


if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
     var evt = document.createEvent('UIEvents');
     evt.initUIEvent('resize', true, false, window, 0);
     window.dispatchEvent(evt);
    } else {
       window.dispatchEvent(new Event('resize'));

    }

 // triggers resize for #book-viewer to adjust to new container size
    window.scrollTo(0,0); //scrolls to top
    if ($(window).width() < 900) {
    $('html').addClass('fixed');
    $('.zoom_out').trigger('click').once();

}

}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');
    $("html").removeClass("fixed");

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}
}


//escape key closes modals
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
    $(".bookContainer, #block-islandora-solr-advanced, #block-views-meeting-minutes-block-1, #block-block-14, body:not(.compoundChildImage) #islandora-openseadragon").css("display","none");
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');
  }
});



//end modal bookviewer



//modal imageViewer
   if ( ($('#islandora-openseadragon').length) && ( !$('body').hasClass('audioPDF') ) ){

// Get the modal
var modal5 = document.getElementById('islandora-openseadragon');
// Get the button that opens the modal
var btn5 = document.getElementsByClassName("imagePreview")[0];
// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("modalExit5")[0];
var page = document.getElementById('page');
// When the user clicks on the button, open the modal


btn5.onclick = function() {
    modal5.style.display = "flex";
    $(".page").addClass('blurFilter');
    $("html").removeClass('mobileMenuActive');
    $("#zone-content-wrapper").addClass("noClick"); //somehow not working
    window.scrollTo(0,0); //scrolls to top
    if ($(window).width() < 900) {
    $('html').addClass('fixed');
}

}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
    $(".page").removeClass('blurFilter');
    $(".parallax-slider").removeClass('darkFilter');
    $("button").removeClass('is-active');
    $("#zone-content-wrapper").removeClass('noClick');
    $('html').removeClass('fixed');

  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}
}

//end modal imageViewer


//modal anchor setup
 var hash = window.location.hash;
            if (hash == "#advanced") {
              modal.style.display = "flex";
              $(".page").addClass('blurFilter');
              $(".parallax-slider").addClass('darkFilter');
              $("#zone-content-wrapper").addClass('noClick');

            }
            if (hash == "#contact") {
              modal2.style.display = "flex";
              $(".page").addClass('blurFilter');
              $(".parallax-slider").addClass('darkFilter');
              $("#zone-content-wrapper").addClass('noClick');

            }

            if (hash == "#about-ldc") {
              modal3.style.display = "flex";
              $(".page").addClass('blurFilter');
              $(".parallax-slider").addClass('darkFilter');
              $("#zone-content-wrapper").addClass('noClick');

            }




//begin error messages
//$('#messages').insertBefore('#section-content');
//$("<i class='fa fa-exclamation-triangle'></i>").prependTo("#messages .status");

//end error messages

//rotator




var rotations = [ "rotate1", "rotate2", "rotate3", "rotate4", "rotate6" ];
var rotation = rotations[Math.floor(Math.random()*rotations.length)];
$("body").addClass(rotation);

if ($('.featuredLink').length){
}else{

//rotate 1
$("<a href='http://louisianadigitallibrary.org/islandora/object/lsu-clt%3A10'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Cargo ship at dock., from Charles L. Thompson Photographs</span><span class='featuredDescription'>Manuscript note on verso: Giant steamships and busy workmen at the wharves.</span></div></div></a>").insertAfter(".rotate1 #block-block-12 .homepageText");
$('body.rotate1.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/5SxHTs3.jpg'});

//rotate 2
$("<a href='http://louisianadigitallibrary.org/islandora/object/lsu-p16313coll56:196'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Alligator juvenile, Col. Joseph S. Tate Photograph Album</span><span class='featuredDescription'>The photograph album (unbound) contains 103 black and white prints mounted on paper. The images show scenes from several locations in Louisiana during the 1920s. Photographer unknown.</span></div></div></a>").insertAfter(".rotate2 #block-block-12 .homepageText");
$('body.rotate2.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/3VuY8Fc.jpg'});

//rotate 3
$("<a href='http://louisianadigitallibrary.org/islandora/object/hnoc-clf:10656'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mardi Gras truck float, Charles L. Franck and Franck-Bertacci</span><span class='featuredDescription'>View of a truck float sponsored by Hayes Dairy Products. The riders are costumed in dairy costumes.</span></div></div></a>").insertAfter(".rotate3 #block-block-12 .homepageText");
$('body.rotate3.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/JyLgmsS.jpg'});

//rotate 4
$("<a href='http://louisianadigitallibrary.org/islandora/object/lsu-p16313coll56:169'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Boiling schrimp [sic], Col. Joseph S. Tate Photograph Album</span><span class='featuredDescription'>The photograph album (unbound) contains 103 black and white prints mounted on paper. The images show scenes from several locations in Louisiana during the 1920s. Photographer unknown.</span></div></div></a>").insertAfter(".rotate4 #block-block-12 .homepageText");
$('body.rotate4.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/erf0QHD.jpg'});

//rotate 5
//$("<a href='http://louisianadigitallibrary.org/islandora/object/uno-omsa:143'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mardi Gras 1925, Ogden Museum of Southern Art</span><span class='featuredDescription'>Crowds of carnival goers watching parade floats move down Canal Street, New Orleans, Louisiana for pre-Lenten festivities. Black and white photograph.</span></div></div></a>").insertAfter(".rotate5 #block-block-12 .homepageText");
//$('body.rotate5.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/Ec25IWx.jpg'});


//rotate 6
$("<a href='http://louisianadigitallibrary.org/islandora/object/uno-omsa:283'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mamou Mardi Gras, Ogden Museum of Southern Art</span><span class='featuredDescription'>Under dark clouds, a horseman wearing a cape makes his Mardi Gras ride along side a field. B/W photograph.</span></div></div></a>").insertAfter(".rotate6 #block-block-12 .homepageText");
$('body.rotate6.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/mGNQ2Ia.jpg'});

}
//end rotator

      $("#block-block-13").remove();
      $(".viewallButton").appendTo("#largeSearch_form");


$(".featuredLink").hover(function(){
    $(".parallax-slider").css("filter", "blur(0px)");
    }, function(){
    $(".parallax-slider").css("filter", "blur(5px)");
});



      $('.mobileMenuIcon, .menuOn').click(function(){
          $("#page").toggleClass('menuOn');
          $("html").toggleClass('mobileMenuActive');
          $(this).toggleClass('is-active');
              $("#zone-content-wrapper").toggleClass('noClick');
      });

  $('#section-content').click(function(){
     $('#page').removeClass('menuOn');
   $("html").removeClass('mobileMenuActive');
             $('.mobileMenuIcon').removeClass('is-active');
                 $("#zone-content-wrapper").removeClass('noClick');
   });



if ( $( "#sideMods" ).length ) {
     $("body").addClass('itemPage');
 }//allows collection Page styles


$('.not-logged-in .mobileMenu a[href$="/issues"]').remove();


$("#sideMods").contents().filter(function(){
    return (this.nodeType == 3);
}).remove();
//$("#sideMods").text().remove();
      $('.loginButton').click(function(){
          $("#block-user-login").toggleClass('shown');
      });



$('#largeSearch .form-item-islandora-simple-search-query > input').each(function() {
  $(this).attr("placeholder", "Let's Discover Louisiana Together." );
});//Adds Search text


$('#zone-header .form-item-islandora-simple-search-query > input').each(function() {
  $(this).attr('placeholder', 'Search the LDL' );
});//Adds Search text

$(".latechTheme .collectionLogo").on('click', function(){
  window.location = "/latech";
});




if ( $( "#sideMods" ).length ) {
     $("body").addClass('itemPage');
 }//allows collection Page styles


      $("<div class='childCounts'/>").appendTo(".child-institution-title");
///$(".child-institution-count-collections, .child-institution-count-items").appendTo(".childCounts");


$('.child-institution-container').each(function() {
    $(this).children(".child-institution-count-collections, .child-institution-count-items").appendTo($(this).find('.childCounts'));
});

//if($('.child-institution-collections a').length < 1){
  // $('.child-institution-collections').remove();
// } // different number of a tags on production versus testing , disable this for production

$(".institution-collection-list-a").on('click', function(){
  window.location = $(this).data("target");
});


var currentInstitution =  $( "ul.breadcrumb a.active" ).text();
//$('.institution-search #myform input').each(function() {
  //$(this).attr('placeholder', 'Search only within ' + currentInstitution );
//});//Adds Search text

    //begin show more compound script
    var compound_showChar = 45;  // How many characters are shown by default
    var compound_ellipsestext = "...";
    var compound_moretext = "Show more";
    var compound_lesstext = "Show less";


    $('.compoundSelect-title, .innerimageTitle').each(function() {
        var compound_content = $(this).html();

        if(compound_content.length > compound_showChar) {

            var c2 = compound_content.substr(0, compound_showChar);
            var h2 = compound_content.substr(compound_showChar, compound_content.length - compound_showChar);

            var html2 = c2 + compound_ellipsestext;

            $(this).html(html2);
        }

    });



    //begin show more script
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";


    $('.short_desc p, .mods-abstract-mt').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
  // end show more script

      $(".sidebarLabel").click(function(){
          $("#block-islandora-solr-basic-facets").toggle();
          $(".sidebarLabel").toggleClass("close");
      });

      var $div = $("<div>", {id: "movingBg", "class": "a"});
      $($div).prependTo("#grid-9");


//var newHeight = $( document ).height();
//$(".page-islandora-object .region-content-inner").height(newHeight);

      $('.collectionSearch input#edit-islandora-simple-search-query').each(function() {

      $(this).attr('placeholder', 'Search this collection' );
      });
      //$('input[name="op"]').val("");
      $('#block-user-login input[name="op"]').val("Login");
      //$('.page-user input[name="op"]:nth-child(1)').val("Login");

      $( " » " ).replaceWith( " / " );


     // $("#edit-islandora-simple-search-query")
     //   .focus(function() {
     //         if (this.value === this.defaultValue) {
     //             this.value = '';
      //        }
      //  })
      //  .blur(function() {
      //        if (this.value === '') {
      //            this.value = this.defaultValue;
       //       }
     // });

    }
  }


////begin smooth scroll anchor
//
//// Scroll to specific values
//// scrollTo is the same
//window.scroll({
  //top: 2500,
  //left: 0,
  //behavior: 'smooth'
//});
//
//// Scroll certain amounts from current position
//window.scrollBy({
  //top: 100, // could be negative value
  //left: 0,
  //behavior: 'smooth'
//});
//
//// Scroll to a certain element
//document.querySelector('.hello').scrollIntoView({
  //behavior: 'smooth'
//});
//
//// Select all links with hashes
//$('a[href*="#"]')
  //// Remove links that don't actually link to anything
  //.not('[href="#"]')
  //.not('[href="#0"]')
  //.click(function(event) {
    //// On-page links
    //if (
      //location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      //&&
      //location.hostname == this.hostname
    //) {
      //// Figure out element to scroll to
      //var target = $(this.hash);
      //target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      //// Does a scroll target exist?
      //if (target.length) {
        //// Only prevent default if animation is actually gonna happen
        //event.preventDefault();
        //$('html, body').animate({
          //scrollTop: target.offset().top
        //}, 1000, function() {
          //// Callback after animation
          //// Must change focus!
          //var $target = $(target);
          //$target.focus();
          //if ($target.is(":focus")) { // Checking if the target was focused
            //return false;
          //} else {
            //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          //};
        //});
      //}
    //}
  //});

//end scroll


}
}(jQuery));
