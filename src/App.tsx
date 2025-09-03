import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Literature from "./pages/Literature/Literature";
import Constitution from "./pages/Constitution/Constitution";
import About from "./pages/About/About";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <AppWrapper>
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
        </AppWrapper>
    );
};

export default App;
