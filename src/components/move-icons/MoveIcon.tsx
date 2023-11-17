//import types
import { type MoveIconProps } from "../../../lib/types";

export default function MoveIcon({
  moveName,
  iconSource,
  iconColor,
  setIsMoveSelected,
  setPlayerMove,
}: MoveIconProps) {
  return (
    <button
      onClick={() => {
        setIsMoveSelected !== undefined && setIsMoveSelected(true);
        setPlayerMove !== undefined && setPlayerMove(moveName);
      }}
      className={`flex items-center justify-center bg-slate-50 border-[20px] border-${iconColor}-700 rounded-full w-40 h-40`}
    >
      <div>
        <img src={iconSource} />
      </div>
    </button>
  );
}
