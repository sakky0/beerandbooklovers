import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Literature from "./pages/Literature/Literature";
import Constitution from "./pages/Constitution/Constitution";
import About from "./pages/About/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Header />
            <Hero />
            <main>
                <Routes>
                    <Route index element={<Literature />} />
                    <Route path="constitution" element={<Constitution />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
