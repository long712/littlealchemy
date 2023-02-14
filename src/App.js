import React from "react";
import "./App.css";
import Content from "./component/content";
import { listItem } from "./component/data";
import Footer from "./component/footer";
import SideBar from "./component/sideBar";

function App() {
  const [item, setItem] = React.useState();
  const [nameItem, setNameItem] = React.useState();
  const [checkCreateElement, setCheckCeateElement] = React.useState(false);
  const [newListItem, setNewListItem] = React.useState(listItem);

  return (
    <div className="app">
      <div className="app-right">
        <Content
          item={item}
          nameItem={nameItem}
          checkCreateElement={checkCreateElement}
          setCheckCeateElement={setCheckCeateElement}
          setNewListItem={setNewListItem}
        />
        <Footer />
      </div>
      <div className="app-left">
        <SideBar
          setItem={setItem}
          item={item}
          nameItem={nameItem}
          setNameItem={setNameItem}
          setCheckCeateElement={setCheckCeateElement}
          newListItem={newListItem}
        />
      </div>
    </div>
  );
}

export default App;
