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
 
    

    var sumTotal = 0;
    var toppingsArray= [];
    var toppingsList;
    var toppingsNumber;
    var pizzaSize;
    var pizzaCrust;
    var pizzaNumber;
    function Order(number,size,crust,toppings,price){
      this.number = number;
      this.size=size;
      this.crust=crust;
      this.toppings=toppings;
      this.price=price;
    }
    $(document).ready(function(){
      $("#deliver-check").click(function () {
        if ($(this).is(":checked")) {
            $("#delivery").show();
            sumTotal= sumTotal+150;
        } else {
            $("#delivery").hide();
            sumTotal=sumTotal-150;
        }
    });
      $('#orderForm').submit(function(event){
        event.preventDefault();
        pizzaSize= $('#Size').val();
        pizzaNumber= $("#number").val();
        pizzaCrust= $("#crust").val();
        toppingsList=$("#topping")
        var address= $('#street').val();
        var name=$("name").val();
        var phone=$("phone").val();
        var pizzaToppings= [];
        var toppingsList;
        $('div#toppings:checkbox:checked').each(function(i){
          pizzaToppings[i] = $(this).val();
          toppingsArray[i] = $(this).attr('name')
        });
        toppingsList = toppingsArray.join(',');
        toppingsNumber= toppingsArray.length;
        var orderPrice= priceCalc();
        sumTotal = sumTotal + orderPrice;
        if($('#deliver-check').is(":checked")){
          alert("order will be delivered to " + name +"at" +address +".We will contact you through" +phone);
        }
        var newOrder= new Order(pizzaNumber,pizzaSize,pizzaCrust,toppingsList,orderPrice)
        $("ul#orders").append('<li><span>'+ newOrder.theOrder() +'</span></li>');
        $("#total").text("total:" + sumTotal)
        $("#delivery").hide();
      });
      $('textarea#message').keypress(function (e) {
        if (e.which == 13) {
          $('form#feedback').submit();
          var feedname= $('#name').val();
          alert(feedname + ". Thanks for your feedback. It's highly appreciated.");
          return false;    
        }
      });
    });
    function priceCalc(){
      var crustPrice,toppingsPrice;
      var sizeChange;
      var totalPrice;
      if(pizzaSize=='Small'){
        sizeChange=1;
      }else if(pizzaSize=='Medium'){
        sizeChange=1.5;
      }else if(pizzaSize=='Large'){
        sizeChange=2;
      }
      if (pizzaCrust=='Thick Crust'){
        crustPrice=sizeChange*2.5;
      }else if(pizzaCrust=='Thin Crust'){
        crustPrice=sizeChange * 3;
      }else if(pizzaCrust=='Crispy Crust'){
        crustPrice=sizeChange*2.5;
      }else if(pizzaCrust=='Stuffed Crust'){
        crustPrice=sizeChange*2.5;
      }else if(pizzaCrust=='Stuffed Crust'){
      crustPrice=sizeChange*2.5;
      }
      toppingsPrice= toppingsNumber * sizeChange;
      totalPrice= (crustPrice+toppingsPrice)*pizzaNumber;
      return totalPrice;
    }
    Order.prototype.theOrder = function (){
      return this.number + " " + this.size + "pizzas, " +  this.crust + ",with " + this.toppings + " toppings.<br> Cost:"+this.price+"Ksh";
    }
    function reload(){
      location.reload();}
    
