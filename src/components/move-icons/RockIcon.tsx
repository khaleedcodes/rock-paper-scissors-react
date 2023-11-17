//import types
import type { IndividualIconProps } from "../../../lib/types";

//import rock icon
import rockIcon from "../../images/icon-rock.svg";
//import move template
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
