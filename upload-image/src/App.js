import React, { useState } from "react";
import * as S from "./style";
import { FcOpenedFolder } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <S.Layout>
      <S.Container>
        <h2>Upload your image</h2>
        <p>upload with preview 😁</p>
        <S.BoxUpload>
          <div className="image-upload">
            {isUploaded ? (
              <S.ImagePreview>
                <AiFillCloseCircle
                  size="30"
                  id="close-icon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                <img id="uploaded-image" src={image} alt="uploaded-img" />
              </S.ImagePreview>
            ) : (
              <>
                <label htmlFor="upload-input">
                  <FcOpenedFolder size="100" />
                  <p style={{ color: "#444" }}>Click to upload image</p>
                </label>
                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            )}
          </div>
        </S.BoxUpload>
      </S.Container>
    </S.Layout>
  );
}

export default App;
