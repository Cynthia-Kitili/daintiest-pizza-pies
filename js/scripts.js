$(document).ready(function(){
    $("#about-image").click(function(){
      $("#about-image").slideDown('').hide('');
     $("#about").show('');
    });
    $("#about").click(function(){
      $("#about").slideUp('');
      $("#about-image").slideDown('');
    });
    
  });
  
  $(document).ready(function(){
    $("#offer-image").click(function(){
      $("#offer-image").slideDown('').hide('');
      $("#offer").show('');
    });
    $("#offer").click(function(){
      $("#offer").slideUp('');
      $("#offer-image").slideDown('');
    });
  });
  
  $(document).ready(function(){
    $("#contact-image").click(function(){
      $("#contact-image").slideDown('').hide('');
      $("#contact").show('');
    });
    $("#contact").click(function(){
      $("#contact").slideUp('');
      $("#contact-image").slideDown('');
    });
  });

function slideSwitch() {

    $('imgcontainer').css('display','none');
    var $active = $('#slideshow1 IMG.active');
    
    if ( $active.length == 0 ){ 
        $active = $('#slideshow1 IMG:last');
    }
    
    var $next;
    if ($active.next().length){
        $next = $active.next();
    }else{
        $next = $('#slideshow1 IMG:first');
    }
    
    $active.addClass('last-active');
    
    $next.css({opacity: 0.0})
        .addClass('active')
        .css('display','block')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
    }
    
    $(function() {
      setInterval( "slideSwitch()", 5000 );
    });
 
    
/*var myName=name;
var orderSize=size;
var orderCrust=crust;
var orderToppings=toppings;
var toppingsArray=[];
var toppingsNumber=toppingsNo;
var pizzaNumber=number;
var total=0;

function order(name,size,crust,toppings,number,price){
  this.name=name;
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.number = number;
  this.price=price ;}

  $('#orderForm').submit(function(event){
    event.preventDefault();  
    orderSize= $('#size').val();
    orderCrust= $("#crust").val();
    pizzaNumber= $("#number").val();
    var address=$("#street").val();
    $('div#toppings:radio:selected').each(function(i){
      orderToppings[i] = $(this).val();
      toppingsArray[i] = $(this).attr('name')}*/

function order(toppings, size,crust){
  this.toppings = toppings,
  this.size = size,
  this.crust=crust,
}

order.prototype.toppingsAmount= function(){
  if(this.toppings.length != 0){
    var toppingPrice = this.toppings.length *3;
    return toppingPrice;
  }else {
    alert("please choose your Toppings !!")
  }
}
order.prototype.sizeAmount = function(){
  if (this.size === "Small"){
    return 4;
  } else if(this.size === "Medium"){
    return 5;
  } else if(this.size === "Large"){
    return 6;
  } else {
    alert ("Please select a size that you would prefer");
  }
}
order.prototype.crustAmount= function(){
  if(this.crust.length != 0){
    var crustPrice = this.crust.length *3;
    return crustPrice;
  }else {
    alert("please choose your crust !!")
  }
}
order.prototype.totalCost = function(toppingAmount, sizeAmount, crustAmount){
  var totalCost =toppingAmount +sizeAmount+crustAmount;
  $("#output")
}




