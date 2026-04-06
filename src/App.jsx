import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";
import LandingPage from "./LandingPage";

export default function App() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <LandingPage />
    </>
  );
}