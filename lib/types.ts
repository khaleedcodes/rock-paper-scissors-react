type MoveName = "rock" | "paper" | "scissors";
type IconColor = "red" | "green" | "blue";

type MoveIconProps = {
  moveName: MoveName;
  iconSource: string;
  iconColor: IconColor;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

type MoveSelectionPageProps = {
  setIsMoveSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
export type { MoveIconProps, MoveSelectionPageProps };
