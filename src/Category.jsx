import { Component } from "react";

function Category({ categoryText }) {
  return (
    <th className="category-header">
      <div>{categoryText}</div>
    </th>
  );
}

export default Category;
