import { PrismaAdapter } from '@auth/prisma-adapter';
import { compareSync } from 'bcrypt-ts-edge';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/db/prisma';
import { getUserByEmail } from '@/lib/actions/user';
import { ROUTES } from '@/lib/constants';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: ROUTES.SIGN_IN,
    error: ROUTES.SIGN_IN,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const user = await getUserByEmail(credentials.email as string);

        if (user && user.password) {
          const isPasswordMatch = compareSync(
            credentials.password as string,
            user.password
          );

          if (isPasswordMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user, trigger, token }) => {
      session.user.id = token.sub!;

      if (trigger === 'update') {
        session.user.name = user.name;
      }

      return session;
    },
  },
});
