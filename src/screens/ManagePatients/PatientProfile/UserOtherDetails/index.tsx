import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'
const OtherDetails = () => {
    return (
        <>
            <Box mt={"15px"}>
                <Typography>
                    Patient Scheme :
                </Typography>
            </Box>
            <Box mt={"15px"}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography sx={styles.namehead}>
                            Scheme Name :  <span
                                style={styles.nametext}>Arogya Bhadratha</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={styles.namehead}>
                            Scheme Name :  <span
                                style={styles.nametext}>Arogya Bhadratha</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={styles.namehead}>
                            Scheme Maximum Limit :   <span
                                style={styles.nametext}>Rs. 30000</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={"15px"}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Typography sx={styles.namehead}>
                                Company Name :  <span
                                    style={styles.nametext}>Government</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={styles.namehead}>
                                Scheme Maximum Bills :   <span
                                    style={styles.nametext}>03 </span>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box mt={"15px"} 
            display={"flex"}
            justifyContent={"space-between"}>
                
                <Box>
                    <Box>
                        <Typography>
                            Patient Scheme :
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box mt={'15px'}>
                                <Typography sx={styles.namehead}>
                                    Scheme Maximum Bills :   <span
                                        style={styles.nametext}>03 </span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box mt={'15px'}>
                                <Typography sx={styles.namehead}>
                                    Scheme Maximum Bills :   <span
                                        style={styles.nametext}>03 </span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={'15px'}>
                        <Typography sx={styles.namehead}>
                            Scheme Maximum Bills :   <span
                                style={styles.nametext}>03 </span>
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography>
                            Patient Scheme :
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box mt={'15px'}>
                                <Typography sx={styles.namehead}>
                                    Scheme Maximum Bills :   <span
                                        style={styles.nametext}>03 </span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box mt={'15px'}>
                                <Typography sx={styles.namehead}>
                                    Scheme Maximum Bills :   <span
                                        style={styles.nametext}>03 </span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={'15px'}>
                        <Typography sx={styles.namehead}>
                            Scheme Maximum Bills :   <span
                                style={styles.nametext}>03 </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default OtherDetails