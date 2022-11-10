import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface CustoModalProps {
   children: any,
   handleOpen:any,
   handleClose:any,
   open:any
}

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: '#fff',
   borderRadius:"23px",
   boxShadow: 24,
   p: 3,
};

const CustomModal = (props: CustoModalProps) => {

   return (
      <>
         <div>
            <Modal
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