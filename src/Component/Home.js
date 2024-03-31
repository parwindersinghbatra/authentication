import React, { useState } from "react";
import Navbar from "./Navbar";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import DisplayPage from "./DisplayPage";
import "./../Component/LoginPage.css";

const LoginPage = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (e) {
      console.error(e);
    }
  }
  if (isLoggedIn) {
    return <DisplayPage email={email} password={password} auth={auth} />;
  }

  return (
    <>
    <Navbar/>
      <section>
        <div class="signin">
          <div class="content">
            <h2>Sign In</h2>
            <div class="form">
              <div class="inputBox">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div class="inputBox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div class="inputBox">
                <input type='submit' onClick={handleLogin} value={"Login"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
