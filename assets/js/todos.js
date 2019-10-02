//Check off specific todoi)
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
	//alert("Click li");
});

$("ul").on("click","span",function(event)
{
event.stopPropagation();
$(this).parent().fadeOut(500,function()
{
	$(this).remove();
});

}


);

$("input[type='text'").keypress(function(event){
   if(event.which===13)
   {
//	console.log("key press");
  var todotext=   $(this).val();
  $(this).val("");
  $("ul").append("<li><span><i class='fa fa-trash' ></i></span>"+todotext+"</li>");
   }
	
})
$(".fa-plus").click(function(){

$("input[type='text']").fadeToggle();
})