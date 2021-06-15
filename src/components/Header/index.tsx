import logoImg from '../../assets/logo.svg'

import * as Styles from './styles'

interface HeaderProps {
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: HeaderProps) {
  return(
    <Styles.Container>
      <Styles.Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onNewTransactionModal}>Nova Transação</button>
      </Styles.Content>
    </Styles.Container>
  )
}