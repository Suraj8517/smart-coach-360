import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UseCasesPage from "./pages/UseCasesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ComparisonPage from "./pages/ComparisonPage";
import Blogs from "./pages/blogs";
import BlogsPost from "./pages/blogsPost";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-lilac">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usecases" element={<UseCasesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/casestudies" element={<CaseStudiesPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogsPost />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}