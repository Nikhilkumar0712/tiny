import React from 'react';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { styles } from "./styles";

interface CustomSelectPickerInterface {
  selectValue: any;
  handleSelectValue: (val: any) => any;
  size: any;
  fullWidth: boolean;
  width: any;
  selectData: any;
  multiple?: boolean;
  placeholderText?: any;
}


const CustomSelectPicker = (props: CustomSelectPickerInterface) => {
  const {
    selectValue,
    handleSelectValue,
    size,
    width,
    selectData,
    multiple,
    placeholderText,
  } = props;


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
    <>
      {multiple ? (
        <Select
          sx={{
            borderRadius: `10px`,
            borderColor: `#9DA2AB`,
            boxShadow: "0px 0px 10px #00000014",
            borderWidth: 1,
            width : '100%',
            color : '#9DA2AB',
            fontSize : 12
          }}
          multiple
          displayEmpty
          fullWidth={true}
          value={selectValue}
          onChange={handleSelectValue}
          size={size}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => (
                <Box sx={styles.tagBackground}>
                  <Grid container flexDirection={'row'}>
                      <Typography sx={styles.tagvalue} key={value}>{value}</Typography>
                      <HighlightOffOutlinedIcon sx={styles.actionIcon} />
                  </Grid>
                </Box>
                
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {selectData.map((item: any) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Select
          sx={{
            borderRadius: `10px`,
            borderColor: `#9DA2AB`,
            boxShadow: "0px 0px 10px #00000014",
            borderWidth: 1,
            width : '100%',
            color : '#9DA2AB',
            fontSize : 12,
            padding : 0.3
          }}
          size={size}
          value={selectValue}
          onChange={handleSelectValue}
          displayEmpty
          fullWidth={true}
          renderValue={
            selectValue !== ""
              ? undefined
              : () => {
                  return (
                    <Typography style={{ fontSize: 12, color: "#9DA2AB" }}>
                      {placeholderText}
                    </Typography>
                  );
                }
          }
        >
          {selectData.map((item: any) => {
            return <MenuItem value={item.value}>{item.name}</MenuItem>;
          })}
        </Select>
      )}
    </>
  );
};

export default CustomSelectPicker;
