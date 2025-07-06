import React, { useRef } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

const categories = [
  { key: 'shoes', label: 'کفش‌ها' },
  { key: 'tshirts', label: 'تیشرت‌ها' },
  { key: 'socks', label: 'جوراب‌ها' },
  { key: 'accessories', label: 'لوازم جانبی' },
];

const ProductList = () => {
  const scrollRefs = useRef({});

  return (
    <div className="p-6 max-w-7xl mx-auto text-right">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-900">لیست محصولات</h1>

      {categories.map((category) => {
        const categoryProducts = products.filter(p => p.category === category.key);
        if (categoryProducts.length === 0) return null;

        const previewProducts = categoryProducts.slice(0, 10);

        return (
          <section key={category.key} className="mb-16">
            <h2
              className="text-xl font-bold mb-5 cursor-pointer text-blue-700 hover:underline"
              onClick={() => alert(`نمایش همه محصولات دسته ${category.label} (در حال توسعه)`) }
            >
              {category.label} &gt;
            </h2>

            <div
  ref={(el) => (scrollRefs.current[category.key] = el)}
  dir="rtl"
  className="flex space-x-6 space-x-reverse overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 py-2 scroll-smooth"
>
  {previewProducts.map(product => (
    <div
      key={product.id}
      className="flex-shrink-0 w-[250px] transition-transform duration-300 hover:scale-105"
      style={{ willChange: 'transform' }}
    >
      <ProductCard product={product} />
    </div>
  ))}
</div>

          </section>
        );
      })}
    </div>
  );
};

export default ProductList;
