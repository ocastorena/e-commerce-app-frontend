import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 3rem;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  justify-items: center;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  background-color: #d9d9d9;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  &:hover {
    background-color: #aaaaaa;
    border-color: #aaaaaa;
  }
`;

function ProductList({ products, onClickProduct }) {
  const [visibleCount, setVisibleCount] = useState(20);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const visibleProducts = products.slice(0, visibleCount);
  return (
    <>
      <StyledProductList>
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClickProduct={onClickProduct}
          />
        ))}
      </StyledProductList>
      {visibleCount < products.length && (
        <LoadMoreButton onClick={handleLoadMore}>Show More</LoadMoreButton>
      )}
    </>
  );
}

export default ProductList;
