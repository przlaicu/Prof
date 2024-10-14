import { useSearchParams } from 'react-router-dom';
export default function InvoiceDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Params
  const invoiceID = searchParams.get('id');
  const due = searchParams.get('due');
  const amount = searchParams.get('amount');
  const status = searchParams.get('status');

  const date = new Date(due);

  // URL http://localhost:3000/invoice/details?id=287381267&due=2024-01-05&status=paid&amount=1099,99
  return (
    <div>
      <h1>Invoice {invoiceID} Details</h1>
      <p>
        Your invoice #{invoiceID} amounting to {amount} USD with a due date of{' '}
        {date.toLocaleDateString('hr-HR')} is {status}.
      </p>
    </div>
  );
}
