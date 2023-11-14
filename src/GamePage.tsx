import ScoreBoard from "./ScoreBoard";
import PickMovePage from "./MoveSelector";
import RulesButton from "./RulesButton";
export default function GamePage() {
  return (
    <div>
      <ScoreBoard />
      <PickMovePage />
      <RulesButton />
    </div>
  );
}
