// src/components/LoginAndRegister/Register.js
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./LoginSignup.css"; // Ensure you have this CSS file for styling

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const resData = await response.json();

      if (response.ok) {
        storeTokenInLS(resData.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/"); // Redirect to homepage after successful registration
      } else if (resData.error) {
        const newErrors = resData.error.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(newErrors);
      } else {
        setErrors({ global: resData.message });
      }
    } catch (error) {
      console.error("Registration Error: ", error);
    }
  };

  return (
    <div className="container">
      <div className="signin-signup">
        <div className="sign-in">
          <form onSubmit={handleSubmit}>
            {errors.global && <p className="error-message">{errors.global}</p>}
            
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter name"
                name="username"
                value={user.username}
                onChange={handleInput}
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="Enter phone"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleInput}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <button type="submit">Signup</button>
          </form>
        </div>

        <div className="sign-up">
          <img className="image" src="images/upmyskill_logo.jpg" alt="logo" />
          <p>Already have an account?</p>
          <NavLink className="right-button" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
