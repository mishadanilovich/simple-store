'use server';

import { hashSync } from 'bcrypt-ts-edge';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn, signOut } from '@/auth';
import { prisma } from '@/db/prisma';
import { formatError } from '@/lib/utils';
import { signInSchema, signUpSchema } from '@/lib/validations';
import { IRequestResponse } from '@/types';

export const signInWithCredentials = async (
  _prevState: unknown,
  formData: FormData
): Promise<IRequestResponse> => {
  try {
    const user = signInSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'User successfully logged in!' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'Incorrect email or password!' };
  }
};

export const signOutWithCredentials = async () => {
  await signOut();
};

export const signUpWithCredentials = async (
  _prevState: unknown,
  formData: FormData
): Promise<IRequestResponse> => {
  try {
    const user = signUpSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    const hashedPassword = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });

    await signIn('credentials', user);

    return { success: true, message: 'User successfully registered!' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: formatError(error) };
  }
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: { email },
  });
};
