//import types
import { type MoveIconProps } from "../../types/types";

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
      className={`flex items-center justify-center bg-slate-50 border-[20px] rounded-full w-40 h-40`}
      style={{ borderColor: iconColor }}
    >
      <div>
        <img src={iconSource} />
      </div>
    </button>
  );
}
