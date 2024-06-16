const blueFish = document.querySelector(".blue-fish");

function getRandomNum() {
  return Math.floor(Math.random() * 500) + 1;
}

blueFish.addEventListener("click", (e) => {
  blueFish.style.marginLeft = getRandomNum() + "px";
  blueFish.style.marginTop = getRandomNum() + "px";
  blueFish.style.transition = "all 2s";
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject) {
    alert("Thank you for contacting us!");
  } else {
    alert("Please fill in all required fields.");
  }
});
