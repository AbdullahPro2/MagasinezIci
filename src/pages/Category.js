import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import CategoryProduct from "../components/CategoryProduct";

function Category() {
  const { category } = useParams();
  const { isLoading, products } = useContext(ProductContext);
  const categoryProduct = products.filter((product) => {
    return product.category.split(" ")[0] === category;
  });

  if (isLoading) return <Loader />;

  if (categoryProduct.length > 0)
    return (
      <div>
        <h1 className="products-heading">{category.toLocaleUpperCase()}</h1>
        {categoryProduct.map((product) => (
          <CategoryProduct product={product} key={product.id} />
        ))}
      </div>
    );
}

export default Category;
