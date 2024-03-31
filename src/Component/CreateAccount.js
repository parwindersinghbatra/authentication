import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./../Component/CreateAccount.css";

import Navbar from "./Navbar";
import { app } from "../firebase";
import LoginPage from "./Home";

const CreateAccount = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isAccountCreated, setISAccountCreated] = useState(false);
  const auth = getAuth();
  async function handleCreateAccount() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Account Created Successfully");
      setISAccountCreated(true);
    } catch (e) {
      console.error(e);
    }
  }

  if (isAccountCreated) {
    return <LoginPage />;
  }

  return (
    <div>
      <Navbar />
      <section className="section_register">
        <div class="main_signin">
        <div class="content">
          <h2>Create Account</h2>
          <div>
            <div className="form_one">
            <div className="Box_user">
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Box_user">
              <input
                type="password"
                placeholder="Email Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Box_user">
              <input
                type="submit"
                onClick={handleCreateAccount}
                value={"Create Account"}
              />
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
