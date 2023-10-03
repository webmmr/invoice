import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Invoices from "./ui/Invoices";
import InvoiceDetail from "./ui/InvoiceDetail";
import { loader as invoicesLoader } from "./ui/AppLayout";

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
