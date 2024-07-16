import { renderWithProviders } from '@/app/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from '../Layout'

describe('Layout Component', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    )
    expect(screen.getByText(/ny.*times/i)).toBeInTheDocument()
    expect(screen.getByText(/all.*rights.*reserved/i)).toBeInTheDocument()
  })
})
