function InvoiceList({ invoices, deleteInvoice }) {

  const getStatusColor = (status) => {
    if (status === "Paid") return "green";
    if (status === "Pending") return "orange";
    if (status === "Unpaid") return "red";
  };

  return (
    <table border="1" cellPadding="10">
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
            <td style={{ color: getStatusColor(invoice.status) }}>
              {invoice.status}
            </td>
            <td>
              <button onClick={() => deleteInvoice(invoice.id)}>
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