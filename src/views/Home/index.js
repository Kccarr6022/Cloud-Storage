import React from "react";
import Header from "../../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="bg-hero-image w-full h-screen bg-cover bg-center flex items-center px-4">
        <div className="uppercase text-center text-blue font-extrabold">
          <h1 className="text-8xl">Cloud Storage</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
