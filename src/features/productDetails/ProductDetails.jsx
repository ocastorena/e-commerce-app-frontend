import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 3rem 10rem 3rem;
`;

const BackButton = styled.button`
  margin: 2rem;
  padding: 0.75rem 2rem;
  background-color: #0d0d0d;
  color: #fff;
  border: 1px solid #2b2b2b;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-areas:
    "image image info"
    "desc desc desc";
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-areas:
      "image"
      "info"
      "desc";
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.img`
  grid-area: image;
  width: 100%;
  max-width: 400px;
  margin-right: 2rem;
  border-radius: 0.5rem;
  background: #222;
  object-fit: cover;
`;

const InfoColumn = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

const ProductPrice = styled.span`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: #b48cff;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  gap: 1rem;
`;

const QuantitySelect = styled.select`
  padding: 0.75rem;
  background-color: #0d0d0d;
  color: #fff;
  border: 1px solid #2b2b2b;
  border-radius: 0.5rem;
  outline: none;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const AddToCartButton = styled.button`
  padding: 0.75rem;
  background-color: #b48cff;
  color: #181818;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #a084e8;
  }
`;

const DescriptionContainer = styled.div`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const DescriptionTitle = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-top: 0;
  line-height: 1.5;
  color: #cccccc;
`;

function ProductDetails({
  product,
  onBackClick,
  onAddToCartClick,
  quantity,
  onQuantityChange,
}) {
  return (
    <>
      <BackButton onClick={onBackClick} aria-label="Back to products">
        Back
      </BackButton>
      <Container>
        <TopRow>
          <ProductImage
            src={product.images?.[0] || product.thumbnail}
            alt={product.name}
            loading="lazy"
          />
          <InfoColumn>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
            <ButtonsContainer>
              <label
                htmlFor="quantity-select"
                style={{ color: "#fff", marginBottom: 4 }}
              >
                Quantity
              </label>
              <QuantitySelect
                id="quantity-select"
                name="quantity"
                value={quantity}
                onChange={onQuantityChange}
                aria-label="Select quantity"
              >
                {Array.from({ length: product.stock }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </QuantitySelect>
              <AddToCartButton
                onClick={onAddToCartClick}
                aria-label="Add to cart"
              >
                Add to Cart
              </AddToCartButton>
            </ButtonsContainer>
          </InfoColumn>
          <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>{product.description}</Description>
          </DescriptionContainer>
        </TopRow>
      </Container>
    </>
  );
}

export default ProductDetails;
