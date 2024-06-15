import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're currently working on our menu.</p>
      )}
    </main>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closeHours = 20;
  console.log(hours);

  return (
    <footer className="footer">
      <div className="order">
        {hours >= openHours && hours < closeHours
          ? `We're open until ${closeHours}:00, Come visit us or order online.`
          : `We're welcome you between ${openHours}:00 to ${closeHours}:00.`}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
