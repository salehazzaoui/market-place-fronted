import React from "react";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { selectTotal } from "../features/cart/cartSlice";

function CartContent() {
  const cart_products = useSelector((state) => state.cart.products);
  const total = useSelector(selectTotal);
  return (
    <div className="grid md:grid-cols-4 gap-4 m-1 md:m-3">
      <CartItems products={cart_products} />
      <div className="bg-white shadow-sm rounded-md md:h-60 p-2">
        <div className="flex flex-col items-center ">
          <h1 className="text-lg font-blod my-2">
            Subtotal ({cart_products.lenght} items): <strong>{total} DA</strong>
          </h1>
          <button className="bg-blue-500 text-white p-2 focus:outline-none hover:bg-blue-600 rounded-md my-2">
            Procced to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
