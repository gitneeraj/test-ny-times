import { postsSelector } from '@/app/features/postsSlice'
import { useGetPostsQuery } from '@/app/services/posts'
import { useAppSelector } from '@/app/store'
import Error from '@/components/Error'
import { CONTAINER_MAX_WIDTH, DEFAULT_IMAGE } from '@/constants/global'
import { getPostDetailsImage } from '@/helpers/general'
import { ArrowBack, Circle } from '@mui/icons-material'
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

export default function PostDetails() {
  const { id } = useParams()
  const posts = useAppSelector(postsSelector)
  const { isLoading } = useGetPostsQuery({ duration: 1 }, { skip: !!posts })

  const post = posts?.results?.filter((post) => post?.id === Number(id))?.[0] ?? null

  if (!post && !isLoading) {
    return <Error />
  }

  if (isLoading) {
    return null
  }

  return (
    <Container sx={{ maxWidth: CONTAINER_MAX_WIDTH }}>
      <Stack mb={2}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBack /> Back
        </Link>
      </Stack>

      <Card sx={{ border: 'none', boxShadow: 'none' }}>
        <Typography variant='h3' component='h1' sx={{ fontSize: { xs: '24px', md: '42px' } }}>
          {post?.title}
        </Typography>
        <Typography variant='h6' component='h2' fontStyle='italic' fontSize='14px' mb={2}>
          Updated: {post?.updated}
        </Typography>
        <CardMedia
          component='img'
          image={getPostDetailsImage(post?.media?.[0]?.['media-metadata']) ?? DEFAULT_IMAGE}
          title={post?.title}
        />
        {post?.media?.[0]?.copyright && (
          <Typography fontStyle='italic' textAlign='center'>
            Image Copyright: {post?.media?.[0]?.copyright}
          </Typography>
        )}
        <CardContent>
          <Typography variant='h6' component='h5' mb={4}>
            {post?.abstract}
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Grid container>
            <Grid item xs={12} md={9}>
              <Typography variant='body1' paragraph>
                Source: {post?.source}
              </Typography>
              {post?.section && (
                <Typography variant='body1' paragraph>
                  Section: {post?.section}
                </Typography>
              )}
              {post?.subsection && (
                <Typography variant='body1' paragraph>
                  Sub-section: {post?.subsection}
                </Typography>
              )}
              <Typography variant='subtitle1' color='textSecondary' gutterBottom fontStyle='italic'>
                Published Date: {post?.published_date}
              </Typography>
              <Typography variant='body1' paragraph>
                {post?.byline}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              {post?.per_facet?.length > 0 && (
                <>
                  <Typography variant='h6'>Postulates</Typography>
                  <List>
                    {post?.per_facet?.map((item: string) => {
                      return (
                        <ListItem key={item} sx={{ padding: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Circle fontSize='small' />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    })}
                  </List>
                </>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}
