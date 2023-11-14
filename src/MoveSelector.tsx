import rockIcon from "./images/icon-rock.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorsIcon from "./images/icon-scissors.svg";

import MoveIcon from "./MoveIcon";

export default function MoveSelector() {
  return (
    <div className="flex">
      <MoveIcon moveName="rock" iconSource={rockIcon} iconColor="red" />
      <MoveIcon moveName="paper" iconSource={paperIcon} iconColor="green" />
      <MoveIcon
        moveName="scissors"
        iconSource={scissorsIcon}
        iconColor="blue"
      />
    </div>
  );
}
