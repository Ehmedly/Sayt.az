function HideShow(dropIt) {
  let dropItem = document.getElementById(`${dropIt}`)
  dropCategories.forEach((item)=>{ //the array is in the navdata.js file
    if(dropItem == item){
      if (item.style.display == "none" || item.style.display == ""){
        item.style.display = "flex"
      }
      else {
        item.style.display = "none"
      }
    }
    else{
      item.style.display = "none"
    }
  })
}
