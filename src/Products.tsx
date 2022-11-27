import gottem from '../assets/gottem.jpeg';
import closers from '../assets/closers.jpeg';

const productData = [
  {
    image: closers,
    buyNowUrl:
      'https://app.hubspot.com/payments/04jIf8ie?referrer=PAYMENT_LINK',
    price: '$35.00',
  },
  {
    image: gottem,
    buyNowUrl:
      'https://app.hubspot.com/payments/Q-zVMBRcQs-L?referrer=PAYMENT_LINK',
    price: '$50.00',
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
  return (
    <div>
      {productData.map(product => {
        return <ProductRow {...product} />;
      })}
    </div>
  );
}
