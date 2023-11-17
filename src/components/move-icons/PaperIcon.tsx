//import types
import type { IndividualIconProps } from "../../../lib/types";

//import paper icon
import paperIcon from "../../images/icon-paper.svg";
//import move template
import MoveIcon from "./MoveIcon";

export default function PaperIcon({
  setIsMoveSelected,
  setPlayerMove,
}: IndividualIconProps) {
  return (
    <MoveIcon
      moveName="paper"
      iconSource={paperIcon}
      iconColor="green"
      setIsMoveSelected={setIsMoveSelected}
      setPlayerMove={setPlayerMove}
    />
  );
}
