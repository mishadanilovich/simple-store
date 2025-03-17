import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { CART_BUTTON_TITLE } from './constants';

const CartButton = () => (
  <Button asChild variant='ghost'>
    <Link href={ROUTES.CART}>
      <ShoppingCart /> {CART_BUTTON_TITLE}
    </Link>
  </Button>
);

export default CartButton;
