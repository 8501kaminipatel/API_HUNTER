import { useContext, useState } from "react";
import axios from 'axios';
import { Usercontext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { handlelogin } = useContext(Usercontext);
  const Navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', { email, password })
      .then((response) => {
        console.log(response.data.token);
        handlelogin(response.data.token);
        Navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Login error:", error.response?.data || error.message);
      });
  };



  return (
    <div>
      <form data-testid="login-form " onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} onChange={(e) => setpassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>

        <div>
          <Link to="/">Go Back</Link>
        </div>
      </form>

    </div>
  );
}
export default Login;
