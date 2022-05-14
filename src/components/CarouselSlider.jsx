import { useState, useEffect } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function CarouselSlider({ children }) {
  const [current, setCurrent] = useState(0);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const length = children.length;

  // useEffect(() => {
  //   setButtonClicked(false);
  //   console.log("useEffect affected");
  // }, [isButtonClicked]);

  console.log(isButtonClicked);

  function handleLeftArrow() {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
    setButtonClicked(false);
    setButtonClicked(true);
  }

  function handleRightArrow() {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }

  function renderCarousel(children) {
    let leftSideImageIndex = current === 0 ? length - 1 : current - 1;
    let rightSideImageIndex = current === length - 1 ? 0 : current + 1;
    return (
      <>
        <div className="imageDiv left-image">
          {children.map((item, index) =>
            leftSideImageIndex === index ? item : null
          )}
        </div>
        <div className="imageDiv front-image">
          {children.map((item, index) => (current === index ? item : null))}
        </div>
        <div
          className={
            isButtonClicked
              ? "right-image imageDiv right-image-animation"
              : "imageDiv right-image test"
          }
        >
          {children.map((item, index) =>
            rightSideImageIndex === index ? item : null
          )}
        </div>
      </>
    );
  }

  // console.log(children);
  return (
    <div className="container">
      <FaArrowCircleLeft className="arrow" onClick={handleLeftArrow} />
      <div className="carousel">{renderCarousel(children)}</div>
      <FaArrowCircleRight className="arrow" onClick={handleRightArrow} />
      <div className="simple-div">Click Me</div>
    </div>
  );
}

export default CarouselSlider;
