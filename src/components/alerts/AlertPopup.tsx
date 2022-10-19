import { Box, Container, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import useAlert from '../../hooks/useAlert';

export default function AlertPopup() {
  const { alert, closeAlert } = useAlert();

  if (alert) {
    return (
      <Container >
        <Box mt={2}>
          <Alert
          variant='outlined'
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
        </Box>
      </Container >
    );
  }
  else return (
    <></>
  )
}