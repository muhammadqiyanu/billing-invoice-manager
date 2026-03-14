function InvoiceList({ invoices, setInvoices }) {

  const handleDelete = (id) => {
    const updated = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(updated);
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}> 
            <td>{invoice.id}</td>
            <td>{invoice.client}</td>
            <td>Rp {invoice.amount}</td>
            <td>{invoice.status}</td>
            <td>
              <button onClick={() => handleDelete(invoice.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvoiceList;