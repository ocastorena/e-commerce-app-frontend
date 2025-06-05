import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 10rem;
  max-height: 18rem;
  padding: 1rem 0;
  border-bottom: 1px solid #2b2b2b;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 6rem;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-right: 8rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #bdbdbd;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ff5252;
  }
`;

const QuantitySelect = styled.select`
  width: 16rem;
  height: 3rem;
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

const ItemCard = ({ item, onRemove, onQuantityChange }) => {
  return (
    <Card>
      <img
        src={item.product.images?.[0] || item.product.thumbnail}
        alt={item.product.name}
      />
      <Container>
        <Top>
          <h3>{item.product.name}</h3>
          <span>{item.product.price}</span>
        </Top>
        <Bottom>
          <RemoveButton
            onClick={() => onRemove(item.product_id)}
            aria-label="Remove from cart"
          >
            <svg
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" />
            </svg>
          </RemoveButton>
          <QuantitySelect
            id="quantity-select"
            name="quantity"
            value={item.quantity}
            onChange={(e) =>
              onQuantityChange(item.product_id, parseInt(e.target.value, 10))
            }
          >
            {Array.from({ length: item.quantity }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </QuantitySelect>
        </Bottom>
      </Container>
    </Card>
  );
};

export default ItemCard;
