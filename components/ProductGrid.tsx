
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <div className="bg-brand-off-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal">New Arrivals</h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-600">Explore our latest designs, perfect for any occasion.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
