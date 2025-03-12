let webAdditionalsArray = [
  {
    name: 'blog',
    price: 200,
    count: 0
  },
  {
    name: 'enter',
    price: 400,
    count: 0
  },
  {
    name: 'responsive',
    price: 100,
    count: 0
  },
  {
    name: 'forum',
    price: 400,
    count: 0
  },
  {
    name: 'message',
    price: 50,
    count: 0
  },
  {
    name: 'live',
    price: 50,
    count: 0
  },
  {
    name: 'gallery',
    price: 100,
    count: 0
  },
  {
    name: 'contact',
    price: 100,
    count: 0
  },
  {
    name: 'search',
    price: 100,
    count: 0
  },
  {
    name: 'map',
    price: 100,
    count: 0
  },
  {
    name: 'rezervation',
    price: 400,
    count: 0
  },
  {
    name: 'social',
    price: 50,
    count: 0
  },
  {
    name: 'analytics',
    price: 50,
    count: 0
  },
  {
    name: 'admin',
    price: 300,
    count: 0
  },
]
let webTotal = 0
let webAdditionalsTotal = document.getElementById("webAdditionalsTotal")
let sumAdditionals = document.getElementById("sumAdditionals")
function AddToPrice(name){
  total -= webTotal
  webAdditionalsArray.forEach((item)=>{
    if(item.name == name && item.count == 0){
      item.count++
      webTotal += item.price
    }
    else if(item.name == name && item.count > 0){
      item.count = 0
      webTotal -= item.price
    }
  })
  webAdditionalsTotal.innerHTML = `₼ ${webTotal}`
  sumAdditionals.innerHTML = `₼ ${webTotal}`
  total += webTotal
  calculatorTotalValue.innerHTML = `₼ ${(total>=450 ? total : 450)}`
}