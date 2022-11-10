import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { Styles } from './styles';
import ImageUploading from 'react-images-uploading';
import CustomSelectPicker from '../../../../components/SelectPicker';
import CustomInput from '../../../../components/Input';
import CustomButton from '../../../../components/Button';


const SchemeDetails = () => {

  const SelectDepartment = [
    {
      value: 1,
      name: "Select Department"
    },
    {
      value: 2,
      name: "something"
    },
  ]

  const EnterSelectSchemeType = [
    {
      value: 1,
      name: "Enter/ Select Scheme Type"
    },
    {
      value: 2,
      name: "something"
    },
  ]
  const SelectSchemeType = [
    {
      value: 1,
      name: "Select Scheme Type"
    },
    {
      value: 2,
      name: "something"
    },
  ]

  const BillsRemaining = [
    {
      value: 1,
      name: "Bills Remaining"
    },
    {
      value: 2,
      name: "something"
    },
  ]

  const buttonClicked = () => { }

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <Box>
        <Typography style={Styles.CheckBoxLabel}>
          Scheme Name : TS Government
        </Typography>
      </Box>
      <Box mt={"15px"}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box>
              <CustomSelectPicker
                selectValue={1}
                size={"small"}
                fullWidth={false}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100%"}
                selectData={EnterSelectSchemeType}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>

              <CustomInput placeholder={"Governemnt Name"}
                InputProps={""}
                size={"small"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={"15px"}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box>
              <CustomSelectPicker
                selectValue={1}
                size={"small"}
                fullWidth={false}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100%"}
                selectData={SelectSchemeType}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <CustomSelectPicker
                selectValue={1}
                size={"small"}
                fullWidth={false}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100%"}
                selectData={SelectDepartment}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={'15px'}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box>
              <CustomSelectPicker
                selectValue={1}
                size={"small"}
                fullWidth={false}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100%"}
                selectData={BillsRemaining}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                isDragging,
                dragProps,
              }) => (
                <>
                  <Box
                    onClick={onImageUpload}
                    {...dragProps}
                    sx={Styles.DragandDrop}>
                    Drag and Drag / Upload Document
                  </Box>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} alt="" width="100" />
                    </div>
                  ))}
                </>
              )}
            </ImageUploading>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={"flex"}
        gap={"10px"}
        justifyContent={"flex-end"}
        mt={"30px"}>
        <Box mt={"18px"}>
          <CustomButton title={"Cancel"}
            handleButtonClick={buttonClicked}
            backgroundcolor={"#FFFFFF"}
            bordercolor={"#9DA2AB"}
            padding={"4px 30px"}
            border={"1px solid"}
            fontsize={"14px"}
            color={"primary"}
            endIcon={""} />
        </Box>
        <Box mt={"18px"}>
          <CustomButton title={"Submit"}
            handleButtonClick={buttonClicked}
            backgroundcolor={"#204289"}
            bordercolor={"#204289"}
            border={"1px solid"}
            fontsize={"14px"}
            color={"info"}
            padding={"4px 30px"}
            endIcon={""} />
        </Box>
      </Box>
    </>
  )
}

export default SchemeDetails