import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import SwipeableViews from "react-swipeable-views";

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

  useEffect(() => {
    let newIndex = activeIndex + 1;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    const timtOut = setTimeout(() => {
      setActiveIndex(newIndex);
    }, 5000);

    return () => clearTimeout(timtOut);
  }, [activeIndex, items.length]);

  function handleChangeIndex(index) {
    if (index > items.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div className="carousel">
      <SwipeableViews
        enableMouseEvents
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
        animateTransitions
        springConfig={{
          duration: "0.6s",
          easeFunction: "ease-out",
          delay: "0s",
        }}
      >
        {items.map((item, index) => (
          <CarouselItem item={item} index={index} key={index} />
        ))}
        <CarouselItem item={items[0]} index={0} />
      </SwipeableViews>
    </div>
  );
}

export default Carousel;
