import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography variant='h1'>404</Typography>
      <Typography variant='h6' mb={2}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to='/'>
        <Button variant='contained'>Back Home</Button>
      </Link>
    </Box>
  )
}
