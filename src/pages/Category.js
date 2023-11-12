import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();
  console.log(category);
  return <div> {category} of the store</div>;
}

export default Category;
