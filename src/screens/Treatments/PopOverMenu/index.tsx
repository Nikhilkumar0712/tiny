import { Typography, Box } from '@mui/material'
import React from 'react'
import { styles } from './styles'
const PopOverMenu = () => {
  return (
    <>
      <Box
        padding={"8px"}>
        <Typography sx={styles.typography}>
          Treatment Plan
        </Typography>
        <Typography sx={styles.typography}>
          Visiting Plan
        </Typography>
        <Typography sx={styles.typography}>
          Consent Form
        </Typography>
      </Box>

    </>
  )
}

export default PopOverMenu