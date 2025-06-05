import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 14rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  background: #181818;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(108, 57, 210, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    background: #222;
  }

  h2 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
    color: #fff;
    font-weight: 600;
    line-height: 1.2;
  }

  .stars {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #b48cff;
    margin: 0;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const Star = styled.span`
  color: ${(props) => (props.$filled ? "#FFA500" : "#444")};
  font-size: 1.1rem;
  margin-right: 2px;
`;

function ProductCard({ product, onClickProduct }) {
  const totalStars = 5;
  const handleClick = () => {
    if (onClickProduct) onClickProduct(product.id);
  };

  return (
    <Card
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.title}`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
      <h2>{product.title}</h2>
      <div
        className="stars"
        aria-label={`Rating: ${product.rating} out of 5`}
      >
        {[...Array(totalStars)].map((_, i) => (
          <Star key={i} $filled={i < Math.round(product.rating)}>
            &#9733;
          </Star>
        ))}
      </div>
      <p>${Number(product.price).toFixed(2)}</p>
    </Card>
  );
}

export default ProductCard;
