import { Carousel } from "react-elastic-carousel";

import "./slider.css";

const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
      <div className="item">Item 4</div>
      <div className="item">Item 5</div>
      <div className="item">Item 6</div>
      <div className="item">Item 7</div>
      <div className="item">Item 8</div>
    </Carousel>
  );
};

export default Slider;
