//import types
import { IndividualIconProps } from "../../types/types";

//import rock icon
import scissorsIcon from "../../assets/images/icon-scissors.svg";
//import move template
import MoveIcon from "./MoveIcon";

export default function ScissorsIcon({
  setIsMoveSelected,
  setPlayerMove,
}: IndividualIconProps) {
  return (
    <MoveIcon
      moveName="scissors"
      iconSource={scissorsIcon}
      iconColor="blue"
      setIsMoveSelected={setIsMoveSelected}
      setPlayerMove={setPlayerMove}
    />
  );
}
