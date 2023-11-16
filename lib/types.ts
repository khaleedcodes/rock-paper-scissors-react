type MoveName = "rock" | "paper" | "scissors";
type IconColor = "red" | "green" | "blue";

type MoveIconProps = {
  moveName: MoveName;
  iconSource: string;
  iconColor: IconColor;
  setIsMoveSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerMove: React.Dispatch<React.SetStateAction<string>>;
};

type MoveSelectionPageProps = {
  setIsMoveSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerMove: React.Dispatch<React.SetStateAction<string>>;
};

type ResultPageProps = {
  playerMove: string;
};
export type { MoveIconProps, MoveSelectionPageProps, ResultPageProps };
