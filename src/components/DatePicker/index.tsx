import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { withStyles } from '@material-ui/styles';
import AccessibleIcon from "@mui/icons-material/Accessible";


interface DatePickerWidth {
  fullWidth:any,
}

const CustomDatePicker = (props:DatePickerWidth ) => {

  const [value, setValue] = useState(new Date());

  const StyledTextField = withStyles({
    root: {

      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `10px`,
          borderColor: `#9DA2AB`,
          boxShadow: "0px 0px 10px #00000014",
          borderWidth: 1,
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
        // components={{
        //   OpenPickerIcon: AccessibleIcon
        // }}
        toolbarPlaceholder="hi"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params) => <StyledTextField {...params} size={'small'} 
        fullWidth={props.fullWidth}
          inputProps={{
                ...params.inputProps,
                placeholder: "Date"
              }}
          
      />}
      />
    </LocalizationProvider>
  )
}

export default CustomDatePicker;