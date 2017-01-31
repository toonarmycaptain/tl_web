function hide_accordion_rows()
{
  $.each($(".accordion_rows"), function(index, value) {
    $(value).hide();
  });
}

function init_contacts_accordion()
{
  hide_accordion_rows();
  $(".contact").click(function() {
    var id = this.id;
    var target = "info-" + id.replace("contact-","");
    if ($("#" + target).css('display') == 'none') {
      $("#" + target).show();
    }
    else {
      $("#" + target).hide();
    }
  });
}
