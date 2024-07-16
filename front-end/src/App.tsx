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
        <Route path="/cities" element={<Catagory />} />
        {/* <Route path="/cities/addis-ababa" exact component={AddisAbabaPage} />
        <Route path="/cities/adama" exact component={AdamaPage} />
        <Route path="/cities/hawassa" exact component={HawassaPage} />
        <Route path="/cities/harar" exact component={HararPage} />
        <Route path="/cities/dire-dawa" exact component={DireDawaPage} /> */}
      </Routes>
    </div>
  );
}

export default App;
