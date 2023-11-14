type MoveName = "rock" | "paper" | "scissors";
type IconColor = "red" | "green" | "blue";

type MoveIconProps = {
  moveName: MoveName;
  iconSource: string;
  iconColor: IconColor;
};

export type { MoveIconProps };
