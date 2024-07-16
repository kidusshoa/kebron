import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import LoginPage from "./components/Admin/Login/LoginPage";
import Admin from "./components/Admin/AdminPage/Admin";
import Review from "./components/Admin/AdminPage//Review/Review";
import AddAdmin from "./components/Admin/AdminPage/CRUD/AddAdmin/AddAdmin";
import Catagory from "./components/Catagories/Catagory";
import AddisAbaba from "./components/Catagories/Region/towns/AddisAbaba";
import Adama from "./components/Catagories/Region/towns/Adama";
import Hawassa from "./components/Catagories/Region/towns/Hawassa";
import Harar from "./components/Catagories/Region/towns/Harar";
import DireDawa from "./components/Catagories/Region/towns/DireDawa";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/reviews" element={<Review />} />
        <Route path="/admin/addadmin" element={<AddAdmin />} />
        <Route path="/cities" element={<Catagory />} />
        <Route path="/addisababa" element={<AddisAbaba />} />
        <Route path="/adama" element={<Adama />} />
        <Route path="/hawassa" element={<Hawassa />} />
        <Route path="/harar" element={<Harar />} />
        <Route path="/diredawa" element={<DireDawa />} />
      </Routes>
    </div>
  );
}

export default App;
