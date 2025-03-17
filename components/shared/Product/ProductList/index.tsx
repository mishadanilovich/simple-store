import { FC } from 'react';
import ProductCard from '../ProductCard';
import { EMPTY_PRODUCT_LIST } from './constants';
import { IProps } from './types';

export const ProductList: FC<IProps> = ({ data, title, limit }) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title}</h2>
      {limitedData.length ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {limitedData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>{EMPTY_PRODUCT_LIST}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
