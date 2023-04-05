$("button").click(function () {
  this.toggle();
  handleClick(this.innerHTML);
  buttonAnimation(this.innerHTML);
});

document.addEventListener("keydown", function (event) {
  handleClick(event.key);
  buttonAnimation(event.key);
});

function handleClick(fn) {
  var fullPath = "sounds/" + fn + ".mp3";
  var audio = new Audio(fullPath);
  audio.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
