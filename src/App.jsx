import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";
import LandingPage from "./LandingPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <PageLoader onComplete={() => setLoading(false)} />;
  }

  return <LandingPage />;
}