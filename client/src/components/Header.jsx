import React from "react";
import { Link } from "react-router-dom";

import "./css/header.css";

export default function Header() {
    return (
        <div className="header">
            <h1> Operation Homefront | <Link to={"/about"}>About</Link> | Contact </h1>
        </div>
    )
}