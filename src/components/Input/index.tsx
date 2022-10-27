import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { withStyles } from '@material-ui/styles';

import { styles } from "./styles";

interface customInputInterface {
  size: any;
  placeholder: any
}

const CustomInput = (props: customInputInterface) => {

  const { size, placeholder } = props;

  const StyledTextField = withStyles({
    root: {

      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `10px`,
          borderColor: `#204289`,
        },
        '& .MuiInputBase-input': {
          fontSize: '13px',
          padding: '11px'
        },
      },
    },
  })(TextField);



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
        sx={{ input: styles.input }}
        size={size ? size : 'small'}
        fullWidth
        placeholder={placeholder}

      />
    </Box>
  );
};

export default CustomInput;
