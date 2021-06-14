import logoImg from '../../assets/logo.svg'

import * as Styles from './styles'

export function Header() {
  return(
    <Styles.Container>
      <Styles.Content>
        <img src={logoImg} alt="dt money" />
        <button>Nova Transação</button>
      </Styles.Content>
    </Styles.Container>
  )
}