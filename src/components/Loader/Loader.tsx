import { useAppSelector } from '@/app/store'
import { PENDING_TEXT } from '@/constants/global'
import { Backdrop, CircularProgress } from '@mui/material'

/**
 * Show loader for all the pending API calls
 * */
export default function Loader() {
  const isLoading = useAppSelector((state) => {
    const isLoadingQueries = Object.values(state.api.queries).some((query: any) => {
      return query && query?.status === PENDING_TEXT
    })

    return isLoadingQueries
  })

  return (
    <Backdrop sx={{ color: 'primary.contrastText', zIndex: 9999 }} open={isLoading}>
      <CircularProgress data-testid='loader' color='inherit' />
    </Backdrop>
  )
}
