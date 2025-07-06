import React from 'react';
import { FaShoePrints, FaTshirt, FaSocks, FaBoxOpen } from 'react-icons/fa';

const categories = [
  { key: 'shoes', label: 'کفش‌ها', icon: <FaShoePrints size={30} /> },
  { key: 'tshirts', label: 'تیشرت‌ها', icon: <FaTshirt size={30} /> },
  { key: 'socks', label: 'جوراب‌ها', icon: <FaSocks size={30} /> },
  { key: 'accessories', label: 'لوازم جانبی', icon: <FaBoxOpen size={30} /> },
];

const CategoriesPreview = ({ onSelectCategory }) => {
  return (
    <div className="flex justify-end space-x-6 space-x-reverse px-4 my-8">
      {categories.map(cat => (
        <div
          key={cat.key}
          onClick={() => onSelectCategory(cat.key)}
          className="cursor-pointer flex flex-col items-center text-gray-700 hover:text-blue-700 transition transform hover:scale-110"
          title={`نمایش دسته ${cat.label}`}
        >
          <div className="bg-blue-100 rounded-full p-4 mb-2 text-blue-600 shadow-md">
            {cat.icon}
          </div>
          <span className="text-sm font-semibold">{cat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPreview;
