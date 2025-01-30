import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";

import UserList from "./Pages/UserList";
import UserDetail from "./Pages/UserDetail";
import NotFound from "./Pages/NotFound";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  const isLogin = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="/userlist"
              element={isLogin ? <Outlet /> : <Navigate to={"/"} />}
            >
              <Route index element={<UserList />} />
              <Route path=":id" element={<UserDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
