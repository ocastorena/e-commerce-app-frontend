import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, selectProductDetails } from "./ProductDetailsSlice";
import ProductDetails from "./ProductDetails";

function ProductDetailsPage() {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(fetchProductById(product_id));
  }, [dispatch, product_id]);

  return <ProductDetails product={productDetails} />;
}

export default ProductDetailsPage;
