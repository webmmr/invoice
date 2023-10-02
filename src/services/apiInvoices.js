// const BASE_URL = "http://localhost:3000/invoices";
const BASE_URL = "https://invoice-json.vercel.app/invoices";

export async function getInvoices() {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch invoice data");

  const invoices = await res.json();

  return invoices;
}
