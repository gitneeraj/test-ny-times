import { renderWithProviders } from '@/app/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from '../Layout'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  ScrollRestoration: () => <div />,
}))

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
