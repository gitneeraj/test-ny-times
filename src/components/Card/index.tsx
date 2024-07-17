import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { type Result } from '@/types/services'
import { DEFAULT_IMAGE } from '@/constants/global'
import { numberOfLines } from '@/helpers/general'

export type AppCardProps = { data: Result }

export default function AppCard({ data }: Readonly<AppCardProps>) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: '350px' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          height='140'
          image={data?.media?.[0]?.['media-metadata']?.[1]?.url ?? DEFAULT_IMAGE}
          alt={data?.abstract}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' sx={numberOfLines(2)}>
            {data?.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={numberOfLines(2)}>
            {data?.abstract}
          </Typography>

          <Typography variant='body2' color='text.secondary' mt={2} fontStyle='italic'>
            Published On: {data?.published_date}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            fontStyle='italic'
            sx={numberOfLines(1)}
          >
            {data?.byline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
