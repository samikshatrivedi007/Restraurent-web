import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TrustedSection from "./component/TrustedSection";
import ServicesSection from "./component/ServicesSection";
import FavourablyRated from "./component/FavourablyRated";
import Testimonial from "./component/Testimonial";
import Advantage from "./component/Advantage";
import DemoSection from "./component/DemoSection";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import AdminDashboard from "./component/AdminDashboard";
import OrderPage from "./component/OrderpageComponent";


function App() {
    return (
        <Router>
           <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            <div className="main-container">
                <section className="section">
                    <TrustedSection />
                </section>
            </div>
            <div className="scrollable-section">
                <ServicesSection />
                <FavourablyRated />
                <Testimonial />
                <Advantage />
                <DemoSection />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
