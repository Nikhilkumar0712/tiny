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
  endIcon:any
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
  fontsize:string
}
const BootstrapButton = styled(Button)((props: ButtonStylesprops) => ({
  textTransform: 'none',
  fontSize: props.fontsize,
  fontWeight: 500,
  border: props.border,
  color: props.color,
  padding: props.padding,
  backgroundColor: props.backgroundcolor,
  borderColor: props.bordercolor,
  fontFamily: [
    '"Poppins"',
  ].join(','),
  '&:hover': {
    backgroundColor: props.backgroundcolor,
    borderColor: "none",
    boxShadow: 'none',
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
      endIcon={props.endIcon}>
      {title}
    </BootstrapButton >

  )
}

export default CustomButton;


