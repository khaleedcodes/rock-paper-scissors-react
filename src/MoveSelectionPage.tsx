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
  setPlayerMove,
}: MoveSelectionPageProps) {
  return (
    <div className="flex">
      <MoveIcon
        moveName="rock"
        iconSource={rockIcon}
        iconColor="red"
        setIsMoveSelected={setIsMoveSelected}
        setPlayerMove={setPlayerMove}
      />
      <MoveIcon
        moveName="paper"
        iconSource={paperIcon}
        iconColor="green"
        setIsMoveSelected={setIsMoveSelected}
        setPlayerMove={setPlayerMove}
      />
      <MoveIcon
        moveName="scissors"
        iconSource={scissorsIcon}
        iconColor="blue"
        setIsMoveSelected={setIsMoveSelected}
        setPlayerMove={setPlayerMove}
      />
    </div>
  );
}
