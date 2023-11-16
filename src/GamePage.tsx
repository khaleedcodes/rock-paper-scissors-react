import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import MoveSelectionPage from "./MoveSelectionPage";
import ResultPage from "./ResultPage";
import RulesButton from "./RulesButton";
/**
 * Renders the game page component.
 * @returns The game page component.
 */
export default function GamePage() {
  const [isMoveSelected, setIsMoveSelected] = useState(false);
  const [playerMove, setPlayerMove] = useState("");

  return (
    <div className=" w-full h-full flex flex-col">
      <ScoreBoard />
      {!isMoveSelected ? (
        <MoveSelectionPage
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      ) : (
        <ResultPage playerMove={playerMove} />
      )}
      <RulesButton />
    </div>
  );
}
