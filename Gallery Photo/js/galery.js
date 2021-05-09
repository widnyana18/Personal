$(() => {    
        const bg = $(".head"), icon = $('.acount .box'), txt = $('main'), search = $('.search');        
        const br = $(".small-box"),  arrow1 = $(".line1"), arrow2 = $(".line2"), triagle = $('.triagle'), img = $('.triagle img');
        
        function whitePage(){
            bg.fadeIn(2000);
            bg.css({background: '#E0E1E3', mixBlendMode: 'screen'});                                                                                           
            icon.css({background: 'linear-gradient(to bottom, #633FB9, #E0E1E3 90%)', color: '#633FB9'});
            triagle.css('background', 'linear-gradient( 60deg, #633FB9 -200%, #0D043B 80%, #36447F 180%)');
            img.css('opacity', '0');
            txt.css('color', '#633FB9');
            search.css('color', '#633FB9');                                
            br.css('border-color', '#633FB9');  
            arrow1.css('border-color', '#633FB9');                
            arrow2.css({'border-right-color': '#633FB9', 'border-bottom-color': '#633FB9'});            
        }

        function purplePage(){
            bg.fadeIn(2000);                
            bg.css({background: 'linear-gradient( 60deg, #633FB9 -200%, #0D043B 80%, #36447F 180%)', mixBlendMode: 'unset'});                 
            icon.css('background', 'linear-gradient(to bottom, #E0E1E3, #0D043B 90%)');                                                                           
            txt.css('color', '#E0E1E3');                                                                                                                                                                                                                         
            search.css('color', '#E0E1E3');    
            triagle.css('background', '#E0E1E3');
            img.css('opacity', '0');
            br.css('border-color', '#E0E1E3');      
            arrow1.css('border-color', '#E0E1E3');                                                                                                                                                                                                                 
            arrow2.css({'border-right-color': '#E0E1E3', 'border-bottom-color': '#E0E1E3'});                 
        }

        function blackPage(){
            purplePage();
            bg.css({background: 'black',  mixBlendMode: 'unset'});
            triagle.css('backgroundColor', 'none'); 
            icon.css('background', 'linear-gradient(to bottom, #E0E1E3, black 90%)');
            img.css('opacity', '1');            
    }
        
    $(document).on("mousemove", function(e){                                                                                                              
        if(window.pageYOffset <= 350){
                if(e.clientX < window.innerWidth*0.4){                                                                                                                                                                                                                          
                    purplePage();
                } 
                
                else if(e.clientX > window.innerWidth*0.61){                                                                                                                                             
                    whitePage();    
                }

                else if(e.clientX > window.innerWidth*0.41 || e.clientX < window.innerWidth*0.6){
                    blackPage();
                }
                
                else if(e.clientX > window.innerWidth*0.4){
                    bg.fadeOut();                                                                
                }
                
                else if(e.clientX > window.innerWidth*0.6){                                
                    e.clientX() = bg.fadeOut();                                                                
                }
            }
                
            else{
                whitePage();                
            }
        });            
        

        console.log(document.documentElement.scrollTop);

        var btn = $('.box'), obj = $('.acount i');
        obj.css('display','none');
        btn.click(function(){             
            btn.toggleClass('mix');
                          
            obj.toggle(500, function(display){                
                if(display === true){
                    obj.fadeIn();                                        
                }
                else if(display === false){
                    obj.fadeOut();                                        
                }                                                        
            });
        });        
});

