import "./PictureGallery.css";
import { useState } from "react";
import Arrow from "../Arrow/Arrow";

interface Props {
  pictures: Array<string>;
}

const PictureGallery = (props: Props) => {
  const { pictures } = props;

  const totalDisplayedPictures = 4;

  const [selectedImage, setSelectedImage] = useState(0);

  const totalPictures = pictures.length;

  return (
    <>
      <div className="bigPicture">
        <img src={pictures[selectedImage]} />
      </div>
      <button>
        <Arrow color="#FFFFFF" rotation={180} />
      </button>
      <div className="imageGrid">
        {pictures.map((picture, key) => (
          <div
            key={key}
            className={"smallPicture " + (key < 4 ? "shown" : "hidden")}
          >
            <img src={picture} onClick={() => setSelectedImage(key)} />
          </div>
        ))}
      </div>
      <button>
        <Arrow color="#FFFFFF" />
      </button>
    </>
  );
};

export default PictureGallery;
