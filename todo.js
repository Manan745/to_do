console.log("Connected");
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//Click on X to delete todo

$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type=text]").on("keypress",function(event)
{ if(event.which===13)
	{
	var task=($(this).val());
	$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>  " +task+"</li>");
	$(this).val("");
	}
});

$("input").slideUp();

$(".fa").click(function()
{
	$("input").slideToggle(500);
});