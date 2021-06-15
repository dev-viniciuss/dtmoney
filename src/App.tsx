import { useState } from 'react'

import Modal from 'react-modal'

import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Teste</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}