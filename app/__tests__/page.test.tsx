import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders the weather app title', () => {
    render(<Home />)
    expect(screen.getByText('Hava Durumu Uygulaması')).toBeInTheDocument()
  })
})