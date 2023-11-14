import { type MoveIconProps } from "../lib/types";

export default function MoveIcon({ iconSource, iconColor }: MoveIconProps) {
  return (
    <button
      className={`flex items-center justify-center bg-slate-50 border-[20px] border-${iconColor}-700 rounded-full w-40 h-40`}
    >
      <div>
        <img src={iconSource} />
      </div>
    </button>
  );
}
