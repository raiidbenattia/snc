// dropdown menu
function toggleDropdown(event) {
  document.querySelector(".dropdown-tab-content").classList.toggle("is-active");
}

// menu close on click
let toggle = document.querySelectorAll(".navbar-toggle-button");
toggle.onclick = function (event) {
  let dropdownContents = document.querySelectorAll(".dropdown-tab-content");
  if (dropdownContents.classList.contains("is-active")) {
    dropdownContents.classList.remove("is-active");
  } else {
    dropdownContents.classList.add("is-active");
  }
};
