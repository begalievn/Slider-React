import { useState, useEffect } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function CarouselSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(2);

  function next() {
    setActiveIndex(activeIndex + 1);
  }

  function prev() {
    setActiveIndex(activeIndex - 1);
  }

  return (
    <div className="container">
      <FaArrowCircleLeft className={`arrow`} onClick={prev} />
      <div className="inner-container">
        <div className="carousel">
          <div className={`imageDiv left`}>{children[activeIndex - 1]}</div>
          <div className={`imageDiv front active`}>{children[activeIndex]}</div>
          <div className={`imageDiv right`}>{children[activeIndex + 1]}</div>
        </div>
      </div>
      <FaArrowCircleRight className={`arrow`} onClick={next} />
    </div>
  );
}

export default CarouselSlider;
