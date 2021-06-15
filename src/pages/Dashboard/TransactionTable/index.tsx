import { useEffect } from 'react'

import { api } from '../../../services/api'

import * as Styles from './styles'

export function TransactionTable() {
  
  useEffect(() => {
    api('transactions')
      .then(response => console.log(response.data))
  }, [])

  return(
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Styles.Container>
  )
}