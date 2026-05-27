import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexProvider from "@/context/IndexProvider";
import { Outlet } from "react-router-dom";

const IndexLayout = () => {
  return (
    <IndexProvider>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </IndexProvider>
  );
};

export default IndexLayout;
