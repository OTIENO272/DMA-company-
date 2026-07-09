import { useNavigate } from "react-router-dom";
import "../styles/AdminError.css";

const AdminError = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h3>Unexpected Application Error!</h3>
      <p>Something went wrong while processing your request.</p>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default AdminError;