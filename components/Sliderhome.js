import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Sliderhome() {
  return (
    <div className="relative max-w-6xl m-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img className="h-96" src="https://picsum.photos/200/300/" />
        </div>
        <div>
          <img className="h-96" src="https://picsum.photos/200/300/" />
        </div>
      </Carousel>
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-gray-100"></div>
    </div>
  );
}

export default Sliderhome;
