import React from "react";
import { BsToggleOff, BsBell } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar mx-auto bg-indigo-100 p-5">
      <nav className="flex justify-between  px-10">
        <div className="flex flex-row">
          <a className="pr-5" href="#">
            Logo
          </a>
          <form>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              size="30"
            />
          </form>
        </div>
        <div className="flex flex-row">
          <ul className="flex flex-row">
            <li className="pr-5">
              <a> Sadie </a>
            </li>
            <li className="pr-5">
              <a> Home </a>
            </li>
            <li className="pr-5">
              <a> Create </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-row">
          <li className="pr-6">
            <BsBell className="react-icons" />
          </li>
          <li className="pr-6">
            <MdMessage className="react-icons" />
          </li>
          <li>
            <BsToggleOff className="react-icons" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
