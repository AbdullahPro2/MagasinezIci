import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Men's Collection",
      description: "From t-shirt jeans jacket watches bags sunglasses",
      img: require("../imgs/men.jpg"),
    },
    {
      title: "Women's Collection",
      description:
        "Tops Leggings Coats Outerwear Jewelry Accessories Handbags Purses Eyewear",
      img: require("../imgs/women.jpg"),
    },
    {
      title: "Jewelery",
      description:
        "Jewelry Necklaces Bracelets Earrings Rings Brooches Charms Pendants Anklets Jewelry Sets",
      img: require("../imgs/jewelery.jpg"),
    },
    {
      title: "Electronics",
      description:
        "Smartphones Laptops Tablets Headphones Smartwatches Cameras Speakers Printers Monitors Smart Home Devices",
      img: require("../imgs/electronics.jpg"),
    },
  ];
  function updateIndex(newIndex) {
    newIndex += activeIndex;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    console.log(newIndex);
    console.log("clicked");
    setActiveIndex(newIndex);
  }

  // useEffect(() => {
  //   let newIndex = activeIndex + 1;
  //   if (newIndex < 0) {
  //     newIndex = items.length - 1;
  //   } else if (newIndex >= items.length) {
  //     newIndex = 0;
  //   }
  //   const timtOut = setTimeout(() => {
  //     setActiveIndex(newIndex);
  //   }, 5000);

  //   return () => clearTimeout(timtOut);
  // }, [activeIndex, items.length]);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} index={index} />
        ))}
      </div>
      <button onClick={() => updateIndex(1)} className="left-arrow arrow">
        &rarr;
      </button>
      <button onClick={() => updateIndex(-1)} className="right-arrow arrow">
        &larr;
      </button>
    </div>
  );
}

export default Carousel;