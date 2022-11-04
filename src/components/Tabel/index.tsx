import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface CustomTableProps {
  header: any;
  children?: any;
}

export default function BasicTable(props: CustomTableProps) {
  const { header } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.tableContainer}  aria-label="simple table">
        <TableHead sx={styles.tableHeadContainer}>
          <TableRow>
            {header.map((item: any, index: any) => {
              return <TableCell sx={styles.tableItem}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </TableContainer>
  );
}

const styles = {
    tableContainer : {
        backgroundColor:'#fffff'
    },
    tableHeadContainer : {
        backgroundColor:'#F8F8F8'
    },
    tableItem : {
        padding : 0.7,
        color : '#104076',
        fontSize : 13,
        textAlign : 'center'
    }
}
