import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonInterface {
  title: any;
  handleButtonClick: () => any;
  backgroundcolor: string;
  bordercolor?: string;
  padding?: any;
  color?: any;
  fontsize?: string;
  border?: string;
  endIcon?: any;
  width?: any;
}

const CustomButton = (props: CustomButtonInterface) => {
  const { title, handleButtonClick, backgroundcolor, width, color,endIcon,padding } = props;

  const ColorButton = styled(Button)(() => ({
    textTransform: "none",
    fontSize: 13,
    fontWeight: 400,
    color: color,
    backgroundColor: backgroundcolor,
    borderRadius: 7,
    width: width ? width : undefined,
    padding: padding ? padding : undefined,
    border: (backgroundcolor === "#FFFFFF" || backgroundcolor === "#fffff") ? "1px solid "+ color : undefined,
    opacity: 1,
    "&:hover": {
      backgroundColor: backgroundcolor,
      opacity: 0.8,
    },
  }));

  return (
    <ColorButton variant="contained" onClick={handleButtonClick} endIcon={endIcon}>
      {title}
    </ColorButton>
  );
};

export default CustomButton;
