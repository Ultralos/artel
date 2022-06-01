import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

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
  onCurrencyChange: (baseCurrency: string) => void;
  onValueChange: (value: number) => void;
  fromBox: {
    value: number;
    baseCurrency: string;
  };
};

function FromBox({ onCurrencyChange, onValueChange, fromBox }: BoxProps) {
  const handleCurrencyChange = (event: any) => {
    onCurrencyChange(event.target.value);
  };
  const handleInputChange = (event: any) => {
    onValueChange(event.target.value);
  };

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
          value={fromBox.baseCurrency}
          onChange={handleCurrencyChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"RUB"}>RUB</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"UZS"}>UZS</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <BootstrapInput
          onChange={handleInputChange}
          value={fromBox.value}
          id="demo-customized-textbox"
        />
      </FormControl>
    </div>
  );
}

export default FromBox;
