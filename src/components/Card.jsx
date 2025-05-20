import React from "react";

function Card() {
  let products = [
    {
      title: "Play Station 5",
      img: "https://m.media-amazon.com/images/I/31NIiT7QknL._AC_UY327_FMwebp_QL65_.jpg",
      desc: "PlayStation 5 Slim Digital Edition Console (KSA version), 2 Year Manufacturer Warranty",
    },
    {
      title: "Nintendo SWITCH",
      img: "https://m.media-amazon.com/images/I/7148mbvrbWL._AC_SX679_.jpg",
      desc: "Nintendo SWITCH OLED Neon Blue/Red (Official KSA Version), 2 Year Warranty & Compliant AC Adapter",
    },
    {
      title: "Microsoft Xbox Series X",
      img: "https://m.media-amazon.com/images/I/515tLyCgdXL._AC_SX679_.jpg",
      desc: "Microsoft Xbox Series X Gaming Console, 1Tb, Black (KSA Version)",
    },
  ];
  return (
    <section className="cards-section flex justify-center w-full my-10">
      <div className="cards-content w-[80%]">
        <h1 className="text-2xl">Top Categories of The month</h1>
        <hr />
        <div className="cards-list flex gap-8 justify-center items-center flex-wrap ">
          {products.map((item, index) => (
            <div
              key={index}
              className="card bg-gray-100 p-3 rounded-2xl shadow hover:bg-gray-200 flex gap-10 w-[20rem] my-10"
            >
              <img
                src={item.img}
                alt=""
                className="object-contain"
                width={100}
              />
              <div className="text">
                <h1>{item.title}</h1>
                <h1>{item.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
