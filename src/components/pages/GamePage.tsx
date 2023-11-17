//import types
import { MoveName } from "../../../lib/types";

//import react hooks
import { useState } from "react";

import ScoreBoard from "../ScoreBoard";
import MoveSelectionPage from "../../components/pages/MoveSelectionPage";
import ResultPage from "../../components/pages/ResultPage";
import RulesButton from "../buttons/RulesButton";

export default function GamePage() {
  const [isMoveSelected, setIsMoveSelected] = useState(false);
  const [playerMove, setPlayerMove] = useState<MoveName>("");
  // const [scores, setScores] = useState({ playerScore: 0, computerScore: 0 });
  // console.log(scores.playerScore, scores.computerScore);

  return (
    <div className=" w-full h-full flex flex-col">
      <ScoreBoard />
      {!isMoveSelected ? (
        <MoveSelectionPage
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      ) : (
        <ResultPage
          setIsMoveSelected={setIsMoveSelected}
          playerMove={playerMove}
          // setScores={setScores}
          // scores={scores}
        />
      )}
      <RulesButton />
    </div>
  );
}
