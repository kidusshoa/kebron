import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import LoginPage from "./components/Admin/Login/LoginPage";
import Admin from "./components/Admin/AdminPage/Admin";
import Review from "./components/Admin/AdminPage//Review/Review";
import AddAdmin from "./components/Admin/AdminPage/CRUD/AddAdmin/AddAdmin";
import Catagory from "./components/Catagories/Catagory";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/reviews" element={<Review />} />
        <Route path="/admin/addadmin" element={<AddAdmin />} />
        <Route path="/explore" element={<Catagory />} />
      </Routes>
    </div>
  );
}

export default App;
