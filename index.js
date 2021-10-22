$('#clickme').bind("click", function(){
   $( "<div>This is a click Event</div>").appendTo( "body" );
});

$('#clickme').bind("dblclick", function(){
   $( "<div>This is a double-click Event</div>"  ).appendTo( "body" );
});

$(document).bind("contextmenu",function(e){
   return false;
 });

 $('#box').click(function() {
	if ($('#submit').is(':disabled')) {
    	$('#submit').removeAttr('disabled');
   } else {
   	$('#submit').attr('disabled', 'disabled');
   }
});

function blink_text() { 
$('.blink').fadeOut(300);
$('.blink').fadeIn(300);
}
setInterval(blink_text, 800);

$(document).ready(function(){
$("tr:odd").addClass("zebra"); //fattade inte riktigt så fick kopiera javascripten
});

$('a.print').click(function(){
   window.print(); 
   return false;
});

var max = 15;
$('textarea').keyup(function() {
 var textl = max - $(this).val().length;
  $('#rchars').text(textl);
});

$('.ps').each(function(){
var pdata = $(this);
	pdata.html( pdata.text().replace(/(^\w+)/,'$1') ); //fick kopiera detta från w3 men funkade fortfarande inte? Vet inte riktigt vad jag ska göra här
});

function funka() {
   $(document).ready(function() {
     var test = {
       id: "div",
       class: "divclass",
       css: {
         "color": "Green"
       }
     };
     var $div = $("<div>", test);
     $div.html("New Division");
     $("body").append($div);           ///fattade inget av denna så fick kolla på w3 och sedan skriva efter jag förstått vad som står på varje rad så att jag inte helt kopierade och åtminstone förstod vad jag gjorde
   });
   }

   