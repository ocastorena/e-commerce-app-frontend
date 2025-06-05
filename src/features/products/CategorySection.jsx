import React, { useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 0.5rem;
  gap: 1rem;
`;

const ScrollWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit */
  }
  flex: 1;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: inherit;
  cursor: pointer;
  padding: 0 1rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const ArrowButton = styled.button`
  background: #232323;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

const CategorySection = ({ categories, onCategoryClick }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionContainer>
      <ArrowButton onClick={() => scroll("left")} aria-label="Scroll left">
        &#8592;
      </ArrowButton>
      <ScrollWrapper ref={scrollRef}>
        {categories.map((category) => (
          <CategoryButton
            key={category.slug}
            onClick={() => onCategoryClick(category.slug)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </ScrollWrapper>
      <ArrowButton onClick={() => scroll("right")} aria-label="Scroll right">
        &#8594;
      </ArrowButton>
    </SectionContainer>
  );
};

export default CategorySection;
