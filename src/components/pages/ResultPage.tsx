import type {
  ResultPageProps,
  MoveName,
  GameOutcome,
} from "../../../lib/types";
import RockIcon from "../move-icons/RockIcon";
import PaperIcon from "../move-icons/PaperIcon";
import ScissorsIcon from "../move-icons/ScissorsIcon";
import PlayAgainButton from "../buttons/PlayAgainButton";

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

export default function ResultPage({
  playerMove,
  setIsMoveSelected,
}: ResultPageProps) {
  const computerMove = generateComputerMove();
  const outcome = compareMove(playerMove, computerMove);
  console.log(outcome);
  return (
    <div>
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
      <PlayAgainButton setIsMoveSelected={setIsMoveSelected}/>
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
