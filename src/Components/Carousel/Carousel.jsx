import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";
function Carousel(props) {
  const { slides } = props;
  // slide image (carousel)
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    // if current is first set it to last slide
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    // if current are in last slide set it to first slide
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative rounded-s">
      <div
        className={`flex transition ease-out duration-400 `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <img src={s.img} key={s.id} />
        ))}
      </div>
      {/* arrow next and previous */}
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-1 text-white text-2xl">
        <button className="rounded-full bg-transparent" onClick={previousSlide}>
          <FaArrowCircleLeft />
        </button>
        <button className="rounded-full bg-transparent" onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div>
      {/*  circle  */}
      <div className="absolute bottom-0 py-7 flex justify-center gap-2 w-full">
        {slides.map((s) => (
          <div
            key={s.id}
            onClick={() => setCurrent(s.id - 1)}
            className={`rounded-full w-5 h-5 ${
              s.id - 1 == current ? "bg-gray-400" : "bg-gray-700"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
