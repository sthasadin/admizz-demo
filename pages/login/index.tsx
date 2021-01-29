import React from "react";
import { Login } from "../../components/Login";
import { Navbar } from "../../layouts/navbar";
import { Footer } from "../../layouts/footer";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <Navbar />
        <Login />
      </main>
      <Footer />
    </div>
  );
}
