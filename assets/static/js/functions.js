function hide_slides()
{
    $.each($(".slide"), function(index, value) {
        $(value).hide();
    });
}


$( document ).ready(function() {
    init_tech_tree();
    init_slideshow_events();
    init_contacts_accordion();
    hide_slides();
    $(".ajax_button").click(function() {
        var id = this.id;
	var pos = $('#' + id).prevAll(".ajax_button").length;
	var target = id.replace("ajax_get_tool_","");
        var row = Math.floor(pos/10);
	$.get("/ajax_get_tool_" + target, function( data ) {
	    var div = $(".ajax_insert", data);
            hide_slides();
            $('#slide_' + row).html(div);
	    $('#slide_' + row).show();
	});
    });
});