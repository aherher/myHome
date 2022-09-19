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