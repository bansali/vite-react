import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components'
import { Login } from './pages'

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default App
