// 버튼 마우스오버
const moreBtn = document.querySelector(".works__more");
const layer = moreBtn.querySelector(".layer");

moreBtn.addEventListener("mouseenter", () => {
  layer.classList.add("hoverd");
});
moreBtn.addEventListener("mouseleave", () => {
  layer.classList.remove("hoverd");
  layer.classList.add("leave");
  setTimeout(function () {
    layer.classList.remove("leave");
  }, 500);
});


const visual_text = document.querySelector(".visual__text p");
const visual_text_wrap = document.querySelector(".visual__text");
let textX = 0;

function movingText() {
  textX += 5;
  if (textX >= visual_text.scrollWidth / 1.98) {
    visual_text.style.transform = `translateX(${0}px)`;
    textX = 0

  }
  visual_text.style.transform = `translateX(-${textX}px)`;
  let move = requestAnimationFrame(movingText);
}

movingText();

function textY() {
  let visualScroll = window.scrollY / 4;
  if (window.scrollY <= window.innerHeight) {
    visual_text_wrap.style.transform = `translateY(-${visualScroll}px)`;
  }
}


// 스크롤 애니메이션
const visual = document.querySelector(".visual");
const slides = document.querySelectorAll(".slides__lists");
const round = document.querySelector(".roundWrap");
const htmlheight = document.querySelector("html");
const footer = document.querySelector("footer");
let windowScroll;

// 비주얼트랜스폼
function visualTransform() {
  let topScroll = window.scrollY / 2;
  if (window.scrollY <= window.innerHeight) {
    visual.style.transform = `translateY(${topScroll}px)`;
  }
}

// 스크롤 슬라이드
function scrollSlide() {
  let scrolled = window.scrollY / 10;
  slides[0].style.transform = `translateX(${scrolled}px)`;
  slides[1].style.transform = `translateX(-${scrolled}px)`;
}


//하단 라운드 애니메이션
function roundHeight() {
  let bottomHeight = (htmlheight.offsetHeight - window.innerHeight - window.scrollY) / 8;
  round.style.height = bottomHeight + "px";
}

//푸터
function footerHeight() {
  let bottomScroll = (htmlheight.offsetHeight - window.innerHeight - window.scrollY) / 1.2;
  footer.style.transform = `translateY(-${bottomScroll}px)`;
}

window.addEventListener("scroll", () => {
  visualTransform();
  textY();
  scrollSlide();
  roundHeight();
  footerHeight();
});

// 리스트
const work_lists = document.querySelector(".works__lists");
const theWorks = document.querySelectorAll(".works__lists li");
const workItems = document.querySelector(".workItems");
const itemList = document.querySelector(".workItems__lists");

work_lists.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  workItems.style.left = x + "px";
  workItems.style.top = y + "px";
})

work_lists.addEventListener("mouseenter", () => {
  workItems.classList.add("active");
})


work_lists.addEventListener("mouseleave", () => {
  workItems.classList.remove("active");
})


theWorks.forEach((work, index) => {
  work.addEventListener("mouseenter", () => {
    let trnasIndex = index * 25;
    itemList.style.transform = `translateY(-${trnasIndex}%)`;
  })
});