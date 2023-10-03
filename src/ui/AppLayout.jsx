import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import { getInvoices } from "../services/apiInvoices";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex">
      <div className="h-[100vh] bg-darkBlue w-[6.5rem] rounded-e-3xl sticky">
        <Navbar />
      </div>
      <main className="bg-light h-screen flex-1 overflow-auto">
        <div className="w-[80rem] m-auto pt-20">
          {isLoading && <Spinner />}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;

export async function loader() {
  const invoices = await getInvoices();

  return invoices;
}
