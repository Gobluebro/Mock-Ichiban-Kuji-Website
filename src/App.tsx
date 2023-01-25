import LetterGrid from "./components/Letters/LetterGrid/LetterGrid";
import Navbar from "./components/NavBar/Navbar";
import PictureGallery from "./components/PictureGallery/PictureGallery";
import { prizes } from "./data/PrizeData";

const pictures = prizes.map((prize) => prize.imageUrl);

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <PictureGallery pictures={pictures} />
        <LetterGrid prizes={prizes} />
      </main>
    </>
  );
}

export default App;
