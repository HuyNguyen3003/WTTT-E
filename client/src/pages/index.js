import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Product from "../controller/product";
import { motion } from "framer-motion";

export default function MyComponent() {
  const [dataProduct, setdataProduct] = useState([]);
  //

  const handleProduct = (allProduct) => {
    const productsByTitle = [
      {
        title: "x1: Motor",
        products: [],
      },
      {
        title: "x2: Máy Bơm Nước",
        products: [],
      },
      {
        title: "x3: Máy Phát Điện",
        products: [],
      },
      {
        title: "x4: Phụ Tùng",
        products: [],
      },
    ];

    allProduct.forEach((item) => {
      let { _id, title, name, img, details } = item;

      const product = {
        _id,
        name: name,
        img,
        details: details,
      };

      const productTitleIndex = productsByTitle.findIndex(
        (item) => item.title === title
      );
      if (productTitleIndex !== -1) {
        productsByTitle[productTitleIndex].products.push(product);
      }
    });

    return productsByTitle;
  };

  const getAllData = async () => {
    const resProduct = await axios.get("https://wttt-3.onrender.com/product");
    if (resProduct.data && Array.isArray(resProduct.data)) {
      setdataProduct(handleProduct(resProduct.data));
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";

  return (
    <Container className="pb-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
        <div className="flex">
          <div className="pl-10 w-full h-1/2">
            <img src="/img/87cpIkbEsTKUi.jpg!w700wp" />
            <img src="/img/87cpIkbEsTKUi.jpg!w700wp" />
          </div>

          <div className="w-4/5 h-1/2">
            {dataProduct && dataProduct.length > 0 ? (
              dataProduct.map((item, index) => {
                return (
                  <Product
                    className="flex justify-center items-center"
                    deviceType={detectDeviceType}
                    name={`${item.title.slice(3)}`}
                    data={item.products}
                    indexArrProduct={index}
                  />
                );
              })
            ) : (
              <div className="text-xl font-bold mb-2">Loading</div>
            )}
          </div>
        </div>
      </motion.div>
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
