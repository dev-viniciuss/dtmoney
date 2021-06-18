import { useState, FormEvent, useContext } from 'react'
import Modal from 'react-modal'

import { TransactionContext } from '../../hooks/TransactionsContext'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import * as Styles from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type,
    })
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Styles.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          value={title}
          onChange={event =>  setTitle(event.target.value)}
          placeholder="Título" 
        />
        <input 
          value={amount}        
          onChange = {event => setAmount(Number(event.target.value)) }
          type="number" 
          placeholder="Valor" 
        />

        <Styles.TransactionTypeContainer>
          <Styles.RadioBox 
            type="button" 
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => {setType('deposit')}}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </Styles.RadioBox>
          
          <Styles.RadioBox 
            type="button" 
            isActive={type === 'withdraw'} 
            activeColor='red'
            onClick={() => {setType('withdraw')}}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </Styles.RadioBox>
        </Styles.TransactionTypeContainer>

        <input 
          value={category}        
          onChange = {event => setCategory(event.target.value) }
          placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
      </Styles.Container>
    </Modal>
  )
}