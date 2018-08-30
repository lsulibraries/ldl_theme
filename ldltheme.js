(function ($) {
  Drupal.behaviors.ldltheme = {
    attach: function (context, settings) {
      if ($('.mobileMenu').length){
    } else{
      console.log('jquery fired once');
      $("<div class='mobileMenu'/>").insertBefore("div#page");

      if ( ($('.block-islandora-compound-object').length) && ($('#block-system-main .block-inner .content > div').length) && (!($("body").attr('class').indexOf('-pages') > -1)) && ( !$('body').is('.audioPDF, .regeneratePage, .datastreamPage, .book, .pagesView'))){
        //$("body").addClass('compoundChild');
      }

        if (($('.book-thumbnail').length) && ($('.block-islandora-compound-object').length)) {
          $('.block-compound-jail-display').remove();
          var sequenceText = $('span#islandora-compound-sequence-position').text();
          $('<div class="currentPart"></div>').html(sequenceText).appendTo('.headerBreadcrumb');
         $('#islandora-compound-previous-link').attr('id', '').wrapAll('<li class="sequencePrev"/>');
         $('#islandora-compound-next-link').attr('id', '').wrapAll('<li class="sequenceNext"/>');
         $('.sequencePrev').insertBefore('.sequenceNext');
          console.log(sequenceText);
          console.log('oldbookscript');
        }


      switch (true) { //detect page type or content type

        case ($('body').hasClass('front')) :{
          break;
        }

        //case for individual pages of newspaper as images
        case ((($('.pageText').length)) && (!$('body').hasClass('audioPDF'))) :{
          $('body').addClass('pageImage largeImage');
          itemTitle = $(".modsTitle").html(); // finds full title without truncation
          thumbnailURL = $(".image-thumbnail img").prop('src');
          itemHeader();
          typeClass('image');
          imageContainer();
          moveMetadata();
          actionToggles();
          itemFooter();
          imageModal();
          pageImage();
          break;
        }
        //case for large images
        case ((($('body').hasClass('largeImage'))) && (!$('body').hasClass('audioPDF'))) :{
          itemTitle = $(".modsTitle").html(); // finds full title without truncation
          thumbnailURL = $(".image-thumbnail img").prop('src');
          if ($('.block-islandora-compound-object').length){
            compoundChild_start();            
          }
          itemHeader();
          typeClass('image');
          imageContainer();
          moveMetadata();
          actionToggles();
          itemFooter();
          imageModal();
          if ($('.block-islandora-compound-object').length){
            compoundChild_end();
          }
          break;
        }
        case ((($('#book-viewer').length) || ($('.islandora-newspaper-issue-navigator').length)) && (!$('body').hasClass('audioPDF'))) :{
          $('body').addClass('bookViewer');
          if ($('.block-islandora-compound-object').length) {
            compoundChild_start();
          }          
          itemTitle = $(".modsTitle").html(); // finds full title without truncation
          thumbnailURL = $(".book-thumbnail img").prop('src');
          bookStarter();
          itemHeader();
          typeClass('book');
          if ($(".islandora-newspaper-issue").length) {
            newspaperIssue();
            typeClass('newspaper');
          }
          moveMetadata();
          bookContainer();
          actionToggles();
          bookFooter();
          if (($('.book-thumbnail').length) && ($('span#islandora-compound-sequence-position').length)) {
            $(".metadataSidebar > .region-inner > .metadataContainer").first().addClass("itemMetadata");
            $("body").addClass('compoundBook');
            childBreadcrumb();
            $(".depth-4 > a").clone().prop({class:"backContainer"}).insertAfter(".descriptionText").html("<div class='backCollection backParent'>Back</div>");
            if (!$(".tagsGlance").length){
              $('.contentLabel.itemDesc').css('display','none');
            }                    
            $(".content > .backContainer").remove();
            $("#bookMeta2").clone().prop({id:"bookMeta2Inner"}).insertAfter("#bookMeta");
            $("#bookMeta").addClass('itemMetadata');
          }
          break;
        }

        case ( ($('.total-issue-count').length) && ( !$('body').hasClass('audioPDF') ) ) :{
          $('body').addClass('newspaperSet');
          itemTitle = $(".modsTitle").html(); // finds full title without truncation
          thumbnailURL = '/sites/all/themes/ldl/images/newspaperTN.jpeg';
          itemHeader();
          typeClass('newspaper');
          newspaperContainer();
          moveMetadata();
          actionToggles();
          break;
        }

        case ( ($('.block-islandora-compound-object').length) && (!$('.currentImage').length) && ( !$('body').is('.audioPDF, .regeneratePage, .datastreamPage, .book, .pagesView')  )) :{
          $("body").addClass('compoundObject compoundParent');          
          itemTitle = $(".modsTitle").html(); // finds full title without truncation
          compoundStarter();
          itemHeader();    
          moveMetadata();
          actionToggles();
          itemFooter();
          break;
        }

        case ( ($('.block-islandora-compound-object').length) && ($('.currentImage').length) && ( !$('body').is('.audioPDF, .regeneratePage, .datastreamPage, .book, .pagesView')  )) :{
          //$("body").addClass('compoundObject compoundItem');  
          break;
        }

        case ($('body').hasClass('context-data')):{
          dataStarter();
           $('.table').insertBefore('.dl_txt');
           $('#edit-filter').parent().addClass('dataContainer');
           $('#block-system-main').parallax({imageSrc: 'https://i.imgur.com/yUbfVN7.jpg'});
          scrollFollow();
          break;
        }

      } //end page detection


      //begin functions
      function typeClass(type){
        $('.item_header').addClass( type + '_header');
        $('.item_headerMenu').addClass( type + '_headerMenu');
        $('.itemTitle').addClass( type + 'Title');
        $('.itemLabel').addClass( type + 'Label');
      }

      function pageImage(){
        $('.islandora-newspaper-content-wrapper').remove();
        $('.islandora-newspaper-controls').insertBefore('.infoToggle')
        var newspaperText = $(".depth-4 > a").clone(); //creates href path from breadcrumb depth-2
        var newspaperHome = $(".depth-4 > a").attr('href'); //creates href path from breadcrumb depth-2
        $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall:last" ); //needs to be separated from the a href
        $(newspaperText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
      }

      function fadeList(){
        $(".islandora-newspaper-grid").fadeOut("normal", function() {
          yearBack();
          $("body").toggleClass('mobileNewspaper newspaperList');
          $(".islandora-newspaper-grid").fadeIn("normal");
        });
      }

      function childBreadcrumb(){
        var sequenceText = $('span#islandora-compound-sequence-position').text();
        $('span#islandora-compound-sequence-position').remove();   
        var parentText = $(".depth-4 > a").clone(); //creates href path from breadcrumb depth-2
        var parentHome = $(".depth-4 > a").attr('href'); //creates href path from breadcrumb depth-2
        $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall:last" ); //needs to be separated from the a href
        $(parentText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
        $('<div class="currentPart"></div>').html(sequenceText).appendTo('.headerBreadcrumb');         
      }

      function scrollFollow() {
        if ($(window).width() > 901) {
          var element = $('.global_totals');
          var originalY = element.offset().top;
          var elementHeight = element.height();
          // Space between element and top of screen (when scrolling)
          var topMargin = 40;
          // Should probably be set in CSS; but here just for emphasis
          element.css('position', 'relative');
          $(window).on('scroll', function(event) {
            var finaldestination = $('.instGroup').height() - elementHeight + originalY - topMargin - 20;
            var firstScroll = $(window).scrollTop();
            var scrollTop = Math.min(firstScroll, finaldestination);
            element.stop(false, false).animate({
                top: scrollTop < originalY
                        ? 0
                        : scrollTop - originalY + topMargin
            }, 700);
          });
        }
      }

      function newspaperIssue(){
        var newspaperText = $(".depth-4 > a").clone(); //creates href path from breadcrumb depth-2
        var newspaperHome = $(".depth-4 > a").attr('href'); //creates href path from breadcrumb depth-2
        $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall:last" ); //needs to be separated from the a href
        $(newspaperText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
        $( ".islandora-newspaper-issue-navigator > ul > li > a" ).each(function() { // get links for each day
          $(this).prependTo('.userMenu').addClass('textSelect').wrap('<div class="issueNav userSelect"/>');
        });
        $('.issueNav').wrapAll('<div class="issueMenu"/>').addClass('');
        //$('.issueNav:contains(Next)').addClass('navNext');
        //$('.issueNav:contains(All Issues)').addClass('navIssues');
        //$('.issueNav:contains(Prev)').insertBefore('.navIssues').addClass('navPrev');
        $('.issueNav:contains(Next), .issueNav:contains(Prev)').remove();
        $('.issueNav:contains(All Issues)').hide();
        $('span.islandora-newspaper-issue-navigator').remove();
        $('.bookLabel').css('background-image, none');
      }

      function compoundChild_start(){
        $('body').addClass('compoundChild');
        var sequenceText = $('span#islandora-compound-sequence-position').text();
        $('<div class="currentPart"></div>').html(sequenceText).appendTo('.headerBreadcrumb');
        $('#islandora-compound-previous-link').attr('id', '').wrapAll('<li class="sequencePrev"/>');
        $('#islandora-compound-next-link').attr('id', '').wrapAll('<li class="sequenceNext"/>');
        $('.sequencePrev').insertBefore('.sequenceNext');
      }

      function compoundChild_end(){
        $(".metadataSidebar > .region-inner > .metadataContainer").first().addClass("itemMetadata");
        childBreadcrumb();
        $(".depth-4 > a").clone().prop({class:"backContainer"}).insertAfter(".descriptionText").html("<div class='backCollection backParent'>Back</div>");
        if (!$(".tagsGlance").length){
        $('.contentLabel.itemDesc').css('display','none');
        }                    
        $(".content > .backContainer").remove();
        $("#bookMeta2").clone().prop({id:"bookMeta2Inner"}).insertAfter("#bookMeta");
        $("#bookMeta").addClass('itemMetadata');
        $('.block-compound-jail-display').remove();
        $('.content > .metadataContainer').addClass('compoundMetadata');
        $('#imageMeta').addClass('itemMetadata');
        $('.compoundMetadata').insertAfter('.itemMetadata, .metadataVertical > div > .metadataContainer');
        childBreadcrumb();
   
      }

      function itemHeader(){
        if (!$('body').hasClass('compoundObject')){
          $("#region-content div.tabs.clearfix").prependTo("#block-system-main");
          $("<div class='item_header'/>").insertBefore(".itemContainer, .islandora-large-image-object, .bookContainer, .islandora-newspaper-object"); //creates header for image items
          thumbnailURL = $(".image-thumbnail img").prop('data-src');
          var sequenceText = $('span#islandora-compound-sequence-position').text();
          $('<div class="currentPart"></div>').html(sequenceText).appendTo('.headerBreadcrumb');
          $('#islandora-compound-previous-link').attr('id', '').wrapAll('<li class="sequencePrev"/>');
          $('#islandora-compound-next-link').attr('id', '').wrapAll('<li class="sequenceNext"/>');
          $('.sequencePrev').insertBefore('.sequenceNext');
          //console.log(sequenceText);          
          }
        if ($('body').hasClass('compoundParent')){
          var widest = null;  // remember the width of the "widest" element - probably faster than calling .width() - currently disabled - move addclasswidest to second if to
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
          });   //done finding widest image
          var commentedURL = $('div.widest').find('noscript').addClass('widestIMG').text().split(" ");
          var srcclean = commentedURL[2].match(/"(.*?)"/);
          $('.compoundSelect noscript').each(function() {    //begin embargo detection
            str = $(this).html();
            if (str.indexOf("embargo") >= 0){
              $(this).parent().parent().addClass("embargoed");
              $("body").addClass("containsEmbargo");
              $(".ip-embargo-details").insertBefore(".content > div.islandora").wrapAll("<div class='alertBox_container'/>").wrapAll("<div class='alertBox'/>");
              $("<span class='alertIcon'/>").insertBefore(".ip-embargo-details");
            }
          });
          if ($('.ip-embargo-details > div').length){
            $('body').addClass('activeEmbargo');
          }
          if (($('.ip-embargo-details').length) && (!$('.object-title').length)){
            $('body').addClass('objectHidden');
          }    //end embargo detection
          $(".parentLink").wrapAll("<div class='headerBreadcrumb'/>");
          var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
          var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
          $(institutionText).addClass("institutionSmall").insertBefore("a.parentLink"); //adds institutionLabel div to show content type
          $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); // adds a / character and needs to be separated from the a href
          $(".compoundObject .contentLabel").addClass("compoundLabel"); //detects contentType and assign new class to contentLabel
          $(".compoundLabel").html("Compound Object"); //text within compoundLabel
          $(".manageParent, ul.tabs").appendTo(".itemMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
          $(".downloadLink").appendTo(".userMenu");
          $(".compoundLabels").insertBefore(".backgroundDiv");
          $("#islandora-ip-embargo-object-embargo-form").insertBefore(".compoundGallery"); // moves ipembargo
          $("<div class='embargoTitle'>Set IP embargo settings</div>").insertBefore(".compoundObject #islandora-ip-embargo-policy-source")//adds title for ip embargo on compounds            
          var thumbnailURL =  srcclean[1];
          $("div#region-content > div.region-content-inner > div.tabs > ul.tabs").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
          $(".compoundCount").appendTo(".itemContainer");
          $(".item_header > .form-item").addClass('item_headerMenu').appendTo(".item_header");
          $("<div class='backgroundDiv'/>").insertBefore(".item_headerMenu"); //creates header for book items
          $('.backgroundDiv').css('background-image', 'url(' + thumbnailURL + ')');    
          $('.parentLink').addClass('institutionSmall');
          console.log('hi its compound parent')
          }
         if ($('body').hasClass('compoundChild')){   
          var commentedURL = $('div.currentImage').find('noscript').addClass('widestIMG').text().split(" ");
          var srcclean = commentedURL[2].match(/"(.*?)"/);
          thumbnailURL = srcclean[1];
        console.log(thumbnailURL);                     
          $("<div class='item_headerMenu'/>").appendTo(".item_header"); //creates header for book items
          $("<div class='backgroundDiv'/>").insertBefore(".item_headerMenu"); //creates header for book items
          $('.backgroundDiv').css('background-image', 'url(' + thumbnailURL + ')');
          $("<div class='itemTitle'/>").text(itemTitle).appendTo(".item_headerMenu"); // undoes default title truncation          
          $("#region-content div.tabs.clearfix").prependTo("#block-system-main");
          console.log('hi its compound child');
          var sequenceText = $('span#islandora-compound-sequence-position').text();
          $('<div class="currentPart"></div>').html(sequenceText).appendTo('.headerBreadcrumb');
          $('#islandora-compound-previous-link').attr('id', '').wrapAll('<li class="sequencePrev"/>');
          $('#islandora-compound-next-link').attr('id', '').wrapAll('<li class="sequenceNext"/>');
          $('.sequencePrev').insertBefore('.sequenceNext');
        }       
        if ((!$('body').hasClass('compoundParent')) && (!$('body').hasClass('compoundChild'))) {
          $("<div class='item_headerMenu'/>").appendTo(".item_header"); //creates header for book items
          $("<div class='backgroundDiv'/>").appendTo(".item_header"); //creates header for book items
          $('.backgroundDiv').css('background-image', 'url(' + thumbnailURL + ')');
          $("<div class='itemTitle'/>").text(itemTitle).appendTo(".item_headerMenu"); // undoes default title truncation
          $("<div class='headerBreadcrumb'/>").appendTo(".item_headerMenu"); //temporarily moves count              
          var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
          //var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
          var collectionText = $(".depth-3 > a").clone(); //creates href path from breadcrumb depth-3
          var collectionHome = $(".depth-3 > a").attr('href'); //creates href path from breadcrumb depth-3
          $(institutionText).addClass("institutionSmall").appendTo(".headerBreadcrumb"); //creates institution breadcrumb
          $("<span class='breadcrumbDivider'>/</span>").insertAfter(".institutionSmall"); //needs to be separated from the a href
          $(collectionText).addClass("institutionSmall").insertAfter(".breadcrumbDivider"); //creates collection breadcrumb
          console.log('hi its not a compound');
          }
        $("<div class='userMenu'/>").appendTo(".item_headerMenu"); //temporarily moves count
        $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
        $("div#block-system-main > div.tabs > ul.tabs").appendTo(".userMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
        $("div#block-system-main > div.tabs").remove(); // temporarily removes tabs until menu is set
        if(itemTitle.length > 20) {
          $(".itemTitle").css('font-size','34px');
        }
     }

      function imageContainer(){
        $(".islandora-large-image-object, .islandora-newspaper-object").addClass("itemContainer imageContainer"); //adds label break
        $("<div class='labelContainer'/>").insertBefore(".imageContainer"); //adds label break
        $("<div class='contentLabel imageLabel'>Image Object</div>").appendTo(".labelContainer"); //adds label break
        $("<div class='imagePreview'/>").appendTo(".imageContainer"); //adds label break
        $(".image-thumbnail").appendTo(".imagePreview");
        $("<div class='image-thumbnailData'/>").insertAfter(".imagePreview");
        $("<div class='imageMenu'/>").appendTo(".imagePreview"); //adds label break
        //$("#bookTitle").clone().attr("id", "bookmenuTitle").appendTo(".bookMenu"); // undoes default title truncation
        $("<div class='chooseMenu'/>").appendTo(".imageMenu"); //adds label break
        $("<div class='chooseImage chooseViewer'><div class='chooseIcon'><i class='fa fa-image'></i></div><div class='chooseText'>Open Image Viewer</div></div>").appendTo(".chooseMenu"); //adds label break
        $(".downloadList").insertAfter(".image_headerMenu");
      }

      function itemFooter(){
        $(".metadataSidebar .modsDesc").clone().appendTo(".image-thumbnailData, .item-thumbnailData");
        $("<div class='labelContainer descContainer'/>").insertAfter(".imageContainer, .itemContainer"); //adds label break
        $("<div class='contentLabel itemDesc'>tags</div>").appendTo(".descContainer"); //adds label break
        $("a.institutionSmall:last-child").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");
        $("<div class='descriptionText'/>").insertAfter(".itemDesc"); //adds label break
        $(".metadataSidebar .modsSubject a").clone().appendTo(".descContainer .descriptionText").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
        $(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.content .descContainer .descriptionText');
        $(".downloadSelect").insertAfter(".infoToggle");
        $("<i class='fa fa-image' aria-hidden='true'></i>").appendTo(".imageLabel");
      }

      function bookContainer(){
        $('.itemTitle').attr("id", "bookTitle");
        $("<div class='labelContainer descContainer'/>").insertAfter(".bookContainer"); //adds label break
        if ($(".islandora-newspaper-issue").length) {
          $("<div class='contentLabel itemLabel bookLabel'>Newspaper Issue</div>").appendTo(".labelContainer");
          $(".issueNav a").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>View All Issues</div>");
        }
        else{
          $("<div class='contentLabel itemLabel bookLabel'>Book Object</div>").appendTo(".labelContainer");
        }
        $("<div class='contentLabel bookDesc itemDesc'>tags</div>").appendTo(".descContainer"); //adds label break
        $("<div class='descriptionText'/>").insertAfter(".itemDesc"); //adds label break
        $("#book-viewer div div ul li a").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");
        $("<div class='bookPreviewContainer'/>").insertAfter(".itemLabel"); //adds label break
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
        $("div.bookContainer").insertBefore("div.mobileMenu");
        $(".islandora-book-metadata").remove();
        $("<div class='bookMenu'/>").appendTo(".bookPreview"); //adds label break
        //$("#bookTitle").clone().attr("id", "bookmenuTitle").appendTo(".bookMenu"); // undoes default title truncation
        $("<div class='chooseMenu'/>").appendTo(".bookMenu"); //adds label break
        $("<div class='chooseBook chooseViewer'><div class='chooseIcon'><i class='fas fa-book'></i></div><div class='chooseText'>Open Book Viewer</div></div>").appendTo(".chooseMenu"); //adds label break
      }

      function newspaperContainer(){
        $(".islandora-newspaper-object").addClass("newspaperContainer"); //adds label break
        $("<div class='labelContainer'/>").insertBefore(".newspaperContainer"); //adds label break
        $("<div class='contentLabel newspaperLabel'>newspaper summary</div>").appendTo(".labelContainer"); //adds label break
        $("<div class='newspaperPreview'/>").appendTo(".newspaperContainer"); //adds label break
        $(".newspaper-thumbnail").appendTo(".newspaperPreview");
        $("<div class='newspaper-thumbnailData'/>").insertAfter(".total-issue-count");
        $(".downloadList").insertAfter(".newspaper_headerMenu");
        $("<div class='newspaper-listToggle'><div class='toggleContainer'><div class='select selectThumbnails'>Grid View</div><div class='select selectList'>List View</div><div class='toggleSlider'></div></div></div>").appendTo(".newspaper-thumbnailData");
      }

      function yearBack(){
        $("body").removeClass('multipleDaily');
        $(".monthTempLabel, .multipleNotice").remove();
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
      }

      function bookFooter(){
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
        $("<div class='bookSidebar'><div class='bookMetaContainer'></div></div>").appendTo("#BookReader"); //444444444444444444444444444444444444444444444444444444444444444444444444444444444444sets double-bagged container
        $("#region-sidebar-first > .metadataSidebar > .region-inner >  .metadataContainer ").clone().prop({id:"bookMeta"}).appendTo(".bookMetaContainer"); 
        $("#book-viewer > .metadataContainer ").clone().prop({id:"bookMeta2", class:"metadataContainer compoundMetadata"}).appendTo(".region-sidebar-first-inner"); //fills container
        //fills container
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
        if ($(".islandora-newspaper-issue").length) {
          $('.chooseIcon').html('<i class="fas fa-newspaper"></i>');
          $('.chooseText').html('View');
        }


      }

      function moveMetadata(){  //begin metadata move
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
        $(".islandora-newspaper-issue-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
        $(".islandora-book-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
        $(".islandora-large-image-metadata > .metadataContainer").appendTo(".region-sidebar-first-inner");
        $("#region-sidebar-first").addClass('nano');
        $(".nano > .region-inner").appendTo('#side');
        $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
        $(".metadataSidebar").addClass('nano-content'); //adds nanobar
        $(".metadataRow span:first-child").addClass("metadataTitle");//adds styles to metadata divs
        $(".metadataRow span:nth-child(2n)").addClass("metadataValue");//adds styles to metadata divs
        $(".metadataContainer div:first-child").remove();  //removes weird h3 MODS titles
        $("#sideMods").appendTo(".region-sidebar-first-inner");
        $("#sideMods").addClass("metadataContainer");
        $(".islandora-newspaper-metadata, .islandora-newspaper-issue-metadata, .islandora-newspaper-page-metadata").remove();  //removes empty old div
        $(".metadataSidebar .sidebarLabel").remove(); //removes refine results text which bleeds over from search results
        if (!$(".metadataContainer .metadataRow").length){ //hide details toggle if metadata is empty
            $(".infoToggle").hide();
        }

      }   //end metadata move


      function dataStarter(){
          $('.ics_filters').removeClass('collapsed');
          $('#block-block-9').appendTo('#region-content .region-content-inner');
           var globalLabels = [];
           iLabel = 0;
           $('.globalStat .cmodel').each(function()
           {

                   globalLabels[iLabel++] = $(this).text();
                   //I should store id in an array
           });

           var globalNumbers = [];
           iNumber = 0;
           $('.globalStat .total').each(function()
           {

                   globalNumbers[iNumber++] = $(this).text();
                   //I should store id in an array
           });
           console.log(globalNumbers);
           var ctx = document.getElementById("globalChart");
           var myChart = new Chart(ctx, {
               type: 'doughnut',
               data: {
                   labels: globalLabels,
                   datasets: [{
                       data: globalNumbers,
                       backgroundColor: [
                           '#FF5370',
                           '#FFCB6B',
                           '#82AAFF',
                           '#F78C6C',
                           '#bb80b3',
                           '#89DDFF',
                           '#B2CCD6',
                           '#C3E88D',
                           '#f07178',
                           '#C792EA',
                           '#f07178',
                           '#6182B8',
                           '#7C4DFF',
                           '#E53935',
                           '#FF5370',
                           '#F76D47',
                           '#FFB62C',
                           '#91B859',
                           '#8796B0',
                           '#39ADB5',
                       ],
                   }]
               },
               options:{
                 layout:{
                   padding:{
                     left: 10,
                     right: 10,
                     top: 0,
                     bottom: 0
                   }
                 },
                 legend:{
                   fontSize: 11,
                   position: 'bottom',
                   labels:{
                     boxWidth: 10,
                     padding: 15,
                   }
                 }
               }
           });
      }
      function bookStarter(){
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
      }

      function actionToggles(){ // begin toggle functions
        var shareToggle = $('#shareToggle');
        var infoToggle = $('.infoToggle');
        $(infoToggle).click(function(){
          $(infoToggle).toggleClass('menuActive');
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
          $(shareToggle).toggleClass('activeMenu');
          $('#share').toggleClass('shareActive');
        });
        downloadHeight = $('.downloadList_container').height();
        $('.downloadSelect').click(function(){
          $('.downloadList').toggleClass('extendList');
          $('.downloadSelect').toggleClass('menuActive');
        });
         $('.newspaperSet .downloadSelect').toggle(
          function(){$('.newspaper_header').css({"padding-bottom": "70px"});},
          function(){$('.newspaper_header').css({"padding-bottom": "inherit"});}
         );
        $('.largeImage .downloadSelect').toggle(
          function(){$('.image_header').css({"padding-bottom": "70px"});},
          function(){$('.image_header').css({"padding-bottom": "inherit"});}
        );
        console.log('info toggle made');
        $('li:empty').remove();
      $('.manageMenu').insertBefore('#shareToggle');

      } // end toggle functions


      function compoundStarter(){    
         $(".compoundObject #block-system-main table").prop({class:"modsTable"}).appendTo(".region-sidebar-first-inner");
         $('.compoundSelect').wrapAll('<div class="itemContainer compoundGallery "/>'); //wraps collectionPage title
         $("<div class='itemMenu'/>").insertBefore(".backgroundDiv");
         $("<div class='contentLabel'/>").insertBefore(".compoundGallery"); //adds contentLabel div to show content type
      }  

      function imageModal(){
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
        $('#islandora-openseadragon > span').wrapAll('<div class="imageToolbar"/>'); // wraps collectionPage title
        $("<div class='innerimageTitle'/>").text(itemTitle).insertAfter('span.modalExit5'); // undoes default title truncation
      }

      $('.instStats').masonry({
        itemSelector: '.inst_wrapper'
      });


      window.sr = ScrollReveal();
      $(window).on("load", function() {
        sr.reveal('.page-islandora-search .region-sidebar-first-inner', { duration: 200, delay: 100, opacity: 1, easing: 'linear', scale: 1, viewFactor: 0.01, }, 50);
        sr.reveal('.islandora-solr-search-result, .landingMobile, .globalStats', { duration: 200, delay: 100,  easing: 'linear', scale: 1, }, 20); //landingMessage normally here; conflicts with mobile landingMessage
        sr.reveal('.inst_wrapper', { duration: 500, delay: 0, opacity: 0.1, easing: 'linear', scale: 0.9, viewFactor: 1, }); //landingMessage normally here; conflicts with mobile landingMessage
        sr.reveal('.landingHero', { duration: 200, delay: 0,  easing: 'linear', scale: 1, viewFactor: 0.01,}, 20);
        sr.reveal('.solr-fields, .islandora-solr-sort li, .page-browse-collections tr, .islandora-pdf-content', { duration: 200, delay: 350,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
        sr.reveal('.solr-thumb img', { duration: 200, delay: 850,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 20);
        sr.reveal('.islandora-basic-collection-grid dl', { duration: 100, delay: 200,  easing: 'ease-in', }, 20);
        sr.reveal('.alertBox_container', { duration: 100, delay: 0,  easing: 'ease-in', opacity: 1 }, 20);
        sr.reveal('.bookmarkWelcome', { duration: 800, delay: 100,  easing: 'linear', scale: 1, viewFactor: 0.01, }, 50);
        $("a > .institutionLink_meta").each(function() {
          $(this).colourBrightness();//
        });
        if ($('body').hasClass('newspaperSet')){
            $("body.newspaperSet #page").fadeIn(200);
            $(' .months-container').each(function (){
                $(this).find("img.lazy").first().addClass('firstYearCover');
            });
          $(' .month-container').each(function (){
              $(this).find("img.lazy").first().addClass('firstMonthCover');
          });
            $('.firstYearCover').jail({
            effect: 'fadeIn',
            event: 'load',
            offset : 300,
            placeholder: '/sites/all/themes/ldl/images/loading.gif',
            id: "firstYear",
            });
          }
      });
      // end functions

      // begin namespace
      var title = document.getElementsByTagName("title")[0].innerHTML;
      var urlhref = window.location.href;
      var url = window.location.pathname;
      var namespaces = [
        "uno",
        "loyno",
        "mcneese",
        "lsu",
        "latech",
        "hnoc",
        "tulane",
        "state",
        "nicholls",
        "nsu",
        "subr",
        "ull",
        "ulm",
        "lsuhsc",
        "lsuhscs",
        "lsus",
        "lsm",
        "dcc",
        "vville",
        "tahil",
        "fpoc",
        "lasc"
      ];
      for (namespace in namespaces) {
        ns = namespaces[namespace];
        re = new RegExp(ns + "\\b");
        if (re.test(url)) {
          $("body").addClass(ns + "Theme institution");
        }
      }
      //end namespace
      if ($(".video-js").length && $("#islandora-pdfjs").length) {
        $("body").addClass("audioPDF");
      } //detection for oral history
      if ($(".islandora-basic-collection-item-count").length) {
        $("body").addClass("collectionPageTest");
        $("body").addClass("collectionPage");
      } //allows collection Page styles


      //oral history stuff
      $("h1#page-title").clone().prop({ id: "oh-title", class: "ohtitle"}).prependTo(".islandora-audio-content");
      $(".modsContributor a").clone().prop({ class: "ohcreator"}).insertAfter(".ohtitle");
      $('a.ohcreator').wrapAll('<div class="creatorLinks"/>'); //wraps collectionPage title
      //end oral history

      $('<span> items</span>').appendTo('.institution-collection-list-item-count, .child-institution-count-items');//collection page numbers and description
      $('<span> collections</span>').appendTo('.child-institution-count-collections');
      $('.institution-collection-list-li').each(function() {
      $(this).children('.institution-collection-list-item-label').clone().prop({class: "title-description"}).prependTo($(this).children('.institution-collection-description'));
      }); //end colleciton page numbers and description

      $("div.institution-title").prependTo(".institution-about > p:first-child");
      $(".child-institution-collections").insertAfter(".institution-search");
      if($('.institution-collection-list-a').length < 4){
      $('.institution-collection-list-a').css("flex-grow","1");
      $('.institution-collection-list-item-label').css("width", "auto");
      }

      // ===== following chunk needs cleanup, some legacy code within =====

      $(".islandora-pdf-metadata").clone().prop({ id: "sideMods", class: "newClass" }).prependTo("#region-sidebar-first");  //old metadata move, not sure if still being used, no PDF on my local atm
      $("#page-title").clone().prop({ id: "window-title", class: "object-title"}).prependTo("div.islandora-pdf-content, div.islandora-large-image-content"); // old pdf title
      $("#sideMods tr:nth-child(0n+3) td:nth-child(0n+2)").clone().prop({ id: "pdf-object-author", class: "object-author"}).appendTo("#window-title");// old pdf title
      $("a.islandora-pdf-link").appendTo(".islandora-pdf-content");
      $("#sideMods div:nth-child(1)").appendTo("#sideMods");
      $(".islandora-pdf-metadata").appendTo(".islandora-pdf-content");
      $("#islandora-solr-result-count").prop({ id: "header-result-count"}).appendTo("#breadcrumb"); //search results total
      if ($('#largeSearch').length){
      } else{
      $("#region-header-first #block-islandora-solr-simple").clone().prop({ id: "largeSearch", value:"Search LDL.."}).appendTo( $("#block-block-12 > .block-inner > div.content")).on;
      }//this length check avoids this from firing multiple times from using the + button on the advanced search
      //$("#block-block-1").clone().prop({ id: "landingAdvanced"}).appendTo("#largeSearch");
      $("#largeSearch #edit-simple--2").prop({ id: "largeSearch_form"});
                $("#largeSearch #edit-simple--2 > .form-item > input").prop({ id: "largeSearch_form_input"});
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
      $( ".site-name a span" ).replaceWith( "<span><span class='boldSpan'>Louisiana</span> Digital Library</span>" );// $('.child-institution-collections a').wrapAll('<div class="childCollections"/>'); disables overflow fix for many child collections running off the page. this is a reversion because of <a> bug / diff in test vs production
      $(".collectionPage <div class='collectionSearch'/>").insertAfter(".collectionHeader");
      $(".collectionPage #page-title").prependTo(".collectionHeader .collection-description-text");
      $(".collectionPage #block-islandora-collection-search-islandora-collection-search").appendTo(".collectionSearch");
      $("#zone-header input.form-submit").val(' ');
      $(".institution-search input.form-submit").val(' ');
      $(".collectionSearch input.form-submit").val(' ');
      $("#largeSearch input.form-submit").val(' ');
      $("#block-user-login").prependTo(".footerContainer");
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
      if ($("body").attr('class').indexOf('-pages') > -1) {
        $("body").addClass('pagesView');
        $("#block-islandora-compound-object-compound-jail-display, .islandora-objects-display-switch").remove();
      }


  if ($("body").attr('class').indexOf('regenerate') > -1) {
    $("body").addClass('regeneratePage');
  }

      $('#secondary-display-profiles').insertAfter('.islandora-solr-facet-wrapper:last');
      $('<div class="downloadSearch">Download Results as CSV</div>').appendTo('#secondary-display-profiles a');
      $('.downloadSearch').parent().addClass('downloadSearchContainer');
      // ===== above chunk needs cleanup, some legacy code within =====



      //begin compoundObject
      if ( ($('.block-islandora-compound-object').length) && ( !$('body').is('.audioPDF, .regeneratePage, .datastreamPage, .book, .pagesView')  )) {
        //$("#sideMods").remove();
        //$("body").addClass('compoundObject oldCompound');  //find widest image
        // var widest = null;  // remember the width of the "widest" element - probably faster than calling .width() - currently disabled - move addclasswidest to second if to
        // var widestWidth = 0;
        // $(".compoundSelect").each(function() {
        //   if (widest == null)
        //   {
        //     widest = $(this).addClass('widest');;
        //     widestWidth = $(this).width();
        //   }
        //   else
        //   if ($(this).width() > widestWidth) {
        //     widest = $(this)
        //     widestWidth = $(this).width();
        //   }
        // });   //done finding widest image
        // $("<div class='backgroundDiv'/>").insertBefore(".compoundGallery_header .form-item"); // adds div for item background
        // var commentedURL = $('div.widest').find('noscript').addClass('widestIMG').text().split(" ");
        // var srcclean = commentedURL[2].match(/"(.*?)"/);
        // $('.compoundSelect noscript').each(function() {    //begin embargo detection
        //   str = $(this).html();
        //   if (str.indexOf("embargo") >= 0){
        //     $(this).parent().parent().addClass("embargoed");
        //     $("body").addClass("containsEmbargo");
        //     $(".ip-embargo-details").insertBefore(".content > div.islandora").wrapAll("<div class='alertBox_container'/>").wrapAll("<div class='alertBox'/>");
        //     $("<span class='alertIcon'/>").insertBefore(".ip-embargo-details");
        //   }
        // });
        // if ($('.ip-embargo-details > div').length){
        //   $('body').addClass('activeEmbargo');
        // }
        // if (($('.ip-embargo-details').length) && (!$('.object-title').length)){
        //   $('body').addClass('objectHidden');
        // }    //end embargo detection
        // assign background image


        // $('.backgroundDiv').css('background-image', 'url(' + srcclean[1] + ')');

    
 //adds contentLabel div to show content type
      //   $(".parentLink").wrapAll("<div class='headerBreadcrumb'/>");
      //   var institutionText = $(".depth-2 > a").clone(); //creates href path from breadcrumb depth-2
      //   var institutionHome = $(".depth-2 > a").attr('href'); //creates href path from breadcrumb depth-2
      //   $(institutionText).addClass("institutionSmall").insertBefore("a.parentLink"); //adds institutionLabel div to show content type
      //   $( " <span class='breadcrumbDivider'>/</span>" ).insertAfter( ".institutionSmall" ); // adds a / character and needs to be separated from the a href
      //   $(".compoundObject .contentLabel").addClass("compoundLabel"); //detects contentType and assign new class to contentLabel
      //   $(".compoundLabel").html("Compound Object"); //text within compoundLabel
      //   $(".manageParent, ul.tabs").appendTo(".itemMenu").wrapAll('<div class="manageMenu"/>'); //moves the view/ip embargo/manage menu
      //   $("<div class='userMenu'/>").insertAfter(".manageMenu");  //inserts compoundGlance
      //   $("<div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>").appendTo(".userMenu"); //adds toggle for parent metadata
      //   $(".downloadLink").appendTo(".userMenu");
      //   $("#clip").appendTo(".userMenu");
      //   $(".compoundLabels").insertBefore(".backgroundDiv");
      //   $("#islandora-ip-embargo-object-embargo-form").insertBefore(".compoundGallery"); // moves ipembargo
      //   $("<div class='embargoTitle'>Set IP embargo settings</div>").insertBefore(".compoundObject #islandora-ip-embargo-policy-source")//adds title for ip embargo on compounds
      //   $('.infoToggle').click(function(){
      //     $(this).toggleClass('menuActive');
      //     $('#region-sidebar-first').toggleClass('infoOpened');
      //     $('body').toggleClass('metaOpened');
      //     $(".nano").nanoScroller({ alwaysVisible: false });
      //   });

      //   $('#window-title').insertAfter('.itemMenu');
      //   $("<div class='childIcon childImage'/>").insertBefore(".compoundChildImage #window-title");
      //   $("<div class='contentLabel imageLabel'>Large<br>Image</div>").insertBefore(".compoundChildImage .compoundLabel");
      //   $(".childIcon, #window-title").wrapAll("<div class='childHeader'/>");
      //   $('#block-system-main').remove();
      //   $('<div class="childNotice">Part of</div>').insertBefore('.compoundChild .compoundGallery_header .contentIcon');
      //   $('.userMenu').insertAfter('#window-title');
      //   $('<div class="textSelect">clip image</div>').appendTo("#clip");
      //   $('#clip').addClass('userSelect');
      //   $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter("#clip");
      //   $("<div id='shareToggle' class='userSelect'><div class='iconSelect'></div><div class='textSelect'>share</div></div>").insertAfter(".compoundParent .compoundCount");
      //   $(".compoundCount").appendTo(".compoundGallery");
      //   $("#islandora-compound-next-link").insertAfter("#islandora-compound-sequence-position");
      //   $("<i class='fa fa-arrow-right' aria-hidden='true'></i>").appendTo("#islandora-compound-next-link");
      //   $("<i class='fa fa-arrow-left' aria-hidden='true'></i>").appendTo("#islandora-compound-previous-link");
      //   $(".userMenu").insertAfter(".headerBreadcrumb");
      //   $("#shareToggle").insertAfter(".infoToggle");
      //   $("<div id='share'/>").insertAfter("#shareToggle");
      //   $(".parentLink").clone().prop({class:"backContainer"}).insertAfter(".compoundGallery").html("<div class='backCollection'>Back to Collection</div>");
      //   $(".contentLabel").wrapAll("<div class='labelContainer'/>");
      //   $("#share").jsSocials({
      //     url: urlhref,
      //     text: title,
      //     showLabel: false,
      //     showCount: "inside",
      //     shares: ["twitter", "facebook"]
      //   });
      //   $('#shareToggle').click(function(){
      //     $(this).toggleClass('activeMenu');
      //     $('#share').toggleClass('shareActive');
      //     $('.compoundChild .compoundParent').toggleClass('hideme');
      //   });
      //   $('table').each(function (){
      //       $(this).replaceWith( $(this).html()
      //           .replace(/<tbody/gi, "<div class='metadataContainer'")
      //           .replace(/<tr/gi, "<div class='metadataRow'")
      //           .replace(/<\/tr>/gi, "</div>")
      //           .replace(/<td/gi, "<span")
      //           .replace(/<\/td>/gi, "</span>")
      //           .replace(/<\/tbody/gi, "<\/div")
      //       );
      //   });

      //   $("#region-sidebar-first").addClass('nano');
      //   $(".nano > .region-inner").appendTo('#side');
      //   $('#sideMods, .nano > .region-inner').wrapAll('<div class="metadataSidebar"/>');
      //   $(".metadataSidebar").addClass('nano-content');
      //   $(".metadataRow span:first-child").addClass("metadataTitle");
      //   $(".metadataRow span:nth-child(2n)").addClass("metadataValue");
      //   $(".metadataContainer div:first-child").remove();  //removes weird h3 titles
      //   $(".metadataSidebar > .region-inner > .alpha-debug-block").remove();
      //   $(".metadataSidebar > .region-inner > .metadataContainer:nth-child(2n + 0)").addClass("itemMetadata");
      //   $(".metadataSidebar > .region-inner > .metadataContainer:nth-child(2n + 1)").addClass("compoundMetadata");
      //   $(".mobileMetaToggle .textSelect").replaceWith("<div class='textSelect'>Back to item view</div>");
      //   $(".mobileMetaToggle .iconSelect").remove();
      //   $(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.compoundGallery');
      //   $("<div class='compoundGlance'/>").insertBefore(".metadataVertical");  //inserts compoundGlance
      //   $(".metadataSidebar .modsDesc").clone().appendTo(".compoundGlance");
      //   $(".metadataSidebar .modsSubject a").clone().appendTo(".compoundGlance").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
      //   $(".tagsGlance > .modsSubject br").remove();
      //   $('.mobileMetaToggle').click(function(){
      //     $(this).toggleClass('menuActive');
      //     $('#region-sidebar-first').toggleClass('infoOpened');
      //     $('body').toggleClass('metaOpened');
      //     $(".nano").nanoScroller({ alwaysVisible: false });
      //   });
      //   $(".manageMenu").appendTo(".userMenu");
      //   $(".compoundParent #islandora-compound-sequence-position").remove();
      //   $(".compoundParent .manageParent").remove();
      //   $(".compoundParent #islandora-compound-next-link").remove();
      //   $(".manageMenu ul li:first-child").remove();
      //   $("#clip").remove();
      //   $("div#region-sidebar-first div.tabs").remove(); // temporarily removes tabs until menu is set

       } //end compoundObject

      


      // begin newspaper 2.0
      if ( ($('.total-issue-count').length) && ( !$('body').hasClass('audioPDF') ) ){
          $(".metadataSidebar .modsDesc").clone().appendTo(".newspaper-thumbnailData");
          $("<div class='labelContainer descContainer'/>").insertAfter(".newspaperContainer"); //adds label break
          $("<div class='contentLabel bookDesc itemDesc'>tags</div>").appendTo(".descContainer"); //adds label break
          $("a.institutionSmall:last-child").clone().prop({class:"backContainer"}).insertAfter(".descContainer").html("<div class='backCollection'>Back to Collection</div>");
          $("<div class='descriptionText'/>").insertAfter(".itemDesc"); //adds label break
          $(".metadataSidebar .modsSubject a").clone().appendTo(".descContainer .descriptionText").addClass("modsSubject").wrapAll('<div class="tagsGlance"/>');
          $(".metadataSidebar").clone().prop({ class: "metadataVertical"}).appendTo('.content .descContainer .descriptionText');
          $(".downloadSelect").insertAfter(".infoToggle");
          $("<i class='fa fa-newspaper' aria-hidden='true'></i>").appendTo(".newspaperLabel");
          $(".total-issue-count").insertAfter(".newspaper-thumbnailData > span");

          if ($(window).width() < 900) {
              $('body').addClass('mobileNewspaper mobileDeviceNewspaper');
              var issueLinks = [];
              $( ".issue-container" ).each(function( index ) { // get links for each day
                var date = new Date($(this).find("div.issue-date").html());
                issueLinks.push({link: $(this).find("a").attr("href"), Date: date}); // matches link and day in array
              });
              console.log(issueLinks);

          }     else{



      //begin newspaper selection
           // Finds cover for first day of each month

          //initializes JAIL for first year covers
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
      var monthButton = $('div.month-container-label');
      var yearButton = $('.publication-year-container-label');


function yearClick(){
        yearButton.click(function(){
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
          $( "#calendar" ).datepicker( "option", "monthNames", [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ] ); // initialize months
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
}

function monthClick(){
    monthButton.click(function(){
      if (($('body').find('.monthLevel')).length > 0) {
        var thisMonth = $(this);
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
      if (!($(thisMonth).find(".filler-border").length)){
          $("<span class='filler-border'/>").insertBefore(".ui-datepicker-month");
      }
          $('div.activeMonth .issue-container').each(function (){
              var issueDay = ($(this).find("a > .issue-date").html().slice(3, 5).replace(/^0+/, ''));
              $(this).find("img").addClass("dayIssue coverDay_" + issueDay);
              $(this).find("img").clone().appendTo($(".dayNumber_" + issueDay)).jail({
                loadHiddenImages : true,
                id: "eachDay",
              });
          });



        $('.ui-datepicker-calendar tbody tr').each(function (){
          if (!($(this).find("a.ui-state-default").length)){
            $(this).remove();
          }
        });
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

        $('[class*="dayNumber_"]').each(function (){
           $(this).not('.styled').addClass('styled').children().wrapAll("<div class='dayContainer'/>");
        });


        if (($(thisMonth).hasClass('hasMultipleDaily')) && (!($('body').hasClass('multipleDaily')))){
            $('body').addClass('multipleDaily');
            $('<div class="multipleNotice">This month contains days with multiple issues</div>').insertBefore('.activeMonth span.month-container-label-month');
            console.log('multiple issues on one day');
        }
      }
    });

}
      //back to month
      $(".monthSelect, .monthBack").click(function(){
        $("body").removeClass('multipleDaily');
        $(".monthTempLabel, .multipleNotice").remove();
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
        $('[class*="dayNumber_"]').each(function (){
           $(this).find("img.dayIssue").remove();
         });
      });
      //back to year
      $(".yearSelect, .yearBack").click(function(){
        yearBack();
      });

       yearClick();
       monthClick();

      $(".newspaper-listToggle").toggle(function(){
        $('.publication-year-container-label, .month-container-label').off("click");//disabled buttons
        fadeList();
        $('.toggleSlider').toggleClass('active');
      }, function(){
        $('.publication-year-container-label, .month-container-label').on("click");//disabled buttons
        fadeList();
        yearClick();
        monthClick();
        $('.toggleSlider').toggleClass('active');

      });
      //$("<div class='contentLabel newspaperLabel2'>Newspaper Selection</div>").insertAfter(".newspaper-thumbnailData");
      //end newspaper selection logic
      //begin datepicker
      $("<div id='calendar'/>").insertAfter(".islandora-newspaper-grid"); //create container for calendars
      $.getScript('/sites/all/themes/ldl/calendar.min.js', function() {
          var monthsQuantity = $(".activeYear .months-container .month-container").length;
          var issueLinks = [];
          $( ".issue-container" ).each(function( index ) { // get links for each day
              var date = new Date($(this).find("div.issue-date").html());
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
                        '_self' // <- This is what makes it open in current window.
                      );
                  }
              }
          });
      });
    }
      //end datepicker
      }
      // end newspaper 2.0

      if ( ($('body').hasClass('compoundObject')) || ($('body').hasClass('bookViewer')) || ($('body').hasClass('context-data')) || ($('body').hasClass('largeImage')) || ($('body').hasClass('newspaperSet'))){
      $('body').addClass('headerversiontwo');
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

      function pageBlur(){
          $(".page").addClass('blurFilter');
          $(".parallax-slider").addClass('darkFilter');
          $("#zone-content-wrapper").addClass('noClick');
      }

      function pageNoBlur(){
          $(".page").removeClass('blurFilter');
          $(".parallax-slider").removeClass('darkFilter');
          $("#zone-content-wrapper").removeClass('noClick');
      }

      // When the user clicks on the button, open the modal
      btn.onclick = function() {
              $.fn.menuisActive();
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
          pageNoBlur();
          $("button").removeClass('is-active');
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
              pageNoBlur();
              $("button").removeClass('is-active');
        var uri = window.location.toString();
        if (uri.indexOf("#") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("#"));
            window.history.replaceState({}, document.title, clean_uri);
        }
          }
          if (event.target == modal2 || event.target == page) {
              modal2.style.display = "none";
                  pageNoBlur();
                  var uri = window.location.toString();
                  if (uri.indexOf("#") > 0) {
                      var clean_uri = uri.substring(0, uri.indexOf("#"));
                      window.history.replaceState({}, document.title, clean_uri);
                  }
          }
          if (event.target == modal3 || event.target == page) {
              modal3.style.display = "none";
                  pageNoBlur();
                  var uri = window.location.toString();
                  if (uri.indexOf("#") > 0) {
                      var clean_uri = uri.substring(0, uri.indexOf("#"));
                      window.history.replaceState({}, document.title, clean_uri);
                  }
          }
          if (event.target == modal4 || event.target == page) {
              modal4.style.display = "none";
              $(".page").removeClass('blurFilter');
              pageNoBlur();
          }
          if (event.target == modal5 || event.target == page) {
              modal5.style.display = "none";
              pageNoBlur();
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
          pageBlur();
          $("html").removeClass('mobileMenuActive');
      }
      // When the user clicks on <span> (x), close the modal
      span2.onclick = function() {
          modal2.style.display = "none";
          pageNoBlur();
          $("button").removeClass('is-active');
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
      $('body.rotate1.front #block-block-12').parallax({imageSrc: '/sites/all/themes/ldl/images/rotate1.jpg'});
      //rotate 2
      $("<a href='http://louisianadigitallibrary.org/islandora/object/lsu-p16313coll56:196'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Alligator juvenile, Col. Joseph S. Tate Photograph Album</span><span class='featuredDescription'>The photograph album (unbound) contains 103 black and white prints mounted on paper. The images show scenes from several locations in Louisiana during the 1920s. Photographer unknown.</span></div></div></a>").insertAfter(".rotate2 #block-block-12 .homepageText");
      $('body.rotate2.front #block-block-12').parallax({imageSrc: '/sites/all/themes/ldl/images/rotate2.jpg'});
      //rotate 3
      $("<a href='http://louisianadigitallibrary.org/islandora/object/hnoc-clf:10656'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mardi Gras truck float, Charles L. Franck and Franck-Bertacci</span><span class='featuredDescription'>View of a truck float sponsored by Hayes Dairy Products. The riders are costumed in dairy costumes.</span></div></div></a>").insertAfter(".rotate3 #block-block-12 .homepageText");
      $('body.rotate3.front #block-block-12').parallax({imageSrc: '/sites/all/themes/ldl/images/rotate3.jpg'});
      //rotate 4
      $("<a href='http://louisianadigitallibrary.org/islandora/object/lsu-p16313coll56:169'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Boiling schrimp [sic], Col. Joseph S. Tate Photograph Album</span><span class='featuredDescription'>The photograph album (unbound) contains 103 black and white prints mounted on paper. The images show scenes from several locations in Louisiana during the 1920s. Photographer unknown.</span></div></div></a>").insertAfter(".rotate4 #block-block-12 .homepageText");
      $('body.rotate4.front #block-block-12').parallax({imageSrc: '/sites/all/themes/ldl/images/rotate4.jpg'});
      //rotate 5
      $("<a href='http://louisianadigitallibrary.org/islandora/object/uno-omsa:283'><div class='featuredLink'><span class='featuredLabel'>Featured</span><div class='featuredText'><span class='featuredName'>Mamou Mardi Gras, Ogden Museum of Southern Art</span><span class='featuredDescription'>Under dark clouds, a horseman wearing a cape makes his Mardi Gras ride along side a field. B/W photograph.</span></div></div></a>").insertAfter(".rotate6 #block-block-12 .homepageText");
      $('body.rotate6.front #block-block-12').parallax({imageSrc: '/sites/all/themes/ldl/images/rotate5.jpg'});
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
              var compound_content = $(this).html($(this).text());
              if(compound_content.length > compound_showChar) {
                  var c2 = compound_content.substr(0, compound_showChar);
                  var h2 = compound_content.substr(compound_showChar, compound_content.length - compound_showChar);
                  var html2 = c2 + compound_ellipsestext;
                  $(this).text(html2);
              }
             
          });
          $('.metadataVertical #block-user-login').remove();
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
                  $(this).text(html);
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
            $('.collectionSearch input#edit-islandora-simple-search-query').each(function() {
            $(this).attr('placeholder', 'Search this collection' );
            });
            //$('#block-user-login input[name="op"]').val("Login");


          }
        }
      }
      var f = (function () {
      var itemHeaderHeight = $('.item_header').innerHeight() + 20;
      $('.downloadList').css('top', itemHeaderHeight);
      });
      $(document).ready(f);
      $(window).resize(f);

      }(jQuery));
