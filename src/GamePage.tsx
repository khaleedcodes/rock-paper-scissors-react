import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import MoveSelector from "./MoveSelectionPage";
import Result from "./Result";
import RulesButton from "./RulesButton";
/**
 * Renders the game page component.
 * @returns The game page component.
 */
export default function GamePage() {
  const [isMoveSelected, setIsMoveSelected] = useState(false);
  // let playerMove = "";
  // function generatePlayerMove(enteredPlayerMove: string) {
  //   playerMove = enteredPlayerMove;
  // }

  // console.log(playerMove);
  return (
    <div className=" w-full h-full flex flex-col">
      <ScoreBoard />
      {!isMoveSelected ? (
        <MoveSelector setIsMoveSelected={setIsMoveSelected} />
      ) : (
        <Result />
      )}
      <RulesButton />
    </div>
  );
}
