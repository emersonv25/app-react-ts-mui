import { Box, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import useAlert from '../../hooks/useAlert';

export default function AlertPopup() {
  const { alert, closeAlert } = useAlert();

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
        
        >{alert?.text}</Alert>
      </Box >
    );
  }
  else return (
    <></>
  )
}