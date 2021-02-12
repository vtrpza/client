import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render  the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react starter/i }))
      .toBeInTheDocument

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #06092b;
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 3rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c1 {
        width: 15rem;
        margin-bottom: 2rem;
      }

      .c2 {
        font-size: 2.5rem;
      }

      .c3 {
        font-size: 2rem;
        font-weight: 400;
      }

      .c4 {
        margin-top: 3rem;
        width: min(30rem,100%);
      }

      <main
        class="c0"
      >
        <img
          alt="Imagem de um átomo rosa"
          class="c1"
          src="/img/icon-512.png"
        />
        <h1
          class="c2"
        >
          React Starter
        </h1>
        <h2
          class="c3"
        >
          TypeScript, ReactJS, NextJS & Styled Components
        </h2>
        <img
          alt="Imagem de um dev olhando para tela com código"
          class="c4"
          src="/img/hero-illustration.svg"
        />
      </main>
    `)
  })
  it('should render the colours correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
