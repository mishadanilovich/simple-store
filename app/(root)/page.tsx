import ProductList from '@/components/shared/Product/ProductList';
import { getLatestProducts } from '@/lib/actions/product';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { PRODUCT_LIST_TITLE } from './constants';

const Homepage = async () => {
  const products = await getLatestProducts();

  return (
    <>
      <ProductList
        data={products}
        title={PRODUCT_LIST_TITLE}
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
};

export default Homepage;
