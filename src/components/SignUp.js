import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../features/userSlice";
import "../styles/SignIn.css";

function SignUp() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const [email, password, name, gender, dob] = [
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value,
      genderRef.current.value,
      dobRef.current.value,
    ];

    dispatch(addUser({ email, password, name, gender, dob }));
    navigate("/signin");
  }

  return (
    <form onSubmit={handleSubmit} className="sign-box">
      <div>
        <input type="email" ref={emailRef} placeholder="Your Email" required />
      </div>
      <div>
        <input type="text" ref={nameRef} placeholder="Your Name" required />
      </div>
      <div>
        <input type="date" ref={dobRef} placeholder="Date of Birth" required />
      </div>
      <div>
        <input type="text" ref={genderRef} placeholder="Your Gender" required />
      </div>
      <div>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Your Password"
          minLength="8"
          required
        />
      </div>
      <button>Sign Up</button>
      <h4>
        Already have an account? <Link to="/signin">Sign In</Link>.
      </h4>
    </form>
  );
}

export default SignUp;
