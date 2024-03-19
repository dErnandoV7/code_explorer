const allImgsCar = document.querySelectorAll(".carro");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector("#modal")
const transparentBlack = document.querySelector(".transparent-black")

let current = 0;

allImgsCar.forEach((carro, index) => {

  carro.addEventListener("click", () => {
    transparentBlack.classList.remove("hide")

    modal.style.background = `url(img/car_${
      index + 1
    }.jpg) no-repeat center center`;
    modal.style.backgroundSize = "cover";
    modal.showModal()
  })

  carro.style.background = `url(img/car_${
    index + 1
  }.jpg) no-repeat center center`;
  carro.style.backgroundSize = "cover";
});

buttonNext.addEventListener("click", () => {
  current++;

  if (current === allImgsCar.length) current = 0;

  setImgShowFn();
});

buttonPrev.addEventListener("click", () => {
  current--;

  if (current === -1) current = allImgsCar.length - 1;

  setImgShowFn();
});

closeModal.addEventListener("click", () => {
  transparentBlack.classList.add("hide")
  modal.close()
})

const setImgShowFn = () => {
  allImgsCar.forEach((carro) => {
    carro.classList.remove("show");
  });

  allImgsCar[current].classList.add("show");
};
