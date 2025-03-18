import { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='wrapper flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
