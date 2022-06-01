import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState } from "react";
import { useConvertCurrenciesQuery } from "../../app/api";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
    },
  },
}));

type BoxProps = {
  fromValue:number;
  baseCurrency:string;
  deleteBox: (id: string) => void;
  id: string;
  hideDelete:boolean
};

function Box({ deleteBox, id, fromValue, baseCurrency, hideDelete}: BoxProps) {
  const [currency, setCurrency] = useState('RUB')

  const onCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };
  console.log(currency)
  const { data, error, isLoading } = useConvertCurrenciesQuery({
    from: baseCurrency,
    to: currency,
  });
  console.log(data)
  const displayedValue = data && data.data[currency] ? data.data[currency].value*fromValue : ''

  return (

    <div
      style={{
        border: "1px solid #ced4da",
        borderColor: "#1891DA",
        width: "350px",
        display: "flex",
        borderRadius: "20px",
      }}
    >
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={currency}
          onChange={onCurrencyChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"RUB"}>RUB</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"UZS"}>UZS</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <BootstrapInput disabled value={displayedValue} id="demo-customized-textbox" />
      </FormControl>
      {hideDelete || <DeleteIcon  onClick={() => deleteBox(id)} /> }
      
    </div>
  )
}

export default Box;
