import { screen, render } from '@testing-library/react'
import { Button } from './index'

describe('<Button />', () => {
  it('should render button with the text "Click!"', () => {
    render(<Button />)

    expect(screen.getByText('Click!')).toBeInTheDocument()
  })
})
