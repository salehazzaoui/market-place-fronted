import React from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../features/cart/cartSlice";

function CartItems({ products }) {
  const dispatch = useDispatch();
  return (
    <div className="col-span-3 bg-white shadow-sm rounded-md">
      <header className="flex items-center justify-between p-3 border-b-2 border-gray-300 shadow-sm">
        <h1 className="text-xl font-blod m-2">Shopping Cart</h1>
        <button
          onClick={() => {
            //dispatch(deleteAll(product.length));
            console.log(products.length);
          }}
          className="underline m-2 hover:text-gray-400"
        >
          Delete All
        </button>
      </header>
      {products.map(
        (product, pos) =>
          products.indexOf(product) == pos && <Item product={product} />
      )}
    </div>
  );
}

export default CartItems;
