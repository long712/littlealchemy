import React from "react";
import { listAlphabet } from "../data";
import "./style.css";

const SideBar = (props) => {
  const { setItem, item, setCheckCeateElement, newListItem } = props;
  console.log(newListItem);
  const dragStart = (event) => {
    setCheckCeateElement(true);
    setItem(event.target.src);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.target.appendChild(item);
  };

  const hanleSearch = () => {
  };

  newListItem.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="sideBar-container" onDrop={drop} onDragOver={dragOver}>
      <div className="sideBar-content">
        <div className="sideBar-alphabet">
          <ul className="sidebar-list-alphabet">
            {listAlphabet.map((element, index) => (
              <li
                key={index}
                className="sidebar-list-alphabet-item"
                onClick={hanleSearch}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>
        <div className="sideBar-item">
          <ul className="sideBar-list-item">
            {newListItem.map((item, index) => (
              <li className="sideBar-item-click" key={index}>
                <img
                  src={item?.img}
                  className="sideBar-item-img"
                  alt=""
                  draggable
                  onDragStart={dragStart}
                />
                <div>{item?.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
