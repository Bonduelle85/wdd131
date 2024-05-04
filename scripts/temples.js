// responsive navigation
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// footer
document.querySelector(
  "#currentYear"
).innerHTML = `&copy ${new Date().getFullYear()}`;

document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
