import { CONTAINER_MAX_WIDTH } from '@/constants/global'
import { Container, Stack, Typography } from '@mui/material'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Stack sx={{ mt: 4, py: 2, bgcolor: '#FAFAFA' }}>
      <Container
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 0 },
        }}
      >
        <Typography textAlign='center'>&copy; All rights reserved {year}</Typography>
      </Container>
    </Stack>
  )
}
