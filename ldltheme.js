(function ($) {
  Drupal.behaviors.ldltheme = {
    attach: function (context, settings) { //sets up jquery
//begin loading screen and onload animations
$("#block-block-11, #messages").prependTo(".page"); //moves loading block
$(window).on("load", function() {
    $('section#block-block-11').delay(000).fadeOut(800, function(){ $(this).remove();});
    $(".region-content-inner").delay(000).queue(function(next){
     $(this).addClass('reveal');
      next();
});
});
//end loading screen and onload animations

$('.islandora-large-image-content-wrapper > #clip').contents().replaceWith("Clip & Download"); //Modifies download link contents from weird scissor icon
if ( $( "#messages" ).length ) { 
     $( "#section-content" ).addClass('blurred');
 }//allows errors to have blurred background

 if ( $( ".islandora-large-image-object" ).length ) {
     $( "#page" ).addClass('largeImage');
 }//detects and assigns large image viewer class

 if ( $( "#block-islandora-compound-object-compound-navigation" ).length ) {
     $( "#page" ).addClass('compoundObject');
 }//detects and assigns large image viewer class


if ( $( ".front" ).length ) { 
     $('.menu').find('.active').parent().addClass('active-trail');
 }//allows home menu navigation to lightup

$(".page").children().not('#messages').click(function() {
     $("#section-content").removeClass("blurred");
     $("#messages").css( "display", "none" );
});//need to replace this with a created div with class, avoiding ::after

//allows errors to be closed
//$('.islandora-basic-collection-object').each(function() {
  //$(this).find("img").clone().attr('class', 'blurredBG').prependTo(this);
//});
//$('.islandora-basic-collection-object').each(function() {
  //var src = $(this).find("img").attr("src");
  //$(this).css("backgroundImage","url("+src+")");
//});

$('dl.solr-fields').each(function() {

  var da = $(this).children('dd.mods-origininfo-dateissued-ms');
  var ti = $(this).children('dd.dc-title');
  var ab = $(this).children('dd.mods-abstract-mt');
  $(ab).insertAfter($(ti));
    $(da).insertBefore($(ti));

});

$('dd.mods-subject-topic-ms').each(function(i, em) {
  if($(em).html() != "" ) {
    $(em).html($(em).html().replace(/,/ig, ""));
  }
}); //hides 'commas


$('span.islandora-basic-collection-item-count').each(function(i, el) {
  if($(el).html() != "" ) {
    $(el).html($(el).html().replace(/items/ig, ""));
  }
}); //hides 'items' string in number count, string is now in ::after so that it can be formatted


$('#region-footer-first').addClass('fp-auto-height');
$('.region-inner > #block-delta-blocks-site-name').appendTo('.block-delta-blocks-logo .content');
$('span.islandora-basic-collection-item-count').prependTo("#page-title"); //moves item count to page title
//$("#logo > img").attr('src', 'http://i.imgur.com/24vAVba.png');//changes logo
//$(".islandora-basic-collection-thumb > a > img").attr('src', 'http://i.imgur.com/f9AMXi3.png');//changes folder icon
$(".front #page-title").contents().replaceWith("Louisiana Digital Library");//changes homepage title
$("#region-footer-first").appendTo(".zone-content"); //becomes 2nd slide
$('#block-islandora-solr-simple').clone().prop('id','block-islandora-solr-simple2').appendTo(".largeLogo"); //creates main search window
$('.zone-content').not('.largeImage .zone-content').attr('id', 'fullpage');//prepares content region for fullpage instance
$('.largeImage .zone-content').attr('id', 'basicitem');//prepares content region for fullpage instance
$('.islandora-large-image-metadata').addClass('section metadata').insertBefore('#region-footer-first');//prepares slide for parallax bg
$('.prevnext').wrapAll('<div class="prevnextContainer"/>'); //wraps prevnext
$('.prevnextContainer').addClass('section fp-auto-height').insertBefore('#region-footer-first');//moves prevnext
$('.block-islandora-compound-object-compound-navigation').appendTo('.region-content');//moves compoundobject navigation
$('.zone-content > div').not('#messages').addClass('section');//prepares content region for fullpage slide
$('.zone-content > footer').addClass('section');//prepares content region for fullpage slide
$('#fullpage aside').remove();//removes asides that interfere with navigation when logged in
$('#region-content, .metadata').prepend('<div class="fp-bg"></div>');//prepares slide for parallax bg
$("#region-content .fp-bg").delay(0).queue(function(next){
 $(this).addClass('blur');   
    next();
});//blurs bg - needs to go through two classes to avoid messing up fullpage transition if you want duration
$('.form-item-islandora-simple-search-query > input').each(function() {
  $(this).attr('placeholder', 'Search the LDL' );
});//Adds Search text
$('.metadata table tr td br').remove(); //removes br's from metadata table
$('.metadata td.modsTitle').clone().attr('class', 'tableTitle').appendTo('.metadata tbody'); //at-a-glance title

$('.largeImage .region-inner #page-title').wrap('<div class="glanceMeta"></div>');
$('.prevnextContainer').clone().attr('class', 'glancePrevNext').insertBefore('.glanceMeta');


$('.metadata .dateCreated').clone().attr('class', 'glanceDate').appendTo('.glanceMeta');//at-a-glance date, needs to be truncated
$('.metadata .abstract').clone().attr('class', 'glanceAbstract').appendTo('.glanceMeta');//at-a-glance description, needs to be truncated
$('dl.islandora-basic-collection-object').each(function() {
  var ln = $(this).find("a").attr("href");
  var ti = $(this).find("a").attr("title");  
  $(this).wrap( "<a href="+ln+" title="+ti+"></a>");
});//Wraps items to improve clickability

$('.compoundObject div.prevnext:nth-child(1)').remove();


$( "dt.islandora-basic-collection-thumb a[href$='%3Acollection']" ).parent().parent().parent().addClass('collectionLevel');
$('dd.solr-value mods-abstract-mt').each(function(){
  $(this).insertAfter('dd.solr-value dc-title');
});


$('.menu li').each(function() {
  var ln = $(this).find("a").attr("href");
  var ti = $(this).find("a").text();  
  $(this).wrap( "<a href="+ln+" title="+ti+"></a>");
});//Wraps navigation items to improve clickability

var mainHeight = $('#block-system-main').height();


var $grid = $('.islandora-solr-search-results').masonry({
  // options...
  itemSelector: '.islandora-solr-search-result',
  columnWidth: 210
});


// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

$('#basicitem').fullpage({
  menu: '#menu',
  lockAnchors: false,
  anchors:['item', 'metadata','related','footer'],
  navigation: true,
  navigationPosition: 'top',
  navigationTooltips: ['item', 'metadata','related','footer'],
  normalScrollElements: 'header, .element2, .openseadragon-canvas',
  recordHistory: false,
  autoScrolling: true,
  showActiveTooltip: true,  
  paddingTop: '0px',
  paddingBottom: '0px',
  fixedElements: '',  
  parallax: true,
  parallaxOptions: {type: 'cover', percentage: 20, property: 'translate'},
  parallaxKey: 'bGRsLmxpYi5sc3UuZWR1XzlsNWNHRnlZV3hzWVhnPTdJSQ==',
  fitToSection: false,

});

$('#fullpage').not('.page-islandora-search #fullpage').fullpage({//initiates fullpage
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['Home', 'About'],
  navigation: false,
  navigationPosition: 'top',
  navigationTooltips: ['Home', 'About'],
  showActiveTooltip: true,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: false,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: 'header, .element2, .openseadragon-canvas',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: {
          click: true
     },
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: false,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : ['#ccc', '#fff'],
  paddingTop: '0px',
  paddingBottom: '0px',
  fixedElements: '#section-header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 500,
  responsiveSlides: false,
  parallax: true,
  parallaxOptions: {type: 'cover', percentage: 20, property: 'translate'},
  parallaxKey: 'bGRsLmxpYi5sc3UuZWR1XzlsNWNHRnlZV3hzWVhnPTdJSQ==',

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',
  lazyLoading: true,

  //events
  onLeave: function(index, nextIndex, direction){},
  afterLoad: function(anchorLink, index){},
  afterRender: function(){},
  afterResize: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});

$('div.fp-tooltip.top').each(function() {
  var ps = $(this).prev();
  $(this).prependTo(ps);
  $(this).next().remove();
});//fp nav changes

//$('#fp-nav li:nth-child(1) a:nth-child(1)').append('<i class="fa fa-cube" aria-hidden="true"></i>');
//adds icons

$('#fp-nav').appendTo('ul.breadcrumb li.last');

$('body').addClass(ns + 'Theme institution');
  var url = window.location.pathname;
  var namespaces = ['uno','loyno', 'mcneese', 'lsu', 'latech', 'hnoc', 'tulane', 'state'];
  for(namespace in namespaces){
    var ns = namespaces[namespace];
    var re = new RegExp(ns +"\\b");
    if (re.test(url)) {
      $("body").addClass(ns + "Theme institution");
  };
}//logic for branded items and collection pages

//begin show more script
var showChar = 100;  // How many characters are shown by default
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
  $grid.masonry('layout');

  return false;
});
// end show more script

//begin show more script for glance
var glanceChar = 84;  // How many characters are shown by default
var glanceMore = "more";
$('.glanceAbstract').each(function() {
  var glanceContent = $(this).html();
  if(glanceContent.length > glanceChar) {
      var d = glanceContent.substr(0, glanceChar);
      var i = glanceContent.substr(glanceChar, glanceContent.length - glanceChar);
      var html2 = d + ellipsestext + '<a href="#metadata" class="moreMetadata">' + glanceMore + '</a></span>';
      $(this).html(html2);
  }
});


$(".sidebarLabel").click(function(){
    $("#block-islandora-solr-basic-facets").toggle();
    $(".sidebarLabel").toggleClass("close");
});//logic for toggling the facets on mobile
$('#block-user-login input[name="op"]').val("Login"); //Login placeholder text
$('.page-user input[name="op"]:nth-child(1)').val("Login"); //Login placeholder text

}
};
}(jQuery));
/*!
 * fullPage 2.9.4 - Extensions 0.0.8
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var r="fullpage-wrapper",a="."+r,l="fp-scrollable",s="."+l,c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",h="fp-viewing",p="active",v="."+p,g="fp-completely",m="."+g,S=".section",w="fp-section",y="."+w,b=y+v,x=y+":first",C=y+":last",A="fp-tableCell",T="."+A,I="fp-auto-height",k="fp-normal-scroll",L="fp-nav",M="#"+L,O="fp-tooltip",E="."+O,R="fp-show-active",H=".slide",z="fp-slide",B="."+z,D=B+v,P="fp-slides",F="."+P,V="fp-slidesContainer",W="."+V,j="fp-table",Z="fp-slidesNav",Y="."+Z,N=Y+" a",q="fp-controlArrow",U="."+q,G="fp-prev",X="."+G,Q=q+" "+G,_=U+X,K="fp-next",J="."+K,$=q+" "+K,ee=U+J,ne=e(n),te=e(t),oe={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(l){function s(n,t){n||ct(0),wt("autoScrolling",n,t);var o=e(b);l.autoScrolling&&!l.scrollBar?(xt.css({overflow:"hidden",height:"100%"}),q(Gt.recordHistory,"internal"),Rt.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&ct(o.position().top)):(xt.css({overflow:"visible",height:"initial"}),q(!1,"internal"),Rt.css({"-ms-touch-action":"","touch-action":""}),pt(Rt),o.length&&xt.scrollTop(o.position().top)),Rt.trigger("setAutoScrolling",[n])}function q(e,n){wt("recordHistory",e,n)}function X(e,n){"internal"!==n&&l.fadingEffect&&At.fadingEffect&&At.fadingEffect.update(e),wt("scrollingSpeed",e,n)}function K(e,n){wt("fitToSection",e,n)}function J(e){l.lockAnchors=e}function re(e){e?(nt(),tt()):(et(),ot())}function ae(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){ft(n,t,"m")})):n?(re(!0),it()):(re(!1),rt())}function le(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){ft(n,t,"k")})):l.keyboardScrolling=n}function se(){var n=e(b).prev(y);n.length||!l.loopTop&&!l.continuousVertical||(n=e(y).last()),n.length&&_e(n,null,!0)}function ce(){var n=e(b).next(y);n.length||!l.loopBottom&&!l.continuousVertical||(n=e(y).first()),n.length&&_e(n,null,!1)}function de(e,n){X(0,"internal"),fe(e,n),X(Gt.scrollingSpeed,"internal")}function fe(e,n){var t=Nn(e);"undefined"!=typeof n?Un(e,n):t.length>0&&_e(t)}function ue(e){Ge("right",e)}function he(e){Ge("left",e)}function pe(n){if(!Rt.hasClass(f)){zt=!0,Ht=ne.height(),e(y).each(function(){var n=e(this).find(F),t=e(this).find(B);l.verticalCentered&&e(this).find(T).css("height",Zn(e(this))+"px"),e(this).css("height",Ce(e(this))+"px"),l.scrollOverflow&&(t.length?t.each(function(){Wn(e(this))}):Wn(e(this))),t.length>1&&In(n,n.find(D))});var t=e(b),o=t.index(y);o&&de(o+1),zt=!1,e.isFunction(l.afterResize)&&n&&l.afterResize.call(Rt),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(Rt)}}function ve(n){var t=Ct.hasClass(c);n?t||(s(!1,"internal"),K(!1,"internal"),e(M).hide(),Ct.addClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(Rt,n),l.responsiveSlides&&At.responsiveSlides&&At.responsiveSlides.toSections(),Rt.trigger("afterResponsive",[n])):t&&(s(Gt.autoScrolling,"internal"),K(Gt.autoScrolling,"internal"),e(M).show(),Ct.removeClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(Rt,n),l.responsiveSlides&&At.responsiveSlides&&At.responsiveSlides.toSlides(),Rt.trigger("afterResponsive",[n]))}function ge(){return{options:l,internals:{canScroll:Dt,isScrollAllowed:Ft,getDestinationPosition:Qe,isTouch:Et,c:un,getXmovement:Vn,removeAnimation:zn,getTransforms:dt,lazyLoad:on,addAnimation:Hn,performHorizontalMove:Mn,landscapeScroll:In,silentLandscapeScroll:st,keepSlidesPosition:Xe,silentScroll:ct,styleSlides:xe,scrollHandler:Be,getEventsPage:lt,getMSPointer:at,isReallyTouch:Ye,checkParentForNormalScrollElement:Ze,usingExtension:vt,toggleControlArrows:kn}}}function me(){l.css3&&(l.css3=$n()),l.scrollBar=l.scrollBar||l.hybrid,ye(),be(),ae(!0),s(l.autoScrolling,"internal"),Rn(),Jn(),"complete"===t.readyState&&hn(),ne.on("load",hn)}function Se(){ne.on("scroll",Be).on("hashchange",pn).blur(bn).resize(En),te.keydown(vn).keyup(mn).on("click touchstart",M+" a",xn).on("click touchstart",N,Cn).on("click",E,gn),e(y).on("click touchstart",U,yn),l.normalScrollElements&&(te.on("mouseenter",l.normalScrollElements,function(){re(!1)}),te.on("mouseleave",l.normalScrollElements,function(){re(!0)}))}function we(e){var t="fp_"+e+"Extension";Xt[e]=l[e+"Key"],At[e]="undefined"!=typeof n[t]?new n[t]:null,At[e]&&At[e].c(e)}function ye(){var n=Rt.find(l.sectionSelector);l.anchors.length||(l.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),l.navigationTooltips.length||(l.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function be(){Rt.css({height:"100%",position:"relative"}),Rt.addClass(r),e("html").addClass(u),Ht=ne.height(),Rt.removeClass(f),Ie(),gt("parallax","init"),e(y).each(function(n){var t=e(this),o=t.find(B),i=o.length;Ae(t,n),Te(t,n),i>0?xe(t,o,i):l.verticalCentered&&jn(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(Ct),l.navigation&&Le(),Oe(),l.fadingEffect&&At.fadingEffect&&At.fadingEffect.apply(),l.scrollOverflow?("complete"===t.readyState&&Me(),ne.on("load",Me)):He()}function xe(n,t,o){var i=100*o,r=100/o;t.wrapAll('<div class="'+V+'" />'),t.parent().wrap('<div class="'+P+'" />'),n.find(W).css("width",i+"%"),o>1&&(l.controlArrows&&ke(n),l.slidesNavigation&&Xn(n,o)),t.each(function(n){e(this).css("width",r+"%"),l.verticalCentered&&jn(e(this))});var a=n.find(D);a.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==a.index())?st(a,"internal"):t.eq(0).addClass(p)}function Ce(e){return l.offsetSections&&At.offsetSections?At.offsetSections.getWindowHeight(e):Ht}function Ae(n,t){t||0!==e(b).length||n.addClass(p),Lt=e(b),n.css("height",Ce(n)+"px"),l.paddingTop&&n.css("padding-top",l.paddingTop),l.paddingBottom&&n.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[t]&&n.css("background-color",l.sectionsColor[t]),"undefined"!=typeof l.anchors[t]&&n.attr("data-anchor",l.anchors[t])}function Te(n,t){"undefined"!=typeof l.anchors[t]&&n.hasClass(p)&&Pn(l.anchors[t],t),l.menu&&l.css3&&e(l.menu).closest(a).length&&e(l.menu).appendTo(Ct)}function Ie(){Rt.find(l.sectionSelector).addClass(w),Rt.find(l.slideSelector).addClass(z)}function ke(e){e.find(F).after('<div class="'+Q+'"></div><div class="'+$+'"></div>'),"#fff"!=l.controlArrowColor&&(e.find(ee).css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(_).css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(_).hide()}function Le(){Ct.append('<div id="'+L+'"><ul></ul></div>');var n=e(M);n.addClass(function(){return l.showActiveTooltip?R+" "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(y).length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',r=l.navigationTooltips[t];"undefined"!=typeof r&&""!==r&&(i+='<div class="'+O+" "+l.navigationPosition+'">'+r+"</div>"),i+="</li>",n.find("ul").append(i)}e(M).css("margin-top","-"+e(M).height()/2+"px"),e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)}function Me(){e(y).each(function(){var n=e(this).find(B);n.length?n.each(function(){Wn(e(this))}):Wn(e(this))}),He()}function Oe(){Rt.find('iframe[src*="youtube.com/embed/"]').each(function(){Ee(e(this),"enablejsapi=1")})}function Ee(e,n){var t=e.attr("src");e.attr("src",t+Re(t)+n)}function Re(e){return/\?/.test(e)?"&":"?"}function He(){var n=e(b);n.addClass(g),l.scrollOverflowHandler.afterRender&&l.scrollOverflowHandler.afterRender(n),on(n),rn(n),l.scrollOverflowHandler.afterLoad(),ze()&&e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(l.afterRender)&&l.afterRender.call(Rt)}function ze(){var e=n.location.hash.replace("#","").split("/"),t=Nn(decodeURIComponent(e[0]));return!t.length||t.length&&t.index()===Lt.index()}function Be(){to||(requestAnimationFrame(De),to=!0)}function De(){Rt.trigger("onScroll");var n;if((!l.autoScrolling||l.scrollBar||vt("dragAndMove"))&&!St()){var i=vt("dragAndMove")?o.abs(At.dragAndMove.getCurrentScroll()):ne.scrollTop(),r=(Fe(i),0),a=i+ne.height()/2,s=vt("dragAndMove")?At.dragAndMove.getDocumentHeight():Ct.height()-ne.height(),c=s===i,d=t.querySelectorAll(y);if(c)r=d.length-1;else if(i)for(var f=0;f<d.length;++f){var u=d[f];u.offsetTop<=a&&(r=f)}else r=0;if(n=e(d).eq(r),!n.hasClass(p)){Qt=!0;var h,v,g=e(b),m=g.index(y)+1,S=Fn(n),w=n.data("anchor"),x=n.index(y)+1,C=n.find(D);C.length&&(v=C.data("anchor"),h=C.index()),Dt&&(n.addClass(p).siblings().removeClass(p),gt("parallax","afterLoad"),e.isFunction(l.onLeave)&&l.onLeave.call(g,m,x,S),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,w,x),l.resetSliders&&At.resetSliders&&At.resetSliders.apply({localIsResizing:zt,leavingSection:m}),ln(g),on(n),rn(n),Pn(w,x-1),l.anchors.length&&(Tt=w),Qn(h,v,w,x)),clearTimeout(Zt),Zt=setTimeout(function(){Qt=!1},100)}l.fitToSection&&(clearTimeout(Yt),Yt=setTimeout(function(){l.fitToSection&&Pe()},l.fitToSectionDelay))}to=!1}function Pe(){Dt&&(zt=!0,_e(e(b)),zt=!1)}function Fe(e){var n=e>_t?"down":"up";return _t=e,oo=e,n}function Ve(e,n){if(Ft.m[e]){var t="down"===e?"bottom":"top",o="down"===e?ce:se;if(At.scrollHorizontally&&(o=At.scrollHorizontally.getScrollSection(e,o)),n.length>0){if(!l.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function We(e){var n=e.originalEvent;!Ze(e.target)&&l.autoScrolling&&Ye(n)&&e.preventDefault()}function je(n){var t=n.originalEvent,i=e(t.target).closest(y);if(!Ze(n.target)&&Ye(t)){l.autoScrolling&&n.preventDefault();var r=l.scrollOverflowHandler.scrollable(i),a=lt(t);$t=a.y,eo=a.x,i.find(F).length&&o.abs(Jt-eo)>o.abs(Kt-$t)?!Mt&&o.abs(Jt-eo)>ne.outerWidth()/100*l.touchSensitivity&&(Jt>eo?Ft.m.right&&ue(i):Ft.m.left&&he(i)):l.autoScrolling&&Dt&&o.abs(Kt-$t)>ne.height()/100*l.touchSensitivity&&(Kt>$t?Ve("down",r):$t>Kt&&Ve("up",r))}}function Ze(n,t){t=t||0;var o=e(n).parent();return!!(t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements))||t!=l.normalScrollElementTouchThreshold&&Ze(o,++t)}function Ye(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Ne(e){var n=e.originalEvent;if(l.fitToSection&&xt.stop(),Ye(n)){var t=lt(n);Kt=t.y,Jt=t.x}}function qe(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),r=0;r<i.length;r++)t+=i[r];return o.ceil(t/n)}function Ue(t){var i=(new Date).getTime(),r=e(m).hasClass(k);if(l.autoScrolling&&!kt&&!r){t=t||n.event;var a=t.wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,a)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,d=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!c;Pt.length>149&&Pt.shift(),Pt.push(o.abs(a)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var f=e(b),u=l.scrollOverflowHandler.scrollable(f),h=i-no;if(no=i,h>200&&(Pt=[]),Dt&&!mt()){var p=qe(Pt,10),v=qe(Pt,70),g=p>=v;g&&d&&(s<0?Ve("down",u):Ve("up",u))}return!1}l.fitToSection&&xt.stop()}function Ge(n,t){var o="undefined"==typeof t?e(b):t,i=o.find(F);if(!(!i.length||mt()||Mt||i.find(B).length<2)){var r=i.find(D),a=null;if(a="left"===n?r.prev(B):r.next(B),!a.length){if(!l.loopHorizontal)return;a="left"===n?r.siblings(":last"):r.siblings(":first")}Mt=!0,In(i,a,n)}}function Xe(){e(D).each(function(){st(e(this),"internal")})}function Qe(e){var n=e.position(),t=n.top,o=vt("dragAndMove")&&At.dragAndMove.isGrabbing?At.dragAndMove.isScrollingDown():n.top>oo,i=t-Ht+e.outerHeight(),r=l.bigSectionsDestination;return e.outerHeight()>Ht?(o||r)&&"bottom"!==r||(t=i):(o||zt&&e.is(":last-child"))&&(t=i),l.offsetSections&&At.offsetSections&&(t=At.offsetSections.getSectionPosition(o,t,e)),oo=t,t}function _e(n,t,o){if("undefined"!=typeof n&&n.length){var i,r,a=Qe(n),s={element:n,callback:t,isMovementUp:o,dtop:a,yMovement:Fn(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(D),activeSection:e(b),leavingSection:e(b).index(y)+1,localIsResizing:zt};s.activeSection.is(n)&&!zt||l.scrollBar&&ne.scrollTop()===s.dtop&&!n.hasClass(I)||(s.activeSlide.length&&(i=s.activeSlide.data("anchor"),r=s.activeSlide.index()),gt("parallax","apply",s),l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=$e(s)),e.isFunction(l.onLeave)&&!s.localIsResizing&&l.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)===!1||(vt("scrollOverflowReset")&&At.scrollOverflowReset.setPrevious(s.activeSection),s.localIsResizing||ln(s.activeSection),l.scrollOverflowHandler.beforeLeave(),n.addClass(p).siblings().removeClass(p),on(n),l.scrollOverflowHandler.onLeave(),Dt=!1,Qn(r,i,s.anchorLink,s.sectionIndex),Ke(s),Tt=s.anchorLink,Pn(s.anchorLink,s.sectionIndex)))}}function Ke(n){if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";Yn(t,!0),l.scrollingSpeed?(clearTimeout(Wt),Wt=setTimeout(function(){nn(n)},l.scrollingSpeed)):nn(n)}else{var i=Je(n);e(i.element).animate(i.options,l.scrollingSpeed,l.easing).promise().done(function(){l.scrollBar?setTimeout(function(){nn(n)},30):nn(n)})}}function Je(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=a):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function $e(n){return n.isMovementUp?n.activeSection.before(n.activeSection.nextAll(y)):n.activeSection.after(n.activeSection.prevAll(y).get().reverse()),ct(e(b).position().top),Xe(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=Fn(n.element),n.leavingSection=n.activeSection.index(y)+1,n.sectionIndex=n.element.index(y),e(a).trigger("onContinuousVertical",[n]),n}function en(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(x).before(n.wrapAroundElements):e(C).after(n.wrapAroundElements),ct(e(b).position().top),Xe(),n.sectionIndex=n.element.index(y),n.leavingSection=n.activeSection.index(y)+1)}function nn(n){en(n),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),l.scrollOverflowHandler.afterLoad(),gt("parallax","afterLoad"),vt("scrollOverflowReset")&&At.scrollOverflowReset.reset(),l.resetSliders&&At.resetSliders&&At.resetSliders.apply(n),n.localIsResizing||rn(n.element),n.element.addClass(g).siblings().removeClass(g),Dt=!0,e.isFunction(n.callback)&&n.callback.call(this)}function tn(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function on(n){if(l.lazyLoading){var t,o=sn(n);o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function(){t=e(this),e.each(["src","srcset"],function(e,n){var o=t.attr("data-"+n);"undefined"!=typeof o&&o&&tn(t,n)}),t.is("source")&&t.closest("video").get(0).load()})}}function rn(n){var t=sn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&an(n),n.onload=function(){n.hasAttribute("data-autoplay")&&an(n)}})}function an(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function ln(n){var t=sn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function sn(n){var t=n.find(D);return t.length&&(n=e(t)),n}function cn(e){function n(e){var n,o,i,r,l,s,c,d="",f=0;for(e=e.replace(/[^A-Za-z0-9+\/=]/g,"");f<e.length;)r=a.indexOf(e.charAt(f++)),l=a.indexOf(e.charAt(f++)),s=a.indexOf(e.charAt(f++)),c=a.indexOf(e.charAt(f++)),n=r<<2|l>>4,o=(15&l)<<4|s>>2,i=(3&s)<<6|c,d+=String.fromCharCode(n),64!=s&&(d+=String.fromCharCode(o)),64!=c&&(d+=String.fromCharCode(i));return d=t(d)}function t(e){for(var n,t="",o=0,i=0,r=0;o<e.length;)i=e.charCodeAt(o),i<128?(t+=String.fromCharCode(i),o++):i>191&&i<224?(r=e.charCodeAt(o+1),t+=String.fromCharCode((31&i)<<6|63&r),o+=2):(r=e.charCodeAt(o+1),n=e.charCodeAt(o+2),t+=String.fromCharCode((15&i)<<12|(63&r)<<6|63&n),o+=3);return t}function o(e){return e}function i(e){return e.slice(3).slice(0,-3)}function r(e){var t=e.split("_");if(t.length>1){var o=t[1],r=e.replace(i(t[1]),"").split("_")[0],a=r;return a+"_"+n(o.slice(3).slice(0,-3))}return i(e)}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return o(r(n(e)))}function dn(){if(t.domain.length){for(var e=t.domain.replace(/^(www\.)/,"").split(".");e.length>2;){e.shift()}var n=e.join(".");return n.replace(/(^\.*)|(\.*$)/g,"")}return""}function fn(e){var n=dn(),t=["localhost","127.0.0.1","jshell.net","UDdDQU5ZNlNN"],o=t[0],i=t[1],r=t[2],a=cn(t[3]),l=[o,i,r].indexOf(n)<0&&0!==n.length,s="undefined"!=typeof Xt[e]&&Xt[e].length;if(!s&&l)return!1;var c=s?cn(Xt[e]):"";c=c.split("_");var d=c.length>1&&c[1].indexOf(e,c[1].length-e.length)>-1,f=c[0].indexOf(n,c[0].length-n.length)<0;return!(f&&l&&a!=c[0])&&d||!l}function un(e){if(vt(e)&&At[e]){var n=cn("MTIzPGRpdiBzdHlsZT0iei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkOyB0b3A6IDIwcHg7IGxlZnQ6MjBweDsgYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDdweCAxNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsiPjxhIGhyZWY9Imh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvZXh0ZW5zaW9ucy8iIHN0eWxlPSJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ij5VbmxpY2Vuc2VkIGZ1bGxQYWdlLmpzIEV4dGVuc2lvbjwvYT48L2Rpdj4xMjM="),t=o.random()<.5;if(!fn(e)){var i,r="9999999",a="z-index",l=function(){i=t?Ct.find("div").first():Ct.find("div").last(),i.css(a)!==r&&(t?Ct.prepend(n):Ct.append(n))};l(),setInterval(l,2e3)}}}function hn(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(l.animateAnchor?Un(t,o):de(t,o))}function pn(){if(!Qt&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i="undefined"==typeof Tt,r="undefined"==typeof Tt&&"undefined"==typeof o&&!Mt;t.length&&(t&&t!==Tt&&!i||r||!Mt&&It!=o)&&Un(t,o)}}function vn(n){clearTimeout(Nt);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&l.keyboardScrolling&&l.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),kt=n.ctrlKey,Nt=setTimeout(function(){An(n)},150)}}function gn(){e(this).prev().trigger("click")}function mn(e){Bt&&(kt=e.ctrlKey)}function Sn(e){2==e.which&&(io=e.pageY,Rt.on("mousemove",Tn))}function wn(e){2==e.which&&Rt.off("mousemove")}function yn(){var n=e(this).closest(y);e(this).hasClass(G)?Ft.m.left&&he(n):Ft.m.right&&ue(n)}function bn(){Bt=!1,kt=!1}function xn(n){n.preventDefault();var t=e(this).parent().index();_e(e(y).eq(t))}function Cn(n){n.preventDefault();var t=e(this).closest(y).find(F),o=t.find(B).eq(e(this).closest("li").index());In(t,o)}function An(n){var t=n.shiftKey;if(Dt||!([37,39].indexOf(n.which)<0))switch(n.which){case 38:case 33:Ft.k.up&&se();break;case 32:if(t&&Ft.k.up){se();break}case 40:case 34:Ft.k.down&&ce();break;case 36:Ft.k.up&&fe(1);break;case 35:Ft.k.down&&fe(e(y).length);break;case 37:Ft.k.left&&he();break;case 39:Ft.k.right&&ue();break;default:return}}function Tn(e){Dt&&(e.pageY<io&&Ft.m.up?se():e.pageY>io&&Ft.m.down&&ce()),io=e.pageY}function In(n,t,o){var i=n.closest(y),r={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(y),anchorLink:i.data("anchor"),slidesNav:i.find(Y),slideAnchor:Kn(t),prevSlide:i.find(D),prevSlideIndex:i.find(D).index(),localIsResizing:zt};return r.xMovement=Vn(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(Dt=!1),gt("parallax","applyHorizontal",r),l.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&e.isFunction(l.onSlideLeave)&&l.onSlideLeave.call(r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.xMovement,r.slideIndex)===!1?void(Mt=!1):(t.addClass(p).siblings().removeClass(p),r.localIsResizing||(ln(r.prevSlide),on(t)),kn(r),i.hasClass(p)&&!r.localIsResizing&&Qn(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),At.continuousHorizontal&&At.continuousHorizontal.apply(r),St()?Ln(r):Mn(n,r,!0),void(l.interlockedSlides&&At.interlockedSlides&&At.interlockedSlides.apply(r)))}function kn(e){!l.loopHorizontal&&l.controlArrows&&(e.section.find(_).toggle(0!==e.slideIndex),e.section.find(ee).toggle(!e.destiny.is(":last-child")))}function Ln(n){At.continuousHorizontal&&At.continuousHorizontal.afterSlideLoads(n),On(n.slidesNav,n.slideIndex),n.localIsResizing||(gt("parallax","afterSlideLoads"),e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),Dt=!0,rn(n.destiny)),Mt=!1,At.interlockedSlides&&At.interlockedSlides.apply(n)}function Mn(e,n,t){var i=n.destinyPos;if(l.css3){var r="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";Hn(e.find(W)).css(dt(r)),jt=setTimeout(function(){t&&Ln(n)},l.scrollingSpeed,l.easing)}else e.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){t&&Ln(n)})}function On(e,n){e.find(v).removeClass(p),e.find("li").eq(n).find("a").addClass(p)}function En(){if(Rt.trigger("onResize"),Rn(),Ot){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ne.height();o.abs(i-ro)>20*o.max(ro,i)/100&&(pe(!0),ro=i)}}else clearTimeout(Vt),Vt=setTimeout(function(){pe(!0)},350)}function Rn(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&ne.outerWidth()<e,o=n&&ne.height()<n;e&&n?ve(t||o):e?ve(t):n&&ve(o)}function Hn(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function zn(e){return e.addClass(d)}function Bn(n,t){l.navigation&&(e(M).find(v).removeClass(p),n?e(M).find('a[href="#'+n+'"]').addClass(p):e(M).find("li").eq(t).find("a").addClass(p))}function Dn(n){l.menu&&(e(l.menu).find(v).removeClass(p),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass(p))}function Pn(e,n){Dn(e),Bn(e,n)}function Fn(n){var t=e(b).index(y),o=n.index(y);return t==o?"none":t>o?"up":"down"}function Vn(e,n){return e==n?"none":e>n?"left":"right"}function Wn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=l.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(y),r=t.scrollable(e);r.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(T).get(0).scrollHeight));var a=Zn(i);n>a?r.length?t.update(e,a):(l.verticalCentered?e.find(T).wrapInner(o):e.wrapInner(o),t.create(e,a,l.scrollOverflowOptions)):t.remove(e),e.css("overflow","")}}function jn(e){e.hasClass(j)||e.addClass(j).wrapInner('<div class="'+A+'" style="height:'+Zn(e)+'px;" />')}function Zn(e){var n=Ce(e);if(l.paddingTop||l.paddingBottom){var t=e;t.hasClass(w)||(t=e.closest(y));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=Ht-o}return n}function Yn(e,n){n?Hn(Rt):zn(Rt),Rt.css(dt(e)),setTimeout(function(){Rt.removeClass(d)},10)}function Nn(n){if(!n)return[];var t=Rt.find(y+'[data-anchor="'+n+'"]');return t.length||(t=e(y).eq(n-1)),t}function qn(e,n){var t=n.find(F),o=t.find(B+'[data-anchor="'+e+'"]');return o.length||(o=t.find(B).eq(e)),o}function Un(e,n){var t=Nn(e);t.length&&("undefined"==typeof n&&(n=0),e===Tt||t.hasClass(p)?Gn(t,n):_e(t,function(){Gn(t,n)}))}function Gn(e,n){if("undefined"!=typeof n){var t=e.find(F),o=qn(n,e);o.length&&In(t,o)}}function Xn(e,n){e.append('<div class="'+Z+'"><ul></ul></div>');var t=e.find(Y);t.addClass(l.slidesNavPosition);for(var o=0;o<n;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(p)}function Qn(e,n,t,o){var i="";l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),It=n,_n(i+"/"+n)):"undefined"!=typeof e?(It=n,_n(t)):_n(t)),Jn()}function _n(e){if(l.recordHistory)location.hash=e;else if(Ot||Et)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function Kn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function Jn(){var n=e(b),t=n.find(D),o=Kn(n),i=Kn(t),r=String(o);t.length&&(r=r+"-"+i),r=r.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");Ct[0].className=Ct[0].className.replace(a,""),Ct.addClass(h+"-"+r)}function $n(){var e,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var a in r)o.style[a]!==i&&(o.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(r[a]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function et(){t.addEventListener?(t.removeEventListener("mousewheel",Ue,!1),t.removeEventListener("wheel",Ue,!1),t.removeEventListener("MozMousePixelScroll",Ue,!1)):t.detachEvent("onmousewheel",Ue)}function nt(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?t[e](o+"MozMousePixelScroll",Ue,!1):t[e](o+r,Ue,!1)}function tt(){Rt.on("mousedown",Sn).on("mouseup",wn)}function ot(){Rt.off("mousedown",Sn).off("mouseup",wn)}function it(){(Ot||Et)&&(l.autoScrolling&&Ct.off(Ut.touchmove).on(Ut.touchmove,We),e(a).off(Ut.touchstart).on(Ut.touchstart,Ne).off(Ut.touchmove).on(Ut.touchmove,je))}function rt(){(Ot||Et)&&e(a).off(Ut.touchstart).off(Ut.touchmove)}function at(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function lt(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Et&&Ye(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function st(e,n){X(0,"internal"),"undefined"!=typeof n&&(zt=!0),In(e.closest(F),e),"undefined"!=typeof n&&(zt=!1),X(Gt.scrollingSpeed,"internal")}function ct(e){var n=o.round(e);if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+n+"px, 0px)";Yn(t,!1)}else l.autoScrolling&&!l.scrollBar?Rt.css("top",-n):xt.scrollTop(n)}function dt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ft(e,n,t){switch(n){case"up":Ft[t].up=e;break;case"down":Ft[t].down=e;break;case"left":Ft[t].left=e;break;case"right":Ft[t].right=e;break;case"all":"m"==t?ae(e):le(e)}}function ut(n){Rt.trigger("destroy",[n]),s(!1,"internal"),ae(!1),le(!1),Rt.addClass(f),clearTimeout(jt),clearTimeout(Wt),clearTimeout(Vt),clearTimeout(Zt),clearTimeout(Yt),ne.off("scroll",Be).off("hashchange",pn).off("resize",En),te.off("click touchstart",M+" a").off("mouseenter",M+" li").off("mouseleave",M+" li").off("click touchstart",N).off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(y).off("click touchstart",U),vt("dragAndMove")&&At.dragAndMove.destroy(),clearTimeout(jt),clearTimeout(Wt),n&&ht()}function ht(){ct(0),Rt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){tn(e(this),"src")}),Rt.find("img[data-srcset]").each(function(){tn(e(this),"srcset")}),e(M+", "+Y+", "+U).remove(),e(y).css({height:"","background-color":"",padding:""}),e(B).css({width:""}),Rt.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),xt.css({overflow:"",height:""}),e("html").removeClass(u),Ct.removeClass(c),e.each(Ct.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(h)&&Ct.removeClass(n)}),e(y+", "+B).each(function(){l.scrollOverflowHandler.remove(e(this)),e(this).removeClass(j+" "+p)}),pt(Rt),Rt.find(T+", "+W+", "+F).each(function(){e(this).replaceWith(this.childNodes)}),xt.scrollTop(0);var n=[w,z,V];e.each(n,function(n,t){e("."+t).removeClass(t)})}function pt(e){return e.css({"-webkit-transition":"none",transition:"none"})}function vt(e){return null!==l[e]&&"object"==typeof l[e]?l[e].enabled&&At[e]:l[e]&&At[e]}function gt(e,n,t){var o=Array.isArray(t)?t.join(", "):t;vt(e)&&At[e][n](o)}function mt(){return vt("dragAndMove")&&At.dragAndMove.isAnimating}function St(){return vt("dragAndMove")&&At.dragAndMove.isGrabbing}function wt(e,n,t){l[e]=n,"internal"!==t&&(Gt[e]=n)}function yt(){return e("html").hasClass(u)?void bt("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,bt("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&bt("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!l.continuousVertical||!l.scrollBar&&l.autoScrolling||(l.continuousVertical=!1,bt("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),void e.each(l.anchors,function(n,t){var o=te.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=te.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(bt("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&bt("error",'"'+t+'" is is being used by another element `id` property'),o.length&&bt("error",'"'+t+'" is is being used by another element `name` property'))}))}function bt(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(u))return void yt();var xt=e("html, body"),Ct=e("body"),At=e.fn.fullpage;l=e.extend(!0,{menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:ie,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:S,slideSelector:H,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},l);var Tt,It,kt,Lt,Mt=!1,Ot=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Et="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Rt=e(this),Ht=ne.height(),zt=!1,Bt=!0,Dt=!0,Pt=[],Ft={};Ft.m={up:!0,down:!0,left:!0,right:!0},Ft.k=e.extend(!0,{},Ft.m);var Vt,Wt,jt,Zt,Yt,Nt,qt=at(),Ut={touchmove:"ontouchmove"in n?"touchmove":qt.move,touchstart:"ontouchstart"in n?"touchstart":qt.down},Gt=e.extend(!0,{},l),Xt={};yt(),oe.click=Et,l.scrollOverflowOptions=e.extend(oe,l.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(At.setAutoScrolling=s,At.setRecordHistory=q,At.setScrollingSpeed=X,At.setFitToSection=K,At.setLockAnchors=J,At.setMouseWheelScrolling=re,At.setAllowScrolling=ae,At.setKeyboardScrolling=le,At.moveSectionUp=se,At.moveSectionDown=ce,At.silentMoveTo=de,At.moveTo=fe,At.moveSlideRight=ue,At.moveSlideLeft=he,At.fitToSection=Pe,At.reBuild=pe,At.setResponsive=ve,At.getFullpageData=ge,At.destroy=ut,At.landscapeScroll=In,we("continuousHorizontal"),we("scrollHorizontally"),we("resetSliders"),we("interlockedSlides"),we("responsiveSlides"),we("fadingEffect"),we("dragAndMove"),we("offsetSections"),we("scrollOverflowReset"),we("parallax"),vt("dragAndMove")&&At.dragAndMove.init(),me(),Se(),vt("dragAndMove")&&At.dragAndMove.turnOffTouch());var Qt=!1,_t=0,Kt=0,Jt=0,$t=0,eo=0;!function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame;n.requestAnimationFrame=e}();var no=(new Date).getTime(),to=!1,oo=0,io=0,ro=Ht},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ie={refreshId:null,iScrollInstances:[],toggleWheel:function(n){var t=e(b).find(s);t.each(function(){var t=e(this).data("iscrollInstance");"undefined"!=typeof t&&t&&(n?t.wheelOn():t.wheelOff())})},onLeave:function(){ie.toggleWheel(!1)},beforeLeave:function(){ie.onLeave()},afterLoad:function(){ie.toggleWheel(!0)},create:function(n,t,o){var i=n.find(s);i.height(t),i.each(function(){var n=e(this),t=n.data("iscrollInstance");t&&e.each(ie.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),o),t.on("scrollEnd",function(){this.fp_isAtTop=this.y>-30,this.fp_isAtEnd=this.y-this.maxScrollY<30}),ie.iScrollInstances.push(t),t.wheelOff(),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return!t||("top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0)},scrollable:function(e){return e.find(F).length?e.find(D).find(s):e.find(s)},scrollHeight:function(e){return e.find(s).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(s);if(n.length){var t=n.data("iscrollInstance");t&&t.destroy(),n.data("iscrollInstance",null)}e.find(s).children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(ie.refreshId),ie.refreshId=setTimeout(function(){e.each(ie.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(s).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+l+'"><div class="fp-scroller"></div></div>'}}});
/*!
 * fullpage.js Parallax Effect Extension 0.0.6
 * https://github.com/alvarotrigo/fullPage.js
 *
 * This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distrubute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(n){window.fp_parallaxExtension=function(){function e(n){return{cover:{offsetNormal:n?0:N},reveal:{offsetNormal:n?-N:0}}}function t(n){return{cover:{offsetNormal:n?0:R},reveal:{offsetNormal:n?-R:0}}}function o(n){return n*z/100}function i(n){return n*O/100}function a(){if(F){var e=n(U).length?n(U):n(Q).first();M(e,0)}}function l(){var t=n(U).length?n(U):n(Q).first(),o=T===$,i=o?t.nextAll():t.prevAll(),a=o?t.prevAll():t.nextAll();i.each(function(){M(n(this),e(o)[T].offsetNormal,"silent")}),a.each(function(){M(n(this),0,"silent")}),n(Q).each(function(){var e=n(this).find(K);if(e.length){var t=n(this).find(W).length?n(this).find(W):n(this).find(K).first();r(t)}})}function r(e){var o=T===$,i=o?e.nextAll():e.prevAll(),a=o?e.prevAll():e.nextAll();i.each(function(){q(n(this),t(o)[T].offsetNormal,"silent")}),a.each(function(){q(n(this),0,"silent")})}function f(n,e){O=xn.width(),e&&!E.scrollBar?(m(),x()):h()}function s(n){k.destroy(),un=!1}function c(){n(L).on("setAutoScrolling",f).on("destroy",s).on("onScroll",v).on("afterResponsive",p).on("onGrab",d).on("onContinuosHorizontal",u).on("onContinuousVertical",g).on("onResize",y)}function d(n,e){e?h():mn=!0}function p(e,t){n(Z).data("final-x",0),n(Z).data("final-y",0),B=document.querySelectorAll(Q),l()}function u(e,t){gn=!0;var o="left"===t.xMovement?n(U).find(K).first():n(U).find(K).last();r(o),setTimeout(function(){k.applyHorizontal(t)})}function g(n,e){vn=!0,l(),setTimeout(function(){k.apply(e)})}function v(){!rn&&un&&(E.scrollBar||!E.autoScrolling||_.usingExtension("dragAndMove"))&&(requestAnimationFrame(S),rn=!0)}function m(){var n=".fp-bg{transition: transform "+E.scrollingSpeed+"ms "+E.easingcss3+"}.fp-slide, .fp-section{will-change: transform;transition: background-position "+E.scrollingSpeed+"ms "+E.easingcss3+";}";E.autoScrolling&&!E.scrollBar&&C(tn,n)}function x(){var n=".fp-bg-animate{ transition: all "+E.scrollingSpeed+"ms "+E.easingcss3+"}";C(an,n)}function h(){n(on).remove()}function y(){clearTimeout(hn),hn=setTimeout(A,350)}function A(){z=xn.height(),O=xn.width(),N=o(E.parallaxOptions.percentage),R=i(E.parallaxOptions.percentage),a(),l(),w(),!E.autoScrolling||E.scrollBar}function w(){n(Z).height(z)}function S(){var t=_.usingExtension("dragAndMove")?Math.abs(n.fn.fullpage.dragAndMove.getCurrentScroll()):n(window).scrollTop(),o=fn>t,i=n(U).index(Q),a=z+t;fn=t;for(var l=0;l<B.length;++l){var r=B[l],f=z+r.offsetTop;!o&&r.offsetTop<=a?i=l:o&&f>=t&&r.offsetTop<t&&B.length>l+1&&(i=l+1)}var s=z-(B[i].offsetTop-t),c=s*N/z;T!==$&&(i-=1);var d=T!==$?c:-N+c;M(n(Q).eq(i),d),i-1>=0&&M(n(B[i-1]),e(!1)[T].offsetNormal),"undefined"!=typeof B[i+1]&&M(n(B[i+1]),e(!0)[T].offsetNormal),rn=!1}function b(n){return Math.round(2*n)/2}function M(n,e,t){var o=b(e,1),i=n.find(K);if(i.length){var a=(n.index(Q),i.filter(D));n=a.length?a:i.first()}if(F)n.css({"background-position-y":o+"px"});else if(!n.hasClass(J)||n.hasClass(j)||"undefined"!=typeof t){var l=n.find(Z),r="undefined"!=typeof l.data("final-x")?l.data("final-x"):0;l.toggleClass(X,"undefined"!=typeof t).css({transform:"translate3d("+r+"px, "+o+"px, 0)"}).data("final-x",r).data("final-y",o)}}function q(n,e,t){var o=b(e,1),i=F?n:n.find(Z);if(!E.scrollBar&&E.autoScrolling||i.addClass("fp-bg-animate"),F)i.toggleClass(X,"undefined"!=typeof t).css("background-position-x",o+"px");else{var a=0,l=i.data("final-y");"none"!==l&&"undefined"!=typeof l&&(a=l),i.toggleClass(X,"undefined"!=typeof t).css({transform:"translate3d("+o+"px, "+a+"px, 0)"}).data("final-x",o).data("final-y",a)}}function I(n){return n.find(K).length?n.find(K).length>1?n.find(K):[n.find(K)]:[n]}function C(e,t){n("#"+e).length||n('<style id="'+e+'">'+t+"</style>").appendTo("head")}var T,N,R,z,O,B,F,V,k=this,H=n.fn.fullpage.getFullpageData(),E=H.options,_=H.internals,G="fullpage-wrapper",L="."+G,j="active",D="."+j,P="fp-section",Q="."+P,U=Q+D,J="fp-slide",K="."+J,W=K+D,X="fp-notransition",Y="fp-bg",Z="."+Y,$="reveal",nn="cover",en="fp-parallax-stylesheet",tn="fp-parallax-transitions",on="#"+tn,an="fp-parallax-transition-class",ln="#"+an,rn=!1,fn=0,sn=!1,cn=!1,dn=!0,pn=!0,un=!1,gn=!1,vn=!1,mn=!1,xn=n(window);!function(){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=n}(),k.apply=function(t){if(mn&&m(),!t.localIsResizing&&!E.scrollBar&&E.autoScrolling){if(g_isAboutToRewindVertical="up"!==t.yMovement&&!t.sectionIndex||t.isMovementUp&&!(t.leavingSection-1),g_isAboutToRewindVertical&&E.continuousVertical&&!vn)return void(g_isAboutToRewindVertical=!1);sn="up"===t.yMovement;var o=e(sn),i=o[T].offsetNormal;M(n(Q).eq(t.sectionIndex),0),M(n(Q).eq(t.leavingSection-1),i),dn=1===Math.abs(t.leavingSection-1-t.sectionIndex);for(var a=Math.min(t.leavingSection-1,t.sectionIndex)+1;a<Math.max(t.leavingSection-1,t.sectionIndex);a++)M(n(Q).eq(a),0,"silent")}},k.applyHorizontal=function(n){if(!n.localIsResizing&&"none"!=n.xMovement){if(V="undefined"!=typeof n.direction&&n.direction!==n.xMovement,V&&E.continuousHorizontal&&!gn)return void(V=!1);cn=V?"left"===n.direction:"left"===n.xMovement;var e=t(cn),o=e[T].offsetNormal;q(n.section.find(K).eq(n.slideIndex),0),q(n.section.find(K).eq(n.prevSlideIndex),o),pn=1===Math.abs(n.slideIndex-n.prevSlideIndex);for(var i=Math.min(n.slideIndex,n.prevSlideIndex)+1;i<Math.max(n.slideIndex,n.prevSlideIndex);i++)q(n.section.find(K).eq(i),0,"silent")}},k.init=function(){if(z=xn.height(),O=xn.width(),T=E.parallaxOptions.type,N=o(E.parallaxOptions.percentage),R=i(E.parallaxOptions.percentage),B=document.querySelectorAll(E.sectionSelector),F="background"===E.parallaxOptions.property,w(),c(),!F){var n=".fp-bg{top:0;bottom:0;width: 100%;position:absolute;z-index: -1;}.fp-section, .fp-slide, .fp-section.fp-table, .fp-slide.fp-table, .fp-section .fp-tableCell, .fp-slide .fp-tableCell {position:relative;overflow: hidden;}";C(en,n),m()}x(),a(),l(),un=!0},k.destroy=function(){h(),n(ln).remove(),N=o(0),R=i(0),l(),n(Z).height(""),n(L).off("setAutoScrolling").off("destroy").off("onScroll").off("afterResponsive").off("onGrab").off("onContinuosHorizontal").off("onContinuousVertical").off("onResize")},k.setOption=function(n,e){"offset"===n?(E.parallaxOptions.percentage=e,N=o(e),R=i(e)):"type"===n&&(E.parallaxOptions.type=e,T=e),l()};var hn;k.applyProperties=M,k.afterSlideLoads=function(){var e=F?I(n(U)):n(U).find(Z);if(e.removeClass("fp-bg-animate"),(gn||V)&&(r(n(U).find(W)),gn=!1),!pn){var o=t(cn),i=o[T].offsetNormal,a=n(U).find(W),l=cn?a.nextAll():a.prevAll();(T===$&&cn||T===nn&&!cn)&&l.each(function(){q(n(this),i,"silent")})}},k.afterLoad=function(){if((!E.scrollBar||!E.autoScrolling||_.usingExtension("dragAndMove"))&&((vn||V)&&(l(),vn=!1),!dn)){var t=e(sn),o=t[T].offsetNormal,i=sn?n(U).nextAll():n(U).prevAll();(T===$&&sn||T===nn&&!sn)&&i.each(function(){M(n(this),o,"silent")})}},k.c=_.c;var yn=k["common".charAt(0)];return"complete"===document.readyState&&yn("parallax"),n(window).on("load",function(){yn("parallax")}),k}}(jQuery);
