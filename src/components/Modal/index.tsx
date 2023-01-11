import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface CustoModalProps {
   children: any,
   handleOpen?: any,
   handleClose: any,
   open: any,
   width?: any
}


const CustomModal = (props: CustoModalProps) => {

   const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: '#fff',
      borderRadius: "23px",
      boxShadow: 24,
      outline: 'none',
      width: props.width ? props.width : 400,
      p: 3
   };


   return (
      <>
         <div>
            <Modal
               sx={{ zIndex: "1" }}
               open={props.open}
               onClose={props.handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
               <Box sx={style}>

                  {props.children}
               </Box>
            </Modal>
         </div>
      </>
   )
}

export default CustomModal