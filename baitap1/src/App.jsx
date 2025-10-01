import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
