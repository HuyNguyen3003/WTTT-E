import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <section className="bg-white dark:bg-gray-600 p-16">
        <div className="container flex items-center  px-48">
          <div>
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Lỗi trang không được tìm thấy
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <Link
                  href="/"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  Quay lại trang chủ
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
