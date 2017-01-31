function hide_slides()
{
    $.each($(".gallery_tool_text"), function(index, value) {
        $(value).hide();
    });
}


$( document ).ready(function() {
    hide_slides();
    $(".slide").hide()
    $(".gallery_tool").click(function() {
        var id = this.id;
        hide_slides();
        $(".large_tech_text_upper").html($("#" + id).children(".gallery_tool_text").html());
        $(".slide").show()
    });
});
