const switchbtn = document.querySelector(".box");
const close = document.querySelector(".box1");
const switchbtn2 = document.querySelector(".box2");
const menubar = document.querySelector(".box3");
const navbar = document.querySelector("#respnav");
switchbtn.addEventListener("click", function () {
  if (switchbtn.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
switchbtn2.addEventListener("click", function () {
  if (switchbtn2.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
close.addEventListener("click", function () {
  navbar.classList = "disablemenu";
});
menubar.addEventListener("click", function () {
  navbar.classList.remove("disablemenu");
});
