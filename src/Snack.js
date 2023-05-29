import React from "react";
import { useParams, Link } from "react-router-dom";
import { SNACKS } from "./snacks";
import './Snack.css'

function Snack() {
  const params = useParams(); // { name: ... }

  const currSnack = SNACKS.find(snack => snack.name === params.name);

  return (
    <div className="Snack">
      <h3>You must like {params.name}.</h3>
      <img className="snack-img" src={`${currSnack.img}`} alt={`${params.name}`} />
      <Link to="/">Go back!</Link>
    </div>
  );
}

export default Snack;