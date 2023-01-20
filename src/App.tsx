import LetterGrid from "./components/Letters/LetterGrid/LetterGrid";
import Navbar from "./components/NavBar/Navbar";

const prizes = [
  { letterValue: "a", isLargeLetter: true },
  { letterValue: "b", isLargeLetter: true },
  { letterValue: "c", isLargeLetter: true },
  { letterValue: "d", isLargeLetter: true },
  { letterValue: "e", isLargeLetter: false },
  { letterValue: "f", isLargeLetter: false },
  { letterValue: "g", isLargeLetter: false },
  { letterValue: "h", isLargeLetter: false },
];

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
