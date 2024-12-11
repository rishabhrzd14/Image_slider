import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  function handleClickPrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleClickNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  async function fetchImages(getUrl) {
    try {
      setLoadingState(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoadingState(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loadingState) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Occured ! {errorMessage}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleClickPrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItems, index) => (
            <img
              key={imageItems.id}
              alt={imageItems.download_url}
              src={imageItems.download_url}
              className={
                currentImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleClickNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={
                  currentImage === index
                    ? "current-indicator"
                    : "current-indicator hide-current-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
