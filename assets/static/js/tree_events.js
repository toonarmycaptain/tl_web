function init_tech_tree()
{
  $(".tree_target").hover(
    function(){
      var id = this.id;
      var tech = $("#" + id).html();
      $("#tech_term").html("{" + tech + "}");
    }, function() {
      $("#tech_term").html("{Technology}");
    }
  );
}
