import React from "react";
import { Link } from "react-router-dom";
import { SNACKS } from "./snacks";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h3>Hello, I am a vending machine. What would you like to eat?</h3>
      <ul>
        {SNACKS.map(s => <li key={s.name}><Link to={`/snack/${s.name}`}>{s.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default VendingMachine;