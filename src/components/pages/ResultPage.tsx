//import types
import type {
  ResultPageProps,
  MoveName,
  GameOutcome,
} from "../../types/types";

//import states
// import { useEffect } from "react";

//import move components
import RockIcon from "../move-icons/RockIcon";
import PaperIcon from "../move-icons/PaperIcon";
import ScissorsIcon from "../move-icons/ScissorsIcon";

//import play again button
import PlayAgainButton from "../buttons/PlayAgainButton";

//function to generate random number
function generateRandomNumber(): number {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

//function to generate computer move
function generateComputerMove(): MoveName {
  const randomNumber = generateRandomNumber();
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function to compare move
function compareMove(
  playerMove: MoveName,
  computerMove: MoveName
): GameOutcome {
  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "win";
  } else if (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "rock")
  ) {
    return "lose";
  } else {
    return "draw";
  }
}

//function to determine score
// function determineScores(
//   outcome: GameOutcome,
//   setScores: React.Dispatch<
//     React.SetStateAction<{
//       playerScore: number;
//       computerScore: number;
//     }>
//   >,
//   scores: {
//     playerScore: number;
//     computerScore: number;
//   }
// ) {
//   if (outcome === "win") {
//     console.log("added to player");
//     setScores({
//       playerScore: scores.playerScore + 1,
//       computerScore: scores.computerScore,
//     });
//   } else if (outcome === "lose") {
//     console.log("added to computer");
//     setScores({
//       playerScore: scores.playerScore,
//       computerScore: scores.computerScore + 1,
//     });
//   }
// }

export default function ResultPage({
  playerMove,
  setIsMoveSelected,
  // scores,
  // setScores,
}: ResultPageProps) {
  const computerMove = generateComputerMove();
  const outcome = compareMove(playerMove, computerMove);
  // determineScores(outcome, setScores, scores);

  return (
    <div className="flex">
      <div>
        <h2>player picked</h2>
        {playerMove === "rock" ? (
          <RockIcon />
        ) : playerMove === "paper" ? (
          <PaperIcon />
        ) : (
          <ScissorsIcon />
        )}
      </div>
      <div>you {outcome}</div>
      <PlayAgainButton setIsMoveSelected={setIsMoveSelected} />
      <div>
        <h1>computer picked {computerMove}</h1>
        {computerMove === "rock" ? (
          <RockIcon />
        ) : computerMove === "paper" ? (
          <PaperIcon />
        ) : (
          <ScissorsIcon />
        )}
      </div>
    </div>
  );
}
