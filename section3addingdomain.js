let section3Select = document.getElementById("section3Select")

function chooseDomain(item){
  if(item.innerHTML == ".az"){
    section3Select.value = ".az"
  }else if(item.innerHTML == ".com"){
    section3Select.value = ".com"
  }else if(item.innerHTML == ".net"){
    section3Select.value = ".net"
  }else if(item.innerHTML == ".info"){
    section3Select.value = ".info"
  }else if(item.innerHTML == ".biz"){
    section3Select.value = ".biz"
  }else if(item.innerHTML == ".org"){
    section3Select.value = ".org"
  }
}