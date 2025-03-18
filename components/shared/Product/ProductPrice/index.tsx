import { FC } from 'react';
import { cn } from '@/lib/utils';
import { DOLLAR_SYMBOL } from './constants';
import { IProps } from './types';

export const ProductPrice: FC<IProps> = ({ price, className }) => {
  const stringPrice = price.toFixed(2);
  const [intValue, floatValue] = stringPrice.split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className='align-super text-xs'>{DOLLAR_SYMBOL}</span>
      {intValue}
      <span className='align-super text-xs'>.{floatValue}</span>
    </p>
  );
};
