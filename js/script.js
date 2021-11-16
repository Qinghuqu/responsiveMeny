var menuButton = document.querySelector("#menuButton");
var navList = document.querySelector("#navList")
var navMenu = document.querySelector("#navMenu")

menuButton.addEventListener("click", () =>
{
  if (getComputedStyle(navList).maxHeight == "0px")
  {
    navList.style.maxHeight = navList.scrollHeight + "px";
  }
  else if (getComputedStyle(navList).maxHeight == navList.scrollHeight + "px")
  {
    navList.style.maxHeight = "0px";
  }
});
