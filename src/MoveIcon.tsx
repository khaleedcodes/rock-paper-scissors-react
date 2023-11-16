import { type MoveIconProps } from "../lib/types";

/**
 * A component that displays a move icon and handles click events.
 * @param moveName - The name of the move.
 * @param iconSource - The source URL of the move icon.
 * @param iconColor - The color of the move icon.
 * @param onClick - The function to be called when the icon is clicked.
 * @returns A button element containing the move icon.
 */
export default function MoveIcon({
  moveName,
  iconSource,
  iconColor,
  onClick,
}: MoveIconProps) {
  console.log(moveName);
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
      className={`flex items-center justify-center bg-slate-50 border-[20px] border-${iconColor}-700 rounded-full w-40 h-40`}
    >
      <div>
        <img src={iconSource} />
      </div>
    </button>
  );
}
