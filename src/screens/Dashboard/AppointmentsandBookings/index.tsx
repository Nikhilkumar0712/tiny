import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import CustomInput from '../../../components/Input';
import CustomSelectPicker from '../../../components/SelectPicker';
import CustomDatePicker from '../../../components/DatePicker';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react'
import CustomCard from '../../../components/Card';
import Typography from '@mui/material/Typography'
import { Styles } from './styles';
import Checkbox from '@mui/material/Checkbox';
import makeStyles from "@material-ui/styles/makeStyles";


const selectData = [
  {
    value: 1,
    name: "By Doctor",
  },
  {
    value: 2,
    name: "Female",
  },
];
interface CheckBoxProps {
  checkbox: any
  ml: any,
  item: {
    title: any,
    timeanddate: any,
    op: any
  }
}

const AppointmentsData = [
  {
    id: 1,
    title: 'Suresh',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  },
  {
    id: 2,
    title: 'Rajesh',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'Treatment'
  },
  {
    id: 3,
    title: 'Nikhil',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  },
  {
    id: 3,
    title: 'Nikhil',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  },
  {
    id: 3,
    title: 'Nikhil',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  }
]

const BookingsData = [
  {
    id: 1,
    title: 'Suresh',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  },
  {
    id: 2,
    title: 'Rajesh',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'Treatment'
  },
  {
    id: 3,
    title: 'Nikhil',
    timeanddate: '6 Sep 2022 | 06:00 Pm',
    op: 'OP'
  },
]

const useStyles = makeStyles({
  tab: {
    color: "#021025 !important",
    '&.Mui-selected': {
      color: "#204289 !important"
    }
  },
});

const AppointmentandBookings = () => {

  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Typography sx={Styles.MainHeading}>
          Appointments
        </Typography>
        <Typography sx={Styles.SideHeading}>
          View All
        </Typography>
      </Box>
      <Box mt={2}>
        <CustomCard>
          <Box sx={Styles.Container}>
            <TabContext value={value}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <Box >
                  <TabList aria-label="lab API tabs example" onChange={handleChange} sx={Styles.Tablist}>
                    <Tab label="Confirmed Appointments" value="1"
                      sx={Styles.TabColor}
                      classes={tabClasses}
                    />
                    <Tab label="Booked Appointments" value="2" sx={Styles.TabColor}
                      classes={tabClasses} />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={Styles.Tabpanel}>
                  <Box >
                    <Box display={"flex"}
                      gap={"10px"}
                      alignItems={"center"}
                      mt={2}
                      mb={1}>
                      <Box flexGrow={1}>
                        <CustomInput placeholder={"Search Patient"}
                          InputProps={""}
                          size={"Normal"} />
                      </Box>
                      <Box >
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={0}
                          selectData={selectData}
                        />
                      </Box>
                      <Box>
                        <CustomDatePicker fullWidth={"fullWidth"} />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={Styles.overflow}>
                    <Box padding={"5px"}>
                      {
                        AppointmentsData.map((item) => {
                          return (
                            <>
                              <CustomDashboardTabAppointmentsandBookings
                                item={item}
                                checkbox="Checkbox"
                                ml={""} />
                            </>
                          )
                        })
                      }
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value="2" sx={Styles.Tabpanel}>
                  <Box >
                    <Box display={"flex"}
                      gap={"10px"}
                      alignItems={"center"}
                      mt={2}
                      mb={1}>
                      <Box>
                        <CustomInput placeholder={"Search Patient"}
                          InputProps={""}
                          size={"Normal"} />
                      </Box>
                      <Box >
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={0}
                          selectData={selectData}
                        />
                      </Box>
                      <Box>
                        <CustomDatePicker fullWidth={"fullWidth"} />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={Styles.overflow}>
                    <Box padding={"5px"}>
                      {
                        BookingsData.map((item) => {
                          return (
                            <>
                              <CustomDashboardTabAppointmentsandBookings
                                item={item}
                                checkbox=""
                                ml={"10px"} />
                            </>
                          )
                        })
                      }
                    </Box>
                  </Box>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </CustomCard>
      </Box>
    </>
  )
}
export const CustomDashboardTabAppointmentsandBookings = (props: CheckBoxProps) => {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          gap={"3px"}
          alignItems={"center"}
          mt={"10px"}>
          <Box>
            <Box width={"3px"}
              height={"55px"}
              bgcolor={"#3DD230"}
              borderRadius={"4px"}>
            </Box>
          </Box>
          <Box
            ml={props.ml}>
            {
              props.checkbox == "Checkbox" && (
                <Checkbox />
              )
            }
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}>
            <Box
              display={"flex"}
              flexDirection={"column"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"7px"}>
                <Typography sx={Styles.name}>
                  {props.item.title}
                </Typography>
                <Box
                  component={"img"}
                  alt=" Appointment"
                  src={require("../../../assets/PhoneIocn.svg")}
                  width={"30px"}>
                </Box>
              </Box>
              <Typography sx={Styles.subHeading}>
                {props.item.timeanddate}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              gap={"7px"}>
              <Box
                display={"flex"}
                gap={"10px"}>
                <Box
                  component={"img"}
                  alt=" Appointment"
                  src={require("../../../assets/eyeicon.svg")}
                  width={"20px"}>
                </Box>
                <Box
                  component={"img"}
                  alt=" Appointment"
                  src={require("../../../assets/meetballicon.svg")}
                  width={"20px"}>
                </Box>
              </Box>
              <Box padding={"3px 15px"}
                bgcolor={"#204289"}
                borderRadius={"4px"}
                color={"#fff"}
                fontSize={"12px"}
                fontFamily={"poppins"}
                textAlign={"center"}
                fontWeight={"400"}>
                {props.item.op}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box borderBottom={"1px dotted #9DA2AB"} mt={1} mb={1}>
        </Box>
      </Box>
    </>
  )
}
export default AppointmentandBookings