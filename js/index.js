$(function(){
   $("#header ul li a").mouseenter(function(){
       $(this).css({'transform':'translate(5px,0)', 'transition':'all 0.5s'});
   }).mouseleave(function(){
       $(this).css({'transform':'translate(0,0)', 'transition':'all 0.5s'});
   });
});