let optimizedArray = [
  {
    name: "metas",
    price: 200
  },
  {
    name: "keys",
    price: 300
  },
  {
    name: "cuttingEdges",
    price: 300
  },
  {
    name: "tags",
    price: 100
  },
  {
    name: "headers",
    price: 100
  },
]
let optimizationResult = document.getElementById("optimizationResult")
let sumCeo = document.getElementById("sumCeo")
let optimizedTotal = 0
function OptimizedPriceCalculate(value, check) {
  total -= optimizedTotal
  optimizedArray.forEach((item) => {
    if (item.name == value && check == true) {
      optimizedTotal += item.price
    }
    else if (item.name == value && check == false) {
      optimizedTotal -= item.price
    }
  })
  optimizationResult.innerHTML = `₼ ${optimizedTotal}`
  sumCeo.innerHTML = `₼ ${optimizedTotal}`
  total += optimizedTotal
  calculatorTotalValue.innerHTML = `₼ ${(total >= 450 ? total : 450)}`
}