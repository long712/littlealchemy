import air from "../../accsets/img/air.png";
import earth from "../../accsets/img/earth.png";
import fire from "../../accsets/img/fire.png";
import water from "../../accsets/img/water.png";
import test from "../../accsets/img/test.png";

export const listAlphabet = [];
for (var a = 65; a <= 90; a++) {
  listAlphabet.push(String.fromCharCode(a));
}

export const listItem = [
  { id: 1, name: "ari", img: air },
  { id: 2, name: "earth", img: earth },
  { id: 3, name: "fire", img: fire },
  { id: 4, name: "water", img: water },
];
