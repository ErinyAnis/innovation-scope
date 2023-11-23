$(function(){

  let i=0;
  function change(){  
      ++i;
      $($("main .image")[i-1]).animate({width:"10%"},0.01).removeClass("a");
      if(i==7){
          i=0;
      }
      $($("main .image")[i]).animate({width:"30%"}).addClass("a");
  }
  var a=setInterval(change,2000);
  
  let j=0;    
  $('main .image').click(function(){
      clearInterval(a);
      j=$(this).index();
      if(j!=0 || j!=7){
          $('span').removeClass('c');
      }
      if($(this).hasClass("a")){}
      else{
          $('main .image').animate({width:"10%"},0.5).removeClass('a');
          $(this).animate({width:"30%"},200).addClass('a');
      }
  });
  
  $('span').click(function(){
      clearInterval(a);
      j=$('.a').index();
      if(j==0 && $(this).hasClass('prev')){
          $($('main .image')[0]).animate({width:"10%"},0.01).removeClass("a")
          $($('main .image')[6]).animate({width:"30%"},200).addClass("a")
      }
      else if(j==6 && $(this).hasClass('next')){
          $($('main .image')[6]).animate({width:"10%"},0.01).removeClass("a")
          $($('main .image')[0]).animate({width:"30%"},200).addClass("a")
      }
      else{
          if($(this).hasClass("prev")){
              $($('main .image')[j]).animate({width:"10%"},0.01).removeClass("a")
              $($('main .image')[j-1]).animate({width:"30%"},200).addClass("a")
          }
          else{
              $($('main .image')[j]).animate({width:"10%"},0.01).removeClass("a")
              $($('main .image')[j+1]).animate({width:"30%"},200).addClass("a")
          }
      }
          
  });

});