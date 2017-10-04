
(function ($) {
  Drupal.behaviors.ldltheme = {
    attach: function (context, settings) {
/*ScrollReveal*/
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.ScrollReveal=t()}(this,function(e,t,n){return function(){"use strict";var e,t,n;this.ScrollReveal=function(){function i(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==i.prototype?new i(n):(e=this,e.tools=new t,e.isSupported()?(e.tools.extend(e.defaults,n||{}),o(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console,e)}function o(t){var n=t.container;return n&&"string"==typeof n?t.container=window.document.querySelector(n):(n&&!e.tools.isNode(n)&&(t.container=null),null==n&&(t.container=window.document.documentElement),t.container)}function r(){return++e.uid}function s(t,n){t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X","top"!==t.config.origin&&"left"!==t.config.origin||(t.config.distance="-"+t.config.distance)}function a(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!=t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=l(e,0),e.styles.transition.delayed=l(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",c(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",c(e)}function l(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function c(e){var t=e.config,n=e.styles.transform;parseInt(t.distance)&&(n.initial+=" translate"+t.axis+"("+t.distance+")",n.target+=" translate"+t.axis+"(0)"),t.scale&&(n.initial+=" scale("+t.scale+")",n.target+=" scale(1)"),t.rotate.x&&(n.initial+=" rotateX("+t.rotate.x+"deg)",n.target+=" rotateX(0)"),t.rotate.y&&(n.initial+=" rotateY("+t.rotate.y+"deg)",n.target+=" rotateY(0)"),t.rotate.z&&(n.initial+=" rotateZ("+t.rotate.z+"deg)",n.target+=" rotateZ(0)"),n.initial+="; opacity: "+t.opacity+";",n.target+="; opacity: "+e.styles.computed.opacity+";"}function f(t){var n=t.config.container;n&&-1==e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function u(t,n,i){var o={selector:t,config:n,interval:i};e.history.push(o)}function d(){if(e.isSupported()){p();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",y),e.store.containers[t].addEventListener("resize",y);e.initialized||(window.addEventListener("scroll",y),window.addEventListener("resize",y),e.initialized=!0)}return e}function y(){n(p)}function m(){var t,n,i,o;e.tools.forOwn(e.sequences,function(r){o=e.sequences[r],t=!1;for(var s=0;s<o.elemIds.length;s++)i=o.elemIds[s],n=e.store.elements[i],O(n)&&!t&&(t=!0);o.active=t})}function p(){var t,n;m(),e.tools.forOwn(e.store.elements,function(i){n=e.store.elements[i],t=b(n),v(n)?(t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),w("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&g(n,t)):h(n)&&(n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),w("reset",n),n.revealing=!1)})}function g(t,n){var i=0,o=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"==t.config.useDelay&&(o=t.config.delay),t.sequence.timer&&(i=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,y()},Math.abs(r.interval)+o-i)}function w(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function v(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return O(t)&&!t.revealing&&!t.disabled}function b(t){var n=t.config.useDelay;return"always"===n||"onload"===n&&!e.initialized||"once"===n&&!t.seen}function h(t){if(t.sequence){var n=e.sequences[t.sequence.id];return!n.active&&t.config.reset&&t.revealing&&!t.disabled}return!O(t)&&t.config.reset&&t.revealing&&!t.disabled}function x(e){return{width:e.clientWidth,height:e.clientHeight}}function q(e){if(e&&e!==window.document.documentElement){var t=E(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function E(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:n,height:i,width:o}}function O(e){function t(){var t=c+a*s,n=f+l*s,i=u-a*s,y=d-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return g>t&&i>m&&n>p&&w>y}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=E(e.domEl),o=x(e.config.container),r=q(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,u=c+a,d=f+l;return t()||n()}return i.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(e){},afterReset:function(e){}},i.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},i.prototype.reveal=function(t,n,i,l){var c,y,m,p,g,w;if(c=n&&n.container?o(n):e.defaults.container,y=e.tools.isNode(t)?[t]:Array.prototype.slice.call(c.querySelectorAll(t)),!y.length)return e;n&&"number"==typeof n&&(i=n,n={}),i&&"number"==typeof i&&(w=r(),g=e.sequences[w]={id:w,interval:i,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=e.store.elements[p]:(m={id:r(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),s(m,n||{}),a(m),f(m),e.tools.isMobile()&&!m.config.mobile||!e.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!l&&e.isSupported()&&(u(t,n),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(d,0)),e},i.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.selector,n.config,n.interval,!0)}d()}return e},i}(),t=function(){function e(){}return e.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor==Object},e.prototype.isNode=function(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},e.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},e.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},e.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e}(),n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}.call(this),this.ScrollReveal});
/*End ScrollReveal*/

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
      sr.reveal('.islandora-solr-sort, .landingHero', { duration: 200, delay: 0,  easing: 'linear', scale: 1, viewFactor: 0.01,}, 20);
      sr.reveal('.solr-fields, .islandora-solr-sort li, .page-browse-collections tr, .islandora-pdf-content', { duration: 200, delay: 350,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
      sr.reveal('.solr-thumb img', { duration: 200, delay: 850,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
      sr.reveal('.islandora-basic-collection-grid dl', { duration: 100, delay: 200,  easing: 'ease-in', }, 20);
      sr.reveal('.bookmarkWelcome', { duration: 800, delay: 100,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 50);
      $("a > .institutionLink_meta").each(function() {
        $(this).colourBrightness();//
      });

});

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
           $("body").addClass('audioPDF');
       }//allows collection Page styles


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
      $("#region-header-first #block-islandora-solr-simple").clone().prop({ id: "largeSearch", value:"Search LDL.."}).appendTo( $("#block-block-12 > .block-inner > div.content")).on;
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

      $(".collectionPage <div class='collectionSearch'/>").insertAfter(".collectionHeader");
      $(".collectionPage #page-title").prependTo(".collectionHeader .collection-description-text");
      $(".collectionPage #block-islandora-collection-search-islandora-collection-search").appendTo(".collectionSearch");
      $("#zone-header input.form-submit").val(' ');
      $(".institution-search input.form-submit").val(' ');    
      $(".collectionSearch input.form-submit").val(' ');     
      $("#largeSearch input.form-submit").val(' ');  
      $("#block-user-login").prependTo(".footerContainer");

      $("<div class='mobileMenu'/>").insertBefore("div#page");
      $("<button class='hamburger--elastic hamburger--collapse mobileMenuIcon' type='button'><span class='hamburger-box'><span class='hamburger-inner'></span></span></button>").insertBefore(".logo-img");
      $("<div class='scrollPrompt'> <a href='#''></a> </div>").appendTo(".front #block-block-12");
      $(".homepageText > p").prop({class:"homepageText"}).appendTo("#block-block-12 #largeSearch .content");
      $(".block-11 .homepageText p, .block-11 .homepageText br").remove();
      $("<span class='modalExit'/>").insertBefore("#block-islandora-solr-advanced .block-title");
      $("<span class='modalExit2'/>").insertBefore("#block-block-14 h2");

      $("#block-islandora-solr-advanced, #block-block-14").insertBefore(".mobileMenu");



      $("<a href='/'>Home</a>").appendTo(".mobileMenu");  


if ($(window).width() < 900) {
$('#block-block-1').find('a').each(function() {
      $(this).appendTo(".mobileMenu");

  });
}
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
    if (event.target == modal){
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


//rotator




var rotations = [ "rotate1", "rotate2", "rotate3", "rotate4", "rotate5", "rotate6" ];
var rotation = rotations[Math.floor(Math.random()*rotations.length)];
$("body").addClass(rotation);

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
$("<a href='http://louisianadigitallibrary.org/islandora/object/uno-omsa:143'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mardi Gras 1925, Ogden Museum of Southern Art</span><span class='featuredDescription'>Crowds of carnival goers watching parade floats move down Canal Street, New Orleans, Louisiana for pre-Lenten festivities. Black and white photograph.</span></div></div></a>").insertAfter(".rotate5 #block-block-12 .homepageText");
$('body.rotate5.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/Ec25IWx.jpg'});


//rotate 6
$("<a href='http://louisianadigitallibrary.org/islandora/object/uno-omsa:283'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mamou Mardi Gras, Ogden Museum of Southern Art</span><span class='featuredDescription'>Under dark clouds, a horseman wearing a cape makes his Mardi Gras ride along side a field. B/W photograph.</span></div></div></a>").insertAfter(".rotate6 #block-block-12 .homepageText");
$('body.rotate6.front #block-block-12').parallax({imageSrc: 'https://i.imgur.com/mGNQ2Ia.jpg'});


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

if($('.child-institution-collections a').length < 1){
   $('.child-institution-collections').remove();
}

$(".institution-collection-list-a").on('click', function(){
  window.location = $(this).data("target");    
});


var currentInstitution =  $( "ul.breadcrumb a.active" ).text();
//$('.institution-search #myform input').each(function() {
  //$(this).attr('placeholder', 'Search only within ' + currentInstitution );
//});//Adds Search text


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
  };


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

}(jQuery));
