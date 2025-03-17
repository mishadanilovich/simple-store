'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { PRODUCT_FALLBACK_IMAGE } from './constants';
import { IProps } from './types';

export const ProductImages: FC<IProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(
    images[0] ?? PRODUCT_FALLBACK_IMAGE
  );

  return (
    <div className='space-y-4'>
      <Image
        src={mainImage}
        alt='Product image'
        width={1000}
        height={1000}
        className='min-h-[300px] object-cover object-center'
        onError={() => {
          setMainImage(PRODUCT_FALLBACK_IMAGE);
        }}
      />
      {images.length > 0 && (
        <div className='flex gap-2'>
          {images.map((image) => (
            <div
              key={image}
              className={cn(
                'border cursor-pointer hover:border-orange-600',
                mainImage === image && 'border-orange-500'
              )}
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image}
                alt='Product list image'
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
