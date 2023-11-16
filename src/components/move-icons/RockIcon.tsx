import { IndividualIconProps } from "../../../lib/types";
import rockIcon from "../../images/icon-rock.svg";
import MoveIcon from "./MoveIcon";

export default function RockIcon({
  setIsMoveSelected,
  setPlayerMove,
}: IndividualIconProps) {
  return (
    <MoveIcon
      moveName="rock"
      iconSource={rockIcon}
      iconColor="red"
      setIsMoveSelected={setIsMoveSelected}
      setPlayerMove={setPlayerMove}
    />
  );
}
