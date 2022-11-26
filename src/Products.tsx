import gottem from '../assets/gottem.jpeg';
import closers from '../assets/closers.jpeg';

const productData = [
  {
    image: closers,
    buyNowUrl:
      'https://app.hubspot.com/payments/04jIf8ie?referrer=PAYMENT_LINK',
  },
  {
    image: gottem,
    buyNowUrl:
      'https://app.hubspot.com/payments/Q-zVMBRcQs-L?referrer=PAYMENT_LINK',
  },
];

interface ProductRowProps {
  image: string;
  buyNowUrl: string;
}
function ProductRow({ image, buyNowUrl }: ProductRowProps) {
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
        <button onClick={onClick}>BUY NOW</button>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div>
      {productData.map(product => {
        return (
          <ProductRow image={product.image} buyNowUrl={product.buyNowUrl} />
        );
      })}
    </div>
  );
}
