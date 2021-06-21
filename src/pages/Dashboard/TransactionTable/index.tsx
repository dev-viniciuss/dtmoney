import { useMediaQuery } from 'react-responsive'

import { useTransactions } from '../../../hooks/useTransactions'

import * as Styles from './styles'

export function TransactionTable() {
  const isMobile = useMediaQuery({ maxWidth: 720 })

  const { transactions } = useTransactions()

  return(
    <>  
      { isMobile 
        ? 
        <Styles.ContainerMobile>
          <header>
            <span>Listagem</span>
            <p>{transactions.length} itens</p>
          </header>

          {transactions.map(transaction => (
            <Styles.CardContainer key={transaction.id}> 
              <span>{transaction.title}</span>
              <strong className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
              </strong>

              <footer>
                <p>{transaction.category}</p>
                <p>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</p>
              </footer>
            </Styles.CardContainer>
          ))}

        </Styles.ContainerMobile>
        :
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
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Styles.Container>
      }
    </>
  )
}