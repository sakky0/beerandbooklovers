/// <reference types="vite-plugin-svgr/client" />

//import { useState } from 'react'
//import beerLogo from "/beer.svg";
import BeerLogo from "./assets/beer.svg?react";
import BooksLogo from "./assets/books.svg?react";
import BambiLogo from "./assets/bambi.svg?react";
import "./App.css";

const App = () => {
    return (
        <>
            <div>
                <BeerLogo className="logo" />
                <BooksLogo className="logo" />
                <BambiLogo className="logo" />
            </div>
            <h1>Klub ljubitelja pive i knjige</h1>
            <p className="soon">Coming soon</p>
        </>
    );
};

export default App;
