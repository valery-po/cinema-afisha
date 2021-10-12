const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
  const target =  event.target;
  if(!target.classList.contains("booked")){
    target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length
    totalPrice = totalSeats * 800;
    totalPriceTag.textContent = totalPrice;
  }
})

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
})