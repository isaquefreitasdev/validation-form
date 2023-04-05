import { useEffect, useState } from "react";
import validator from "validator";

import "./App.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false)

  const validationEmail = (event) => {
    let ema = event.target.value;
    setEmail(ema);
    setIsTypingEmail(true)
    
  };
  const validationPassword = (event) => {
    let pass = event.target.value;
    setPassword(pass);
    setIsTypingPassword(true)
  };
  return (
    <>
      <header></header>
      <main>
        <div className="box">
          <label htmlFor="">Email:</label>
          <input
            onChange={validationEmail}
            type="email"
            name=""
            id="email"
            value={email}
          />
          {isTypingEmail && !validator.isEmail(email) && (
            <p>email Inválido</p>
          )}
          <label htmlFor="">Password:</label>
          <input
            disabled={email === ""}
            onChange={validationPassword}
            type="password"
            name=""
            id="password"
            value={password}
          />
          {isTypingPassword && password.length < 6 && (<p>No minimo 6 digitos</p>) }
          <div className="align_button">
            <button
              disabled={email === "" || password === "" || password.length < 6}
              id="click"
            >
              Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
