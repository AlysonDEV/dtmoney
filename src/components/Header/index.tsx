import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface propsModal {
  openModal: () => void
}

export function Header ({openModal}: propsModal) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" 
          onClick={openModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}