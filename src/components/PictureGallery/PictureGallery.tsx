import "./PictureGallery.css";
import { useState } from "react";

interface Props {
  pictures: Array<string>;
}

const PictureGallery = (props: Props) => {
  const { pictures } = props;

  const totalDisplayedImages = 4;

  const [selectedImage, setSelectedImage] = useState(0);

  const totalPictures = pictures.length;

  return (
    <>
      <div className="bigPicture">
        <img src={pictures[selectedImage]} />
      </div>
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
    </>
  );
};

export default PictureGallery;
