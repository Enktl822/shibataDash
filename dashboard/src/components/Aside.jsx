import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/aside.css";

function Aside({ asideMenu }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="aside-menu">
      {asideMenu.map((menu, index) =>
        current === index ? (
          <div key={index} className="aside-menu-item aside-menu-item-active">
            {menu.name}
          </div>
        ) : (
          <div
            key={index}
            className="aside-menu-item"
            onClick={() => {
              setCurrent(index);
              navigate(menu.url);
            }}
          >
            {menu.name}
          </div>
        )
      )}
    </div>
  );
}

export default Aside;
