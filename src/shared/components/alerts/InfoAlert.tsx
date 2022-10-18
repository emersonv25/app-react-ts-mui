import { Box, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useAlertContext } from '../../contexts/AlertContext';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

export default function InfoAlert() {
  const { alert, setAlert, closeAlert } = useAlertContext();
  
  useEffect(() => {
    setAlert({message: 'teste', type: 'success'})
  },[])

  if(alert){
    return (
      <Box p={2} >
        <Alert 
        severity={alert?.type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              closeAlert();
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        
        >{alert?.message}</Alert>
      </Box >
    );
  }
  else return (
    <></>
  )
}