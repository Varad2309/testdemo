// src/components/LoginAndRegister/Login.js
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { dummyLogin } from "../../services/authService"; // Import dummy login function
import { useAuth } from "../../store/auth";
import "./LoginSignup.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dummyLogin(user.email, user.password);
      storeTokenInLS(response.token); // Store dummy token
      setUser({ email: "", password: "" });
      navigate("/"); // Redirect to homepage after login
    } catch (error) {
      setErrors({ global: error.message });
    }
  };

  return (
    <div className="container">
      <div className="signin-signup">
        <div className="sign-in">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {errors.global && <p className="error-message">{errors.global}</p>}

            <div className="form-group">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleInput}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="sign-up">
          <img className="image" src="images/upmyskill_logo.jpg" alt="logo" />
          <p>Enter your details and start your journey with us</p>
          <NavLink className="right-button" to={"/register"}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
