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

  /* If you want them stacked on small screens, you can add a media query:
     @media (max-width: 600px) {
       flex-direction: column;
     }
  */
`;

const ProductImage = styled.img`
  grid-area: image;
  width: 100%;
  margin-right: 2rem;
  border-radius: 0.5rem;
`;

const InfoColumn = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
`;

const ProductPrice = styled.span`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: #a1a1a1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
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
  margin-top: 2rem;
  padding: 0.75rem;
  background-color: #d9d9d9;
  color: #000000;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const DescriptionContainer = styled.div`
  grid-area: desc;
  display: flex;
  flex-direction: column;
`;

const DescriptionTitle = styled.h3``;

const Description = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  color: #cccccc;
`;

function ProductDetails({ product }) {
  return (
    <>
      <BackButton>Back</BackButton>
      <Container>
        {/* Top section with image on the left and product info on the right */}
        <TopRow>
          <ProductImage
            src={`${import.meta.env.VITE_API_URL}${product.imageurl}`}
            alt={product.name}
          />

          <InfoColumn>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <ButtonsContainer>
              <QuantitySelect id="quantity-select" name="quantity">
                {Array.from({ length: product.stock_quantity }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </QuantitySelect>

              <AddToCartButton>Add to Cart</AddToCartButton>
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
