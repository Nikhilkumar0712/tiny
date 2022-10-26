import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { withStyles } from '@material-ui/styles';

import { styles } from "./styles";


const StyledTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        padding : '8px',
        '& fieldset': {
          borderRadius: `10px`,
          borderColor : `#204289`,
         
        },
      },
    },
})(TextField);


const CustomInput = () => {
  return (
    <Box>
      <StyledTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={styles.icon} />
            </InputAdornment>
          ),
        }}
        sx={{ input: styles.input}} 

        size="small"
        fullWidth
        placeholder="Search Patient"
       
      />
    </Box>
  );
};

export default CustomInput;
