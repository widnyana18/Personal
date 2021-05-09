
TweenMax.from('.head-carousel', 1, {
    width: '0%',
    delay:0,
    ease: Expo.easeInOut   
})

TweenMax.from('.quote', 1, {
    width: '0px',
    delay: 0.4,
    ease: Expo.easeInOut   
})

TweenMax.to('.carousel-inner', 1, {
    width: '100%',
    delay: 0.8,
    ease: Expo.easeInOut   
})

TweenMax.from('.next-bg', 1, {
    height: '0px',
    delay: 1.2,
    ease: Expo.easeInOut   
})

TweenMax.from('.step-bg', 1, {
    height: '0px',
    delay: 1.6,
    ease: Expo.easeInOut   
})

TweenMax.from('.bg', 1, {
    height: '0px',
    delay: 1.8,
    ease: Expo.easeInOut   
})

TweenMax.from('.txt-top', 1, {
    x: -100,
    opacity:0,    
    delay: 1.2,
    ease: Expo.easeInOut   
})

TweenMax.from('.txt-bottom', 1, {
    x: 100,
    opacity:0,    
    delay: 1.4,
    ease: Expo.easeInOut   
})

TweenMax.from('.title-color p', 1, {
    y: -20,
    opacity: 0,    
    delay: 1.6,
    ease: Expo.easeInOut   
})


TweenMax.from('.quote li', 1, {
    y: -25,
    opacity: 0,    
    delay: 1.1,
    ease: Expo.easeInOut   
})

TweenMax.from('.zero, .no-carousel', 1, {
    x: -20,
    opacity: 0,    
    delay: 1.5,
    ease: Expo.easeInOut   
})

TweenMax.from('.carousel-caption h2', 1, {
    y: 50,
    opacity: 0,    
    delay: 1.6,
    ease: Expo.easeInOut   
})

TweenMax.from('.carousel-control-prev, .carousel-control-next', 1, {
    y: 50,
    opacity: 0,    
    delay: 1.8,
    ease: Expo.easeInOut   
})

TweenMax.from('.step-bg ol', 1, {
    y: -50,
    opacity: 0,    
    delay: 2,
    ease: Expo.easeInOut   
})

TweenMax.from('.bg .carousel-inner', 1, {
    y: 50,        
    opacity: 0,    
    delay: 2.4,
    ease: Expo.easeInOut   
})


$(function() {
    var showcase = $("#showcase")

    showcase.Cloud9Carousel( {          
          yPos: 100,
          xPos: 550,
          yRadius: 50,          
          xRadius: 300, 
          mirrorOptions: {
                gap: 12,
                height: 0.2                 
          },
          buttonLeft: $(".nav > .left"),
          buttonRight: $(".nav > .right"),                    
          onRendered: showcaseUpdated,
          onLoaded: function() {
                showcase.css( 'visibility', 'visible'   )
                showcase.css( 'display', 'none')
                showcase.fadeIn( 1500 )
          }
    })

    var code = $('.no');          
    console.log(code.offset().left);

    function showcaseUpdated( showcase ) {
         var idx = $(showcase.nearestItem()).attr( 'alt' );              
          var title = $("#item-title").html(idx);

          var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
          title.css('opacity', 0.5 + (0.5 * c))          
                
        // if(code.offset().left <= 105){
        //     code.css('left','-=3px')                
        // }
        // if(code.offset().left <= -537){
        //     code.css('left','190px')        
        // }            
        img.css('opacity', '0.2');               
        img.eq(pos).css('opacity', '1');                       
    }     

    var idx = 0,
    pos = 0,
    card = $('.body-card'),     
    pict = $('.print-obj img'),
    img = $('#showcase > img');          
    
    card.css('display', 'none');        
    card.eq(idx).fadeIn(1000);                      

    $('.nav > .left').click( function() {                    
        code.css('left','+=160px')                                                    
        if(code.offset().left >= 95){
            code.css('left','-605px');        
        }
        
        idx--;
        pos++;
        card.eq(idx).fadeIn(1000);   
        img.eq(pos).css('opacity', '1');               

        var lastIdx = idx+1;
        var lastPos = pos-1;
        card.eq(lastIdx).css('display', 'none');    
        pict.eq(lastIdx).css('left', '+=210px');
        img.eq(lastPos).css('opacity', '0.2');               

        if(idx < 0){
            idx=4;
            card.eq(idx).fadeIn(1000);  
                        
            for(var i =1; i<= 4; i++){
                pict.eq(i).css('left', '-=205px');                
                pict.eq(lastIdx).css('left', '-25px')
            }            
        }

        if(pos>4){
            pos=0;
            img.eq(pos).css('opacity', '1');               
        }
  } )

    $('.nav > .right').click( function() {                    
        code.css('left','-=160px')                      
        if(code.offset().left <= -500){
            code.css('left','42px')                    
        }                                    

        idx++;
        pos--;
        card.eq(idx).fadeIn(1000);   
        pict.eq(idx).css('left', '-=205px');        
        img.eq(pos).css('opacity', '1');

        var lastIdx = idx-1;
        var lastPos = pos + 1;        
        card.eq(lastIdx).css('display', 'none');                    
        img.eq(lastPos).css('opacity', '0.2');

        if(idx > 4){
            idx=0;
            card.eq(idx).fadeIn(1000);

            for(var i =1; i<= 4; i++){
                pict.eq(i).css('left', '+=210px');
            }                        
        }        

        if(pos < 0){
            pos = 4;
            img.eq(pos).css('opacity', '1');                                                      
        }
    })                             

    $(document).keydown( function( e ) {                
        switch( e.keyCode ) {         
            case 37:
                $('.nav > .left').click()                               
                break

            case 39:
                $('.nav > .right').click()                          
          }
    })                

    var spell = $('.spell'),        
        n=0;

        spell.css('display','none');
        spell.eq(n).fadeIn(1000);
        spell.eq(3).fadeIn(1000);
        spell.eq(5).fadeIn(1000);
        spell.eq(7).fadeIn(1000);
        spell.eq(9).fadeIn(1000);

        $('#plus').click(function(){                                                            
            spell.eq(n).fadeIn(1000);
            if(idx == 0){
                n=1;                                
                spell.eq(n).fadeIn(1000);                                                                                     
                n++;

                if(n>2){
                    n=2;                    
                }                
            }
            
            else if(idx == 1){                
                n=4;
                spell.eq(n).fadeIn(1000);                                                                      
            }
            else if(idx == 2){
                n=6;
                spell.eq(n).fadeIn(1000);                                                     
            }
            else if(idx == 3){
                n=8;
                spell.eq(n).fadeIn(1000);                                                     
            }
            else if(idx == 4){
                n=10;
                spell.eq(n).fadeIn(1000);                                                     
            }                       
        });    

        $('#minus').click(function(){                                                 
            spell.eq(n).fadeOut(1000);                                                           
            
            if(idx==0){                
                n=2;
                spell.eq(n).fadeOut(1000);                                                                                                     
                n--;                                
            }

            else if(idx == 1){
                n=4;
                spell.eq(n).fadeOut(1000);                                                                                     
            }
            else if(idx == 2){
                n=6;
                spell.eq(n).fadeOut(1000);                                                                     
            }
            else if(idx == 3){
                n=8;
                spell.eq(n).fadeOut(1000);                                                                     
            }
            else if(idx == 4){
                n=10;
                spell.eq(n).fadeOut(1000);                                                                     
            }    
        });
    
    $(window).on('mousemove', function(e){        
        var x = (window.innerWidth / 3) - e.clientX;
        $('.quote').css('top', x + 'px');
    });
})