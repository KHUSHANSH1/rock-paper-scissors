let words = ["rock", "paper", "scissors"];

let input;
let computerChoice;

function chooseer() {
  input = window.prompt("Enter among (rock, paper, scissors): ").toLowerCase();
  computerChoice = words[Math.floor(Math.random() * words.length)];

  if (input === computerChoice) {
    alert("A fair tie!");
  } else if ((input === "rock" && computerChoice === "scissors") ||
               (input === "paper" && computerChoice === "rock") ||
               (input === "scissors" && computerChoice === "paper")) {
    alert("You won! Computer chose " + computerChoice);
  } else {
    alert("You lost! Computer chose " + computerChoice);
  }
}
