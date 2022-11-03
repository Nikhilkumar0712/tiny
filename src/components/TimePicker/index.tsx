import React from 'react'
import TextField from '@mui/material/TextField';
import makeStyles from "@material-ui/styles/makeStyles";
import { styles } from './style';
const CustomTimePicker = () => {
    return (
        <>
            <TextField
                id="time"
                label="Time"
                type="time"
                sx={styles.time}
                style={{"width":"100%"}}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </>
    )
}

export default CustomTimePicker