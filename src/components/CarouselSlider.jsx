import { useState, useEffect } from 'react';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function CarouselSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let arrImages = [];

    if (children === undefined) {
      return;
    }

    Array.isArray(children)
      ? (arrImages = [...children])
      : (arrImages = [children]);

    let i = 0;
    while (arrImages.length < 6) {
      arrImages.push(arrImages[i]);
      i++;
    }
    setImages([...arrImages]);
  }, [children]);

  console.log(images);

  let leftIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  let rightIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  let hidedLeftIndex = leftIndex ? leftIndex - 1 : images.length - 1;
  let hidedRightIndex = rightIndex === images.length - 1 ? 0 : rightIndex + 1;

  function next() {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }

  function prev() {
    setActiveIndex(activeIndex ? activeIndex - 1 : images.length - 1);
  }

  console.log(
    hidedLeftIndex,
    leftIndex,
    activeIndex,
    rightIndex,
    hidedRightIndex
  );

  return (
    <div className="container">
      <FaArrowCircleLeft className={`arrow`} onClick={prev} />
      <div className="inner-container">
        <div className="carousel">
          {/* */}
          <div
            id="hidedLeft"
            key={hidedLeftIndex}
            className={`imageDiv hidedLeft`}
          >
            {images[hidedLeftIndex]}
          </div>
          <div
            id="left"
            key={leftIndex}
            className={`imageDiv left`}
            onClick={prev}
          >
            {images[leftIndex]}
          </div>
          <div id="active" key={activeIndex} className={`imageDiv active`}>
            {images[activeIndex]}
          </div>
          <div
            id="right"
            key={rightIndex}
            className={`imageDiv right`}
            onClick={next}
          >
            {images[rightIndex]}
          </div>
          <div
            id="hidedRight"
            key={hidedRightIndex}
            className={`imageDiv hidedRight`}
          >
            {images[hidedRightIndex]}
          </div>
          {/* */}
        </div>
      </div>
      <FaArrowCircleRight className={`arrow`} onClick={next} />
    </div>
  );
}

export default CarouselSlider;
