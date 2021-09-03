import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, addProduct } from "../features/cart/cartSlice";

function Item({ product }) {
  const dispatch = useDispatch();
  const quntityhandler = (product, qentity) => {
    for (let i = 0; i < qentity; i++) {
      dispatch(addProduct(product));
    }
  };
  return (
    <div className="grid grid-cols-3 mt-4 border-b-2 gap-x-2 border-gray-300 ">
      <Image src={product.image} width={150} height={200} objectFit="contain" />
      <div className="flex flex-col justify-center">
        <h1 className="text-md font-bold">{product.title}</h1>
        <p className="line-clamp-2 text-sm">{product.description}</p>
        <div className="flex items-center space-x-1">
          <label htmlFor="quntity">Qty:</label>
          <select
            onChange={(e) => {
              let qentity = e.target.value;
              quntityhandler(product, qentity);
            }}
            className="focus:outline-none border-2 rounded-md p-1 my-2 cursor-pointer"
          >
            <option selected>1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <strong>{product.price} DA</strong>
        <button
          onClick={() => dispatch(removeProduct(product.id))}
          className="bg-red-400 text-white rounded-md hover:bg-red-500 p-2 m-2"
        >
          Remove item
        </button>
      </div>
    </div>
  );
}

export default Item;
