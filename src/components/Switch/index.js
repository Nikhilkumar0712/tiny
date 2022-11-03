import React, {useState} from 'react'
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
const CustomSwitch = () => {
    const [checked, setChecked] = useState(true);
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#008932',
          '&:hover': {
            backgroundColor: alpha('#008932', theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#008932',
        },
      }));
      
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };

      const switchHandler = (event) => {
        setChecked(event.target.checked);
      };
    return (
        <>
            <GreenSwitch {...label} defaultChecked 
            size='small'
             checked={checked} onChange={switchHandler} 
          />
        </>
    )
}

export default CustomSwitch