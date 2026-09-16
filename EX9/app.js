import React from "react";
import { HelloWorld, AboutMe } from "./helloworld";
import { Counter } from "./counter";
import { SimpleCard } from "./image";
import { SimpleWebsite } from "./header";

function App() {
  const cardData = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0982827763",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg",
  };

  return (
    <div style={{ padding: "20px" }}>
      <HelloWorld />
      <hr />
      <AboutMe />
      <hr />
      <Counter />
      <hr />
      <h3>Simple Card Exercise:</h3>
      <SimpleCard item={cardData} />
      <hr />
      <h3>Simple Website Exercise:</h3>
      <SimpleWebsite />
    </div>
  );
}

export default App;
