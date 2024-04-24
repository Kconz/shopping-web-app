import React from "react";
import { useState, useEffect } from "react";
function AllCart({ idShoppingCart, DataProducts }) {
  const [shoppingCart, SetShoppingCart] = useState([]);

  const _products = DataProducts.product;
  const cart = idShoppingCart.map((item) => item);
  const filterItem = _products.filter((item) =>
    idShoppingCart.includes(item.id)
  );

  
  

  //check array with another array

  return (
    <>
      <h1 className="container text-xl font-black">All Cart</h1>
      <div className="max-w-[1200px] m-auto p-3">
        {filterItem.map((item) => (
          <div className="flex flex-col gap-[20px] md:flex-row justify-between items-center w-full shadow-lg p-3 rounded-xl">
            <div>
              <img
                src={item.img}
                alt="none"
                className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-cover rounded-xl"
              />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <p className="md:font-ms font-base">
                ชื่อสินค้า : {item.product_name}
              </p>
              <p className="md:font-ms font-base">ราคา: {item.price}</p>
            </div>
            <div className="flex gap-5 items-center">
              <button className=" bg-orange-500 rounded-full w-7 h-7 text-white font-bold hover:bg-orange-700">
                +
              </button>
              <p>จำนวนสินค้า : </p>
              <button className=" bg-red-500 rounded-full w-7 h-7 text-white font-bold hover:bg-red-700">
                -
              </button>
            </div>
            <p className="md:font-ms font-base">ราคาสิ้นค้าที่คำณวนต่อชิ้น</p>
            <button className="text-xs lg:text-base bg-red-600 rounded-xl p-2 text-white font-bold hover:bg-red-900">
              ลบสิ้นค้า
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCart;
