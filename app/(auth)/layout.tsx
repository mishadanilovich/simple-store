import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className='flex-center min-h-screen w-full'>{children}</div>;
}
