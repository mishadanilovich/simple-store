import { notFound } from 'next/navigation';
import { FC } from 'react';
import { ProductImages } from '@/components/shared/Product/ProductImages';
import ProductPrice from '@/components/shared/Product/ProductPrice';
import { StockBadge } from '@/components/shared/StockBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product';
import {
  ADD_TO_CART,
  DESCRIPTION_LABEL,
  PRICE_LABEL,
  STATUS_LABEL,
} from './constants';
import { IProps } from './types';

const ProductDetailsPage: FC<IProps> = async ({ params }) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const {
    brand,
    category,
    name,
    rating,
    numReviews,
    price,
    description,
    stock,
    images,
  } = product;

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='col-span-2'>
          <ProductImages images={images} />
        </div>
        <div className='col-span-2 p-5'>
          <div className='flex flex-col gap-6'>
            <p>
              {brand} {category}
            </p>
            <h3 className='h3-bold'>{name}</h3>
            <p>
              {rating} of {numReviews} Reviews
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <ProductPrice
                price={Number(price)}
                className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
              />
            </div>
          </div>
          <div className='mt-10'>
            <p className='font-semibold'>{DESCRIPTION_LABEL}</p>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <Card>
            <CardContent className='space-y-2 p-4'>
              <div className='flex justify-between'>
                <p>{PRICE_LABEL}</p>
                <ProductPrice price={Number(price)} />
              </div>
              <div className='flex justify-between'>
                <p>{STATUS_LABEL}</p>
                <StockBadge stock={stock} />
              </div>
              {stock > 0 && (
                <div>
                  <Button className='w-full'>{ADD_TO_CART}</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
