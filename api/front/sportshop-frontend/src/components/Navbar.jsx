import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // باز و بسته کردن منوی موبایل
  const toggleMenu = () => setIsOpen(!isOpen);

  // لینک‌های منو
  const links = [
    { to: '/', label: 'خانه' },
    { to: '/products', label: 'محصولات' },
    { to: '/about', label: 'درباره ما' },
    { to: '/contact', label: 'تماس با ما' },
    { to: '/cart', label: 'سبد خرید', icon: <FaShoppingCart /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <Link to="/" className="text-2xl font-bold text-blue-700 rtl">
            SportShop
          </Link>

          {/* دکمه موبایل */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:text-blue-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex space-x-8 rtl space-x-reverse">
            {links.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 rtl space-x-reverse px-3 py-2 rounded-md text-sm font-medium
                  ${
                    isActive
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-700 hover:text-blue-700'
                  }`
                }
                end
              >
                {icon && <span>{icon}</span>}
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rtl px-4 py-4 space-y-2 border-t border-gray-200">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // بستن منو هنگام کلیک
              className={({ isActive }) =>
                `flex items-center space-x-2 rtl space-x-reverse px-3 py-2 rounded-md text-base font-medium
                ${
                  isActive
                    ? 'text-blue-700 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`
              }
              end
            >
              {icon && <span>{icon}</span>}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
