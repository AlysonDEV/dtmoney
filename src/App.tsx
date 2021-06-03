
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal' 
import { GlobalStyle } from "./styles/global"


export function App() {
  const [isNewTransactionModalIsOpen,setNewTransactionModalIsOpen] = useState(false)

  function handleCloseNewTrasactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  function handleOpenNewTrasactionModal() {
    setNewTransactionModalIsOpen(true)
  }
  
  return (
    <>
    	<Header 
        openModal={handleOpenNewTrasactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
        status={isNewTransactionModalIsOpen}
        closeModal={handleCloseNewTrasactionModal}
      />
    	<GlobalStyle/>
    </>
  );
}


