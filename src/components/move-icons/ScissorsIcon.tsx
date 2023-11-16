import { IndividualIconProps } from "../../../lib/types";
import scissorsIcon from "../../images/icon-scissors.svg";
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
