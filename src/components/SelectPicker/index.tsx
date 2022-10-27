import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { styles } from "./styles";
import makeStyles from "@material-ui/styles/makeStyles";

interface CustomSelectPickerInterface {
  selectValue: any;
  handleSelectValue: (val: any) => any;
  size: any;
  fullWidth: boolean;
  width: any;
  selectData: any;
}

const useStyles = makeStyles({
  customOutline: {
    '& .MuiSelect-select':{
      fontSize : '13px',
      color : '#104076'
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#104076",
      borderWidth: 1,
      borderRadius: "10px",
      padding: "12px",
      width: "100%"
    },
  },
});

const CustomSelectPicker = (props: CustomSelectPickerInterface) => {
  const { selectValue, handleSelectValue, size, width, selectData } = props;
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      classes={{ root: classes.customOutline }}
      style={{ minWidth: width }}
    >
      <Select
        size={size}
        value={selectValue}
        onChange={handleSelectValue}
        displayEmpty
      >
        {selectData.map((item: any) => {
          return <MenuItem value={item.value}>{item.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelectPicker;
