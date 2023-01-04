import { PrizeType } from "../letterTypes";

interface Props {
  prize: PrizeType;
}

const Letter = (props: Props) => {
  const { letterValue, isLargeLetter } = props.prize;

  const largeLetterFont = "Italianno";
  const normalLetterFont = "Arial";

  const spanStyle = {
    fontFamily: isLargeLetter ? largeLetterFont : normalLetterFont,
    fontSize: isLargeLetter ? "100px" : "50px",
  };

  return <span style={spanStyle}>{letterValue.toUpperCase()}</span>;
};

export default Letter;
