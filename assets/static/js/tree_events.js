function init_tech_tree()
{
    $(".tree_image_box_target").hover(
        function(){
	    var id = this.id;
	    var tech = $("#" + id).html();
	    $("#tech_term").html("{" + tech + "}");
        }, function() {
	    $("#tech_term").html("{Technology}");
        }
    );
}