//import types
import { MoveSelectionPageProps } from "../lib/types";

//import icons
import rockIcon from "./images/icon-rock.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorsIcon from "./images/icon-scissors.svg";

//import move icon component
import MoveIcon from "./MoveIcon";

/**
 * Renders a component that allows the user to select a move (rock, paper, or scissors).
 * @param {Object} props - The component props.
 * @param {Function} props.setIsMoveSelected - A function to set whether a move has been selected.
 * @returns {JSX.Element} - The MoveSelector component.
 */
export default function MoveSelector({
  setIsMoveSelected,
}: MoveSelectionPageProps) {
  return (
    <div className="flex">
      <MoveIcon
        onClick={setIsMoveSelected}
        moveName="rock"
        iconSource={rockIcon}
        iconColor="red"
      />
      <MoveIcon
        onClick={setIsMoveSelected}
        moveName="paper"
        iconSource={paperIcon}
        iconColor="green"
      />
      <MoveIcon
        onClick={setIsMoveSelected}
        moveName="scissors"
        iconSource={scissorsIcon}
        iconColor="blue"
      />
    </div>
  );
}
