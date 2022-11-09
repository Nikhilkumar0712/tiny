import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../../../components/Card'
import { Styles } from './style'
interface BillingSummaryData {
    item: {
        name: any,
        referredBy: any,
        amount: any,
        date: any,
        image: any,
        bgColor: any
    }
}
const BillingSummary = (props: BillingSummaryData) => {
    return (
        <>
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}>
                <Box>
                    <Box
                        component={"img"}
                        alt=" Appointment"
                        src={props.item.image}
                        padding={"10px"}
                        bgcolor={props.item.bgColor}
                        borderRadius={"50%"}>
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"8px"}>
                        <Typography sx={Styles.name}>
                            {props.item.name}
                        </Typography>
                        <Typography sx={Styles.subHeading}>
                            {props.item.referredBy}
                        </Typography>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"8px"}>
                        <Typography sx={Styles.subHeading}>
                            {props.item.date}
                        </Typography>
                        <Typography sx={Styles.amount}>
                            {props.item.amount}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box borderBottom={"1px dotted #9DA2AB"} mt={1} mb={1}>
            </Box>

        </>
    )
}
export const DashboardBillingSummary = () => {
    const BillingSummaryData = [
        {
            id: 1,
            name: 'Suresh',
            referredBy: 'Referred by surender',
            image: require("../../../assets/Doctoricu.svg"),
            amount: 'Rs 1200',
            date: "7 Sep 2022",
            bgColor: "#FD7238"
        },
        {
            id: 1,
            name: 'Suresh',
            referredBy: 'Referred by surender',
            image: require("../../../assets/inactivetreatment.svg"),
            amount: 'Rs 1200',
            date: "7 Sep 2022",
            bgColor: "#5246A0"
        },
        {
            id: 1,
            name: 'Suresh',
            referredBy: 'Referred by surender',
            image: require("../../../assets/inactivetooth.svg"),
            amount: 'Rs 1200',
            date: "7 Sep 2022",
            bgColor: "#199A37"
        },
        {
            id: 1,
            name: 'Suresh',
            referredBy: 'Referred by surender',
            image: require("../../../assets/Doctoricu.svg"),
            amount: 'Rs 1200',
            date: "7 Sep 2022",
            bgColor: "#5246A0"
        },
        {
            id: 1,
            name: 'Suresh',
            referredBy: 'Referred by surender',
            image: require("../../../assets/Doctoricu.svg"),
            amount: 'Rs 1200',
            date: "7 Sep 2022",
            bgColor: "#199A37"
        },
    ]
    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Typography sx={Styles.MainHeading}>
                    Billing Summary
                </Typography>
                <Typography sx={Styles.SideHeading}>
                    View All
                </Typography>
            </Box>
            <Box mt={2}>
                <CustomCard>
                    <Box p={2}>
                        {
                            BillingSummaryData.map((item) => {
                                return (
                                    <BillingSummary
                                        item={item} />
                                )
                            })
                        }
                    </Box>
                </CustomCard>
            </Box>
        </>
    )
}
export default BillingSummary