//import types
import type { MoveSelectionPageProps } from "../../types/types";

//import move icon component
import RockIcon from "../move-icons/RockIcon";
import PaperIcon from "../move-icons/PaperIcon";
import ScissorsIcon from "../move-icons/ScissorsIcon";

export default function MoveSelector({
  setIsMoveSelected,
  setPlayerMove,
}: MoveSelectionPageProps) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex gap-10">
        <RockIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
        <PaperIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      </div>
      <div className="flex justify-center">
        <ScissorsIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      </div>
    </div>
  );
}
