import React from "react";
import { useEffect, useState } from "react";

function AllCart({ addToCart, onRemove }) {
  const [productQty, setProductQty] = useState(0);
  const total = addToCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  useEffect(() => {
    setProductQty(addToCart.quantity);
  }, [addToCart.quantity]);

  return (
    <>
      <div className="container">
        <h1 className=" text-xl md:text-2xl font-black">ตะกร้าสินค้า</h1>
        <h2 className="container text-base font-medium md:text-2xl">
          ราคาสิ้นค้าทั้งหมด : {total.toLocaleString()} บาท
        </h2>
      </div>

      <div className="max-w-[1200px] m-auto p-3">
        {addToCart.map((item) => (
          <div
            className="flex flex-col gap-[20px] md:flex-row justify-between items-center w-full shadow-lg p-3 rounded-xl"
            key={item.id}
          >
            <div>
              <img
                src={item.img}
                alt="none"
                className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-cover rounded-xl"
              />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <p className="md:font-ms font-base">
             {item.product_name}
              </p>
              <p className="md:font-ms font-base">ราคา: {item.price} บาท</p>
            </div>
            <div className="flex gap-5 items-center">
              <button
                className=" bg-orange-500 rounded-full w-7 h-7 text-white font-bold hover:bg-orange-700"
                onClick={() => {
                  item.quantity += 1;
                  setProductQty(item.quantity + 1);
                }}
              >
                +
              </button>
              <p>จำนวนสินค้า : {item.quantity}</p>
              <button
                className=" bg-red-500 rounded-full w-7 h-7 text-white font-bold hover:bg-red-700
              "
                onClick={() => {
                  if (item.quantity > 0) {
                    item.quantity -= 1;
                  }
                  setProductQty(item.quantity - 1);
                }}
              >
                -
              </button>
            </div>
            <p className="md:font-ms font-base">
              ราคา : {(item.quantity * item.price).toLocaleString()} บาท
            </p>
            <button
              className="text-xs lg:text-base bg-red-600 rounded-xl p-2 text-white font-bold hover:bg-red-900"
              onClick={() => onRemove(item)}
            >
              ลบสิ้นค้า
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCart;
