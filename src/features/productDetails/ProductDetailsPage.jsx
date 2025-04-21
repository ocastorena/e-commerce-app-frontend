import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, selectProductDetails } from "./ProductDetailsSlice";
import { selectCartId, addItemsToCart } from "../cart/CartSlice";
import ProductDetails from "./ProductDetails";
import ConfirmationModal from "./ConfirmationModal";

function ProductDetailsPage() {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetails = useSelector(selectProductDetails);
  const cart_id = useSelector(selectCartId);

  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById(product_id));
  }, [dispatch, product_id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddToCartClick = async () => {
    const result = await dispatch(
      addItemsToCart({ cart_id, product_id, quantity })
    );
    if (addItemsToCart.fulfilled.match(result)) {
      setShowConfirmation(true);
    } else {
      console.error("Failed to add items to cart.");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleOnCartClick = () => {
    navigate("/cart");
  };

  const onContinueClick = () => {
    navigate(-1);
  };

  return (
    <>
      <ProductDetails
        product={productDetails}
        onBackClick={handleBackClick}
        onAddToCartClick={handleAddToCartClick}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />

      {showConfirmation && (
        <ConfirmationModal
          message="Product added to cart successfully!"
          onCartClick={handleOnCartClick}
          onContinueClick={onContinueClick}
        />
      )}
    </>
  );
}

export default ProductDetailsPage;
