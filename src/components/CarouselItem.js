import React from "react";

function CarouselItem({ item, index }) {
  return (
    <div className={`carousel-item item-${index}`}>
      <img src={item.img} alt="carosel item" />
      <div className="carousel-details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
