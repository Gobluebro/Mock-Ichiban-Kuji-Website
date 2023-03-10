import { PrizeType } from "../letterTypes";

interface Props {
  prize: PrizeType;
}

const Letter = (props: Props) => {
  const { letterValue, isLargeLetter } = props.prize;

  const largeLetterFont = "Italianno";

  const spanStyle = {
    width: isLargeLetter ? "100px" : "50px",
    height: isLargeLetter ? "100px" : "50px",
    fontFamily: isLargeLetter ? largeLetterFont : "",
    fontSize: isLargeLetter ? "100px" : "50px",
  };

  return <span style={spanStyle}>{letterValue.toUpperCase()}</span>;
};

export default Letter;
