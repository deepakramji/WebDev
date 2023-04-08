var isRunning = false;
var queue = [];
var level = 0;
var chkLevel = 0;

$(document).on("keydown", function (event) {
  if (!isRunning) startGame();
});

function startGame() {
  queue = [];
  isRunning = true;
  level = 0;
  updateSequence();
  $("h1").text("Game In Progress...");
}

function updateSequence() {
  chkLevel = 0;
  next = Math.ceil(Math.random() * 4);
  queue.push(next.toString());
  buttonAnimation(next);
  level++;
  console.log("Queue length : ", queue);
}

$("button").click(function () {
  var k = $(this)[0].textContent;
  checkSequence(k);
});

function checkSequence(key) {
  console.log(level, chkLevel);
  if (queue[chkLevel] === key) {
    chkLevel++;
    if (level == chkLevel) {
      updateSequence();
    }
  } else {
    queue = [];
    chkLevel = 0;
    isRunning = false;
    $("h1").text("You Failed...Press any key to continue");
  }
}

function buttonAnimation(key) {
  var activeButton = jQuery(".btn" + key);
  if (activeButton) {
    activeButton[0].classList.add("pressed");
    setTimeout(function () {
      activeButton[0].classList.remove("pressed");
    }, 600);
  }
}

/*

function Async(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending " + key);
      buttonAnimation(key);
    }, 500);
  });
}
*/
