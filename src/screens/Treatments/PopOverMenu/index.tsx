import { Typography, Box, Link } from '@mui/material'
import React from 'react'
import { styles } from './styles'
import { Link as RouterLink, Router } from 'react-router-dom';
const PopOverMenu = () => {
  return (
    <>
      <Box
        padding={"8px"}>
        <RouterLink to={'/TreatmentPlanning'}>
          <Typography sx={styles.typography}>
            Treatment Plan
          </Typography>
        </RouterLink>
        <RouterLink to={'/VisitingPlan'}>
          <Typography sx={styles.typography}>
            Visiting Plan
          </Typography>
        </RouterLink>
        <RouterLink to={'/ConsentForm'}>
          <Typography sx={styles.typography}>
            Consent Form
          </Typography>
        </RouterLink>
      </Box>

    </>
  )
}

export default PopOverMenu