import { FC } from 'react';
import { Badge } from '@/components/ui/badge';
import { IN_STOCK, OUT_OF_STOCK } from './constants';
import { IProps } from './types';

export const StockBadge: FC<IProps> = ({ stock }) =>
  stock > 0 ? (
    <Badge variant='outline'>{IN_STOCK}</Badge>
  ) : (
    <Badge variant='destructive'>{OUT_OF_STOCK}</Badge>
  );
