import React from "react";
import { listAlphabet } from "../data";
import "./style.css";

const SideBar = (props) => {
  const { setItem, item, setCheckCeateElement, newListItem, setNameItem } =
    props;

  // console.log(newListItem);
  const dragStart = (event) => {
    // console.log(event.target.name);
    setCheckCeateElement(true);
    setItem(event.target.src);
    setNameItem(event.target.name);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.target.appendChild(item);
  };

  const hanleSearch = () => {};

  newListItem.sort((a, b) => a.name.localeCompare(b.name));

  const ListItemClone = newListItem.filter(
    (value, index, self) =>
      index === self.findIndex((item) => item.name === value.name)
  );

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
            {ListItemClone.map((item, index) => (
              <li className="sideBar-item-click" key={index}>
                <img
                  src={item?.img}
                  name={item.name}
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
