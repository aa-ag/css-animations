$(document).ready(function(){
  
    let $randnum = $('.num');
    let $timer= 25;
    let $it;
    let $data = 0;
    let index;
    let change;
    let letters = ["A", "a", "r", "o", "n"];
    
    $randnum.each(function(){
        
      change = Math.round(Math.random()*100);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randnum.length+1);
    };
    
    function value(){
      $('.num:nth-child('+select()+')').html(''+random()+'');
      $('.num:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randnum.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('num');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });