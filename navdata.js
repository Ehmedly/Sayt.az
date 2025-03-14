let navArray = [
  [
    {
      header: "Saytların hazırlanması",
      describtion: "Veb saytların hazırlanması",
      imgUrl: "Images/DropdownImages/FirstDrop/website-program.svg"
    },
    {
      header: "Hökumət və qeyri-kommersiya saytları",
      describtion: "Hökumət və qeyri-kommersiya saytları",
      imgUrl: "Images/DropdownImages/FirstDrop/government.svg"
    },
    {
      header: "Kiçik biznes saytları",
      describtion: "Kiçik bizneslər üçün saytlar",
      imgUrl: "Images/DropdownImages/FirstDrop/smallBusiness.svg"
    },
    {
      header: "E-ticarət saytları",
      describtion: "E-ticarət saytları",
      imgUrl: "Images/DropdownImages/FirstDrop/eticaret.svg"
    },
    {
      header: "Hüquq firma saytı",
      describtion: "Hüquq firma saytı",
      imgUrl: "Images/DropdownImages/FirstDrop/rights.svg"
    },
    {
      header: "Bloqlar və Şəxsi Vebsayt",
      describtion: "Bloqlar və Şəxsi Vebsayt",
      imgUrl: "Images/DropdownImages/FirstDrop/blogs.svg"
    },
    {
      header: "Daşınmaz əmlak veb saytı",
      describtion: "Daşınmaz əmlak veb saytı",
      imgUrl: "Images/DropdownImages/FirstDrop/dasinmaz.svg"
    },
    {
      header: "Tibb - Doktor Saytlar",
      describtion: "Tibb Doktor Saytlar",
      imgUrl: "Images/DropdownImages/FirstDrop/medical.svg"
    },
    {
      header: "WordPress Saytları",
      describtion: "WordPress Saytları",
      imgUrl: "Images/DropdownImages/FirstDrop/wordpress.svg"
    }
  ]
  ,
  [
    {
      header: "Domen",
      describtion: "Etibarlı xidmət",
      imgUrl: "Images/DropdownImages/SecondDrop/domen.svg"
    },
    {
      header: "Pulsuz Domen Qeydiyyatı",
      describtion: "Sürətli qeydiyyat",
      imgUrl: "Images/DropdownImages/SecondDrop/pulsuz.svg"
    }
  ]
  ,
  [
    {
      header: "Veb Hostinq",
      describtion: "₼10.00/ay-dan başlayaraq",
      imgUrl: "Images/DropdownImages/ThirdDrop/hosting.svg"
    },
    {
      header: "VPS",
      describtion: "₼15.00/ay-dan başlayaraq",
      imgUrl: "Images/DropdownImages/ThirdDrop/server.svg"
    },
    {
      header: "Domen",
      describtion: "99.00/ay-dan başlayaraq",
      imgUrl: "Images/DropdownImages/ThirdDrop/vps.svg"
    },
  ]
  ,
  [
    {
      header: "Vebsayt sifarişinizi izləyin",
      describtion: "Sifarişinizi asanlıqla izləyin",
      imgUrl: "Images/DropdownImages/FourthDrop/order-track.svg"
    },
    {
      header: "Sayt Kalkulyatoru",
      describtion: "Saytın Qiymətini Öyrən",
      imgUrl: "Images/DropdownImages/FourthDrop/calculator.svg"
    },
    {
      header: "SEO Xidməti",
      describtion: "Axtarış Sistemi Optimizasiyası",
      imgUrl: "Images/DropdownImages/FourthDrop/seo.svg"
    },
    {
      header: "Mobil Tətbiqlərin Hazırlanması",
      describtion: "Mobil tətbiq xidməti",
      imgUrl: "Images/DropdownImages/FourthDrop/mobil.svg"
    },
    {
      header: "Texniki Xidmət",
      describtion: "Texniki Xidmət",
      imgUrl: "Images/DropdownImages/FourthDrop/technical.svg"
    },
    {
      header: "Sosial Media Marketinq",
      describtion: "Sosial Media Marketinq",
      imgUrl: "Images/DropdownImages/FourthDrop/social.svg"
    }
  ]
  ,
  [
    {
      header: "Haqqımızda",
      describtion: "Bizim komanda üzvlərimiz",
      imgUrl: "Images/DropdownImages/FifthDrop/about.svg"
    },
    {
      header: "Bloq",
      describtion: "TƏn son xəbərlər və faydalı məlumatlar",
      imgUrl: "Images/DropdownImages/FifthDrop/blog1.svg"
    },
    {
      header: "Bütün StartUplar",
      describtion: "Startupları idarə edən komandamıza qoşulun",
      imgUrl: "Images/DropdownImages/FifthDrop/alll.svg"
    },
    {
      header: "Portfolio",
      describtion: "Hazırladığımız hər bir iş bizim üçün dəyərlidir",
      imgUrl: "Images/DropdownImages/FifthDrop/portfolio-icon.svg"
    },
    {
      header: "Karyera",
      describtion: "Hazırkı vakansiyalarımız",
      imgUrl: "Images/DropdownImages/FifthDrop/career-icon.svg"
    },
    {
      header: "Freelance",
      describtion: "Sizdə qeydiyyatdan keçməklə freelance işləyə bilərsiz",
      imgUrl: "Images/DropdownImages/FifthDrop/note-icon.svg"
    },
    {
      header: "Əlaqə Forması",
      describtion: "Əlaqə Saxlayın",
      imgUrl: "Images/DropdownImages/FifthDrop/contact-icon.svg"
    }
  ]
]
let VebDropItem = document.getElementById("VebDropItem")
let DomenDropItem = document.getElementById("DomenDropItem")
let HostinqDropItem = document.getElementById("HostinqDropItem")
let XidDropItem = document.getElementById("XidDropItem")
let CompDropItem = document.getElementById("CompDropItem")
let dropCategories = [VebDropItem, DomenDropItem, HostinqDropItem, XidDropItem, CompDropItem]
count = 0
dropCategories.forEach((dropItem) => {
  navArray[count].forEach((item) => {
    dropItem.innerHTML +=
      `
      <a class="flex justify-start items-center" 
        href="${item.header == 'Sayt Kalkulyatoru' ? 'calculator.html' : '#'}">
        <img class="h-[52px] w-[52px] object-cover p-[12px] mr-[16px] bg-[#DBEAFE] rounded-[8px]"
          src="${item.imgUrl}" alt="dropImg">
          <div>
            <p class="text-[#334155] text-[16px]">${item.header}</p>
            <span class="text-[#64748B] text-[14px]">${item.describtion}</span>
          </div>
      </a>
      `
  })
  count++
})
