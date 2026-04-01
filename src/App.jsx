import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UseCasesPage from "./pages/UseCasesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ComparisonPage from "./pages/ComparisonPage";

export default function App() {
  const [page, setPage] = useState("home");
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const pages = {
    home: <HomePage navigate={navigate} />,
    usecases: <UseCasesPage navigate={navigate} />,
    integrations: <IntegrationsPage navigate={navigate} />,
    casestudies: <CaseStudiesPage navigate={navigate} />,
    comparison: <ComparisonPage navigate={navigate} />,
  };
  return (
    <div className="min-h-screen bg-brand-lilac">
      <Navbar currentPage={page} navigate={navigate} />
      <main>{pages[page]}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
