import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import BuyTypeProduct from "../../controller/buyTypeProduct";
import MyCustomAlert from "../../controller/alert";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function BuyProduct() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [detail, setdetail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [cartProduct, setcartProduct] = useState([]);

  const handleChangleInput = async () => {
    if (!name || !email || !phone || !address || !detail) {
      alert("Vui lòng nhập đủ thông tin để chúng tôi có thể liên lạc");
    } else {
      if (name.length < 3) {
        alert("Vui lòng nhập lại số tên");
        return;
      }
      if (email.length < 10) {
        alert("Vui lòng nhập lại email");
        return;
      }
      if (phone.length < 10) {
        alert("Vui lòng nhập lại số điện thoại");
        return;
      }
      if (address.length < 10) {
        alert("Vui lòng nhập lại số địa chỉ");
        return;
      }
      setShowAlert(true);
      setname("");
      setemail("");
      setaddress("");
      setphone("");
      setdetail("");
      const data = { name, phone, email, address, detail };
      await axios.post("http://localhost:5000/product/sendmailBuy", data);
    }
  };
  const allProduct = useSelector((state) => state.product);
  const handleIdLink = () => {
    const splitStrings = id.split("-");
    if (splitStrings.length === 3) {
      return splitStrings;
    }
  };

  useEffect(() => {
    let cartProduct;
    if (typeof window !== "undefined") {
      cartProduct = localStorage.getItem("count");
      cartProduct = JSON.parse(cartProduct);
    }
    setcartProduct(cartProduct);
  }, []);
  console.log(cartProduct);

  return (
    <>
      <Head>
        <title>GIỎ HÀNG-TÂN THÀNH TÀI</title>
        <meta
          name="description"
          content="Giới thiệu chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className=" text-red-800 flex text-2xl justify-center p-5 ml-48 mr-48 mt-10 mb-10 hover:text-blue-800 ">
          GIỎ HÀNG
        </span>

        <div className=" flex ">
          <div className="mx-20 col-span-2 bg-gray-200 p-4">
            <div className="flex flex-col">
              <div className="mb-2">
                <strong>Số lượng loại sản phẩm : {cartProduct.length} </strong>
              </div>
              <hr className="py-2" />
              <div className="h-screen flex  bg-gray-100">
                <div className="w-full  p-4 border rounded-lg bg-white overflow-y-auto">
                  <div className="space-y-2">
                    <BuyTypeProduct
                      title={"V1"}
                      name={"Máy phát điện"}
                      detail={"X1"}
                      price={"2000"}
                      number={1}
                    />
                    <BuyTypeProduct
                      title={"V1"}
                      name={"Máy phát điện"}
                      detail={"X1"}
                      price={"2000"}
                      number={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-10 px-10 col-span-3 bg-gray-300 p-4">
            <div className="flex">
              <div className="px-40">
                <h1 className="text-2xl font-semibold mb-4">
                  Điền thông tin mua hàng
                </h1>

                <form className="bg-white shadow-md rounded mx-10 pt-6 p-8 mb-12  w-full max-w-xl  ">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Họ và Tên
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Họ và tên"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 flex space-x-2">
                    <div className="flex-1">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Số Điện Thoại
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder="Số Điện Thoại"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="address"
                    >
                      Địa chỉ
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Địa chỉ"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="data"
                    >
                      Nội dung lưu ý
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="data"
                      type="text"
                      placeholder="Nội dung"
                      value={detail}
                      onChange={(e) => setdetail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="data"
                    >
                      Tổng giá trị đơn hàng
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="data"
                      readOnly={123}
                    />
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={handleChangleInput}
                    >
                      Nhấn để gửi đơn mua hàng mua hàng
                    </button>
                    {showAlert && (
                      <MyCustomAlert
                        title={"Mua hàng thành công"}
                        detail={
                          "Chúng tôi đã gửi hóa đơn mua hàng qua bạn, và sẽ liên lạc với bạn sau vài giờ"
                        }
                      />
                    )}
                  </div>
                  <h1 className=" font-semibold m-2">
                    * Liên hệ chúng tôi nếu cần sự trợ giúp.
                  </h1>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
