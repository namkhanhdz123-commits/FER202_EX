import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#e68a2e",
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        <h2 style={{ color: "#d9534f", margin: 0 }}>FPT UNIVERSITY</h2>
      </div>
      <nav style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

function Content() {
  return (
    <main style={{ textAlign: "center", padding: "40px 20px" }}>
      <section style={{ marginBottom: "30px" }}>
        <h2>About</h2>
        <p style={{ color: "#555" }}>
          This is the about section of the website.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p style={{ color: "#555" }}>
          For any inquiries, please contact us at example@example.com.
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5cc84",
        textAlign: "center",
        padding: "15px",
        color: "white",
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2023 Website. All rights reserved.</p>
    </footer>
  );
}

export function SimpleWebsite() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
