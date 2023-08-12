import React from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Product from "../controller/product";

export default function MyComponent() {
  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  return (
    <Container className="pb-10">
      <Carousel
        autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        showDots={false}
        className=" pl-40 pr-20 w-4/5 ml-52 relatives z-1"
      >
        <div>
          <img src="img/sl1.jpg" alt="image1" height={300} width={200} />
        </div>
        <div>
          <img src="img/sl2.jpg" alt="image2" height={300} width={200} />
        </div>
        <div>
          <img src="img/sl3.jpg" alt="image3" height={300} width={200} />
        </div>
        <div>
          <img src="img/sl4.jpg" alt="image4" height={300} width={200} />
        </div>
        <div>
          <img src="img/sl5.jpg" alt="image5" height={300} width={200} />
        </div>
      </Carousel>

      <Product
        className=" flex justify-center items-center"
        deviceType={detectDeviceType}
        name={"Đầu phát điện"}
      />
      <Product
        className=" flex justify-center items-center"
        deviceType={detectDeviceType}
        name={"Động cơ 1 pha"}
      />
      <Product
        className="flex justify-center items-center"
        deviceType={detectDeviceType}
        name={"Máy phát điện"}
      />
      <Product
        className="flex justify-center items-center"
        deviceType={detectDeviceType}
        name={"Máy bơm nước"}
      />
    </Container>
  );
}

const Container = styled.div`
  .slider-wrapper {
    padding-left: 0px;
  }
  .carousel .thumb {
    width: 5%;
    height: 50px;
  }
  .carousel {
    text-align: center;
  }
`;
