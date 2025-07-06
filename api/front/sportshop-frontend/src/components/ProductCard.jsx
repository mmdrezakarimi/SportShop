import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-end text-right
      transition-shadow duration-300 cursor-pointer select-none h-[320px]
      hover:shadow-xl
      active:scale-105
      focus-within:scale-105
      transform
      "
      tabIndex={0} // فعال کردن فوکوس برای کیبورد
    >
      <div className="w-full h-48 mb-4 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain rounded-lg"
          draggable={false}
        />
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900 truncate">{product.name}</h3>
      <p className="text-green-600 font-bold mb-4">{product.price.toLocaleString()} تومان</p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition self-start">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductCard;
