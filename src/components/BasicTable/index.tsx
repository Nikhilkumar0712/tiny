// import React from 'react'
// import CustomDatePicker from '../DatePicker';
// import Checkbox from '@mui/material/Checkbox';
// import CustomInput from '../Input';
// import CustomSelectPicker from '../SelectPicker';
// import CustomButton from '../Button';
// import { Styles } from './styles';
// import {
//     Box, Typography,
//     Table,
//     TableBody,
//     Link,
//     Grid,
//     Paper,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow
// } from '@mui/material';

// const AttendepesonTitle = [
//     {
//         value: 1,
//         name: 'Select Doctor'
//     },
//     {
//         value: 2,
//         name: 'Ms'
//     }
// ]
// const Status = [
//     {
//         value: 1,
//         name: 'Status'
//     },
//     {
//         value: 2,
//         name: 'Ms'
//     }
// ]

// interface TableRowandColumns {

//     select: any,
//     ToothNo: any,
//     Treatment: any,
//     SelectDate: any,
//     Cost: any,
//     Discount: any,
//     TreatmentCost: any,
//     Doctor: any,
//     TreatmentStatus: any,

// }
// const tablehead=[
//     "select",
//     "ToothNo",
//     "Treatment",
//     "SelectDate",
//     "Cost",
//     "Discount",
//     "TreatmentCost",
//     "Doctor",
//     "TreatmentStatus",
//   ]
// const BasicTable = (props: TableRowandColumns) => {
//     return (
//         <>
//             <TableContainer component={Paper} sx={Styles.TableConatiner}>
//                 <Table size="small" sx={{ minWidth: 750 }} aria-label="a dense table">
//                     <TableHead>
//                         <TableRow sx={Styles.tablerow}>
//                             {/* <TableCell sx={Styles.tablerowhead}>{props.select}</TableCell>
//                             <TableCell sx={Styles.tablerowhead} style={{ "width": "88px" }}>{props.ToothNo}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}
//                                 style={{ width: "105px" }}>{props.Treatment}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}>{props.SelectDate}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}>{props.Cost}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}>{props.Discount}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}>{props.TreatmentCost}</TableCell>
//                             <TableCell sx={Styles.tablerowhead}>{props.Doctor}</TableCell>
//                             <TableCell sx={Styles.tablerowhead} style={{ "width": "150px" }}>{props.TreatmentStatus}</TableCell> */}
//                             {tablehead.map((item) => {
//                                 return (
//                                     <>
//                                         <TableCell>
//                                             item={item}
//                                         </TableCell>
//                                     </>
//                                 )
//                             })}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         <TableRow >
//                             <TableCell
//                                 sx={Styles.tablefirstcellfirstItem}>
//                                 <Checkbox size="small" />
//                                 <Checkbox sx={{ mt: "18px" }} size="small" />
//                                 <Checkbox sx={{ mt: "18px" }} size="small" />
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell} style={Styles.RowDatafont}>12</TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Typography sx={Styles.RowDatafont}>
//                                     Treatment 1
//                                 </Typography>
//                                 <Typography mt={"32px"} sx={Styles.RowDatafont}>
//                                     Treatment 2
//                                 </Typography>
//                                 <Typography mt={"32px"} sx={Styles.RowDatafont}>
//                                     Treatment 3
//                                 </Typography>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomDatePicker fullWidth={'fullWidth'} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomDatePicker fullWidth={'fullWidth'} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomDatePicker fullWidth={'fullWidth'} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Disc %"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Disc %"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Disc %"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell} >
//                                 <Box>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={AttendepesonTitle}
//                                     />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={AttendepesonTitle}
//                                     />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={AttendepesonTitle}
//                                     />
//                                 </Box>
//                             </TableCell>
//                             <TableCell
//                                 sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={Status}
//                                     />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={Status}
//                                     />
//                                 </Box>
//                                 <Box mt={"10px"}>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={Status}
//                                     />
//                                 </Box>
//                             </TableCell>
//                         </TableRow>
//                         <TableRow>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <Checkbox size="small" />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell} style={Styles.RowDatafont}>
//                                 13
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Typography sx={Styles.RowDatafont}>
//                                     Treatment 1
//                                 </Typography>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomDatePicker fullWidth={'fullWidth'} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Disc %"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomInput placeholder={"Enter Cost"}
//                                         InputProps={""}
//                                         size={"small"} />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={AttendepesonTitle}
//                                     />
//                                 </Box>
//                             </TableCell>
//                             <TableCell sx={Styles.tablefirstcell}>
//                                 <Box>
//                                     <CustomSelectPicker
//                                         selectValue={1}
//                                         size={"small"}
//                                         fullWidth={false}
//                                         handleSelectValue={(val: any) => console.log("hii")}
//                                         width={"100%"}
//                                         selectData={AttendepesonTitle}
//                                     />
//                                 </Box>
//                             </TableCell>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </>
//     )
// }

// export default BasicTable
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index