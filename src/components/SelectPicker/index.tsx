import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { styles } from "./styles";
import makeStyles from "@material-ui/styles/makeStyles";

interface CustomSelectPickerInterface {
  selectValue: any;
  handleSelectValue: (val: any) => any;
}

const useStyles = makeStyles({
  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#104076",
      borderWidth: 1,
      borderRadius: "10px",
      padding : '10px'
    },
  },
});

const CustomSelectPicker = (props: CustomSelectPickerInterface) => {
  const { selectValue, handleSelectValue } = props;
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      fullWidth
      classes={{ root: classes.customOutline }}
    >
      <Select value={selectValue} onChange={handleSelectValue} displayEmpty>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomSelectPicker;
