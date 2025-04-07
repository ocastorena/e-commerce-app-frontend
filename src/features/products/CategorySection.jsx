import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin-top: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: inherit;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const CategorySection = ({ categories, onCategoryClick }) => {
  return (
    <SectionContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          onClick={() => onCategoryClick(category.category)}
        >
          {category.category}
        </CategoryButton>
      ))}
    </SectionContainer>
  );
};

export default CategorySection;
