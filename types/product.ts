import { z } from 'zod';
import { insertProductSchema } from '@/lib/validations';

export interface IProduct extends z.infer<typeof insertProductSchema> {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
}
