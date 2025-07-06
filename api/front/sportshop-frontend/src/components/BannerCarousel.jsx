import React from 'react';

const BannerCarousel = () => {
  // فعلاً یه تصویر ثابت با استایل حرفه‌ای میذاریم  
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl flex items-center justify-center text-white text-4xl font-bold select-none">
      SportShop - فروشگاه حرفه‌ای لوازم ورزشی
    </div>
  );
};

export default BannerCarousel;
