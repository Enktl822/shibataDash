import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";
import {
  Dashboard,
  Moderators,
  Orders,
  Products,
  Settings,
  Users,
} from "./pages";
import { asideMenu, products } from "./util/data";
import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get("https://randomuser.me/api/")
      .then((res) => setData(res.data.results[0]))
  }, [])

  // console.log(data)

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", height: "90vh" }}>
        <Aside asideMenu={asideMenu} />
        <div style={{ width: "80vw", background: "#E0E0E0" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/moderator" element={<Moderators />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
