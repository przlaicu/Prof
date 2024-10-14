import { useParams } from 'react-router-dom';

export default function CustomInvoiceDetails() {
  // URL http://localhost:3000/invoice/details/:invoiceID aka /invoice/details/123

  const { invoiceID } = useParams();

  return (
    <div>
      <h1>Custom Invoice Details</h1>
      <h2>Invoice #{invoiceID} Details.</h2>
    </div>
  );
}
