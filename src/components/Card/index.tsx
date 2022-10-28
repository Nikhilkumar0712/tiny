import React from "react";
import { Card, CardContent } from "@mui/material";
import { styles } from "./styles";
const CustomCard = (props: any) => {
  return (
    <Card >
      <CardContent sx={styles.card}>{props.children}</CardContent>
    </Card>
  );
};

export default CustomCard;
