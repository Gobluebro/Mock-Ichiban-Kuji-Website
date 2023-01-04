import { PrizeType } from "../letterTypes";

interface Props {
  prize: PrizeType;
}

const Letter = (props: Props) => {
  const { letterValue, isLargeLetter } = props.prize;

  const largeLetterFont = "largeLetterFont";
  const normalLetterFont = "normalLetterFont";

  const spanStyle = {
    fontFamily: isLargeLetter ? largeLetterFont : normalLetterFont,
  };

  return <span style={spanStyle}>{letterValue}</span>;
};

export default Letter;
