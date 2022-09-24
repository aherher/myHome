// 앵커기능
const anker = document.querySelectorAll(".anker")

anker.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let link = e.target.getAttribute("href")
    let section = document.querySelector(link)
    let doMove = section.getBoundingClientRect().top + window.pageYOffset //절대좌표
    window.scrollTo({ top: doMove, behavior: "smooth" })
    e.preventDefault()
  })
})

// 버튼 마우스오버
const moreBtn = document.querySelector(".works__more")
const layer = moreBtn.querySelector(".layer")

moreBtn.addEventListener("mouseenter", () => {
  layer.classList.add("hoverd")
})
moreBtn.addEventListener("mouseleave", () => {
  layer.classList.remove("hoverd")
  layer.classList.add("leave")
  setTimeout(function () {
    layer.classList.remove("leave")
  }, 500)
})

const visual_text = document.querySelector(".visual__text p")
const visual_text_wrap = document.querySelector(".visual__text")
let textX = 0

function movingText() {
  textX += 5
  if (textX >= visual_text.scrollWidth / 1.98) {
    visual_text.style.transform = `translateX(${0}px)`
    textX = 0
  }
  visual_text.style.transform = `translateX(-${textX}px)`
  let move = requestAnimationFrame(movingText)
}

movingText()

function textY() {
  let visualScroll = window.scrollY / 4
  if (window.scrollY <= window.innerHeight) {
    visual_text_wrap.style.transform = `translateY(-${visualScroll}px)`
  }
}

// 스크롤 애니메이션
const visual = document.querySelector(".visual")
const slides = document.querySelectorAll(".slides__lists")
const round = document.querySelector(".roundWrap")
const htmlheight = document.querySelector("html")
const footer = document.querySelector("footer")
let windowScroll

// 비주얼트랜스폼
function visualTransform() {
  let topScroll = window.scrollY / 2
  if (window.scrollY <= window.innerHeight) {
    visual.style.transform = `translateY(${topScroll}px)`
  }
}

// 스크롤 슬라이드
function scrollSlide() {
  let scrolled = window.scrollY / 10
  slides[0].style.transform = `translateX(${scrolled}px)`
  slides[1].style.transform = `translateX(-${scrolled}px)`
}

//하단 라운드 애니메이션
function roundHeight() {
  let bottomHeight =
    (htmlheight.offsetHeight - window.innerHeight - window.scrollY) / 8
  round.style.height = bottomHeight + "px"
}

//푸터
function footerHeight() {
  let bottomScroll =
    (htmlheight.offsetHeight - window.innerHeight - window.scrollY) / 1.2
  let footerHeight = footer.offsetHeight
  if (bottomScroll <= footerHeight) {
    footer.style.transform = `translateY(-${bottomScroll}px)`
  } else if (bottomScroll >= footerHeight) {
    footer.style = ""
  }
}

window.addEventListener("scroll", () => {
  visualTransform()
  textY()
  scrollSlide()
  roundHeight()
  footerHeight()
})

// 리스트
const work_lists = document.querySelector(".works__lists")
const theWorks = document.querySelectorAll(".works__lists li")
const workItems = document.querySelector(".workItems")
const itemList = document.querySelector(".workItems__lists")
const itemList_items =
  document.querySelector(".workItems__lists").childElementCount
const itemLength = 100 / itemList_items

work_lists.addEventListener("mousemove", (e) => {
  let x = e.clientX
  let y = e.clientY
  workItems.style.left = x + "px"
  workItems.style.top = y + "px"
})

work_lists.addEventListener("mouseenter", () => {
  workItems.classList.add("active")
})

work_lists.addEventListener("mouseleave", () => {
  workItems.classList.remove("active")
})

theWorks.forEach((work, index, array) => {
  work.addEventListener("mouseenter", () => {
    let trnasIndex = index * itemLength
    itemList.style.transform = `translateY(-${trnasIndex}%)`
  })
})

// 팝업기능
theWorks.forEach((list) => {
  list.addEventListener("click", (e) => {
    let poplink = list.querySelector("a").getAttribute("href")
    let popup = document.querySelector(poplink)
    popup.classList.add("popOn")
    e.preventDefault()
  })
})

const closepop_btn = document.querySelectorAll(".popup__close")
const popup_bg = document.querySelectorAll(".popup__bg")
const popupwraps = document.querySelectorAll(".popup")

function closePop() {
  popupwraps.forEach((pop) => {
    pop.classList.remove("popOn")
  })
}

closepop_btn.forEach((close) => {
  close.addEventListener("click", () => {
    closePop()
  })
})

popup_bg.forEach((bg) => {
  bg.addEventListener("click", () => {
    closePop()
  })
})
