import { renderWithProviders } from '@/app/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { PENDING_TEXT } from '@/constants/global'

describe('Loader Component', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>,
      { preloadedState: { api: { queries: { test: { status: PENDING_TEXT } } } } },
    )
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})
