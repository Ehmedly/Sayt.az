let monthlyBtn = document.getElementById("monthlyBtn")
let yearlyBtn = document.getElementById("yearlyBtn")
let section4CardLeftp = document.getElementById("section4CardLeftp")
let section4CardCenterp = document.getElementById("section4CardCenterp")
let section4CardRightp = document.getElementById("section4CardRightp")
let yearlyCheck = false
let monthlyCheck = true

monthlyBtn.onclick = function() {
  if (yearlyCheck == false && monthlyCheck == true) {
    monthlyBtn.style.backgroundColor = "#A78BFA"
    yearlyBtn.style.backgroundColor = "white"
    monthlyBtn.style.color = "white"
    yearlyBtn.style.color = "#94A3B8"
    yearlyCheck = true
    monthlyCheck = false
    section4CardLeftp.innerHTML =
      `
      ₼5<span class="text-[14px] font-[400]"> /ay</span>
      `
    section4CardCenterp.innerHTML =
      `
      ₼10<span class="text-[14px] font-[400]"> /ay</span>
      `
    section4CardRightp.innerHTML =
      `
      ₼20<span class="text-[14px] font-[400]"> /ay</span>
      `
  }
}

yearlyBtn.onclick = function() {
  if (yearlyCheck == true && monthlyCheck == false) {
    monthlyBtn.style.backgroundColor = "white"
    yearlyBtn.style.backgroundColor = "#A78BFA"
    monthlyBtn.style.color = "#94A3B8"
    yearlyBtn.style.color = "white"
    yearlyCheck = false
    monthlyCheck = true
    section4CardLeftp.innerHTML =
      `
      ₼60<span class="text-[14px] font-[400]"> /il</span>
      `
    section4CardCenterp.innerHTML =
      `
      ₼120<span class="text-[14px] font-[400]"> /il</span>
      `
    section4CardRightp.innerHTML =
      `
      ₼240<span class="text-[14px] font-[400]"> /il</span>
      `
  }
}
