import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';
import ProductPrice from '../ProductPrice';
import { OUT_OF_STOCK } from './constants';
import { IProps } from './types';

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <Link href={ROUTES.PRODUCT(product.slug)}>
          <Image
            src={product.images[0]}
            alt={product.slug}
            width={300}
            height={300}
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-sm'>{product.brand}</div>
        <Link href={ROUTES.PRODUCT(product.slug)}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice price={Number(product.price)} />
          ) : (
            <p className='text-destructive'>{OUT_OF_STOCK}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
