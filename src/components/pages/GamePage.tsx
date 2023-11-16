import { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import MoveSelectionPage from "../../components/pages/MoveSelectionPage";
import ResultPage from "../../components/pages/ResultPage";
import RulesButton from "../buttons/RulesButton";
import { MoveName } from "../../../lib/types";
/**
 * Renders the game page component.
 * @returns The game page component.
 */
export default function GamePage() {
  const [isMoveSelected, setIsMoveSelected] = useState(false);
  const [playerMove, setPlayerMove] = useState<MoveName>("");

  return (
    <div className=" w-full h-full flex flex-col">
      <ScoreBoard />
      {!isMoveSelected ? (
        <MoveSelectionPage
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      ) : (
        <ResultPage setIsMoveSelected={setIsMoveSelected} playerMove={playerMove} />
      )}
      <RulesButton />
    </div>
  );
}
