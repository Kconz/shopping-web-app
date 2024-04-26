import React, { memo } from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function Products({ dataProducts, onAdd }) {

  const renderProduct = (product) => (
    <div className="flex flex-col w-[350px] h-[350] md:w-72 " key={product.id}>
      <img
        src={product.img}
        alt=""
        className="w-[350px] h-[350px] rounded-2xl box hover:brightness-75 md:w-[360px] md:h-[360px] bg-cover	"
      />
      <div className=" flex justify-between gap-4 m-3 items-center md:gap-0">
        <h2 className="font-semibold">{product.product_name}</h2>
        <h2 className="font-semibold">{(product.price).toLocaleString()} THB</h2>
      </div>
      <div className="flex justify-between gap-4">
        <button
          className="p-[12px] w-full text-xs bg-indigo-400 shadow-lg shadow-indigo-500/50 hover:bg-indigo-500 md:w-full md:text-sm rounded-full text-white"
          style={{ outline: "none" }}
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
        <Link to="/shopping-cart" className="w-full">
          <button
            className="p-[12px] w-full text-xs bg-orange-500	  hover:bg-orange-700	 md:w-full md:text-sm  rounded-full text-white"
            style={{ outline: "none" }}
            onClick={() => onAdd(product)}
          >
            Buy
          </button>
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <div className="container flex-row gap-4 flex-wrap p-16">
        {dataProducts.map(renderProduct)}
      </div>
    </>
  );
}

export default memo(Products);
