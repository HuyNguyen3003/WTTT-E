import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function mgproduct() {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [allData, setallData] = useState([]);
  let [stringObject, setstringObject] = useState("");

  const handUseE = async () => {
    const res = await axios.get("http://localhost:5000/product");
    setallData(res.data);
  };
  useEffect(() => {
    handUseE();
  }, []);

  const toggleForm = () => {
    setCategory("");
    setSelectedImage("");
    setProductName("");
    setShowForm(!showForm);
  };

  const readAndEncodeImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    await setSelectedImage(readAndEncodeImage(file));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!category || !productName || !selectedImage) {
      alert("Nhập đủ thông tin");
      return;
    }
    try {
      let formData = {};
      formData.title = category;
      formData.name = productName;
      formData.img = await selectedImage;

      const res = await axios.post(
        "http://localhost:5000/product/update",
        formData
      );

      const arr = allData;
      arr.push(res.data);

      setCategory("");
      setSelectedImage("");
      setProductName("");
      setShowForm(!showForm);

      // Gửi dữ liệu thành công, thực hiện các hành động khác (thông báo, chuyển hướng, ...)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Xử lý lỗi (hiển thị thông báo lỗi, ...)
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/gif", // Cho phép tải lên các định dạng hình ảnh phổ biến
  });

  const delProduct = async (dataId) => {
    await axios.post("http://localhost:5000/product/delete", { dataId });

    setallData((prevData) => prevData.filter((item) => item._id !== dataId));
  };

  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  // handle string to Object
  const handleStringToObject = (inputString) => {
    const productStrings = inputString.split("name:");

    const products = productStrings.slice(1).map((productString) => {
      const [productInfo, details] = productString.trim().split("details:");
      const [name, price] = productInfo.split("price:");

      return {
        name: name.trim(),
        price: price.trim(),
        details: details.trim(),
      };
    });
    return products;
  };

  // handle obj to String
  const handleObjectToString = (obj) => {
    const resultString = obj
      .map((detail) => {
        return `name:${detail.name} price:${detail.price} details:${detail.details}`;
      })
      .join(" ");

    return resultString;
  };

  const ShowObjToString = (obj) => {
    setstringObject(handleObjectToString(obj));
  };
  const handleInputChange = (event) => {
    setstringObject(event.target.value);
  };

  const handleUpdate = async (item, index) => {
    const data = {};
    data._id = item._id;
    data.name = item.name;
    data.img = item.img;
    data.title = item.title;
    data.details = handleStringToObject(stringObject);

    await axios.post("http://localhost:5000/product/update", data);
    let arr = allData;
    arr[index].details = handleStringToObject(stringObject);
  };

  return (
    <div>
      <div>
        <div>
          <strong>Quản lí sản phẩm</strong>
        </div>
        <div className="flex">
          {/* Thêm */}
          <button
            className="bg-blue-500 text-white p-4 rounded max-h-20 "
            onClick={toggleForm}
          >
            Thêm
          </button>
          {/* Sua xoa */}
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Image</th>

                <th>Update</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {allData &&
                allData.length > 0 &&
                allData.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td className="px-20">{item.title}</td>
                      <td className="px-20">{item.name}</td>
                      <td className="px-20">
                        <ImageComponent base64Data={item.img} />
                      </td>

                      <td className="px-20 cursor-pointer">
                        <div className="flex">
                          <div
                            className="px-10"
                            onClick={() => {
                              handleUpdate(item, index);
                            }}
                          >
                            x
                          </div>
                          <div onClick={() => ShowObjToString(item.details)}>
                            o
                          </div>
                        </div>

                        <input
                          type="text"
                          className=" border border-black rounded px-3 py-2"
                          value={stringObject}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td
                        onClick={() => delProduct(item._id)}
                        className="px-20 cursor-pointer"
                      >
                        <div>x</div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/*  */}
        {showForm && (
          <div className="mt-4">
            <form
              className="bg-white p-4 shadow-md"
              onSubmit={handleFormSubmit}
            >
              <h2 className="text-lg font-semibold mb-4">Thêm thông tin</h2>
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">
                  Loại Danh Mục:
                </label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2"
                  value={category}
                  onChange={handleCategoryChange}
                />
                <label className="block text-gray-600 mb-1">
                  Tên Danh Mục:
                </label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2"
                  value={productName}
                  onChange={handleProductNameChange}
                />
                <label className="block text-gray-600 mb-1">Hình ảnh:</label>
                <div
                  {...getRootProps()}
                  className="border rounded w-full px-3 py-2 cursor-pointer"
                >
                  <input {...getInputProps()} />
                  {selectedImage ? (
                    <p>Đã chọn: {selectedImage.name}</p>
                  ) : (
                    <p>Kéo thả ảnh vào đây hoặc nhấp để chọn ảnh.</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Lưu
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
