// calls same function every 50 miliseconds to check if darkreader is on
function color_change()
{
  const yes_darkreader = document.querySelector("meta[name=darkreader]");
  const all_svgs = document.getElementsByTagName("svg");

  // wave svgs are in positions 0 and 3 in node list, only modifying those
  if (yes_darkreader)
  {
    all_svgs[0].classList.add("block_darkreader");
    all_svgs[3].classList.add("block_darkreader");
  }

  else
  {
    all_svgs[0].classList.remove("block_darkreader");
    all_svgs[3].classList.remove("block_darkreader");
  }

  setTimeout(color_change, 50);
}

color_change();