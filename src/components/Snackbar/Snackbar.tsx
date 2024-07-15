import { setSnackbar, snackbarSelector } from '@/app/features/commonSlice'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { Alert, Slide, Snackbar, type SnackbarOrigin } from '@mui/material'

export default function SnackBar() {
  const snackbar = useAppSelector(snackbarSelector)
  const dispatch = useAppDispatch()

  const position: SnackbarOrigin = { vertical: 'top', horizontal: 'center' }
  let autoHide = true

  const handleClose = () => {
    dispatch(setSnackbar({ show: false, message: '', type: '' }))
  }

  if (snackbar?.autoHide === false) {
    autoHide = false
  }

  return (
    <Snackbar
      anchorOrigin={snackbar?.position || position}
      open={snackbar.show}
      onClose={handleClose}
      TransitionComponent={Slide}
      key={snackbar?.message}
      ClickAwayListenerProps={{ onClickAway: () => null }} // Do not close the snackbar while click away/outside
      autoHideDuration={autoHide ? 5000 : null}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar?.type}
        variant='filled'
        sx={{ width: '100%', alignItems: 'center', '& .MuiAlert-action': '0 0 0 16px' }}
      >
        {snackbar?.message}
      </Alert>
    </Snackbar>
  )
}
