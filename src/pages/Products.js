import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <Link to='/products/1'>Milk</Link>
      <Link to='/products/2'>Eggs</Link>
      <Link to='/products/3'>Rice</Link>
    </div>
  );
}

export default Products;
