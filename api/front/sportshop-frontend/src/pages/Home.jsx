import React, { useState } from 'react';
import BannerCarousel from '../components/BannerCarousel';
import CategoriesPreview from '../components/CategoriesPreview';
import ProductList from '../components/ProductList';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryKey) => {
    setSelectedCategory(categoryKey);
    alert(`دسته ${categoryKey} انتخاب شد (در آینده اینجا فیلتر میشه)`);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-right font-sans">
      <BannerCarousel />
      <CategoriesPreview onSelectCategory={handleSelectCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
