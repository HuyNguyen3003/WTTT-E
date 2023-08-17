import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch, Provider } from "react-redux";
import { useRouter } from "next/router";

export default function DetailProduct(props) {
  //

  let [storedJsonArray, setstoredJsonArray] = useState([]);
  let [dataPageId, setdataPageId] = useState([]);
  let [selecType, setselecType] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  const handleIdLink = () => {
    const splitStrings = id.split("-");
    if (splitStrings.length === 3) {
      return splitStrings;
    }
  };

  const dispatch = useDispatch();
  const setCustomCount = () => {
    dispatch({ type: "INCREMENT" });
  };

  const allProduct = useSelector((state) => state.product);

  useEffect(() => {
    const setArr = handleIdLink();
    if (typeof window !== "undefined") {
      setstoredJsonArray(localStorage.getItem("count"));
    }
    setdataPageId(allProduct[setArr[0]].products[setArr[1]]);
  }, []);

  const handleAddProduct = () => {
    let arr = JSON.parse(storedJsonArray);
    arr.push({ id: id, number: 1 });
    const updatedJsonArray = JSON.stringify(arr);
    localStorage.setItem("count", updatedJsonArray);
    setCustomCount();
  };
  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  return (
    <>
      <div className="container mx-auto p-4 pt-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-16">
            <ImageComponent base64Data={dataPageId.img} />
          </div>
          <div className="md:w-1/2 py-4">
            <h1 className="text-xl font-semibold mb-2">
              {dataPageId && dataPageId.details
                ? dataPageId.details[selecType].name
                : "Loading"}
            </h1>
            <div>
              {dataPageId &&
                dataPageId.details &&
                dataPageId.details.map((item, index) => {
                  return (
                    <div>
                      <button
                        class="bg-blue-300 p-2 rounded-lg shadow-md focus:outline-none my-4"
                        onClick={() => setselecType(index)}
                      >
                        <h2 class="text-lg font-semibold">{item.name}</h2>
                        <p class="mt-2">{item.details}</p>
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="text-2xl font-bold mt-4">
              Giá:
              {dataPageId && dataPageId.details && dataPageId.details.length > 0
                ? dataPageId.details[selecType].price
                : "Loading"}
            </div>
            <Link href={"/product/buy"}>
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 mt-4"
              >
                Thêm vào giỏ hàng
              </button>
            </Link>
          </div>
        </div>
        <div className="detailProduct px-40 py-5 ">
          <strong>ĐỘNG CƠ MOTOR ĐIỆN 1 PHA - 2800RPM</strong>
          <p className="">
            Siêu Thị Điện Máy Tân Thành Tân với đa dạng sản phẩm động cơ điện 1
            pha và 3 pha được nhập khẩu trực tiếp 100% hàng mới nguyên kiện.
            Chúng tôi đưa đến quý khách hàng nhiều sự lựa chọn khác nhau về sản
            phẩm như: động cơ motor điện 1 pha - 2800RPM , mô tơ điện 3 pha, mô
            tơ giảm tốc, mô tơ đầm rung,... Nhiều năm qua chúng tôi không ngừng
            cải tiến về chất lượng và mẫu mã sản phẩm nhầm mang đến động cơ điện
            chất lượng cao với giá cả hợp lý nhất đến tay khách hàng. Sau đây là
            dòng mô tơ điện được ứng dụng cao và được ưu chuộng trên thị trường
            hiện nay là động cơ motor điện 1 pha - 2800RPM. Mô tơ điện sử dụng
            dòng điện 220v với tốc độ 2800 vòng/phút được ứng dụng cao cho nhiều
            ngành nghề khác nhau. - Mô tơ điện được sản xuất theo công nghệ Đức
            hiện đại - Mô tơ TTT có đầy đủ giấy chứng nhận CO, CQ - Mô tơ 1 pha
            chạy êm, hoạt động bền bỉ - Thông số chuẩn quốc tế dễ dàng sử dụng
            và lắp ráp máy - Động cơ tiết kiệm điện năng - Bảo hành 12 tháng Tân
            Thành Tài nhà cung cấp uy tín – chất lượng. Chúng tôi tự tin là sự
            lựa chọn ưu tiên của quý khách hàng. Với đội ngũ kỹ thuật chuyên
            nghiệp và nhân viên tư vấn nhiệt tình chúng tôi luôn đưa đến quý
            khách hàng sự phục vụ tốt nhất. Sự tin dùng của quý khách hàng là
            niềm vinh dự cho công ty chúng tôi. Ngoài ra chúng tôi còn cung cấp
            các sản phẩm máy bơm nước chất lượng từ Đức - Adelino.
          </p>
        </div>
      </div>
    </>
  );
}
