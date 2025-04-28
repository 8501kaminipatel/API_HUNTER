import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import axios from 'axios';
import { Usercontext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [fetchdata, setfetchdata] = useState([]);

  function fetchproduct() {

    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      .then(response => { setfetchdata(response.data.data) })
      .catch(error => { console.log(error) })
  }
  console.log(fetchdata)

  useEffect(() => {
    fetchproduct();
  }, [])
  const { token, handlelogin } = useContext(Usercontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handlelogin(null);
    localStorage.removeItem("Token");
    navigate('/login');
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable data={fetchdata} />
      </div>
    </div>
  );
}

export default Dashboard;
