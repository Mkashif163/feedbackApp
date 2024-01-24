import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import Home from "./pages/home/home";
import Header from "./utils/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
