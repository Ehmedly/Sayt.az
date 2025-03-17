let manato = document.getElementById("manato")
let dollare = document.getElementById("dollare")
let currencyAndCountry = document.querySelector(".currencyAndCountry")
let currencyDrop = document.querySelector(".currencyDrop")
let aze = document.querySelector(".aze")
let use = document.querySelector(".use")
let currency = document.querySelector(".currency")
let country = document.querySelector(".country")
let flagDrop = document.querySelector(".flagDrop")
currency.onclick = function () {
  if (currencyDrop.style.display == "none" || currencyDrop.style.display == "") {
    currencyDrop.style.display = "flex"
  }
  else if (currencyDrop.style.display == "flex") {
    currencyDrop.style.display = "none"
  }
}
function chooseCurrency(value) {
  manato.innerHTML = value.innerHTML
}
country.onclick = function () {
  if (flagDrop.style.display == "none" || flagDrop.style.display == "") {
    flagDrop.style.display = "flex"
  }
  else if (flagDrop.style.display == "flex") {
    flagDrop.style.display = "none"
  }
}
function chooseCountry(value) {
  if (value == "use") {
    use.style.display = "block"
    aze.style.display = "none"
  } else {
    aze.style.display = "block"
    use.style.display = "none"
  }
}
let manato1 = document.getElementById("manato1")
let dollare1 = document.getElementById("dollare1")
let currencyAndCountry1 = document.querySelector(".currencyAndCountry1")
let currencyDrop1 = document.querySelector(".currencyDrop1")
let aze1 = document.querySelector(".aze1")
let use1 = document.querySelector(".use1")
let currency1 = document.querySelector(".currency1")
let country1 = document.querySelector(".country1")
let flagDrop1 = document.querySelector(".flagDrop1")
currency1.onclick = function () {
  if (currencyDrop1.style.display == "none" || currencyDrop1.style.display == "") {
    currencyDrop1.style.display = "flex"
  }
  else if (currencyDrop1.style.display == "flex") {
    currencyDrop1.style.display = "none"
  }
}
function chooseCurrency1(value) {
  manato1.innerHTML = value.innerHTML
}
country1.onclick = function () {
  if (flagDrop1.style.display == "none" || flagDrop1.style.display == "") {
    flagDrop1.style.display = "flex"
  }
  else if (flagDrop1.style.display == "flex") {
    flagDrop1.style.display = "none"
  }
}
function chooseCountry1(value) {
  if (value == "use1") {
    use1.style.display = "block"
    aze1.style.display = "none"
  } else {
    aze1.style.display = "block"
    use1.style.display = "none"
  }
}