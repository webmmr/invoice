import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Invoices, { loader as invoicesLoader } from "./ui/Invoices";
import InvoiceDetail from "./ui/InvoiceDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Invoices />,
        loader: invoicesLoader,
      },
      {
        path: "/invoices/:id",
        element: <InvoiceDetail />,
        loader: invoicesLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
