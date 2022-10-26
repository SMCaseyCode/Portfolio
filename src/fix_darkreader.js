// calls same function every 50 miliseconds to check if darkreader is on
function color_change()
{
  const yes_darkreader = document.querySelector("meta[name=darkreader]");

  // Gets the current background value and stores it into getContrast
  const getContrast = getComputedStyle(document.documentElement)
    .getPropertyValue("background-color");

  const all_svgs = document.getElementsByTagName("svg");
  
  // stores the state of the inline style: has it already been applied?
  const svgs_has_style = all_svgs[0].hasAttribute("style");

  // wave svgs are in positions 0 and 3 in node list, only modifying those
  if (yes_darkreader && !svgs_has_style)
  {
    all_svgs[0].setAttribute("style", "fill:" + getContrast + " !important;");
    all_svgs[3].setAttribute("style", "fill:" + getContrast + " !important;");
  }

  else if (!yes_darkreader && svgs_has_style)
  {
    all_svgs[0].removeAttribute("style");
    all_svgs[3].removeAttribute("style");
  }

  // Compares background colors for on the fly changes, if found, changes background fill.
  if (svgs_has_style && all_svgs[0] != getContrast || all_svgs[3] != getContrast)
  {
    all_svgs[0].setAttribute("style", "fill:" + getContrast + " !important;");
    all_svgs[3].setAttribute("style", "fill:" + getContrast + " !important;");
  }

  setTimeout(color_change, 50);
}

color_change();

//Thank you to saturdaynite for help on this. https://github.com/saturdaynite