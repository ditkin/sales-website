import { PRODUCTS } from './constants/routes';
import { useRoute } from './hooks/useRoute';
import Products from './Products';

type routeType = typeof PRODUCTS;

function getBaseRoutePage(route: string): routeType {
  return route.split('/')[0] as routeType;
}

export default function Router() {
  const route = useRoute();
  const baseRoute = getBaseRoutePage(route);

  return (
    <div
      class="py-28 text-xl"
      style={{ paddingLeft: '14%', paddingRight: '14%' }}
    >
      <br />
      <br />
      {baseRoute === PRODUCTS && <Products />}
    </div>
  );
}
