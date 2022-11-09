import React from 'react';
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import { styles } from './styles';

interface CustomButtonInterface {
  title: any;
  handleButtonClick: () => any,
  backgroundcolor: string,
  bordercolor: string,
  padding: string,
  color: | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning",
  fontsize:string,
  border: string,
  endIcon?:any
  width? : any
}
interface ButtonStylesprops {
  backgroundcolor: string,
  bordercolor: string,
  padding: string,
  color: | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning",
  border: string,
  fontsize:string,
  width? : any
}
const BootstrapButton = styled(Button)((props: ButtonStylesprops) => ({
  textTransform: 'none',
  fontSize: props.fontsize,
   border: props.border,
  color: props.color,
  padding: props.padding,
  backgroundColor: props.backgroundcolor,
  borderColor: props.bordercolor,
  borderRadius : 10,
  fontWeight : '400',
  fontFamily: [
    '"Poppins"',
  ].join(','),
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: "none",
    borderColor: "none",
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: "none",
    borderColor: "none",
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));


const CustomButton = (props: CustomButtonInterface) => {
  const { title, handleButtonClick } = props;
  return (
    <BootstrapButton
      onClick={handleButtonClick}
      backgroundcolor={props.backgroundcolor}
      bordercolor={props.bordercolor}
      padding={props.padding}
      border={props.border}
      fontsize={props.fontsize}
      color={props.color}
      sx={{width : props.width ? props.width : undefined}}
      endIcon={props.endIcon}>
      
      {title}
    </BootstrapButton >

  )
}

export default CustomButton;


