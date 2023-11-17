type MoveName = "rock" | "paper" | "scissors" | "";
type IconColor = "red" | "green" | "blue";
type GameOutcome = "win" | "lose" | "draw";

type IndividualIconProps = {
  setIsMoveSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerMove?: React.Dispatch<React.SetStateAction<MoveName>>;
};

type MoveIconProps = {
  moveName: MoveName;
  iconSource: string;
  iconColor: IconColor;
} & IndividualIconProps;

type MoveSelectionPageProps = IndividualIconProps;

type ResultPageProps = {
  playerMove: MoveName;
  setIsMoveSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  scores: {
    playerScore: number;
    computerScore: number;
  };
  setScores: React.Dispatch<
    React.SetStateAction<{
      playerScore: number;
      computerScore: number;
    }>
  >;
};

type PlayAgainButtonProps = {
  setIsMoveSelected?: React.Dispatch<React.SetStateAction<boolean>>;
};

// type ScoreBoardProps ={

// }

export type {
  GameOutcome,
  MoveName,
  IndividualIconProps,
  MoveIconProps,
  MoveSelectionPageProps,
  ResultPageProps,
  PlayAgainButtonProps,
};
