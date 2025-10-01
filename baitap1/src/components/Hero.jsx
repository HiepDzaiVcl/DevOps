import React from "react";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center flex-1 text-center px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        Xin chào, mình là <span className="text-yellow-300">Hoàng Đình Hiệp</span>
      </h2>
      <p className="mt-4 text-lg max-w-xl">
        Đây là giao diện React.js được thiết kế với TailwindCSS.
        Màu sắc hiện đại, bố cục gọn gàng, dễ mở rộng.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition">
        Khám phá ngay
      </button>
    </section>
  );
}

export default Hero;
