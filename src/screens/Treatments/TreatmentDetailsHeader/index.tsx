import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../../../components/Card'
import { styles } from './styles'
const TreatmentDetailsHeader = () => {
    return (
        <>
            <Box>
                <Box mt={'10px'}>
                    <CustomCard>
                        <Box p={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box>
                                        <Typography sx={styles.name}>
                                            Treatment Course : <span style={styles.nameanswer}>
                                                Root Canal
                                            </span>
                                        </Typography>
                                        <Typography sx={styles.name} mt={"10px"}>
                                            Treatment Group : <span style={styles.nameanswer}>
                                                Root Canal
                                            </span>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={styles.name}>
                                        Examination Date : <span style={styles.nameanswer}>
                                            22 Sept 2022
                                        </span>
                                    </Typography>
                                    <Typography sx={styles.name} mt={"10px"}>
                                        Doctor Name : <span style={styles.nameanswer}>
                                            Surendra
                                        </span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CustomCard>
                </Box>
            </Box>
        </>
    )
}

export default TreatmentDetailsHeader