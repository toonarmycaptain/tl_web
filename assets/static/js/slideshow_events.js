function hide_client_underlines()
{
    $.each($(".client_underline"), function(index, value) {
        $(value).hide();
    });
}

function load_modavanti()
{
    $('#internal_projects').hide();
    $('#projects_underline').hide();
    hide_client_underlines();
    $("#modavanti_underline").show();
    $.get("/ajax_get_client_modavanti", function(data) {
        var div = $(".ajax_insert", data);
        $('#client').html(div);
    });
}
function load_picloud_app()
{
    $('#picloud_app_underline').show();
    $.get("/ajax_get_client_picloud_app", function(data) {
        var div = $(".ajax_insert", data);
        $('#client').html(div);
    });
}

function init_slideshow_events()
{
    $('.menu_item').click(function(e)
       {
           var id = this.id; 
	   $.get("/ajax_get_client_" + id, function(data) {
               var div = $(".ajax_insert", data);
	       hide_client_underlines();
	       $("#" + id + "_underline").show();
               $('#client').html(div);
           });
       });
    $('.slide_tab').click(function(e)
	{
	    if(this.id == "projects_tab")
            {
		load_picloud_app();
		$('#our_clients').hide();
		$('#internal_projects').show();
		$('#our_clients_underline').hide();
		$('#projects_underline').show();
            }
            if(this.id == "clients_tab")
            {
		load_modavanti();
		$('#internal_projects').hide();
		$('#our_clients').show();
		$('#projects_underline').hide();
		$('#our_clients_underline').show();
            }
	});
}
