import React from "react";
import { Register } from "../../components/register";
import { Navbar } from "../../layouts/navbar";
import { Footer } from "../../layouts/footer";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <Navbar />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
