function divienhancer_scripts(){


  function divienhancer_modernizr_script(){
    var elements = jQuery('.divienhancer_animated_links');
    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];


    var modernizrScript = document.createElement("script");
    modernizrScript.src = `${src}scripts/modernizr.custom.js`;
    modernizrScript.id = `divienhancer-modernizr`;
    modernizrScript.type = "text/javascript";
    modernizrScript.async = true;
    modernizrScript.defer = true;

    if(elements.length > 0){

      if(!parent.divienhancerData.modernizr){
        documentHead.appendChild(modernizrScript);
        if(document.querySelector('#divienhancer-modernizr')){
          document.querySelector('#divienhancer-modernizr').addEventListener('load', function(){

    

            parent.divienhancerData.modernizr = 'loaded';

          })
        }
        

      }
    }

  }

  function divienhancer_hover_effects_script(){
    var elements = jQuery('.divienhancer-hover-effect');
    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];


    var hoverEffectsStyle = document.createElement("link");
    hoverEffectsStyle.href = `${src}styles/hover-effects.css`;
    hoverEffectsStyle.id = `divienhancer-hover-effects`;
    hoverEffectsStyle.type = "text/css";
    hoverEffectsStyle.rel = "stylesheet";
    hoverEffectsStyle.media = "all";

    if(elements.length > 0){

      if(!parent.divienhancerData.hoverEffects){
        documentHead.appendChild(hoverEffectsStyle);
        if(document.querySelector('#divienhancer-hover-effects')){
          document.querySelector('#divienhancer-hover-effects').addEventListener('load', function(){
            parent.divienhancerData.hoverEffects = 'loaded';
          })
        }
        

      }
    }

  }

  /*================================== FLIPBOX ============================*/
  /*============================================================================*/
  function divienhancer_flipbox(){
    var elements = jQuery('.divienhancer-flipper');
    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];


    var flipboxScript = document.createElement("script");
    flipboxScript.src = `${src}scripts/jquery.flip.min.js`;
    flipboxScript.id = `divienhancer-flipbox`;
    flipboxScript.type = "text/javascript";
    flipboxScript.async = true;
    flipboxScript.defer = true;

    var divienhancerFlipboxMaker = function(){
      jQuery('.divienhancer-flipper').each(function(){
        var $firstBox = jQuery(this).find('.divienhancer_flipBoxChild:nth-child(1)');
        var $secondBox = jQuery(this).find('.divienhancer_flipBoxChild:nth-child(2)');
        var $axis = jQuery(this).attr('data-axis');
        var $speed = jQuery(this).attr('data-speed');
        var $firstwidth = $firstBox.find('.divienhancer_flipbox_box').outerWidth();
        var $firstheight = $firstBox.outerHeight();
        var $secondwidth = $secondBox.find('.divienhancer_flipbox_box').outerWidth();
        var $secondheight = $secondBox.outerHeight();


        if($firstwidth < $secondwidth) {
          $secondBox.find('.divienhancer_flipbox_box').css({width: $firstwidth, margin:' 0 auto' })
        }
        else {
          $firstBox.find('.divienhancer_flipbox_box').css({width: $secondwidth, margin:' 0 auto'  })
        }

        if(!jQuery(this).find('.divienhancer_flipBoxChild').parents().hasClass('.divienhancer_child_element_wrapper')){
          jQuery(this).find('.divienhancer_flipBoxChild').wrap('<div class="divienhancer_child_element_wrapper"></div>');
        }
        $firstBox.parent('.divienhancer_child_element_wrapper').addClass('front');
        $secondBox.parent('.divienhancer_child_element_wrapper').addClass('back');


        if($firstheight < $secondheight) {
          jQuery(this).parents('.divienhancer-flip-container').css({height: $secondheight});
          jQuery(this).find('.divienhancer_flipBoxChild').css({height:$secondheight});
        }
        else {
          jQuery(this).parents('.divienhancer-flip-container').css({height: $firstheight});
          jQuery(this).find('.divienhancer_flipBoxChild').css({height:$firstheight});
        }



        if(!jQuery(this).hasClass('.divienhancer_flipbox_launched')){

       
          jQuery(this).flip({
            axis: $axis,
            trigger: 'hover',
            speed: $speed,

          }).addClass('divienhancer_flipbox_launched');

        }


        }) // end of each

    }


    if(elements.length > 0){

        if(!parent.divienhancerData.flipbox){
          documentHead.appendChild(flipboxScript);


          if(document.querySelector('#divienhancer-flipbox')){
            document.querySelector('#divienhancer-flipbox').addEventListener('load', function(){
              
              divienhancerFlipboxMaker();
              parent.divienhancerData.flipbox = 'loaded';
            
            })
          }
        }
        else {
          divienhancerFlipboxMaker();
        }


    }
            
  }



  /*================================== TIMELINE ============================*/
  /*============================================================================*/
  function divienhancer_timeline(){
    let windowWidth = window.screen.width;

    jQuery('.et_pb_module.divienhancer_timeLine').each(function(){


      jQuery('.divienhancer_timeLineChild').each(function(){
        var $contentHeight = jQuery(this).find('.divienhancer_timeline_child_inner').outerHeight();
        var $iconHeight = jQuery(this).find('.divienhancer_timeline_icon').outerHeight();
        var $dateHeight = jQuery(this).find('.divienhancer_timeline_date').outerHeight();
        
        if(windowWidth > 980){
          jQuery(this).find('.divienhancer_timeline_icon').css({top: $contentHeight/2, marginTop:-$iconHeight/2})
          jQuery(this).find('.divienhancer_timeline_date').css({top: $contentHeight/2, marginTop:-$dateHeight/2})
        }
        else {
          jQuery(this).find('.divienhancer_timeline_icon').css({ marginBottom: $iconHeight/2})
          
        }
        

      });

    }) // end of timeLine each

  }



  /*================================== MODAL POPUP ============================*/
  /*============================================================================*/
  function divienhancer_modal_popup(){

    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];
    var elements = jQuery('.divienhancer-modalpopup');



    var modalStyle = document.createElement("link");
    modalStyle.href = `${src}styles/nifty.css`;
    modalStyle.id = `divienhancer-nifty-css`;
    modalStyle.type = "text/css";
    modalStyle.rel = "stylesheet";
    modalStyle.media = "all";


    var modalScript = document.createElement("script");
    modalScript.src = `${src}scripts/nifty.js`;
    modalScript.id = `divienhancer-nifty-js`;
    modalScript.type = "text/javascript";
    modalScript.async = true;
    modalScript.defer = true;

    

    if(elements.length > 0) {
      documentHead.appendChild(modalStyle);
      documentHead.appendChild(modalScript);


      if(document.querySelector('#divienhancer-nifty-js')){

        document.querySelector('#divienhancer-nifty-js').addEventListener('load', function(){
          jQuery('.divienhancer-modalpopup').each(function(){
            var $this = jQuery(this);
            var $effect = jQuery(this).attr('data-effect');
            var $overlay = jQuery(this).attr('data-overlay');
            var $buttontext = jQuery(this).attr('data-button-text');
            var $image = jQuery(this).attr('data-image');
            var $imageAlignment = jQuery(this).attr('data-image-alignment');
            var $cssClass = jQuery(this).attr('data-css-class');
            var $buttonalignment = jQuery(this).attr('data-button-alignment');
            var $buttoncss = jQuery(this).attr('data-button-css');
            var $imagecss = jQuery(this).attr('data-image-css');
            var $trigger = jQuery(this).attr('data-trigger');
            var $autotime = jQuery(this).attr('data-autotime');
            var $css = jQuery(this).attr('data-css');
            
          
            jQuery(this).after('<span class="de-modal-marker"></span>');
            var $position = jQuery(this).next('.de-modal-marker').offset();
            var $positionTop = $position.top;
      
            jQuery(this).attr('data-pos', $positionTop);
      
      
            jQuery(this).css({display: 'block'});
            if($trigger == 'button'){
              jQuery(this).before('<button class="de-modal-launch de-modal-'+$buttonalignment+' '+$cssClass+'" data-overlay-color="'+$overlay+'">'+$buttontext+'</button>');
              jQuery(this).prev('.de-modal-launch').attr('style', $buttoncss);
            }
            if($trigger == 'image'){
              jQuery(this).before('<a style="text-align:'+$imageAlignment+'; " class="de-modal-img-launch '+$cssClass+'"><img src="'+$image+'"/ alt="popup-launcher"></a>');
              var imageStyle = jQuery(this).prev('.de-modal-img-launch').attr('style');
              jQuery(this).prev('.de-modal-img-launch').attr('style', imageStyle + $imagecss);
            }
      
            jQuery(this).after('<div class="md-overlay"><span style="font-family: ETmodules!important;" class="divienhancer-modal-close md-close">Q</span></div>');
            jQuery(this).wrap('<div style="'+$css+'" class="nifty-modal '+$effect+'"><div class="md-content"></div></div>');
      
      
            if($trigger == 'auto'){
              setTimeout(function(){
                $this.parents('.nifty-modal').nifty('show');
                jQuery('.md-overlay').css({backgroundColor: $overlay})
              }, parseInt($autotime));
      
            }
      
            if($trigger == 'position'){
      
              jQuery(window).scroll(function(){
                $scroll = jQuery(window).scrollTop();
      
                if($scroll + $windowheight > $positionTop){
                  if(!$this.hasClass('de-modal-launched')){
                    $this.addClass('de-modal-launched');
                    $this.parents('.nifty-modal').nifty('show');
                    jQuery('.md-overlay').css({backgroundColor: $overlay})
                  }
                }
      
              });
      
            }
      
            jQuery('.de-modal-launch, .de-modal-img-launch').on('click', function(){
      
              var $overlayback = jQuery(this).attr('data-overlay-color');
              jQuery(this).next('.nifty-modal').nifty('show');
              jQuery('.md-overlay').css({backgroundColor: $overlayback})
            })
      
      
      
            jQuery('.nifty-modal').on('show.nifty.modal', function(){
              jQuery('.et_pb_column').css({zIndex: -1});
              jQuery(this).parents('.et_pb_section').css({zIndex: 999999});
              jQuery(this).parents('.et_pb_column').css({zIndex: 9});
              jQuery(this).parents('.et_builder_inner_content').css({zIndex: 999999});

              var $windowheight = window.screen.availHeight;
              var $modalheight = jQuery(this).outerHeight();

      
              if($modalheight > ($windowheight * 0.8)){
                $this.css({maxHeight: ($windowheight * 0.8)+'px', overflowY: 'scroll'});
              }
      
            })
      
            jQuery('.nifty-modal').on('hide.nifty.modal', function(){
              jQuery('.et_pb_column').css({zIndex: 9});
              jQuery(this).parents('.et_pb_section').css('z-index', '');
              jQuery(this).parents('.et_builder_inner_content').css({zIndex: ''});
            })
      
          })
        });

      }

    }

    

  }



  /*== STICKY FUNCTION ==*/
  function free_divienhancer_sticky(){
    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];
    var stickyScript = document.createElement("script");
    var elements = jQuery('.divienhancer-sticky');

    stickyScript.src = `${src}scripts/jquery.sticky.js`;
    stickyScript.id = `divienhancer-sticky`;
    stickyScript.type = "text/javascript";
    stickyScript.async = true;
    stickyScript.defer = true;

    if(elements.length > 0) {
      documentHead.appendChild(stickyScript);
      if(document.querySelector('#divienhancer-sticky')){
        document.querySelector('#divienhancer-sticky').addEventListener('load', function(){


          var x = 0;
          jQuery('.divienhancer-sticky').each(function(){
            var $this = jQuery(this);
            var $headerheight = jQuery('#main-header').outerHeight();
            var $adminbarheight = jQuery('#wpadminbar').outerHeight();
            var $topdistance = jQuery(this).attr('data-destickytop');
            var $bottomdistance = jQuery(this).attr('data-destickybottom');
            var $zindex = jQuery(this).parents('.et_pb_section').css('z-index');
            if($zindex = 'auto') {
              $zindex = '';
            }
            x=x+1
    
            jQuery(this).parents('.et_pb_row').css({zIndex: 999-x});
            jQuery(this).parents('.et_pb_column').css({zIndex: 999-x});
    
            if(jQuery('body').hasClass('admin-bar')){
              $headerheight = $headerheight + $adminbarheight;
            }
    
            if (jQuery(window).width() <= 980 ) {
              $headerfinalheight = 0;
            }
            if(jQuery('body').hasClass('et_fixed_nav') && jQuery(window).width() > 980 ){
              $headerfinalheight = $headerheight;
            }
            else {
              $headerfinalheight = 0;
              if(jQuery('body').hasClass('admin-bar')){
                $headerfinalheight = $adminbarheight;
              }
            }
    
            jQuery(this).sticky({
              topSpacing:$headerfinalheight + parseInt($topdistance),
              bottomSpacing: parseInt($bottomdistance)
            });
    
            jQuery(window).scroll(function(){
              if(jQuery('.sticky-wrapper').hasClass('is-sticky')){
                $this.parents('.et_pb_section').css({zIndex: 9999})
              }
              else {
                $this.parents('.et_pb_section').css({zIndex: $zindex})
              }
            });
    
    
          })


        })
      }

     


    }


    

  }







  /*=========================== DIVIENHANCER TWENTYTWENTY IMAGE COMPARISON ===============================*/
  function divienhancer_image_comparison(source = 'front'){
    var elements = jQuery('.divienhancer_image_comparison_container');
    var src = parent.divienhancerData.url;
    var documentHead = document.getElementsByTagName("head")[0];


    var comparisonStyle = document.createElement("link");
    comparisonStyle.href = `${src}styles/twentytwenty.css`;
    comparisonStyle.id = "divienhancer-twenty"
    comparisonStyle.type = "text/css";
    comparisonStyle.rel = "stylesheet";
    comparisonStyle.media = "all";

    var comparisonScript = document.createElement("script");
    comparisonScript.src = `${src}scripts/jquery.twentytwenty.js`;
    comparisonScript.id = `divienhancer-twentytwenty`;
    comparisonScript.type = "text/javascript";
    comparisonScript.async = true;
    comparisonScript.defer = true;


    if(elements.length > 0 && !parent.divienhancerData.imageComparison){
        documentHead.appendChild(comparisonScript);
        documentHead.appendChild(comparisonStyle);

        if(document.querySelector('#divienhancer-twentytwenty')){
          document.querySelector('#divienhancer-twentytwenty').addEventListener('load', function(){
            parent.divienhancerData.imageComparison = 'loaded';
          })
        }
        
    }

    var eachImageComparison = function(){
      jQuery('.divienhancer_image_comparison_container').each(function(){
        var $visiblepercent = jQuery(this).attr('data-visible');
        var $beforelabel = jQuery(this).attr('data-before');
        var $afterlabel = jQuery(this).attr('data-after');
        var $orientation = jQuery(this).attr('data-orientation');
        var $overlay = jQuery(this).attr('data-overlay'); if($overlay == 'false'){$overlay = false;}else {$overlay = true;}
        var $slideronhover = jQuery(this).attr('data-slideronhover'); if($slideronhover == 'false'){$slideronhover = false;}else {$slideronhover = true;}
        var $withhandle = jQuery(this).attr('data-withhandle'); if($withhandle == 'false'){$withhandle = false;}else {$withhandle = true;}
        var $clicktomove = jQuery(this).attr('data-clicktomove'); if($clicktomove == 'false'){$clicktomove = false;}else {$clicktomove = true;}
  
        jQuery(this).twentytwenty({
          default_offset_pct: $visiblepercent,
          orientation: $orientation,
          before_label: $beforelabel,
          after_label: $afterlabel,
          no_overlay: $overlay,
          move_slider_on_hover: $slideronhover,
          move_with_handle_only: $withhandle,
          click_to_move: $clicktomove
        });
      })
    }

    if(source == 'front'){

      if(elements.length > 0){
        if(document.querySelector('#divienhancer-twentytwenty')){
          document.querySelector('#divienhancer-twentytwenty').addEventListener('load', function(){
            eachImageComparison();
          })
        }
        
      }

    }
    else {
      
      if(elements.length > 0){

        if(!parent.divienhancerData.imageComparison){
          if(document.querySelector('#divienhancer-twentytwenty')){
            document.querySelector('#divienhancer-twentytwenty').addEventListener('load', function(){

              eachImageComparison();
            })
          }
        }     
        else {

          eachImageComparison();
        }  

      }

    }
  
  }




  function divienhancer_ihover_function(){

    jQuery(function($){

      $('.et_pb_module.divienhancer_ihover').each(function(){

        var _this = $(this);
        var thisWidth = _this.outerWidth();
        var firstLink = _this.find('.ih-item.divienhancer_ihover').find('a').first();

        _this.find('.ih-item.divienhancer_ihover').css({width: thisWidth+'px', height: thisWidth+'px'})
        _this.find('.ih-item.divienhancer_ihover').find('.img').css({width: thisWidth+'px', height: thisWidth+'px'})

        if(!firstLink.hasClass('ihover-builder')){
          if(firstLink.attr('href')){
            firstLink.addClass('divienhancer_ihover_trigger');
          }
          else {
            firstLink.wrapInner('<div class="divienhancer_ihover_trigger"></div>');
            firstLink.replaceWith(firstLink.contents());
          }
          
        }
        _this.css({opacity: '1'});

      });

    });

  }


  /*=================== DIVIENHANCER INTERACTIVE BACKGROUND IMAGE =============*/
  function divienhancer_interactive_background(){
    jQuery(function($){
      var src = parent.divienhancerData.url;
      var documentHead = document.getElementsByTagName("head")[0];
      var elements = jQuery('.divienhancer-interactive_bg');

      var interactiveScript = document.createElement("script");
      interactiveScript.src = `${src}scripts/jquery.interactive_bg.min.js`;
      interactiveScript.id = `divienhancer-interactive-bg`;
      interactiveScript.type = "text/javascript";
      interactiveScript.async = true;
      interactiveScript.defer = true;

      

      if(elements.length > 0) {
        documentHead.appendChild(interactiveScript);


        if(document.querySelector('#divienhancer-interactive-bg')){

          document.querySelector('#divienhancer-interactive-bg').addEventListener('load', function(){

            $('.divienhancer-interactive_bg').each(function(){
              var $background = $(this).css('background-image')
              var $interactivebgstrength = $(this).attr('data-interactivebgstrength');
              $interactivebgstrength = $interactivebgstrength.replace('px', ' ');

              var $interactivebgscale = $(this).attr('data-interactivebgscale');
              $interactivebgscale = $interactivebgscale.replace('px', ' ');
              $interactivebgscale = '1.'+$interactivebgscale;

              var $interactivebganimationspeed = $(this).attr('data-interactivebganimationspeed');
              $interactivebganimationspeed = $interactivebganimationspeed.replace('px', ' ');
              $interactivebganimationspeed = $interactivebganimationspeed+'ms';

              $background = $background.replace('url(','').replace(')','').replace(/\"/gi, "");
              $(this).attr('data-ibg-bg', $background);
              $(this).css('background-image', 'none');

              $(this).interactive_bg({
              strength: parseInt($interactivebgstrength),              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
              scale: parseInt($interactivebgscale),               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
              animationSpeed: $interactivebganimationspeed,   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
              contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
              wrapContent: false         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
            });

            });
          });
        }
      }

    })
  }






  /**
  ** Change Divienhancer Option Name*
  */
  function set_divienhancer_option_name(){
    if(jQuery('.et-fb-tabs__panel--DE').hasClass('divienhancer_name_setted')){

    }
    else {

    jQuery('.et-fb-tabs__panel--DE').find('.et-fb-form__toggle-title').find('h3').text('Divi Enhancer Options');
    jQuery('.et-fb-tabs__panel--DE').addClass('divienhancer_name_setted');
    }
  }




  return {
    divienhancer_hover_effects_script: divienhancer_hover_effects_script,
    divienhancer_modernizr_script: divienhancer_modernizr_script,
    divienhancer_image_comparison: divienhancer_image_comparison,
    divienhancer_modal_popup: divienhancer_modal_popup,
    free_divienhancer_sticky: free_divienhancer_sticky,
    divienhancer_timeline: divienhancer_timeline,
    divienhancer_flipbox: divienhancer_flipbox,
    divienhancer_ihover_function: divienhancer_ihover_function,
    divienhancer_interactive_background: divienhancer_interactive_background,
    set_divienhancer_option_name: set_divienhancer_option_name,
  }


} // eND OF DIVIENHANCER_SCRIPTS FUNCTION







