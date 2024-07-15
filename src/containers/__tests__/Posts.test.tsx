import { renderWithProviders } from '@/app/test-utils'
import Posts from '../Posts'
import { screen } from '@testing-library/react'

describe('Posts', () => {
  it('should render', () => {
    renderWithProviders(<Posts />)
    expect(screen.getByText(/posts/i)).toBeInTheDocument()
  })
})
