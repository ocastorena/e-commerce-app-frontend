import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: #fff;
  color: #000;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const ModalButton = styled.button`
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #0d0d0d;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const ConfirmationModal = ({ message, onCartClick, onContinueClick }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3>{message}</h3>
        <div>
          <ModalButton onClick={onCartClick}>Go to Cart</ModalButton>
          <ModalButton onClick={onContinueClick}>Continue Shopping</ModalButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
