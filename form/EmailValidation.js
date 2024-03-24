const arrayWithEmailValid = ["@gmail.com", "@hotmail.com"];
const form = document.querySelector("form");
const inputEmail = form.email;
const messegeErrorEmail = document.querySelector(".email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (const item of arrayWithEmailValid) {
    if (inputEmail.value.includes(item)) {
      form.submit();
      return;
    }
  }
  messegeErrorEmail.style.transform = "translateX(0)";
  setTimeout(() => {
    messegeErrorEmail.style.transform = "translateX(-200%)";
  }, 4000);
});
