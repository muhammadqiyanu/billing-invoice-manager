import { useState } from "react";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceList from "../components/InvoiceList";
import mockInvoices from "../data/mockInvoices";

function Dashboard() {

  const [invoices, setInvoices] = useState(mockInvoices);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  };

  return (
    <div>

      <InvoiceForm
  addInvoice={addInvoice}
  invoices={invoices}
/>

      <div className="card">
        <InvoiceList
          invoices={invoices}
          deleteInvoice={deleteInvoice}
        />
      </div>

    </div>
  );
}

export default Dashboard;