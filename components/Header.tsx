
import React from 'react';

const NavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="text-sm font-medium uppercase tracking-wider text-brand-charcoal hover:text-opacity-70 transition-colors duration-300">
    {children}
  </a>
);

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <button className="text-brand-charcoal hover:text-opacity-70 transition-colors duration-300">
        {children}
    </button>
);


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-brand-off-white bg-opacity-90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="w-1/3">
            {/* Can add hamburger for mobile */}
        </div>
        <div className="w-1/3 text-center">
          <a href="#" className="font-serif text-4xl font-bold tracking-widest text-brand-charcoal">
            COR
          </a>
        </div>
        <div className="w-1/3 flex justify-end items-center space-x-6">
            <div className="hidden md:flex space-x-8">
                <NavLink>Shop</NavLink>
                <NavLink>Collections</NavLink>
                <NavLink>About</NavLink>
            </div>
            <div className="flex items-center space-x-4">
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </IconWrapper>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </IconWrapper>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </IconWrapper>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
