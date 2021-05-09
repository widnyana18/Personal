
$(function(){
   var logo = $('.opening'), nav = $('.nav-wrap');

   logo.click(function(e){            
        nav.toggleClass('open');            
        console.log('sucsess');    
   });   
           

// btn.click(function(){                
//         $('li .nav-btn[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current');  
// });

});

// function setCurrent(e){
//         var btn = document.getElementsByTagName('a');   
//         for(var i=0; i<btn.length; i++){
//                 btn[i].className() = btn[i].className('current','');                               
//         }
//         btn.
//    }