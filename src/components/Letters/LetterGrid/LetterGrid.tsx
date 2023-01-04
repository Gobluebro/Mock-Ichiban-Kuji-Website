import { PrizeType } from "../letterTypes";
import Letter from "../Letter/Letter";

interface Props {
  prizes: Array<PrizeType>;
}

const LetterGrid = (props: Props) => {
  const { prizes } = props;

  return (
    <div>
      {prizes.map((prize, i) => (
        <Letter key={i} prize={prize} />
      ))}
    </div>
  );
};

export default LetterGrid;
