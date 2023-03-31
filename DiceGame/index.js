function play() {
  var rand1 = Math.ceil(Math.random() * 6);
  var rand2 = Math.ceil(Math.random() * 6);

  var imgs = document.getElementsByClassName("dice");
  imgs[0].src = "images/dice" + rand1.toString() + ".png";
  imgs[1].src = "images/dice" + rand2.toString() + ".png";

  var res = document.getElementsByClassName("result");
  var winner;
  if (rand1 > rand2) winner = "Player 1";
  else if (rand1 < rand2) winner = "Player 2";
  if (winner) res[0].textContent = "The winner is " + winner;
  else res[0].textContent = "Its a tie";
}
