let leftCard = document.getElementById("leftCard")
let centerCard = document.getElementById("centerCard")
let rightCard = document.getElementById("rightCard")
let cardsarr = [leftCard, centerCard, rightCard]
function selectedCard4(id){
  cardsarr.forEach(item=>{
    if(item == document.getElementById(id)){
      item.style.borderColor = "#845CC5"
      item.style.boxShadow = "2px 12px 30px rgba(132,92,197,0.8)"
    }
    else{
      item.style.borderColor = "#F3F4F6"
      item.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.0)"
    }
  })
}