import React from "react";
import UseProducts from "../Hooks/UseProducts";

const Products = () => {
  const [allProducts] = UseProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold">
        This is product page {allProducts.length}
      </h1>
    </div>
  );
};

export default Products;
