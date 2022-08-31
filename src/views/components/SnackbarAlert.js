import Snackbar from "@mui/material/Snackbar";
import {Alert, Stack} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@material-ui/core";


function SnackbarAlert({snackbarStatus, closeSnackbar, snackbarMessage}) {
    return (
        <Stack sx={{position: "absolute", bottom: 40, right: 24}} spacing={10}>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                autoHideDuration={6512}
                open={snackbarStatus}
                onClose={closeSnackbar}
                transitionDuration={{enter: 500, exit: 500}}
            >
                <Alert severity={snackbarMessage.status} sx={{width: '100%', position: 'relative'}}>
                    <b>{snackbarMessage.message}</b> <br/>
                    {snackbarMessage.subMessage}
                    <a style={snackbarMessage.status === 'success' ? {
                            color: '#043927 ',
                            position: 'absolute',
                            top: '7px',
                            right: '10px'
                        } :
                        {color: '#8b0000', position: 'absolute', top: '7px', right: '10px'}} type="button"
                       className="close">
                        <IconButton size={'small'}
                                    style={snackbarMessage.status === 'success' ? {color: '#043927'} : {color: '#8b0000'}}>
                            <CloseIcon fontSize={'small'}
                                       onClick={() => closeSnackbar()}/>
                        </IconButton>
                    </a>
                </Alert>
            </Snackbar>
        </Stack>
    )
}
export default SnackbarAlert;