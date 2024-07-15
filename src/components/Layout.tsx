import { Outlet } from 'react-router-dom'
import SnackBar from './Snackbar/Snackbar'
import { Box } from '@mui/material'
import Loader from './Loader/Loader'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Loader />
      <SnackBar />
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 142px)' }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
