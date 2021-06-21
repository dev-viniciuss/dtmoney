import { useMediaQuery } from 'react-responsive'

import logoImg from '../../assets/logo.svg'
import isotipoImg from '../../assets/isotipo.svg'

import * as Styles from './styles'

interface HeaderProps {
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: HeaderProps) {
  const isMobile = useMediaQuery({ maxWidth: 720 })

  return(
    <Styles.Container>
      <Styles.Content>
        { isMobile 
          ? <img src={isotipoImg} alt="dt money" />
          : <img src={logoImg} alt="dt money" />
        }
        <button onClick={onNewTransactionModal}>Nova Transação</button>
      </Styles.Content>
    </Styles.Container>
  )
}