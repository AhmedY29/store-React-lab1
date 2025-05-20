import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-10">
      <div className="footer-content flex flex-col lg:flex-row justify-between items-center w-[80%]  bg-gray-100 rounded-2xl p-4">
        <div className="footer-text">
          <h1>Bose Bluetooth Wireless Heeadphones</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            perspiciatis provident.
          </p>
        </div>
        <div className="footer-price flex flex-col gap-2">
          <h1 className="line-through text-sm font-light">$260</h1>
          <h1 className="text-green-400">$219</h1>
          <button className="bg-amber-300 w-25 h-10">Shop Now</button>
        </div>

        <div className="footer-img">
          <img
            src="https://m.media-amazon.com/images/I/71y9B19C5LL._AC_UL960_FMwebp_QL65_.jpg"
            width={100}
            alt=""
          />
        </div>
      </div>
      <h1>
        Made By{" "}
        <a
          className="text-blue-300"
          href="https://github.com/AhmedY29"
          target="_blank"
        >
          Ahmed Alsaleh
        </a>
      </h1>
    </footer>
  );
}

export default Footer;
