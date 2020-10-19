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
    setInterval( "slideSwitch()", 4000 );}
  );

  
var totalCost = 0;
var toppingsArray= [];
var toppingsList;
var toppingsNumber;
var pizzaSize;
var pizzaCrust;
var pizzaNumber;
function order(number,size,crust,toppings,price){
this.number = number;
this.size=size;
this.crust=crust;
this.toppings=toppings;
this.price=price;
}
$(document).ready(function(){
$("#delivery-check").click(function () {
  if ($(this).is(":checked")) {
      $("#delivery").show();
      totalCost= totalCost+150;
  } else {
      $("#delivery").hide();
      totalCost=totalCost-150;
  }
});
$('#order-form').submit(function(event){
  event.preventDefault();
  pizzaSize= $('#pizzaSize').val();
  pizzaNumber= $("#pizzaNumber").val();
  pizzaCrust= $("#pizzaCrust").val();
  var address= $('#street').val();
  var phone= $('#phone').val();
  var pizzaToppings= [];
  var toppingsList;
  $('div#toppings:checkbox:checked').each(function(i){
    pizzaToppings[i] = $(this).val();
    toppingsArray[i] = $(this).attr('name')
  });
  toppingsList = toppingsArray.join(',');
  toppingsNumber= toppingsArray.length;
  var orderPrice= calculation();
  totalCost = totalCost + orderPrice;
  if($('#delivery-check').is(":checked")){
    alert("order will be delivered at " + address+ ".We will contact you through" + phone);
  }
  var newOrder= new order(pizzaNumber,pizzaSize,pizzaCrust,toppingsList,orderPrice)
  $("ul#orders").append('<li><span>'+ newOrder.theOrder() +'</span></li>');
  $("#total").text("total:" + totalCost)
  $("#delivery").hide();
});

});
function calculation(){
var crustPrice,toppingsPrice;
var newPrice;
var totalPrice;
if(pizzaSize=='Small'){
  newPrice=500;
}else if(pizzaSize=='Medium'){
  newPrice=800;
}else if(pizzaSize=='Large'){
  newPrice=1000;
}
if (pizzaCrust=='Thick Crust'){
  crustPrice=newPrice+150;
}else if(pizzaCrust=='Thin Crust'){
  crustPrice=newPrice +50;
}else if(pizzaCrust=='Crispy Crust'){
  crustPrice=newPrice+150;
}else if(pizzaCrust=='Stuffed Crust'){
  crustPrice=newPrice+150;
}else if(pizzaCrust=='Gluten-Free'){
crustPrice=newPrice+50;
}
if(pizzaToppings="Pepperoni"){
  toppingsPrice=newPrice+100;
}else if(pizzaToppings="Veggie"){
  toppingsPrice=newPrice+50;
}else if(pizzaToppings="Beef"){
toppingsPrice=newPrice+100;
}else if(pizzaToppings="SeaFood"){
  toppingsPrice=newPrice+200;
}else if(pizzaToppings="BarbecueChicken"){
  toppingsPrice=newPrice+100;
}else if(pizzaToppings="ExtraCheese"){
  toppingsPrice=newPrice+50;
}

totalPrice= (crustPrice+toppingsPrice)*pizzaNumber;
return totalPrice;
}
order.prototype.theOrder = function (){
return this.number + " " + this.size + "pizzas, " +  this.crust + ",with " + this.toppings + " toppings.<br> Cost:"+this.price+"Ksh";
}
