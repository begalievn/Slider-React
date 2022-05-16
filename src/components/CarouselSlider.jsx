import { useState, useEffect } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function CarouselSlider({ children, transitionSpeed = 300 }) {
  const [current, setCurrent] = useState(1);
  const [stateSlides, setStateSlides] = useState(children);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);

  useEffect(() => {
    const slidesWithClones = [...children];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
  }, []);

  useEffect(() => {
    if (current === stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setCurrent(2);
      }, transitionSpeed);
    }

    if (current === 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (current === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setCurrent(stateSlides.length - 2);
      }, transitionSpeed);
    }

    if (current === stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [current]);

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [leftAndRightDisabled]);

  function handleLeftArrow() {
    setCurrent(current - 1);
  }

  function handleRightArrow() {
    setCurrent(current + 1);
  }

  const calculateLeftMargin = () => {
    return "-" + current * 332 + "px";
  };

  // console.log(children);
  return (
    <div className="container">
      <FaArrowCircleLeft
        className={`arrow ${leftAndRightDisabled ? "disabled" : ""}`}
        onClick={!leftAndRightDisabled ? handleLeftArrow : null}
      />
      <div className="inner-container">
        <div
          className={`carousel ${hasTransitionClass ? "transition" : ""}`}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((item, index) => {
            return (
              <div
                key={index}
                className={`imageDiv ${index === current + 1 ? "active" : ""}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <FaArrowCircleRight
        className={`arrow ${leftAndRightDisabled ? "disabled" : ""}`}
        onClick={!leftAndRightDisabled ? handleRightArrow : null}
      />
    </div>
  );
}

export default CarouselSlider;
