import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Table'
import CustomCard from '../../../../components/Card'
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const UserBilling = () => {

    const columns: GridColDef[] = [
        {
            field: "BillNo",
            headerName: "Bill No",
            width: 150,
            renderCell: (params) => {
                return (
                    <Box
                        display={"flex"}
                        gap={"10px"}
                        textAlign={'center'}
                        alignItems={"center"}
                        flexDirection={"column"}>
                        <Typography sx={styles.rowDataHeading}>
                            {params.row.BillNo}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "Date",
            headerName: "Date",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.Date}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "ReceiptNo",
            headerName: "Receipt No",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.ReceiptNo}</Typography>
                    </>
                );
            },
        },
        {
            field: "Type",
            headerName: "Type",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Type}</Typography>
                    </>
                );
            },
        },
        {
            field: "PaymentMode",
            headerName: "Payment Mode",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.PaymentMode}</Typography>
                    </>
                );
            },
        },
        {
            field: "Amount",
            headerName: "Amount",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Amount}</Typography>
                    </>
                );
            },
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        justifyContent={"space-between"}
                    >
                        <>
                            <Grid
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"10px"}
                                textAlign={"center"}>
                                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/PatientProfile"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                            </Grid>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            BillNo: '31 Aug 2022',
            Date: "OP",
            ReceiptNo: "Completed",
            Type:"OP",
            PaymentMode:"Cash",
            Amount:"1222",
            Actions: "-",
        },
        {
            id: 1,
            BillNo: '31 Aug 2022',
            Date: "OP",
            ReceiptNo: "Completed",
            Type:"OP",
            PaymentMode:"Cash",
            Amount:"1222",
            Actions: "-",
        },
        {
            id: 1,
            BillNo: '31 Aug 2022',
            Date: "OP",
            ReceiptNo: "Completed",
            Type:"OP",
            PaymentMode:"Cash",
            Amount:"1222",
            Actions: "-",
        },
        {
            id: 1,
            BillNo: '31 Aug 2022',
            Date: "OP",
            ReceiptNo: "Completed",
            Type:"OP",
            PaymentMode:"Cash",
            Amount:"1222",
            Actions: "-",
        },
        {
            id: 1,
            BillNo: '31 Aug 2022',
            Date: "OP",
            ReceiptNo: "Completed",
            Type:"OP",
            PaymentMode:"Cash",
            Amount:"1222",
            Actions: "-",
        },
    ];
    return (
        <Box>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={4} rowsPerPage={4} />
        </Box>
    )
}

export default UserBilling