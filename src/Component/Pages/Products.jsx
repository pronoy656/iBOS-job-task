import React from "react";
import UseProducts from "../Hooks/UseProducts";
import { IoBagOutline } from "react-icons/io5";

const Products = () => {
  const [allProducts] = UseProducts();
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">
        This is product page {allProducts.length}{" "}
      </h1>
      <div className="flex max-w-7xl mx-auto space-x-3">
        <div className="w-1/3 border-2 border-red-500">
          <h1>React tab</h1>
        </div>
        <div className="w-2/3  grid grid-cols-3 gap-x-8 gap-y-8">
          {allProducts.map((product) => (
            <div key={product._id}>
              <div className="w-[277px] h-[484px] border pl-4 pt-4 rounded-2xl">
                <div className="w-[245px] h-[236px] border bg-[#F2F2F2] rounded-lg">
                  <img
                    className="w-[205px] h-[205px]"
                    src={product.image}
                    alt=""
                  />
                </div>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
                <h1>{product.discount}</h1>
                <h1>{product.description}</h1>
                <button className="bg-black text-white w-[254px] h-[42px] rounded-md flex gap-x-3 justify-center items-center">
                  <div className="text-xl">
                    <IoBagOutline />
                  </div>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
