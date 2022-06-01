import { useState } from "react";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Row from "./Components/Row";

function MainPage() {
  const [rows, setRows] = useState([""]);

  const addRow = () => {
    setRows([...rows, ""]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <h2>From</h2>
        <h2 style={{ marginLeft: "410px" }}>To</h2>
      </div>
      {rows.map((el) => (
        <Row></Row>
      ))}
      <Icon onClick={addRow} sx={{ color: green[500] }}>
        add_circle
      </Icon>
    </div>
  );
}
export default MainPage;
