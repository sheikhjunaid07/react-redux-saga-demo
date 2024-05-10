import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state);
  console.log(result);
  return (
    <div className="header">
      <div className="card-div">
        <span>{result.length}</span>
        <img
          style={{ width: "30px" }}
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
