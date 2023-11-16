import type { ResultPageProps } from "../lib/types";

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
function generateComputerMove() {
  const randomNumber = generateRandomNumber();
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
export default function ResultPage({ playerMove }: ResultPageProps) {
  const computerMove = generateComputerMove();
  console.log("player move: " + playerMove);
  console.log("computer move: " + computerMove);
  return (
    <div>
      <div>
        <h2>player picked</h2>
      </div>
      
      <div>
        <h1>computer picked {computerMove}</h1>
      </div>
    </div>
  );
}
