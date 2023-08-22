import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import BuyTypeProduct from "../../controller/buyTypeProduct";
import MyCustomAlert from "../../controller/alert";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function BuyProduct() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [detail, setdetail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [cartProduct, setcartProduct] = useState([]);
  // address

  const [provinces, setprovinces] = useState([]);
  const [districts, setdistricts] = useState([]);
  const [wards, setwards] = useState([]);
  const [showProvincesList, setshowProvincesList] = useState(false);
  const [showDistrictsList, setshowDistrictsList] = useState(false);
  const [showWardsList, setshowWardsList] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(["", "", ""]);

  const toggleProvincesList = () => {
    setshowProvincesList(!showProvincesList);
  };
  const toggleDistrictsList = () => {
    setshowDistrictsList(!showDistrictsList);
  };
  const toggleWardsList = () => {
    setshowWardsList(!showWardsList);
  };
  const handleProvincesClick = async (name, code) => {
    const data = selectedAddress;
    data[0] = { name, code };
    setSelectedAddress(data);
    const res = await axios.get(
      `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`
    );
    setdistricts(res.data.data.data);
    toggleProvincesList();
  };

  const handleDistrictsClick = async (name, code) => {
    const data = selectedAddress;
    data[1] = { name, code };
    setSelectedAddress(data);
    const res = await axios.get(
      `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`
    );
    setwards(res.data.data.data);
    toggleDistrictsList();
  };

  const handleWardsClick = async (name, code, path) => {
    const data = selectedAddress;
    data[2] = { name, code, path };
    setSelectedAddress(data);
    toggleWardsList();
  };

  //
  const callAddress = async () => {
    const res = await axios.get(
      "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1"
    );
    setprovinces(res.data.data.data);
  };

  //
  const dispatch = useDispatch();
  const setCustomCount = () => {
    dispatch({ type: "DECREMENT" });
  };
  const DoneBuy = () => {
    dispatch({ type: "SET_COUNT", payload: 0 });
  };

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
      if (address.length < 10 || !selectedAddress) {
        alert("Vui lòng nhập lại số địa chỉ");
        return;
      }
      setShowAlert(true);

      const data = {
        name,
        phone,
        email,
        address: `${address} ${selectedAddress[2].path} `,
        detail,
        cartProduct,
      };
      await axios.post("https://wttt-3.onrender.com/product/sendmailBuy", data);
      setname("");
      setemail("");
      setaddress("");
      setphone("");
      setdetail("");
      setcartProduct([]);
      localStorage.setItem("count", "[]");
      DoneBuy();
    }
  };

  const updateNumberProduct = (index, newNumber) => {
    let arrTemp = [...cartProduct];
    arrTemp[index].number = newNumber;
    setcartProduct(arrTemp);
    confirmProduct(cartProduct);
  };

  const deleteProduct = async (index) => {
    setCustomCount();

    let arrTemp = [...cartProduct];
    arrTemp.splice(index, 1);
    setcartProduct(arrTemp);
    confirmProduct(arrTemp);
  };

  const confirmProduct = (data) => {
    if (typeof window !== "undefined") {
      if (data.length === 0) {
        localStorage.setItem("count", "[]");
        return;
      }
      const updatedJsonArray = JSON.stringify(data);
      localStorage.setItem("count", updatedJsonArray);
    }
  };

  useEffect(() => {
    callAddress();
    let cartProduct = [];
    if (typeof window !== "undefined") {
      cartProduct = localStorage.getItem("count");
      cartProduct = JSON.parse(cartProduct);
      setcartProduct(cartProduct);
    }
  }, []);

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
          <div className="ml-5 col-span-2 bg-gray-200 p-4">
            <div className="flex flex-col">
              <div className="mb-2">
                <strong>
                  Số lượng loại sản phẩm :{cartProduct ? cartProduct.length : 0}{" "}
                </strong>
              </div>
              <hr className="py-2" />
              <div className="h-screen flex  bg-gray-100">
                <div className="  p-4 border rounded-lg bg-white overflow-y-auto">
                  <div className="space-y-2">
                    {cartProduct && cartProduct.length > 0
                      ? cartProduct.map((item, index) => {
                          return (
                            <BuyTypeProduct
                              key={index}
                              title={item.title}
                              name={item.detail.name}
                              detail={item.detail.details}
                              price={item.detail.price}
                              number={item.number}
                              img={item.img}
                              index={index}
                              update={updateNumberProduct}
                              detele={deleteProduct}
                              confirm={confirmProduct}
                            />
                          );
                        })
                      : "Chưa có đơn hàng"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mx-10 col-span-3  py-10">
            <div className="">
              <div className="">
                <h1 className="text-2xl font-semibold mb-4">
                  Điền thông tin mua hàng
                </h1>

                <form className="bg-white shadow-md rounded  pt-6 py-8 mb-12  w-full max-w-2xl  ">
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
                      type="text"
                      placeholder="Thành phố"
                      onClick={toggleProvincesList}
                      value={selectedAddress[0].name}
                      readOnly
                      className="border rounded p-2 "
                    />

                    {showProvincesList && (
                      <ul className="w-48  p-2 ">
                        {provinces &&
                          provinces.length > 0 &&
                          provinces.map((item, index) => (
                            <li
                              className="w-48  p-2 "
                              key={index}
                              onClick={() =>
                                handleProvincesClick(
                                  item.name_with_type,
                                  item.code
                                )
                              }
                            >
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    )}

                    <input
                      type="text"
                      placeholder="Quận huyện"
                      onClick={toggleDistrictsList}
                      value={selectedAddress[1].name}
                      readOnly
                      className="border rounded p-2 "
                    />
                    {showDistrictsList && (
                      <ul>
                        {districts &&
                          districts.length > 0 &&
                          districts.map((item, index) => (
                            <li
                              className="w-48  p-2 "
                              key={index}
                              onClick={() =>
                                handleDistrictsClick(
                                  item.name_with_type,
                                  item.code
                                )
                              }
                            >
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    )}

                    <input
                      type="text"
                      placeholder="Thị trấn, xã"
                      onClick={toggleWardsList}
                      value={selectedAddress[2].name}
                      readOnly
                      className="border rounded p-2 "
                    />
                    {showWardsList && (
                      <ul>
                        {wards &&
                          wards.length > 0 &&
                          wards.map((item, index) => (
                            <li
                              className="w-48  p-2 "
                              key={index}
                              onClick={() =>
                                handleWardsClick(
                                  item.name_with_type,
                                  item.code,
                                  item.path_with_type
                                )
                              }
                            >
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    )}

                    {/* detail address */}
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Tên đường... số nhà"
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
