import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexProvider from "@/context/IndexProvider";
import { Outlet } from "react-router-dom";

// INDICE DE LAYOUT
const IndexLayout = () => {
  return (
    <IndexProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </IndexProvider>
  );
};

export default IndexLayout;
