import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function mgproduct() {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [allData, setallData] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/product");
    setallData(res.data);
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
      // console.log(formData);

      const data = await axios.post(
        "http://localhost:5000/product/update",
        formData
      );
      console.log(data);

      setCategory("");
      setSelectedImage("");
      setProductName("");
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
          <table class="table-fixed">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Image</th>
                <th>Detail</th>
                <th>Update</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {allData &&
                allData.length > 0 &&
                allData.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className="px-20">{item.title}</td>
                      <td className="px-20">{item.name}</td>
                      <td className="px-20">image</td>
                      <td className="px-20">{item.details}</td>
                      <td className="px-20">x</td>
                      <td className="px-20">x</td>
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
