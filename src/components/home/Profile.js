import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../features/userSlice";
import Nav from "./Nav";

function Profile() {
  const users = useSelector((state) => state.users.value);
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();
  const emailRef = useRef("hello");
  const passwordRef = useRef(12345);
  const dobRef = useRef();
  const genderRef = useRef();
  const nameRef = useRef();

  const currentUser = localStorage.getItem("email");
  const [user] = users.filter((item) => item.email === currentUser);

  function handleSubmit(e) {
    e.preventDefault();
    const [email, password, name, gender, dob] = [
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value,
      genderRef.current.value,
      dobRef.current.value,
    ];

    setMsg("Profile Updated");
    dispatch(addUser({ email, password, name, gender, dob }));
  }
  const navigate = useNavigate();
  function logout(e) {
    localStorage.clear();
    navigate("/signin");
  }

  return (
    <div>
      <button className="logout" onClick={logout}>
        Logout
      </button>
      {user && (
        <form onSubmit={handleSubmit} className="sign-box">
          {msg && <h4>{msg}</h4>}
          <div>
            <input
              type="email"
              ref={emailRef}
              placeholder="Your Email"
              defaultValue={user.email}
            />
          </div>
          <div>
            <input
              type="text"
              ref={nameRef}
              placeholder="Your Name"
              defaultValue={user.name}
            />
          </div>
          <div>
            <input
              type="date"
              ref={dobRef}
              placeholder="Date of Birth"
              defaultValue={user.dob}
            />
          </div>
          <div>
            <input
              type="text"
              ref={genderRef}
              placeholder="Your Gender"
              defaultValue={user.gender}
            />
          </div>
          <div>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Your Password"
              defaultValue={user.password}
            />
          </div>
          <button>Update Profile</button>
        </form>
      )}
      <Nav />
    </div>
  );
}

export default Profile;
