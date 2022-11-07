import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Tabel'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { styles } from './styles';
const UserBilling = () => {

    const tableHeadData = [
        "Bill No",
        "Date",
        "Receipt No",
        "Type",
        "Payment Mode",
        "Amount",
        "Actions",
      ];
    
      const rows = [
        {
          id: 1,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 2,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 3,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 4,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 5,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 6,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 7,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
        {
          id: 8,
          BillNo: "R23",
          Date: "22 Sept 2022",
          ReceiptNo: "156",
          Type: "OP",
          PaymentMode: "Cash",
          Amount: "7000",
          Actions: "",
        },
      ];
    return (
        <Box sx={styles.tableContainer}>
        <CustomTable header={tableHeadData}>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.BillNo}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.Date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.ReceiptNo}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.Type}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.PaymentMode}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={styles.tableCell}>
                  {row.Amount}
                </Typography>
              </TableCell>
             
              <TableCell>
                <Grid
                  container
                  flexDirection="row"
                  spacing={2}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Grid item>
                    <Grid container flexDirection="row">
                      <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                      <RouterLink
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={styles.tableCell}>
                          {" "}
                          View{" "}
                        </Typography>
                      </RouterLink>
                    </Grid>
                  </Grid>
               </Grid>
              </TableCell>
            </TableRow>
          ))}
        </CustomTable>
      </Box>
    )
}

export default UserBilling