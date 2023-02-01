let backgroundImg = document.querySelector(".section_1");
let button = document.querySelector("#btn_background");

let images = [
  "images/ai-chip-intelligence-technology-deep-learning.jpg",
  "images/3d-robot-hand-background-ai-technology-side-view.jpg",
];

backgroundImg.style.backgroundImage = "url(" + images[1] + ")";
backgroundImg.style.backgroundSize = "cover";
backgroundImg.style.backgroundRepeat = "no-repeat";
backgroundImg.style.backgroundPosition = "center";
button.remove();

// let i = 0;

// button.addEventListener("click", function () {
//   backgroundImg.style.backgroundImage = "url(" + images[i] + ")";
//   backgroundImg.style.backgroundSize = "cover";
//   backgroundImg.style.backgroundRepeat = "no-repeat";
//   backgroundImg.style.backgroundPosition = "center";
//   i++;
//   if (i == images.length) {
//     i = 0;
//   }
// });

let form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  alert(
    "Sorry We can't receive any message now!\nyou can contact with our team if you want any details.\nthanks!"
  );
});
