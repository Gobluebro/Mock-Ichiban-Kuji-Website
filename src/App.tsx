import LetterGrid from "./components/Letters/LetterGrid/LetterGrid";
import Navbar from "./components/NavBar/Navbar";
import { prizes } from "./data/PrizeData";

const pictures = prizes.map((prize) => prize.imageUrl);

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <LetterGrid prizes={prizes} />
      </main>
    </>
  );
}

export default App;
