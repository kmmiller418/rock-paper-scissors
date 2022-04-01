const hands = ["rock", "paper", "scissors"];

const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

getHand = (array) => {
  let index = parseInt(Math.random() * 10) % 3;
  return array[index];
}

let p1 = {
    name: "",
    hand: "",
    score: 0
};

let cpu = {
    name: "computer",
    hand: getHand,
    score: 0
};

//queryselectors
const submit = document.querySelector(".user-submit");
const handButton = document.querySelector("div.container");


//event listeners
submit.addEventListener("click", () => {
  p1.name = document.querySelector("input").value;
  console.log(p1.name);
});

handButton.addEventListener("click", (e) => {
    p1.hand = e.target.parentNode.value;
    playRound();
})


//game logic

playRound = () => {
  cpu.hand = getHand(hands);

  if (p1.hand === cpu.hand) {
      alert('issa tie')
      return null;
} else if (winConditions[p1.hand] === cpu.hand) {
    alert('you win');
    return p1;
} else {
    alert('computah win');
    return cpu;
}
};
