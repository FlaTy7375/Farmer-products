import "../../styles.css";
import Page from "../layout/page/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import ShopPage from "../pages/shop-page/shop-page";
import ScrollToTop from "../../scroll/scroll-top";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<MainPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
