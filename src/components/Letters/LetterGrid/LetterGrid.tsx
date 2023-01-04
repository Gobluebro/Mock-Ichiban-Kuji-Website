import { PrizeType } from "../letterTypes";
import Letter from "../Letter/Letter";

interface Props {
  prizes: Array<PrizeType>;
}

const LetterGrid = (props: Props) => {
  const { prizes } = props;

  const GridStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div style={GridStyles}>
      {prizes.map((prize, i) => (
        <Letter key={i} prize={prize} />
      ))}
    </div>
  );
};

export default LetterGrid;
