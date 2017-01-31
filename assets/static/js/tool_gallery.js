function hide_slides()
{
    $.each($(".gallery_tool_text"), function(index, value) {
        $(value).hide();
    });
}


$( document ).ready(function() {
    hide_slides();
    $(".gallery_tool").click(function() {
        console.log('clicked');
         var id = this.id;
         var pos = $('#' + id).prevAll(".gallery_tool").length;
         var row = Math.floor(pos/10);
         hide_slides();
         $("#"+id).children(".gallery_tool_text").show()
//         $('#' + row).show();
    });
});
