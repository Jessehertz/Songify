const switchbtn = document.querySelector(".box");
const switchbtn2 = document.querySelector(".box2");
switchbtn.addEventListener("click", function () {
  if (switchbtn.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
switchbtn2.addEventListener("click", function () {
  if (switchbtn.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
