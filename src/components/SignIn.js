import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.value);

  function submitHandler(e) {
    e.preventDefault();
    const user = users.filter(
      (u) =>
        u.email === emailRef.current.value &&
        u.password === passwordRef.current.value
    );
    if (user.length > 0) {
      setError("");
      localStorage.setItem("email", emailRef.current.value);
      navigate("/");
    } else setError("Invalid email or password");
  }

  return (
    <form className="sign-box" onSubmit={submitHandler}>
      {error && <h4>{error}</h4>}
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          ref={emailRef}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={passwordRef}
          required
        />
      </div>
      <button>Sign In</button>
      <h4>
        Don't have an account? <Link to="/signup">Sign Up</Link>.
      </h4>
    </form>
  );
}

export default SignIn;
