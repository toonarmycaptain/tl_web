function hide_clients()
{
  console.log("in hide_clients");
  $.each($(".client_slide"), function(index, value) {
    $(value).hide();
  });
  $.each($(".client_underline"), function(index, value) {
    $(value).hide();
  });
}

function load_modavanti()
{
  console.log("in load modavanti");
  hide_clients();
  $("#modavanti_underline").show();
  $("#client_modavanti").show();
}
function init_slideshow_events()
{
  console.log("in init_slideshow_events");
  $('.menu_item').click(function(e)
    {
      hide_clients();
      var id = this.id;
      $("#" + id + "_underline").show();
      $("#client_" + id).show();
    });
}
