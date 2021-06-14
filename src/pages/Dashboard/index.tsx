import { Summary } from "./Summary"
import { TransactionTable } from "./TransactionTable"

import * as Styles from './styles'

export function Dashboard() {
  return(
    <Styles.Container>
      <Summary />
      <TransactionTable />
    </Styles.Container>
  )
}