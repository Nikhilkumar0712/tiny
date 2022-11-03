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
  vertical: any,
  horizontal: any,
}
const CustomPopOver = (props: PopOverProps) => {

  const useStyles = makeStyles({
    hi: {
      top: "200px",
      left: "200px"
    }
  });
  const classes = useStyles();
  return (
    <>
      <div>
        <Popover
          open={props.open}
          onClose={props.onClose}
          classes={{ root: classes.hi }}
        >
          {props.children}
        </Popover>
      </div>
    </>
  )
}

export default CustomPopOver



