import { useGetPostsQuery } from '@/app/services/posts'
import AppCard from '@/components/Card'
import { CONTAINER_MAX_WIDTH } from '@/constants/global'
import { Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Posts() {
  const { data: posts } = useGetPostsQuery()

  return (
    <Container sx={{ maxWidth: CONTAINER_MAX_WIDTH }}>
      <Typography variant='h1' fontSize='32px' my={2}>
        Posts
      </Typography>

      <Grid container gap={3}>
        {posts?.results?.map((post) => (
          <Grid item key={post.id}>
            <Link to={`post/${post.id}`}>
              <AppCard data={post} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
