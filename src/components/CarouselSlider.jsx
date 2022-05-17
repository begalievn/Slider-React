import { useState, useEffect } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function CarouselSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = children.length;

  // useEffect(() => {
  //   if (children === undefined) {
  //     return;
  //   }

  //   Array.isArray(children)
  //     ? setImages([...children])
  //     : setImages([...images, children]);

  //   for (let i = images.length; i < 6; i++) {
  //     setImages((prevState) => [...prevState, ...prevState]);
  //   }
  // }, []);

  let leftIndex = activeIndex ? activeIndex - 1 : length - 1;
  let rightIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;

  let hidedLeftIndex = leftIndex ? leftIndex - 1 : length - 1;
  let hidedRightIndex = rightIndex === length - 1 ? 0 : rightIndex + 1;

  function next() {
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  }

  function prev() {
    setActiveIndex(activeIndex ? activeIndex - 1 : length - 1);
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
            {children[hidedLeftIndex]}
          </div>
          <div id="left" key={leftIndex} className={`imageDiv left`}>
            {children[leftIndex]}
          </div>
          <div id="active" key={activeIndex} className={`imageDiv active`}>
            {children[activeIndex]}
          </div>
          <div id="right" key={rightIndex} className={`imageDiv right`}>
            {children[rightIndex]}
          </div>
          <div
            id="hidedRight"
            key={hidedRightIndex}
            className={`imageDiv hidedRight`}
          >
            {children[hidedRightIndex]}
          </div>
          {/* */}
        </div>
      </div>
      <FaArrowCircleRight className={`arrow`} onClick={next} />
    </div>
  );
}

export default CarouselSlider;
