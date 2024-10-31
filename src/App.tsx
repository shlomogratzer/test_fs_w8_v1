import From from './form-comp/From'
import './App.module.css'
import { Mission } from './Types/Mission'
import { create } from './services/apiQuery'
import { useState } from 'react'

function App() {

  const addMisseion = async(mission:Mission) => {
    const res = await create(mission)
    return res
  }
  return (
    <>
    <div>
      <From addMisseion={addMisseion}/>
    </div>
    </>
  )
}

export default App
