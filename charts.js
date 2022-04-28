const input = document.querySelector(".txtinput");
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && input.value == "Rave and Roses") {
    window.open("rnr.html");
  } else if (event.keyCode === 13 && input.value == "Certified Lover Boy") {
    window.open("clb.html");
  } else if (event.keyCode === 13) {
    window.open("album.html");
  }
});
