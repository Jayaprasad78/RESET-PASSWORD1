import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

function App() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
axios.defaults.withCredentials = true;
const handleChangeEmail = (e) => {
  setEmail(e.target.value);
};

const handleChangePassword = (e) => {
  setNewPassword(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Send a POST request to the backend using Axios
  axios
    .post("/https://deploy-mern-api.vercel.app/register", { email, newPassword })
    .then((response) => {
      // Handle the response from the API
      window.alert("password changed successfully");
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

return (
  <div className="container">

    <h2 className="head">Password Change</h2>
    <form onSubmit={handleSubmit}>
    
      <div className="email" >
        <label className="lb" >Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
      </div>

      <div>
        <label className="lb">New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={handleChangePassword}
          required
        />
      </div>

      <button type="submit">Change Password</button>
      
    </form>
    </div>
);
};


export default App;
