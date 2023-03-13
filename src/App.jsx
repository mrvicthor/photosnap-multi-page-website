import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Stories from "./pages/stories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
