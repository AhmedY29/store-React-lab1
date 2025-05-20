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
    {
      title: "SAPPHERO Octagon",
      img: "https://m.media-amazon.com/images/I/71RFPVd94jL._AC_SX679_.jpg",
      desc: "SAPPHERO Octagon Men's Watch, Waterproof 30 m Analogue Quartz Watch",
    },

    {
      title: "Songmics Office Chair",
      img: "https://m.media-amazon.com/images/I/71lkcaY+pbL._AC_SY300_SX300_.jpg",
      desc: "Gaming Chair, Desk Chair, Computer Chair, Swivel Chair With Tilting Mechanism, Work Chair",
    },
    {
      title: "Mouniubull",
      img: "https://m.media-amazon.com/images/I/41hh4qRhZNL._AC_SX522_.jpg",
      desc: "Mouniubull New fashion brand hoodie craft metal heavy loose sweater men's clothing",
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
                height={100}
              />
              <div className="text">
                <h1 className="mb-2">{item.title}</h1>
                <h1 className="font-light">{item.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
