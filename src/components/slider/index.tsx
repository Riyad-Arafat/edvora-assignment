import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";
import { Product } from "../../types/product";
import { ProductCard } from "../productCard";

type SliderProps = {
  products: Product[];
  brandName: string;
};

export const ProductsSlider = React.memo(
  ({ products, brandName }: SliderProps) => {
    return (
      <>
        <h3>{brandName}</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          navigation
          modules={[FreeMode, Navigation]}
          className="mySwiper"
          style={{ backgroundColor: "#131313", borderRadius: "15px" }}
        >
          {products.map((prod, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={prod} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
);
