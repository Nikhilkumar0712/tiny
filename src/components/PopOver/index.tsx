import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from "@material-ui/styles/makeStyles";
interface PopOverProps {
  open: any,
  onClose: any,
  children: React.ReactNode,
  id: any,
  PopOver: any,
  anchorOrigin:any,
  transformOrigin:any

}
const CustomPopOver = (props: PopOverProps) => {

 
 
  return (
    <>
      <div>
        <Popover
          open={props.open}
          onClose={props.onClose}
          anchorOrigin={props.anchorOrigin}
          transformOrigin={props. transformOrigin}
        >
          {props.children}
        </Popover>
      </div>
    </>
  )
}

export default CustomPopOver



