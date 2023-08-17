import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Link from "next/link";

export default function Product(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  return (
    <Container className=" pt-10 px-20  ">
      <div className="mb-4 font-bold text-lg text-red-500 ">{props.name}</div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="w-2/4 mx-auto carousel-item-padding-40-px"
        className=" border-t-2 border-b-2  shadow-md"
      >
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item, index) => {
            return (
              <div key={index} className="p-8 cursor-pointer">
                <Link
                  href={`/product/${item._id}`}
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <div className="border-l-2 border-r-2 border-red">
                    <ImageComponent base64Data={item.img} />
                    <p className="flex justify-center">{item.name} </p>
                    <div className="flex justify-center">
                      {item.details[0].price}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  .carousel {
    text-align: center;
    &.carousel-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto; /* Đảm bảo căn giữa theo chiều ngang */
    }
  }
  .carousel .thumb {
    width: 5%;
    height: 50px;
  }
`;
