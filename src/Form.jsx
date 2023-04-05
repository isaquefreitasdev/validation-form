import { useState } from "react";

import "./App.css";

function Form() {
  return (
    <>
      <header></header>
      <main>
        <div className="box">
          <label htmlFor="">Email:</label>
          <input type="email" name="" id="email" />
          <label htmlFor="">Password:</label>
          <input type="password" name="" id="password" />
          <div className="align_button">
            <button id="click">Login</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
