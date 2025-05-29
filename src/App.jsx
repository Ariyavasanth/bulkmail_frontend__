import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import Navbar from "./components/Navbar.jsx";
import Heading from "./components/Heading.jsx";
import Body from "./components/Body.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import ContextProvider from "./components/ContextProvider.jsx";

function App() {
  return (
    <>
      <ContextProvider>
        <main className="bg-gray-400 poppins w-[100%] h-[100%] bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c7744] text-[#c9f7dd] min-h-screen">
          <Navbar />
          <Heading />
          <Body />
          <Button />
          <Footer />
        </main>
      </ContextProvider>
    </>
  );
}

export default App;
