import shirt from '../assets/shirt.jpg';

const BUY_NOW_URL =
  'https://app.hubspot.com/payments/purchase/hscs_iGrPxYBBeJ2RfAyXOcHyFNSSkdZBrvcQ3xE1XctyVtRxyvvmUN9OJp6PPVWzwg4E?referrer=PAYMENT_LINK';

interface ProductRowProps {
  image: string;
}
function ProductRow({ image }: ProductRowProps) {
  function onClick() {
    window.open(BUY_NOW_URL, '_blank');
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 500 }}>
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
      <ProductRow image={shirt} />
    </div>
  );
}
