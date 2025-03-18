import { APP_NAME } from '@/lib/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='flex-center p-5'>
        {APP_NAME} | {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};
