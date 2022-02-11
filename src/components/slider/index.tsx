import React, { useEffect, useState } from "react";
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
import styled from "styled-components";

type SliderProps = {
  products: Product[];
  brandName: string;
};

const Brand = styled.div`
  border-bottom: 1px solid rgba(203, 203, 203, 0.5);
  margin-bottom: 12px;
  margin-inline-start: 15px;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;

export const SmallViewContainer = styled.div`
  background-color: #131313;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const ProductsSlider = React.memo(
  ({ products, brandName }: SliderProps) => {
    const [classes, setClasses] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [windowSize, setwindowSize] = useState(0);

    useEffect(() => {
      const nextBtn = "next" + Math.random().toString(16).slice(2);
      const prevBtn = "prev" + Math.random().toString(16).slice(2);

      setClasses({ nextBtn, prevBtn });
    }, []);

    useEffect(() => {
      setwindowSize(window.innerWidth);
      window.addEventListener("resize", () => {
        setwindowSize(innerWidth);
      });
      setLoading(false);

      return () => {
        window.removeEventListener("resize", () => {}, false);
      };
    }, []);
    if (!loading && windowSize > 798)
      return (
        <div style={{ position: "relative" }}>
          <Brand>
            <h1>{brandName}</h1>
          </Brand>

          <Swiper
            slidesPerView={
              windowSize > 1860
                ? 5
                : windowSize > 1047
                ? 4
                : windowSize > 798
                ? 3
                : 0
            }
            spaceBetween={0}
            freeMode={true}
            navigation={{
              nextEl: `.${classes?.nextBtn}`,
              prevEl: `.${classes?.prevBtn}`,
            }}
            modules={[FreeMode, Navigation]}
          >
            {products.map((prod, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={prod} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`swiper-button-prev ${classes?.prevBtn}`}></div>
          <div className={`swiper-button-next ${classes?.nextBtn}`}></div>
        </div>
      );

    return (
      <>
        <Brand>
          <h1>{brandName}</h1>
        </Brand>
        <SmallViewContainer>
          {products.map((prod, index) => (
            <ProductCard key={index} product={prod} />
          ))}
        </SmallViewContainer>
        ;
      </>
    );
  }
);
