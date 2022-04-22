import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon/>', () => {
  it('should render  the heading', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with primary color', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with secondary color', () => {
    const { container } = renderWithTheme(
      <Ribbon color="secondary">Best Seller</Ribbon>
    )

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3c1'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with normal size as default', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with small size', () => {
    const { container } = renderWithTheme(
      <Ribbon size="small">Best Seller</Ribbon>
    )

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
