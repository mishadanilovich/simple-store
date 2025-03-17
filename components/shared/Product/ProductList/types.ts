import { IProduct } from '@/types';

export interface IProps {
  data: IProduct[];
  title?: string;
  limit?: number;
}
