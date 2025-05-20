import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section className="hero-section flex justify-center  w-full mt-20">
      <div className="hero-content flex flex-col lg:flex-row gap-10 w-[80%]">
        <div className="scrllar rounded-2xl shadow w-full flex justify-between flex-1/2 items-center p-2 gap-10 bg-[url(https://img.freepik.com/free-psd/grey-sofa-isolated_23-2151848255.jpg?semt=ais_hybrid&w=740)]">
          <h2 className="bg-gray-400 p-2">
            <IoIosArrowBack />
          </h2>
          <div className="text w-full">
            <h1 className="my-2 font-light text-lg">
              Wooden <br /> Minimalistic <br /> Chairs
            </h1>
            <h1 className="my-2 font-bold text-sm ">Sale Up To</h1>
            <h1 className="my-2  text-lg text-green-400 ">40% Off</h1>
            <button className="bg-amber-300 w-25 h-10">Shop Now</button>
          </div>
          <h2 className="bg-gray-400 p-2">
            <IoIosArrowForward />
          </h2>
        </div>
        <div className="hero-card flex justify-center flex-col items-center bg-gray-100 rounded-2xl shadow flex-1/4">
          <img
            src="https://img.freepik.com/premium-vector/shop-logo-icon-vector_376476-102.jpg?semt=ais_hybrid&w=740"
            width={100}
          />
          <h1>Pack 5 t-shirts for summer</h1>
          <h1>
            starting at <span className="text-red-500">$99.99</span>
          </h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAUioMRqtwqMnztNK9CB98U35MmEMw4qVQg&s" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
