let works = [
  {
    id: 1,
    work: "BİOPHYSİCS.AZ",
    imgUrl: "Images/Images_works/bio.png"
  },
  {
    id: 2,
    work: "UREB.COM",
    imgUrl: "Images/Images_works/ureb.png"
  },
  {
    id: 3,
    work: "UG.NEWS",
    imgUrl: "Images/Images_works/ug.png"
  },
  {
    id: 4,
    work: "FOOTBALL.BİZ",
    imgUrl: "Images/Images_works/foot.png"
  },
  {
    id: 5,
    work: "WISHER.AZ",
    imgUrl: "Images/Images_works/wisher.png"
  },
  {
    id: 6,
    work: "IMEXCOMMODITIES.COM",
    imgUrl: "Images/Images_works/imex.png"
  },
  {
    id: 7,
    work: "AZFENTTQ.AZ",
    imgUrl: "Images/Images_works/azfen.png"
  },
  {
    id: 8,
    work: "NOTEHUB.AZ",
    imgUrl: "Images/Images_works/note.png"
  },
  {
    id: 9,
    work: "AZEHOLİDAYS.COM",
    imgUrl: "Images/Images_works/aze.png"
  },
  {
    id: 10,
    work: "VİPCONSULTİNG.AZ",
    imgUrl: "Images/Images_works/vip.png"
  },
  {
    id: 11,
    work: "ZEMED.AZ",
    imgUrl: "Images/Images_works/zemed.png"
  },
  {
    id: 12,
    work: "ESCO.AZ",
    imgUrl: "Images/Images_works/esco.png"
  },
  {
    id: 13,
    work: "CASPİLİMO.COM",
    imgUrl: "Images/Images_works/caspilimo.png"
  },
  {
    id: 14,
    work: "BAYMAK.AZ",
    imgUrl: "Images/Images_works/baymaq.png"
  },
  {
    id: 15,
    work: "SELJANNOVRUZLU.COM",
    imgUrl: "Images/Images_works/seljan.png"
  },
  {
    id: 16,
    work: "QARMON.AZ",
    imgUrl: "Images/Images_works/qarmon.png"
  },
  {
    id: 17,
    work: "NAFTALANSANATORIYA.COM",
    imgUrl: "Images/Images_works/naftalan.png"
  },
  {
    id: 18,
    work: "DOCFARHAD.AZ",
    imgUrl: "Images/Images_works/docfarhad.png"
  },
  {
    id: 19,
    work: "HEDEFINSAAT.COM",
    imgUrl: "Images/Images_works/hedef.png"
  },
  {
    id: 20,
    work: "BAHMANAHMADLİ.COM",
    imgUrl: "Images/Images_works/bahmanahmadli.jpg"
  },
  {
    id: 21,
    work: "TOVUZAQROKOMPLEKS.COM",
    imgUrl: "Images/Images_works/tovuz.jpg"
  },
  {
    id: 22,
    work: "METBUAT.AZ",
    imgUrl: "Images/Images_works/metbuat.jpg"
  },
  {
    id: 23,
    work: "AGROKİMYA.AZ",
    imgUrl: "Images/Images_works/agro.jpg"
  },
  {
    id: 24,
    work: "AZERBAİJANJOURNALİSTS.AZ",
    imgUrl: "Images/Images_works/journalist.jpg"
  },
  {
    id: 25,
    work: "PLANNİNG.AZ",
    imgUrl: "Images/Images_works/planning.jpg"
  },
  {
    id: 26,
    work: "WWW.ART-TRİO.AZ",
    imgUrl: "Images/Images_works/arttrie.jpg"
  }
]
let eightCards = document.getElementById("eightCards")

function PrintWorks(a) {
  works.forEach((work) => {
    if (work.id > (a * 6 - 6) && work.id <= a * 6) {
      eightCards.innerHTML +=
        `
        <a href = "#" class="card w-[85%] sm:w-[75%] md:w-[48.5%] p-[24px] border border-[2px] border-[#E4D7FD] rounded-[30px] gap-[24px] flex flex-col">
          <img src="${work.imgUrl}" class = "w-full xl:h-[380px] lg:h-[320px] md:h-[240px] h-[200px] object-contain rounded-[20px]">
          <span class = "font-[550] text:[12px] md:text-[20px]">${work.work}</span>
        </a>
        `
    }
  })
}
PrintWorks(1)