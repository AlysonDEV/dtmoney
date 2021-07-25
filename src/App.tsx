import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal'


import { GlobalStyle } from "./styles/global"

export function App() {
  const [isNewTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true)
  }

  return (
    <TransactionsProvider >
      <Header
        openModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        status={isNewTransactionModalIsOpen}
        closeModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


