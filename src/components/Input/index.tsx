import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles";
interface customInputInterface {
  size: any;
  placeholder: any,
  InputProps: any,
  disabled ? :boolean,
  multiline? : boolean,
  placeholderColor?: any,
  placeholderColorOpacity? : any,
  placeholderSize? : any
}
const CustomInput = (props: customInputInterface) => {

  const { size, placeholder, InputProps,disabled,multiline,placeholderColor,placeholderColorOpacity,placeholderSize } = props;

  const StyledTextField = withStyles({
    root: {

      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `10px`,
          borderColor: `#9DA2AB`,
          boxShadow: "0px 0px 10px #00000014",
          borderWidth: 1,
          
        },
        '& .MuiInputBase-input': {
          fontSize: '13px',
          padding: '11px'
        },
        "& input::placeholder": {
          color: placeholderColor ? placeholderColor : '#9DA2AB',
          fontSize: placeholderSize ? placeholderSize : 12,
          opacity : placeholderColorOpacity ? placeholderColorOpacity : 1
        }
      },
    },
  })(TextField);

  return (
    <Box>
      <StyledTextField
        disabled = {disabled}
        multiline={multiline}
        InputProps={props.InputProps}
        sx={styles.input}
        size={size ? size : 'small'}
        fullWidth
        placeholder={placeholder}
      />
    </Box>
  );
};

export default CustomInput;
