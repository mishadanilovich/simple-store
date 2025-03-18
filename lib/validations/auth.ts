import { object, string } from 'zod';

export const signInSchema = object({
  email: string().email('Invalid email address'),
  password: string().min(6, 'Password must be at least 6 characters'),
});
