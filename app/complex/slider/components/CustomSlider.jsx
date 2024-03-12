import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const url = "https://fakestoreapi.com/products";

const CustomSlider = () => {
  const [products, setProducts] = useState([]);

  const getProductsFromBackend = async () => {
    const data = await fetch(url);
    const products = await data.json();
    setProducts(products);
  };

  useEffect(() => {
    getProductsFromBackend();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Custom Slider</h1>
      <br />
      <Swiper>
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                src={item.image}
                width={150}
                height={150}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
