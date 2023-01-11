import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../../components/Button'

const AvailableSlots = () => {
  const buttonClicked=()=>{}
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>9:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>9:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography color={'#204289'} fontFamily={"poppins"}
              padding={"6px 18px"}
              border={"1px solid #204289"}
              boxShadow={'0px 0px 6px #0000001F'}
              bgcolor={'#ffff'}
              borderRadius={"9px"}
              fontSize={'12px'}>11:30 Am</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid
          container
          flexDirection={"row"}
          spacing={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Grid item>
            <CustomButton
              title={"Cancel"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#fff"}
              bordercolor={"#204289"}
              color={"#204289"}
              width={120}
              padding={7}
            />
          </Grid>
          <Grid item>
            <CustomButton
              title={"Book"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              bordercolor={"#204289"}
              color={"#fffff"}
              width={120}
              padding={7}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AvailableSlots