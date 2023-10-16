const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "horizontal",
   loop: true,
});

const pictures = document.querySelectorAll(".characters div");

const resetOpacity = () => {
   pictures.forEach((picture) => {
      picture.classList.remove("active");
   });
};

pictures.forEach((picture, index) => {
   picture.addEventListener("click", () => {
      resetOpacity();
      swiper.slideTo(index);
      picture.classList.add("active");
   });
});
