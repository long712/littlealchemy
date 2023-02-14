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
  const {
    item,
    setCheckCeateElement,
    checkCreateElement,
    setNewListItem,
    nameItem,
  } = props;

  const [imgItem, setImgItem] = React.useState();
  const [check, setCheck] = React.useState(false);

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dragStart = (event) => {
    setImgItem(event.target);
  };

  // sự kiện thả vào màn chính
  const drop = (event) => {
    const div = document.getElementById("container");
    if (checkCreateElement) {
      const divChill = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");

      divChill.style.position = "absolute";
      divChill.id = "div";
      divChill.style.top = event.clientY + "px";
      divChill.style.left = event.clientX + "px";
      divChill.draggable = true;
      divChill.ondragstart = dragStart;
      divChill.ondragover = dragOver;

      img.src = item ?? "";
      img.id = "img";
      img.draggable = false;
      img.name = nameItem;

      p.innerHTML = nameItem;
      p.id = "text";
      p.style.textAlign = "center";

      divChill.appendChild(img);
      divChill.appendChild(p);
      div.appendChild(divChill);
      divChill.ondrop = dropItem(event, img, p, divChill);
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

  // sự kiện thả vào item
  const dropItem = (event, divChill, p) => {
    // console.log();
    const itemClone = event.target;

    // console.log(itemClone);
    const divChill1 = document.createElement("div");
    const pChill = document.createElement("p");
    const img1 = document.createElement("img");
    const test3 = document.querySelectorAll("#div > #text");

    divChill1.style.position = "absolute";
    divChill1.style.top = event.clientY + "px";
    divChill1.style.left = event.clientX + "px";
    divChill1.draggable = true;
    divChill1.ondragstart = dragStart;
    divChill1.ondragover = dragOver;

    img1.id = "img";
    img1.draggable = false;

    pChill.innerHTML = nameItem;
    pChill.id = "text";
    pChill.style.textAlign = "center";
    recipe(event.target, divChill, p, img1, pChill, divChill1, test3);
  };

  const shared = (
    item,
    NextItem,
    p,
    divChill,
    pChill,
    newItem,
    divChill1,
    div,
    pTest
  ) => {
    console.log(imgItem);
    console.log(p);
    item.remove();
    NextItem.remove();
    p.remove();
    divChill.remove();
    pChill.innerHTML = newItem.name;
    divChill1.appendChild(newItem);
    divChill1.appendChild(pChill);
    div.appendChild(divChill1);
  };

  // công thức
  const recipe = (item, NextItem, p, newItem, pChill, divChill1) => {
    const div = document.getElementById("container");
    const pTest = document.getElementById("text");
    const divChill = document.getElementById("div");
    if (
      (item.src === fire && NextItem.src === water) ||
      (item.src === water && NextItem.src === fire)
    ) {
      newItem.src = test;
      newItem.name = "test";

      shared(
        item,
        NextItem,
        p,
        divChill,
        pChill,
        newItem,
        divChill1,
        div,
        pTest
      );
    }
    if (
      (item.src === air && NextItem.src === earth) ||
      (item.src === earth && NextItem.src === air)
    ) {
      newItem.src = test2;
      newItem.name = "test2";

      shared(
        item,
        NextItem,
        p,
        divChill,
        pChill,
        newItem,
        divChill1,
        div,
        pTest
      );
    }
    listItem.push({
      name: newItem.name,
      img: newItem.src,
    });
  };

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
