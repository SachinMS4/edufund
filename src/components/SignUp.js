import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../features/userSlice";
import "../styles/SignIn.css";

function SignUp() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const [email, password, name, gender, dob] = [
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value,
      genderRef.current.value,
      dobRef.current.value,
    ];
    console.log({ email, password, name, gender, dob });

    dispatch(addUser({ email, password, name, gender, dob }));
  }

  return (
    <form onSubmit={handleSubmit} className="sign-box">
      <div>
        <input
          type="email"
          ref={emailRef}
          placeholder="Your Email"
          // required
        />
      </div>
      <div>
        <input
          type="text"
          ref={nameRef}
          placeholder="Your Name"
          // required
        />
      </div>
      <div>
        <input
          type="date"
          ref={dobRef}
          placeholder="Date of Birth"
          // required
        />
      </div>
      <div>
        <input
          type="text"
          ref={genderRef}
          placeholder="Your Gender"
          // required
        />
      </div>
      <div>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Your Password"
          // minLength="8"

          // required
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
