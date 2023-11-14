import rockIcon from "./images/icon-rock.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorsIcon from "./images/icon-scissors.svg";

import MoveIcon from "./MoveIcon";

export default function MoveSelector() {
  return (
    <div className="flex">
      <MoveIcon iconSource={rockIcon} iconColor="red" />
      <MoveIcon iconSource={paperIcon} iconColor="green" />
      <MoveIcon iconSource={scissorsIcon} iconColor="blue" />
    </div>
  );
}
