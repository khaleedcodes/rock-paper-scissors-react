import ScoreBoard from "./ScoreBoard";
import PickMovePage from "./MoveSelector";
import RulesButton from "./RulesButton";
export default function GamePage() {
  return (
    <div className=" w-full h-full flex flex-col">
      <ScoreBoard />
      <PickMovePage />
      <RulesButton />
    </div>
  );
}
