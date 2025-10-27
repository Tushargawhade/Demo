import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[80%] flex h-full justify-center items-center m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt=""
      />

      <div className="content w-[50%]">
        <h1 className="text-3xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-500 py-3">Men's Clothing</h3>
        <h2 className="text-red-300 mb-2">$ 109.95</h2>
        <p className="mb-4">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>

        <Link className="py-2 px-5 border rounded-md border-blue-300 text-blue-400 mr-5 ">
          Edit
        </Link>

        <Link className="py-2 px-5 border rounded-md border-red-300 text-red-400 ">
          Delete
        </Link>
      </div>
    </div>
  );
}

export default Details;
