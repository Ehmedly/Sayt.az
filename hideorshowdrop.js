function HideShow(dropIt) {
  let dropItem = document.getElementById(`${dropIt}`)
  if (dropItem.style.display == "none" || dropItem.style.display == "")
    dropItem.style.display = "flex"
  else {
    dropItem.style.display = "none"
  }
}