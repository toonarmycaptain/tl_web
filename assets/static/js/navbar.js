rescale_tabs(); // Sometimes nav is a tad short when brwoser zoom isn't 100%

function rescale_tabs () {
  var nav = document.getElementById("nav_menu_bar"),
      tabs = nav.children,
      itemsRemaining = tabs.length,
      /* borderWidth rounded because a browser zoom will change this to
       * non-integer values, when we really want the original.
       * E.g.. 2px + zoom -> 1.8px, which screws up the math.
       * I've only seen values in [1.5, 2].*/
      borderWidth = Math.round(parseFloat($(tabs[0].children[0]).css("border-left-width"), 10)),
      spaceRemaining = nav.clientWidth - 2 * borderWidth * itemsRemaining;

  while (itemsRemaining > 0) {
    var itemWidth = Math.round(spaceRemaining / itemsRemaining);
    $(tabs[itemsRemaining - 1].children[0]).width(itemWidth);
    spaceRemaining -= itemWidth;
    itemsRemaining -= 1;
  }
}
