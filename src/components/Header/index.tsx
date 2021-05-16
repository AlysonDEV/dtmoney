import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

Modal.setAppElement('#root')

interface propsModal{
  status: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export function Header ({status, closeModal, openModal}: propsModal) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" 
          onClick={openModal}
        >
          Nova transação
        </button>

        <Modal 
          isOpen={status}
          onRequestClose={closeModal}
        >
          <h2>Cadastro de Transações</h2>
        </Modal>
      </Content>
    </Container>
  )
}