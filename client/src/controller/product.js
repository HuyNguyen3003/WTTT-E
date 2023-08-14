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

  const products = [
    {
      name: "Product 1",
      image: "/img/product1.jpg",
      pricex: "$10",
      pricey: "$8",
    },
    {
      name: "Product 2",
      image: "/img/product2.jpg",
      pricex: "$20",
      pricey: "$18",
    },
    {
      name: "Product 3",
      image: "/img/product3.jpg",
      pricex: "$15",
      pricey: "$13",
    },
    {
      name: "Product 4",
      image: "/img/product4.jpg",
      pricex: "$25",
      pricey: "$22",
    },
    {
      name: "Product 5",
      image: "/img/product5.jpg",
      pricex: "$25",
      pricey: "$20",
    },
    {
      name: "Product 6",
      image: "/img/product6.jpg",
      pricex: "$25",
      pricey: "$17",
    },
  ];

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
        {products.map((product, index) => (
          <div key={index} className="p-8 cursor-pointer ">
            <Link
              href="/product/id"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="border-l-2 border-r-2 border-red">
                <img src={product.image} alt={product.name} />
                <p className="flex justify-center">{product.name} </p>
                <div className="flex justify-center line-through">
                  {product.pricex}
                </div>
                <div className="flex justify-center font-bold text-red-500">
                  {product.pricey}
                </div>
              </div>
            </Link>
          </div>
        ))}
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
