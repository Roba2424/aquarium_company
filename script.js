const blueFish = document.querySelector(".blue-fish");

function getRandomNum() {
  return Math.floor(Math.random() * 500) + 1;
}

blueFish.addEventListener("click", (e) => {
  blueFish.style.marginLeft = getRandomNum() + "px";
  blueFish.style.marginTop = getRandomNum() + "px";
  blueFish.style.transition = "all 2s";
});
