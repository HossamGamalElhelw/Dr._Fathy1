/// header

const menuList = document.getElementById("menu-list");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
  menuList.classList.toggle("show");
});

// change background , it is not display
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

///////////////
// let materials = document.querySelectorAll(".material_1");

// materials.forEach(function (material) {
//   let materialIcon = material.querySelector(".materialICon");
//   let materialIcon2 = material.querySelector(".materialICon2");
//   let materialScreen = material.querySelector(".Material_1Screen");
//   let materialTitle = material.querySelector(".title_material");

//   materialTitle.addEventListener("click", function (event) {
//     event.preventDefault();
//     materialScreen.classList.toggle("hidden_material");
//     materialScreen.classList.toggle("active_material");
//     materialIcon.classList.toggle("hidden_material");
//     materialIcon2.classList.toggle("hidden_material");
//   });
// });
// Function to create and show the separate page with information
function showPageWithData(data) {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("separate_page");

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Exit";
  closeBtn.classList.add("close_button");
  closeBtn.addEventListener("click", function () {
    pageContainer.remove(); // Close the page when the "Exit" button is clicked
  });

  const pageContent = document.createElement("div");
  pageContent.classList.add("page_content");
  pageContent.innerHTML = data; // Set the data inside the page

  pageContainer.appendChild(closeBtn);
  pageContainer.appendChild(pageContent);
  document.body.appendChild(pageContainer);
}

let materials = document.querySelectorAll(".material");

materials.forEach(function (material) {
  let materialIcon = material.querySelector(".materialICon");
  let materialIcon2 = material.querySelector(".materialICon2");
  let materialScreen = material.querySelector(".material_screen");
  let materialTitle = material.querySelector(".title_material");
  let materialHeader = material.querySelector(".material_header");

  materialHeader.addEventListener("click", function (event) {
    event.preventDefault();
    materialScreen.classList.toggle("hidden_material");
    materialScreen.classList.toggle("active_material");
    materialIcon.classList.toggle("hidden_material");
    materialIcon2.classList.toggle("hidden_material");
  });

  let dropLists = material.querySelectorAll(".drop_list");

  dropLists.forEach(function (dropList) {
    let dropListTitle = dropList.querySelector(".drop_list_title");
    let dropListContent = dropList.querySelector(".drop_list_content");

    dropListTitle.addEventListener("click", function (event) {
      event.preventDefault();
      let dataToShow = dropListContent.innerHTML; // Get the content of the dropdown
      showPageWithData(dataToShow); // Call the function to show the separate page with the data
    });
  });
});

function showPageWithData(data) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalDataContent = document.getElementById("modalDataContent");
  const closeModalBtn = document.getElementById("closeModalBtn");

  modalDataContent.innerHTML = data;
  modalOverlay.style.display = "flex";

  closeModalBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
  });
}

// The rest of your JavaScript code remains the same.

// animation
window.addEventListener("load", function () {
  const loader = document.querySelector(".loading");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});
