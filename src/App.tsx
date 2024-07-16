import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { Table } from "./components/Table";
import { Velotimer } from "./components/Velotimer";
import "./styles.css";

enum Tabs {
  VELO = "velo",
  TABLE = "table",
}

export default function App() {
  const [currentTab, setTab] = React.useState();

  return (
    <div className="App">
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          // width: "100%",
        }}
      >
        <a href="/velo">Секундометр</a>
        <a href="/table">Таблица</a>
      </div>
      <div style={{ border: "2px black solid", width: "100%", height: "100%" }}>
        <Table />
      </div>
      <BrowserRouter>{/* <Router /> */}</BrowserRouter>
    </div>
  );
}
