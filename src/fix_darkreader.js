// calls same function every 50 miliseconds to check if darkreader is on
function color_change()
{
  const yes_darkreader = document.querySelector("meta[name=darkreader]");

   const getContrast = getComputedStyle(document.documentElement)
    .getPropertyValue("background-color");
    console.log(getContrast);

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

  setTimeout(color_change, 50);
}

color_change();
