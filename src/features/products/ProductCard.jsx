import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 14rem;

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  h2 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #a1a1a1;
    margin: 0;
  }
`;

const Star = styled.span`
  color: ${(props) => (props.$filled ? "#FFA500" : "#ddd")};
  font-size: 1rem;
`;

function ProductCard({ product, onClickProduct }) {
  const totalStars = 5; // maximum rating
  return (
    <Card onClick={onClickProduct}>
      <img
        src={`${import.meta.env.VITE_API_URL}${product.imageurl}`}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <div
        className="stars"
        aria-label={`Rating ${product.rating} out of ${totalStars}`}
      >
        {[...Array(totalStars)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <Star key={i} $filled={ratingValue <= product.rating}>
              &#9733;
            </Star>
          );
        })}
      </div>
      <p>${product.price}</p>
    </Card>
  );
}

export default ProductCard;
