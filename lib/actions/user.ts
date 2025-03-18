'use server';

import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn, signOut } from '@/auth';
import { prisma } from '@/db/prisma';
import { signInSchema } from '@/lib/validations';
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

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: { email },
  });
};
