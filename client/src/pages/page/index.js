import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";

export default function GioiThieu() {
  const [dataPage, setdataPage] = useState();
  const router = useRouter();
  let { type } = router.query;

  //

  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  const handleProduct = (allProduct) => {
    const productsByTitle = [
      {
        title: "y1: Giới Thiệu",
        products: [],
      },
      {
        title: "y2: Tin Tức",
        products: [],
      },
      {
        title: "y3: Tuyển Dụng",
        products: [],
      },
    ];

    allProduct.forEach((item) => {
      let { _id, title, name, image, detail } = item;

      const product = {
        _id,
        name,
        image,
        detail,
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
  const callData = async () => {
    const res = await axios.get("https://wttt-3.onrender.com/page");
    setdataPage(handleProduct(res.data));
  };
  useEffect(() => {
    callData();
  }, []);

  return (
    <>
      <div>
        {dataPage && dataPage.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Head>
              <title>PAGE-TÂN THÀNH TÀI</title>
              <meta
                name="description"
                content="Giới thiệu chi tiết về công ty Tân Thành Tài"
                key="desc"
              />
            </Head>

            <span className="text-red-600  flex text-2xl justify-center p-5 ml-48 mr-48  mt-10 mb-10 ">
              {type == 0 ? "Giới thiệu" : type == 1 ? "Tin tức" : "Tuyển dụng"}
            </span>

            <div className="flex justify-center">
              <div className="grid grid-cols-2  gap-x-3 gap-8">
                {dataPage &&
                  dataPage.length > 0 &&
                  dataPage[type].products.map((item) => {
                    return (
                      <div className="mx-10">
                        <Link
                          href={`/page/${item._id}`}
                          className="text-black"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="flex place-items-center ml-14 mr-12">
                            <div>
                              <ImageComponent base64Data={item.image} />
                            </div>

                            <div className="">
                              <div className="text-lg ml-10  ">{item.name}</div>
                              <div className="text-xs mx-10  pr-10">
                                {item.detail.length > 20
                                  ? item.detail.slice(0, 500) + "..."
                                  : item.detail}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="m-24"></div>
          </motion.div>
        ) : (
          <div className="flex justify-center items-center text-xl font-bold mb-2">
            Loading
          </div>
        )}
      </div>
    </>
  );
}
