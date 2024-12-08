import { useState } from 'react'
import {Header, AIGeneratedContent, Footer} from './components'

function App() {
  const [prompt, setPrompt] = useState("")
  console.log(prompt)

  return (
    <>
      <div className='h-screen w-screen'>
        <Header/>
        <AIGeneratedContent prompt={prompt}/>
        <Footer setPrompt={setPrompt} inputPrompt={prompt}/>
      </div>
    </>
  )
}

export default App
