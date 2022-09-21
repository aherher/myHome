const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__menubtn");
const closeBtn = document.querySelector(".header__close");
const body = document.querySelector("body");


// 메뉴 열기
menuBtn.addEventListener("click", () => {
  let windowWidth = window.innerWidth;
  header.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("open");
});
