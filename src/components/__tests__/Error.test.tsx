import { renderWithProviders } from '@/app/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Error from '../Error'

describe('Error Component', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
    )
    const headingLevel1 = screen.getByRole('heading', { level: 1 })
    expect(headingLevel1).toBeInTheDocument()
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
