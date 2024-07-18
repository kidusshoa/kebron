import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "./components/auth-guard";
import "./App.css";
import Home from "./components/Home/home";
import LoginPage from "./components/Admin/Login/LoginPage";
import Admin from "./components/Admin/AdminPage/Admin";
import Review from "./components/Admin/AdminPage//Review/Review";
import AddAdmin from "./components/Admin/AdminPage/CRUD/AddAdmin/AddAdmin";
import Catagory from "./components/Catagories/Catagory";
import { useLayoutEffect } from "react";
import { useToken } from "./lib/configs/store";
import axios from "axios";

function App() {
  const token = useToken((state) => state.token);
  const setToken = useToken((state) => state.setToken);

  useLayoutEffect(() => {
    const interceptor = axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response && error.response.status == 401) {
          setToken(null);
        }

        if (error.response) {
          error.message = error.response.data.errors[0].detail;
        }

        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  useLayoutEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      axios.defaults.headers.common["Authorization"] = undefined;
    }
  }, [token]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <AuthGuard>
              <Admin />
            </AuthGuard>
          }
        />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin/reviews"
          element={
            <AuthGuard>
              <Review />
            </AuthGuard>
          }
        />
        <Route
          path="/admin/addadmin"
          element={
            <AuthGuard>
              <AddAdmin />
            </AuthGuard>
          }
        />
        <Route path="/explore" element={<Catagory />} />
      </Routes>
    </div>
  );
}

export default App;
