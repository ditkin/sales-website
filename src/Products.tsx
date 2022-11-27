import gottem from '../assets/gottem.jpeg';
import closers from '../assets/closers.jpeg';
import alecbald from '../assets/alecbald-preview.jpeg';
import { getQueryParams } from './QueryParamContext';

const productData = [
  {
    image: closers,
    buyNowUrl:
      'https://app.hubspot.com/payments/04jIf8ie?referrer=PAYMENT_LINK',
    price: '$35.00',
    seller: 'd',
  },
  {
    image: gottem,
    buyNowUrl:
      'https://app.hubspot.com/payments/Q-zVMBRcQs-L?referrer=PAYMENT_LINK',
    price: '$50.00',
    seller: 'd',
  },
  {
    image: alecbald,
    buyNowUrl:
      'https://app.hubspot.com/payments/pLFgppatQoKvTD?referrer=PAYMENT_LINK',
    price: '$30.00',
    seller: 'i',
  },
];

interface ProductRowProps {
  image: string;
  buyNowUrl: string;
  price: string;
}
function ProductRow({ image, buyNowUrl, price }: ProductRowProps) {
  function onClick() {
    window.open(buyNowUrl, '_blank');
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 500,
        marginBottom: 24,
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '58%' }}>
        <img src={image} />
      </div>
      <div style={{ width: '42%', textAlign: 'center' }}>
        <button onClick={onClick} style={{ fontFamily: 'Oswald, sans-serif' }}>
          <u>BUY NOW</u> <br />
          {price}
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const queryParams = getQueryParams();
  const seller = queryParams.seller;

  const filteredProductData = productData.filter(
    product => product.seller === seller
  );

  return (
    <div>
      {filteredProductData.map(product => {
        return <ProductRow {...product} />;
      })}
    </div>
  );
}
