import React from "react";
import { Card, CardContent } from "@mui/material";

const CustomCard = (props: any) => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CustomCard;
