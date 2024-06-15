//import types
import type { PlayAgainButtonProps } from "../../types/types";

export default function PlayAgainButton({
  setIsMoveSelected,
}: PlayAgainButtonProps) {
  return (
    <button
      onClick={() => {
        setIsMoveSelected !== undefined && setIsMoveSelected(false);
      }}
    >
      PLAY AGAIN
    </button>
  );
}
