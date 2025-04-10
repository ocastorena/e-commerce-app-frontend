import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CategorySection from "./CategorySection";
import {
  fetchProducts,
  selectProducts,
  selectProductsLoading,
  selectProductsError,
  fetchCategories,
  selectCategories,
  selectCategoriesLoading,
  selectCategoriesError,
  fetchProductsByCategory,
} from "./ProductsSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const productsLoading = useSelector(selectProductsLoading);
  const productsError = useSelector(selectProductsError);

  const categories = useSelector(selectCategories);
  const categoriesLoading = useSelector(selectCategoriesLoading);
  const categoriesError = useSelector(selectCategoriesError);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleProductClick = (product_id) => {
    navigate(`/products/${product_id}`);
  };

  const handleCategoryClick = (category) => {
    if (category === "All") {
      dispatch(fetchProducts());
    } else {
      dispatch(fetchProductsByCategory(category));
    }
  };

  return (
    <div>
      {categoriesLoading && <p>Loading categories...</p>}
      {categoriesError && <p>Error: {categoriesError}</p>}
      {!categoriesLoading && !categoriesError && (
        <CategorySection
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      )}
      {productsLoading && <p>Loading products...</p>}
      {productsError && <p>Error: {productsError}</p>}
      {!productsLoading && !productsError && (
        <ProductList products={products} onClickProduct={handleProductClick} />
      )}
    </div>
  );
}

export default ProductPage;
