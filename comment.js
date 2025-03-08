let commentInfos = [
  {
    description: "Veb saytımı hazırlamaq üçün Sayt.az-ı seçmək biznesim üçün verdiyim ən yaxşı qərar idi.",
    person: "Hikmat Taghiyev",
    position: "Accountant",
    imgUrl: "Images/Images_comment/hikmet.png"
  },
  {
    description: "Sayt.az saytımın hazırlanmasında gözləntilərimi aşdı. Mənim istəklərimi mükəmməl şəkildə əks etdirdi.",
    person: "Seljan Novruz",
    position: "CEO",
    imgUrl: "Images/Images_comment/seljan.png"
  },
  {
    description: "Sayt.az komandası tərəfindən hazırlanan ev alqı-satqısı saytı, gözləntilərimi tamamilə doğrultdu. Sayt.az-a dəyərli xidmətləri üçün təşəkkür edirəm.",
    person: "Bahman Ahmadli",
    position: "CEO",
    imgUrl: "Images/Images_comment/bahman.png"
  }
]

let commentsSwiper = document.getElementById("commentsSwiper")
function PrintComments() {
  commentInfos.forEach((comment) => {
    commentsSwiper.innerHTML +=
      `
      <swiper-slide>
        <div class = "flex flex-col items-center gap-[15px]">
          <p class = "md:text-[20px] text-[16px] text-[#4A2182] font-[550]">Müştərilərdən müsbət rəy</p>
          <span class = "rey md:text-[16px] text-[14px] text-[#64748B]">${comment.description}</span>
          <div class = "flex gap-[15px] pt-[16px]">
            <img class = "h-[50px] w-[50px] rounded-[50px]" src="${comment.imgUrl}" alt="">
            <div class = "flex flex-col items-start"> 
              <h6 class = "md:text-[16px] text-[14px] text-[#334155]">${comment.person}</h6>
              <span class = "md:text-[16px] text-[14px] text-[#64748B]">${comment.position}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      `
  });
}
PrintComments()