import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { withStyles } from '@material-ui/styles';


interface DatePickerWidth {
  fullWidth:any
}

const CustomDatePicker = (props:DatePickerWidth ) => {

  const [value, setValue] = useState(new Date());

  const StyledTextField = withStyles({
    root: {

      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `10px`,
          borderColor: `#204289`,
        },
        '& .MuiInputBase-input': {
          fontSize: '13px',
          padding: '11px'
        },
      },
    },
  })(TextField);



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker

        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params) => <StyledTextField {...params} size={'small'} fullWidth={props.fullWidth}/>}
      />
    </LocalizationProvider>
  )
}

export default CustomDatePicker;