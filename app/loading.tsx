import Image from 'next/image';
import Loader from '@/assets/loader.gif';

const LoadingPage = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <Image src={Loader} alt='Loading...' unoptimized height={50} width={50} />
  </div>
);

export default LoadingPage;
