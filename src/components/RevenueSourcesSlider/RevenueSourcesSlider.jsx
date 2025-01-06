import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SVGIcons from "../Data/SVGIcons";
import styled from "styled-components";

const StyledSwiperSliderMainWrap = styled.div`
  width: 100%;
  max-width: 360px;
  padding-bottom: 10px;
  @media screen and (max-width: 1279px) {
    max-width: 400px;
  }
  @media screen and (max-width: 991px) {
    max-width: 670px;
  }
`;

const StyledSwiperSlider = styled(Swiper)`
  width: 100%;
  height: 100%;
  p {
    color: #878787;
    font-size: 11px;
    font-weight: 300;
  }
  h4 {
    font-size: 13px;
    margin-top: 4px;
    font-weight: 400;
  }
  .dot-wrap {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-radius: 50%;
    margin-right: 4px;
    flex-shrink: 0;
    &.red {
      background-color: #ea4f4f;
    }
    &.blue {
      background-color: #5770f4;
    }
    &.green {
      background-color: #23da82;
    }
    &.yellow {
      background-color: #f2c246;
    }
  }
`;

const RevenueSourcesSlider = () => {
  const revenueData = [
    { source: "Agoda", amount: "$2104.45", color: "yellow" },
    { source: "Booking.com", amount: "$234.48", color: "green" },
    { source: "OYO Rooms", amount: "$214.84", color: "blue" },
    { source: "Air BNB", amount: "$154.78", color: "red" },
    { source: "Agoda", amount: "$2104.45", color: "yellow" },
    { source: "Agoda", amount: "$2104.45", color: "yellow" },
    { source: "Agoda", amount: "$2104.45", color: "yellow" },
    { source: "Agoda", amount: "$2104.45", color: "yellow" },
  ];

  return (
    <>
      <StyledSwiperSliderMainWrap>
        <StyledSwiperSlider
          navigation={{
            prevEl: ".js-prev",
            nextEl: ".js-next",
          }}
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2, // 2 slides for screens >= 640px
            },
            414: {
              slidesPerView: 3, // 2 slides for screens >= 640px
            },
            480: {
              slidesPerView: 4, // 2 slides for screens >= 640px
            },
            768: {
              slidesPerView: 6, // 2 slides for screens >= 640px
            },
            992: {
              slidesPerView: 3, // 3 slides for screens >= 768px
            },
            1024: {
              slidesPerView: 4, // 4 slides for screens >= 1024px
            },
          }}
        >
          {revenueData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderRight: "1px solid #3e3e3e",
                  height: "100% !important",
                }}
              >
                <div className="d-align-center">
                  <span className={`dot-wrap ${item.color}`}></span>
                  <p>{item.source}</p>
                </div>
                <h4>{item.amount}</h4>
              </div>
            </SwiperSlide>
          ))}
        </StyledSwiperSlider>
      </StyledSwiperSliderMainWrap>
    </>
  );
};

export default RevenueSourcesSlider;
