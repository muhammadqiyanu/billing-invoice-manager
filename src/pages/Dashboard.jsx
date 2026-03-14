import { useState } from "react";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceList from "../components/InvoiceList";
import mockInvoices from "../data/mockInvoices";

function Dashboard() {
  const [invoices, setInvoices] = useState(mockInvoices);

  const sortLowest = () => {
    const sorted = [...invoices].sort((a, b) => a.amount - b.amount);
    setInvoices(sorted);
  };

  const sortHighest = () => {
    const sorted = [...invoices].sort((a, b) => b.amount - a.amount);
    setInvoices(sorted);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Billing Invoice Manager</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={sortLowest} style={{ marginRight: "10px" }}>
          Sort Amount Terendah
        </button>

        <button onClick={sortHighest}>
          Sort Amount Tertinggi
        </button>
      </div>

      <InvoiceForm invoices={invoices} setInvoices={setInvoices} />
      <InvoiceList invoices={invoices} setInvoices={setInvoices} />
    </div>
  );
}

export default Dashboard;