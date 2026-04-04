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
import HelpCentre from "./pages/Helpcentrepage";
import ContactPage from "./pages/contactus";
import AboutUs from "./pages/Aboutus";
import Security from "./pages/Security";
import ContactForm from "./components/Form/ContactForm";
import { useState } from "react";

export default function LandingPage() {  
      const [openContactForm, setOpenContactForm] = useState(false);
  return (
    
    <Router>
      <div className="min-h-screen bg-brand-lilac">
        <Navbar onOpenContactForm={() => setOpenContactForm(true)} />
        {openContactForm && <ContactForm onClose={() => setOpenContactForm(false)} />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usecases" element={<UseCasesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogsPost />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/security" element={<Security />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}