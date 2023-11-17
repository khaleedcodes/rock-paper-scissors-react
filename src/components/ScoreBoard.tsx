import logo from "../images/logo.svg";
export default function ScoreBoard() {
  return (
    <div className="border-2 border-black flex">
      <img src={logo} alt="logo" />
      <div>
        <h2>Computer</h2>
        <h2></h2>
      </div>
      <div>
        <h2>Player</h2>
        <h2></h2>
      </div>
    </div>
  );
}
