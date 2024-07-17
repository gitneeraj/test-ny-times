import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box flexGrow={1} mb={2}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' style={{ color: 'white' }}>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <img src='/logo.png' alt='NY logo' />
              NY Times
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
