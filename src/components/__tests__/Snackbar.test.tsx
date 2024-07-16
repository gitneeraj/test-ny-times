import { renderWithProviders } from '@/app/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SnackBar from '../Snackbar/Snackbar'

describe('Snackbar Component', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <SnackBar />
      </MemoryRouter>,
      {
        preloadedState: {
          common: { snackbar: { show: true, message: 'test message', type: 'success' } },
        },
      },
    )
    expect(screen.getByText('test message')).toBeInTheDocument()
  })

  it('should fire event to close snackbar', async () => {
    renderWithProviders(
      <MemoryRouter>
        <SnackBar />
      </MemoryRouter>,
      {
        preloadedState: {
          common: { snackbar: { show: true, message: 'test message', type: 'success' } },
        },
      },
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
