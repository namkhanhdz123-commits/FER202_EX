import React from "react";

// 1. Leaf Component: Image
function Image({ url }) {
  return (
    <img
      src={url}
      alt="Card"
      style={{ width: "150px", height: "auto", display: "block" }}
    />
  );
}

// 2. Leaf Component: Title
function Title({ text }) {
  return <h3 style={{ color: "#e68a2e", margin: 0 }}>{text}</h3>;
}

// 3. Leaf Component: Description
function Description({ text }) {
  return <p style={{ color: "#666", margin: "5px 0 0 0" }}>{text}</p>;
}

// 4. Wrapper Component: SimpleCard
export function SimpleCard({ item }) {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        maxWidth: "500px",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <Image url={item.imageUrl} />
      <div>
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}
