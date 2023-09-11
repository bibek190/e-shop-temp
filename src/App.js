import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import { Header, Footer } from "./components/index";
// pages
import { Home, Contact } from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