function divienhancer_additional_scripts() {

  /*================= GENERAL VARIABLES ================*/



  /*================================== BREADCRUMB ============================*/
  /*============================================================================*/
  function de_breadcrumb() {
    jQuery(function ($) {

      $('.de-breadcrumb').each(function () {

        var $this = $(this);
        var $parentHeight = $this.parents('.et_pb_module_inner').outerHeight();
        var $parentWidth = $this.parents('.et_pb_module_inner').outerWidth();
        var $item = $this.find('.de-crumb-item');
        var $itemnumber = $this.find('.de-crumb-item').length;
        var $maxWidthItem = $parentWidth / $itemnumber;
        var $delimiter = $this.find('.divienhancer-crumb-delimiter');
        var $styles = '';
        var $itembackground = $this.attr('data-background');
        var $itembackgroundhover = $this.attr('data-backgroundhover');
        var $id = $this.attr('id');
        if ($id == '' || typeof $id == 'undefined') {
          $this.attr('id', 'de-breadcrumb' + Math.floor((Math.random() * 1000) + 1) + Math.random().toString(36).substring(2, 15));
          $id = $this.attr('id');
        }

        if ($this.hasClass('de-crumb-basic')) {
          $item.css({ maxWidth: $maxWidthItem });
          $styles += '<style class="de-breadcrumb-styles" type="text/css">';
          $styles += '#' + $id + '.de-crumb-basic span.divienhancer-crumb-delimiter.et-pb-icon {font-size: inherit;} ';
          $styles += '#' + $id + '.de-crumb-basic span.divienhancer-crumb-delimiter.et-pb-icon {position: relative;} ';
          $styles += '#' + $id + '.de-crumb-basic span.divienhancer-crumb-delimiter.et-pb-icon {top: 0.15em;} ';
          $styles += '#' + $id + '.de-crumb-basic span.divienhancer-crumb-delimiter.et-pb-icon {padding: 0 0.5em;} ';
          $styles += '</style>';




        }
        else {
          $item.css({ maxWidth: '' });
        }

        if ($this.hasClass('de-crumb-styleone')) {
          $styles += '<style class="de-breadcrumb-styles" type="text/css">';
          $styles += '#' + $id + '.de-crumb-styleone .de-crumb-item:after {background-color:' + $itembackground + ';} ';
          $styles += '#' + $id + '.de-crumb-styleone .de-crumb-item {background-color:' + $itembackground + ';} ';
          $styles += '#' + $id + '.de-crumb-styleone .de-crumb-item:hover {background-color:' + $itembackgroundhover + ';} ';
          $styles += '#' + $id + '.de-crumb-styleone span.de-crumb-item {background-color:' + $itembackgroundhover + ';} ';
          $styles += '#' + $id + '.de-crumb-styleone span.de-crumb-item:after {background-color:' + $itembackgroundhover + ';} ';
          $styles += '#' + $id + '.de-crumb-styleone .de-crumb-item:hover:after {background-color:' + $itembackgroundhover + ';} ';
          $styles += '</style>';
        }

        $this.find('.de-breadcrumb-styles').remove();
        $this.append($styles);


      })



    })
  }


  /*================================= DIVIENHANCER BING MAP =====================================*/



  function divienhancer_bing_map_script(origin) {
    if(jQuery('.divienhancer_bing_map').length > 0){


      let deBingKey = divienhancerData.bingKey;
      
      window.deBingMaps = [];
    
      let bingMap = document.createElement("script");
      let documentHead = document.getElementsByTagName("head")[0];
    
      bingMap.src = `https://www.bing.com/api/maps/mapcontrol?key=${deBingKey}`;
      bingMap.type = "text/javascript";
      bingMap.async = true;
      bingMap.defer = true;
      documentHead.appendChild(bingMap);
    
    
      let bingMapLoader = () => {
    
    
        jQuery('.divienhancer_bing_map').each(function () {
          var self = jQuery(this);
          self.attr('data-id', `de-bing-map-${Math.floor((Math.random() * 1000) + 1) + Math.random().toString(36).substring(2, 15)}`);
          var dataId = self.attr("data-id");
          self.find('.divienhancer_bing_map_load').attr('id', dataId)
          var mapid = jQuery(this).find('.divienhancer_bing_map_load').attr('id');
          var zoom = jQuery(this).attr('data-zoom');
          var maptypedata = jQuery(this).attr('data-type');
          var maptype = 'Microsoft.Maps.MapTypeId.' + maptypedata;
          var mapcenter = jQuery(this).attr("data-address")

    
    
    
          if (Microsoft) {
            window.deBingMaps[mapid] = new Microsoft.Maps.Map(document.getElementById(mapid), {
            });
            window.deBingMaps[mapid].setView({
              zoom: parseInt(zoom),
              mapTypeId: eval(maptype)
            });
    
    
            if(window.deBingMaps[mapid]){
              
    
              Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
    
                self.attr("data-valid", "Invalid Address");
        
                var searchManager = new Microsoft.Maps.Search.SearchManager(window.deBingMaps[mapid]);
                var requestOptions = {
                  bounds: window.deBingMaps[mapid].getBounds(),
                  where: mapcenter,
                  callback: function (answer, userData) {
                    self.attr("data-valid", "Valid Address")
                    jQuery(".divienhancer_bing_map_loading").css({display: "none"});
                    window.deBingMaps[mapid].setView({ 
                      center: answer.results[0].location,
                      mapTypeId: eval(maptype)
                    });
                    
                  }
                };
                searchManager.geocode(requestOptions);
              });
    
    
            }
            
            
            
          }
    
    
        });
    
    
    
        jQuery('.divienhancer_bing_map_pin').each(function () {
          let self = jQuery(this);
          let parentid = jQuery(this).parents('.divienhancer_bing_map').attr('data-id');
          let mapType = jQuery(this).parents('.divienhancer_bing_map').attr('data-type');
          let map = window.deBingMaps[parentid];
          let address = jQuery(this).attr("data-address");
          let title = jQuery(this).attr("data-title");
    
          
          Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        
    
            var searchManager = new Microsoft.Maps.Search.SearchManager(map);
            var requestOptions = {
              bounds: map.getBounds(),
              where: address,
              callback: function (answer, userData) {
        
                let pinAddress = answer.results[0].location;
              
                let pin = new Microsoft.Maps.Pushpin(pinAddress, {
                  title: title,
                });
                map.entities.push(pin);

                // function to display pin content on click
                Microsoft.Maps.Events.addHandler(pin, 'click', function (e) { 
                  let pinLeft = e.point.x;
                  let pinTop = e.point.y;
                  let pinWrapper = self.parents('.divienhancer_bingMapChild');
                  
                  //hide all pins before display the clicked one
                  jQuery('.divienhancer_bingMapChild').css({display: "none"});

                  // display pin before get height, then get height to adjust position
                  pinWrapper.css({display: "block"});
                  self.parents('.divienhancer_bingMapChild').find('.divienhancer_bing_map_pin_content').css({display: "block"});
                  let contentHeight = pinWrapper.outerHeight();
                  pinWrapper.css({left: (pinLeft - 40), top: (pinTop - contentHeight - 30)});
                });


                //function to hide pin content when users moves the map
                Microsoft.Maps.Events.addHandler(map, 'viewchange', function () { 
                  self.parents('.divienhancer_bingMapChild').css({display: "none"});
                });

                jQuery('.divienhancer_bing_map_pin_close').on("click", function(){
                  self.parents('.divienhancer_bingMapChild').css({display: "none"});
                })


              }
            };
            searchManager.geocode(requestOptions);
          });
    
    
        });
    

      }
    
    
      if (origin == "front") {
        window.addEventListener("load", function () {
          bingMapLoader();
        });
      }
      else if (origin == "back") {
        setTimeout(function () {
          bingMapLoader();
        }, 2000);
      }
    }
  } // end of divienhancer_bing_map_script



  return {
    de_breadcrumb: de_breadcrumb,
    divienhancer_bing_map_script: divienhancer_bing_map_script,
  }
} 






jQuery(document).ready(function () {
  
  divienhancer_additional_scripts().de_breadcrumb();
  divienhancer_additional_scripts().divienhancer_bing_map_script("front");

  divienhancer_scripts().divienhancer_modernizr_script();
  divienhancer_scripts().divienhancer_hover_effects_script();
  divienhancer_scripts().divienhancer_image_comparison();
  divienhancer_scripts().divienhancer_modal_popup();
  divienhancer_scripts().free_divienhancer_sticky();
  divienhancer_scripts().divienhancer_timeline();
  divienhancer_scripts().divienhancer_flipbox();
  divienhancer_scripts().divienhancer_ihover_function();
  divienhancer_scripts().divienhancer_interactive_background();

});


