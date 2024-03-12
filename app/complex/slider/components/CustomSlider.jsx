import React, { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SlideNavButton from "./SlideNavButton";

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
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
            480: { slidesPerView: 2 },
            740: { slidesPerView: 3 },
            1275: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-red-200 !flex justify-center items-center"
          >
            <div className="border-2 border-blue-500 rounded-lg overflow-hidden w-[200px] h-[300px] flex justify-center items-center">
              <Image
                src={item.image}
                width={150}
                height={150}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
        <SlideNavButton />
      </Swiper>
    </div>
  );
};

export default CustomSlider;
