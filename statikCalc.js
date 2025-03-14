let staticPages = document.getElementById("staticPages")
let staticComplexity = document.getElementById("staticComplexity")
let staticTotal = document.getElementById("staticTotal")
let totalPrice = 0
let sumStatic = document.getElementById("sumStatic")
CalcStaticTotal()
function CalcStaticTotal() {
  total -= totalPrice
  totalPrice = ((staticPages.value) * 100) * (staticComplexity.value)
  staticTotal.innerHTML = `${staticPages.value} səhifə / ₼ ${totalPrice}`
  sumStatic.innerHTML = `₼ ${totalPrice}` 
  total += totalPrice
  calculatorTotalValue.innerHTML = `₼ ${(total >= 450 ? total : 450)}`
}