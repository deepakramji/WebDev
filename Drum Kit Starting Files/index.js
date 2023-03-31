var buttons = document.getElementsByTagName("button"); //.addEventListener("click", handleClick);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

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

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
