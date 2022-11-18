const form = document.querySelector("#sign-up");
const mailIcon = document.querySelector(".mail-icon");
const remember = document.querySelector(".remember");
const rememberText = document.querySelector(".remember-text");

form.mail.addEventListener("focus", () => {
  mailIcon.children[0].style.fill = "#9C7DF6";
});

remember.addEventListener("click", () => {
  remember.classList.toggle("active");
});

rememberText.addEventListener("click", () => {
  remember.classList.toggle("active");
});

//ავტორიზაციის საბმითის ფუნქცია
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
});
