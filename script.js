const hands = ["rock", "paper", "scissors"];

const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

getHand = (array) => {
  let index = parseInt(Math.random() * 10) % 3;
  return array[index];
};

const p1 = {
  name: "",
  hand: "",
  score: 0,
};

const cpu = {
  name: "computer",
  hand: getHand,
  score: 0,
};

//queryselectors
const submit = document.querySelector(".user-submit");
const handButton = document.querySelector("div.container");
const userName = document.querySelector(".user-name");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const computerHand = document.querySelector(".computer-hand");

//event listeners
submit.addEventListener("click", () => {
  p1.name = document.querySelector("input").value;
  console.log(p1.name);
  userName.innerHTML = p1.name;
  userName.style.color = 'navy';
});

handButton.addEventListener("click", (e) => {
  p1.hand = e.target.parentNode.value;
  playRound();
});

//game logic

playRound = () => {
  cpu.hand = getHand(hands);
  showCPUHand(cpu.hand);

  setTimeout(function () {
    if (p1.hand === cpu.hand) {
      alert("issa tie");
    } else if (winConditions[p1.hand] === cpu.hand) {
      alert("you win");
      p1.score++;
    } else {
      alert("computah win");
      cpu.score++;
    }

    updateScore();

  }, 1000);

  setTimeout(clearCPUHand, 1000);

};

updateScore = () => {
  userScore.innerHTML = p1.score;
  computerScore.innerHTML = cpu.score;
}

showCPUHand = (hand) => {
  const icons = [
    "<i class='bi bi-gem'></i>",
    "<i class='bi bi-sticky'></i>",
    "<i class='bi bi-scissors'></i>",
  ];

  switch (hand) {
    case "rock":
      computerHand.innerHTML = icons[0];
      break;
    case "paper":
      computerHand.innerHTML = icons[1];
      break;
    case "scissors":
      computerHand.innerHTML = icons[2];
      break;
  }
};

clearCPUHand = () => {
  computerHand.innerHTML = "";
}