import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'
const OtherDetails = () => {
    return (
        <>
            <Box paddingBottom={"50px"}>
                <Box mt={"20px"} ml={"15px"}>
                    <Typography sx={styles.namehead}>
                        Patient Scheme :
                    </Typography>
                </Box>
                <Box padding={"0px 0px 0px 40px"}>
                    <Box mt={"20px"}>
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
                        <Box mt={"20px"}>
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
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box mt={"25px"} >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box >
                                <Box>
                                    <Typography sx={styles.namehead}>
                                        Attendee Details :
                                    </Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Box mt={'15px'} padding={"0px 0px 0px 40px"}>
                                            <Typography sx={styles.namehead}>
                                                Name :   <span
                                                    style={styles.nametext}>B Harish Rao</span>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box mt={'15px'}>
                                            <Typography sx={styles.namehead}>
                                                Attendee Relation :  <span
                                                    style={styles.nametext}> Husband </span>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box mt={'24px'} padding={"0px 0px 0px 40px"}>
                                    <Typography sx={styles.namehead} >
                                        Attendee Contact No : <span
                                            style={styles.nametext}> 80139 81781 </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Box>
                                    <Typography sx={styles.namehead}>
                                        Referred By Details :
                                    </Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Box mt={'15px'}>
                                            <Typography sx={styles.namehead}>
                                                Name :  <span
                                                    style={styles.nametext}>Mahesh</span>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box mt={'24px'}>
                                            <Typography sx={styles.namehead}>
                                                Referral Relation :  <span
                                                    style={styles.nametext}>Doctor</span>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box mt={'15px'}>
                                    <Typography sx={styles.namehead}>
                                        Referral Contact No : <span
                                            style={styles.nametext}>80139 81781</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default OtherDetails