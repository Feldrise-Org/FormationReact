import React from "react";
import { Link } from "react-router-dom";

const RoutageEx = () => {
  return (
    <div className="container">
      <Link className="link" to={"/RoutagePage1"}>
        Page 1
      </Link>
      <Link className="link" to={"/RoutagePage2"}>
        Page 2
      </Link>
      <Link className="link" to={"/RoutagePage3"}>
        Page 3
      </Link>
    </div>
  );
};
export default RoutageEx;
