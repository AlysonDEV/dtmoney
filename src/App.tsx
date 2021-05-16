
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";



export function App() {
  const [newTransactionModalIsOpen,setNewTransactionModalIsOpen] = useState(false)

  function handleCloseNewTrasactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  function handleOpenNewTrasactionModal() {
    setNewTransactionModalIsOpen(true)
  }
  
  return (
    <>
    	<Header 
        status={newTransactionModalIsOpen} 
        openModal={handleOpenNewTrasactionModal} 
        closeModal={handleCloseNewTrasactionModal} 
      />
      <Dashboard/>
    	<GlobalStyle/>
    </>
  );
}


