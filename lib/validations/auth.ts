import { object, string } from 'zod';

export const signInSchema = object({
  email: string().email('Invalid email address'),
  password: string().min(6, 'Password must be at least 6 characters'),
});

export const signUpSchema = object({
  name: string().min(3, 'Name must be at least 3 characters'),
  email: string().email('Invalid email address'),
  password: string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: string().min(
    6,
    'Confirm password must be at least 6 characters'
  ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
