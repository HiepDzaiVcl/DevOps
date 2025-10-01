import React from "react";

function Header() {
  return (
    <header className="p-5 flex justify-between items-center bg-black/20 backdrop-blur-md">
      <h1 className="text-2xl font-bold">Hoàng Đình Hiệp</h1>
      <nav className="space-x-6">
        <a href="#" className="hover:text-yellow-300">Home</a>
        <a href="#" className="hover:text-yellow-300">About</a>
        <a href="#" className="hover:text-yellow-300">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
