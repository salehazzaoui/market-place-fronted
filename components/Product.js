import React from "react";
import Image from "next/image";
import { addProduct } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className="flex flex-col items-center bg-white rounded-md shadow-sm p-2 cursor-pointer hover:shadow-lg">
      <Image src={product.image} width={200} height={250} objectFit="contain" />
      <h1 className="text-sm font-semibold">{product.title}</h1>
      <strong>{product.price} DA</strong>
      <div className="flex items-center space-x-2 my-2">
        <button
          onClick={() => addToCart(product)}
          className="px-4 p-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
        >
          Add to cart
        </button>
        <button className="p-2 bg-white text-red-400 rounded-md border-2 border-red-400 focus:outline-none hover:bg-red-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Product;
