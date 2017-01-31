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
    console.log(id);
    var target = "info-" + id.replace("contact-","");
    console.log(target);
    if ($("#" + target).css('display') == 'none') {
      $("#" + target).show();
    }
    else {
      $("#" + target).hide();
    }
  });
}
