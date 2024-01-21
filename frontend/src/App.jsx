import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import PageNotFound from "./pages/admin/404";
import RequiredAuth from "./utils/RequiredAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin">
        <Route index element={<Login />} />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard /> 
            </RequiredAuth>
          }
        />
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default App;
