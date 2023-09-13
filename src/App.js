import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import { Header, Footer } from "./components/index";
// pages
import { Home, Contact } from "./pages/index";
import { Login, Register, Reset } from "./pages/index";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
