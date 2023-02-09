import React from "react";
import fullScreen from "../../accsets/img/fullScreen.png";
import test from "../../accsets/img/test.png";
import fire from "../../accsets/img/fire.png";
import water from "../../accsets/img/water.png";
import test2 from "../../accsets/img/test2.png";
import air from "../../accsets/img/air.png";
import earth from "../../accsets/img/earth.png";

import "./style.css";
import { listItem } from "../data";

const Content = (props) => {
  const { item, setCheckCeateElement, checkCreateElement, setNewListItem } =
    props;
  const [imgItem, setImgItem] = React.useState();
  const [check, setCheck] = React.useState(false);

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dragStart = (event) => {
    setImgItem(event.target);
  };

  const drop = (event) => {
    const div = document.getElementById("container");
    if (checkCreateElement) {
      const img = document.createElement("img");
      img.id = "img";
      img.src = item ?? "";
      img.style.position = "absolute";
      img.style.top = event.clientY + "px";
      img.style.left = event.clientX + "px";
      img.draggable = true;
      img.ondragstart = dragStart;
      img.ondragover = dragOver;
      div.appendChild(img);
      img.ondrop = dropItem(event, img);
    } else {
      imgItem.style.top = event.clientY + "px";
      imgItem.style.left = event.clientX + "px";
      if (check === false) {
        div.appendChild(imgItem);
        imgItem.ondrop = dropItem(event, imgItem);
      }
    }
    setCheck(false);
    setCheckCeateElement(false);
    event.preventDefault();
  };

  const dropItem = (event, img) => {
    const img1 = document.createElement("img");
    img1.style.position = "absolute";
    img1.style.top = event.clientY + "px";
    img1.style.left = event.clientX + "px";
    img1.draggable = true;
    img1.ondragstart = dragStart;
    img1.ondragover = dragOver;
    recipe(event.target, img, img1);
  };

  const recipe = (item, NextItem, newItem) => {
    const div = document.getElementById("container");
    if (
      (item.src === fire && NextItem.src === water) ||
      (item.src === water && NextItem.src === fire)
    ) {
      newItem.src = test;
      newItem.name = "test";
      item.remove();
      NextItem.remove();
      div.appendChild(newItem);
    }
    if (
      (item.src === air && NextItem.src === earth) ||
      (item.src === earth && NextItem.src === air)
    ) {
      newItem.src = test2;
      newItem.name = "test2";

      item.remove();
      NextItem.remove();
      div.appendChild(newItem);
    }
    listItem.push({
      name: newItem.name,
      img: newItem.src,
    });

    console.log(listItem);
  };

  console.log(listItem);

  setNewListItem(listItem);

  return (
    <div
      className="content-container"
      id="container"
      onDrop={drop}
      onDragOver={dragOver}
    >
      <div className="content">
        <img src={fullScreen} alt="" />
        <a href="#" className="header-link">
          little Alchemy 2 is out now
        </a>
      </div>
    </div>
  );
};

export default Content;
