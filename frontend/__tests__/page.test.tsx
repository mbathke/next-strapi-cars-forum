import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import { mockFetch } from '../app/lib/mock-fetch'

interface HomePage {
  data: {
    title: string
    description: string
  }
}
 
describe('Home Page', () => {
  it('renders a heading', async () => {
    const testInput = {
      data: {
        title: 'Page title',
        description: 'This is the home page.',
      }
    }
    window.fetch = mockFetch<HomePage>(testInput)

    const homePage = await Home()
    render(homePage)
 
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
