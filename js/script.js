var menuButton = document.querySelector("#menuButton");
var navList = document.querySelector("#navList")

menuButton.addEventListener("click", () =>
{
  if (navList.style.display == "block")
  {
    navList.style.display = "none";
  }
});
