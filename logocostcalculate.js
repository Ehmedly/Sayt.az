
let logoResult = document.getElementById("logoResult")
let sumLogo = document.getElementById("sumLogo")
let logoCostTotal = 0
function calcLogoDesCost(value) {
  total -= logoCostTotal //evvelkini cix 
  logoResult.innerHTML = `₼ ${value * 100}`
  sumLogo.innerHTML = `₼ ${value * 100}`
  logoCostTotal = value * 100
  total += logoCostTotal //yenisini gel
  calculatorTotalValue.innerHTML = `₼ ${total >= 450 ? total : 450}`
}