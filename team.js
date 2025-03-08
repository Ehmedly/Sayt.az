let employees = [
  {
    id: 1,
    name: "Ramil Mirzayev",
    position: "CEO",
    imgUrl: "Images/Images_team/CEO.jpg"
  },
  {
    id: 2,
    name: "Rasim Adurahman",
    position: "Project Manager",
    imgUrl: "Images/Images_team/projMan.jpg"
  },
  {
    id: 3,
    name: "Ahmad Rustamov",
    position: "Team Lead",
    imgUrl: "Images/Images_team/teamlead.jpg"
  },
  {
    id: 4,
    name: "Murad Aghamedov",
    position: "Backend Developer",
    imgUrl: "Images/Images_team/backend.jpg"
  },
  {
    id: 5,
    name: "Fuad Mammadov",
    position: "Front-End Developer",
    imgUrl: "Images/Images_team/front.png"
  },
  {
    id: 6,
    name: "Mirafgan Eminbayli",
    position: "Frontend Developer",
    imgUrl: "Images/Images_team/frontend.jpg"
  },
  {
    id: 7,
    name: "Idrak Mustafazada",
    position: "Customer Support",
    imgUrl: "Images/Images_team/customersup.jpg"
  },
  {
    id: 8,
    name: "Saida Chinani",
    position: "SMM",
    imgUrl: "Images/Images_team/smm.jpg"
  },
  {
    id: 9,
    name: "Matanat M.",
    position: "Front End Developer",
    imgUrl: "Images/Images_team/frontqiz.jpg"
  }
]
let sevenCards = document.getElementById("sevenCards")

function PrintEmployees() {
  employees.forEach((employee) => {
    sevenCards.innerHTML +=
      `
      <div
        id = "card${employee.id}" class="flex flex-col min-w-[250px] card w-[23.5%] p-[16px] border border-[2px] border-[#A271F2] rounded-[20px]">
        <div class="imageCont relative w-full">
          <img class="object-cover rounded-[15px] w-full h-[300px]" src="${employee.imgUrl}" alt="">
          <div class="content absolute text-center bg-white bottom-[0] p-[15px] py-[12px] rounded-[15px] w-full">
            <h4 class="text-[20px] font-bold">${employee.name}</h4>
            <span class="text-[14px]">${employee.position}</span>
          </div>
        </div>
      </div>
      `
  })
}

PrintEmployees()
