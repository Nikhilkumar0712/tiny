import React from "react";
import { Select, MenuItem, FormControl,Box } from "@mui/material";
import { styles } from "./styles";
import makeStyles from "@material-ui/styles/makeStyles";
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';


interface CustomSelectPickerInterface {
  selectValue: any;
  handleSelectValue: (val: any) => any;
  size: any;
  fullWidth: boolean;
  width: any;
  selectData: any;
  multiple?: boolean;
}

const useStyles = makeStyles({
  customOutline: {
    "& .MuiSelect-select": {
      fontSize: "13px",
      color: "#104076",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: `10px`,
      borderColor: `#9DA2AB`,
      boxShadow: "0px 0px 10px #00000014",
      borderWidth: 1,
      padding: "12px",
      width: "100%",
    },
  },
});

const CustomSelectPicker = (props: CustomSelectPickerInterface) => {

  const { selectValue, handleSelectValue, size, width, selectData, multiple } =
    props;

  const classes = useStyles();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <FormControl
      variant="outlined"
      classes={{ root: classes.customOutline }}
      style={{ minWidth: width }}
    >
      {multiple ? (
        <Select
          multiple
          displayEmpty
          value={selectValue}
          onChange={handleSelectValue}
          size={size}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value : any) => (
                <Chip key={value} label={value} color="primary" />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {selectData.map((item: any) => (
            <MenuItem
              key={item.value}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
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
      )}
    </FormControl>
  );
};

export default CustomSelectPicker;
