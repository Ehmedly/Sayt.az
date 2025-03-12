let optimizationArray = [
  {
    name:"payment",
    price: 200,
    count: 0
  },
  {
    name:"basket",
    price: 500,
    count: 0
  },
  {
    name:"products",
    price: 300,
    count: 0
  },
  {
    name:"likeds",
    price: 300,
    count: 0
  },
  {
    name:"filter",
    price: 300,
    count: 0
  },
  {
    name:"about",
    price: 200,
    count: 0
  }
]
let electronResult = document.getElementById("electronResult")
let sumCommercial = document.getElementById("sumCommercial")
let totalElec = 0
function AddToPriceElect(name){
  total -= totalElec
  optimizationArray.forEach((item)=>{
    if(item.name == name && item.count == 0){
      item.count++
      totalElec += item.price
    }else if(item.name == name && item.count != 0){
      item.count--
      totalElec -= item.price
    }
  })
  electronResult.innerHTML = `₼ ${totalElec}`
  sumCommercial.innerHTML = `₼ ${totalElec}`
  total += totalElec
  calculatorTotalValue.innerHTML = `₼ ${(total>=450 ? total : 450)}`
}