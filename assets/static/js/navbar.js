var nav = document.getElementById("nav_menu_bar"),
    tabs = nav.children,
    itemsRemaining = tabs.length,
    borderWidth = $(tabs[0].children[0]).css("border-left-width")
    spaceRemaining = nav.clientWidth - 2*parseInt(borderWidth, 10) * itemsRemaining;

while (itemsRemaining > 0) {
  var itemWidth = Math.round(spaceRemaining / itemsRemaining);
  $(tabs[itemsRemaining - 1].children[0]).width(itemWidth);
  spaceRemaining -= itemWidth;
  itemsRemaining -= 1;
}
