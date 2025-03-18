import { DefaultUser } from '@auth/core/types';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compareSync } from 'bcrypt-ts-edge';
import NextAuth, { DefaultSession } from 'next-auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AdapterUser } from 'next-auth/adapters';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/db/prisma';
import { getUserByEmail } from '@/lib/actions/user';
import { ROUTES } from '@/lib/constants';
import { Role } from '@/types';

declare module 'next-auth' {
  interface Session {
    user: {
      role: Role;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role: Role;
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser {
    role?: Role;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role: Role;
  }
}

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
              role: user.role as Role,
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
      session.user.role = token.role;
      session.user.name = token.name;

      if (trigger === 'update') {
        session.user.name = user.name;
      }

      return session;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role as Role;

        if (user.name === 'NO_NAME') {
          token.name = user.email!.split('@')[0];

          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }

        if (session?.user.name && trigger === 'update') {
          token.name = session.user.name;
        }
      }

      return token;
    },
  },
});
