import * as S from './styles'

const Main = ({
  title = 'React Starter',
  description = 'TypeScript, ReactJS, NextJS & Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/icon-512.png" alt="Imagem de um átomo rosa" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um dev olhando para tela com código"
    />
  </S.Wrapper>
)

export default Main
