import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Page from '../app/page'

describe('page', () => {
  it('renders the main page', () => {
    const { container } = render(<Page />)

    expect(container).toMatchSnapshot()
  })
})
