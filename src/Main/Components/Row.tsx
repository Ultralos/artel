import { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Box from "./ToBox";
import { v4 as uuidv4 } from "uuid";
import FromBox from "./FromBox";

function Row() {
  const [fromBox, setFromBox] = useState({
    baseCurrency: "USD",
    value: 1,
  });

  const [boxes, setBoxes] = useState([
    {
      id: uuidv4(),
    },
  ]);

  const handleFromBoxCurrencyChange = (baseCurrency: string) => {
    const newFromBox = {
      baseCurrency: baseCurrency,
      value: fromBox.value,
    };
    setFromBox(newFromBox);
  };

  const handleFromBoxValueChange = (value: number) => {
    const newFromBox = {
      baseCurrency: fromBox.baseCurrency,
      value: value,
    };
    setFromBox(newFromBox);
  };

  const deleteBox = (id: string) => {
    console.log(id);
    const newBoxes = boxes.filter((el) => el.id !== id);
    setBoxes(newBoxes);
  };

  const addElement: any = () => {
    setBoxes([...boxes, { id: uuidv4() }]);
  };

  return (
    <div style={{ display: "flex" }}>
      <FromBox
        onCurrencyChange={handleFromBoxCurrencyChange}
        onValueChange={handleFromBoxValueChange}
        fromBox={fromBox}
      ></FromBox>
      <h2 style={{ marginRight: "50px", marginLeft: "50px" }}>=</h2>
      {boxes.map((el) => (
        <Box
          hideDelete={el.id === boxes[0].id}
          fromValue={fromBox.value}
          baseCurrency={fromBox.baseCurrency}
          deleteBox={deleteBox}
          id={el.id}
          key={el.id}
        ></Box>
      ))}
      <Icon onClick={addElement} sx={{ color: green[500] }}>
        add_circle
      </Icon>
    </div>
  );
}

export default Row;
