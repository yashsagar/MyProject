import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./pages/Body";
import Restaurant from "./pages/Restaurant";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Restaurant/:restId" element={<Restaurant />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
