import React from 'react';
import { Button,Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import { styles } from './styles';  

interface CustomButtonInterface {
    title : any;
    handleButtonClick : () => any
}

const BootstrapButton = styled(Button)({
    textTransform: 'none',
    fontSize :12,
    fontWeight:300,
    fontFamily: [
      '"Poppins"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  

const CustomButton = (props : CustomButtonInterface) => {
    const { title , handleButtonClick } = props;
    return(
        <BootstrapButton  variant="contained" color="primary" onClick={handleButtonClick}>
           {title}
        </BootstrapButton >

    )
}

export default CustomButton;