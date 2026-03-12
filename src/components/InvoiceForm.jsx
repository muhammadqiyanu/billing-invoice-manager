import { useState } from "react";

function InvoiceForm({ addInvoice, invoices }) {

  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInvoice = {
  id: invoices.length + 1,
  client,
  amount: Number(amount),
  status
};

    addInvoice(newInvoice);

    setClient("");
    setAmount("");
    setStatus("Pending");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Client Name"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Paid</option>
        <option>Pending</option>
        <option>Unpaid</option>
      </select>

      <button type="submit">
        Add Invoice
      </button>

    </form>
  );
}

export default InvoiceForm;