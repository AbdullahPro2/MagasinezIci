import React from "react";
import { useNavigate } from "react-router-dom";

function CarouselItem({ item, index }) {
  const navigate = useNavigate();
  function handleShopNow(category) {
    navigate(`/category/${category}`);
  }
  return (
    <div className={`carousel-item item-${index}`}>
      <img src={item.img} alt="carosel item" />
      <div className="carousel-details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button
          onClick={() => handleShopNow(item.category)}
          className="shop-now-btn"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default CarouselItem;
