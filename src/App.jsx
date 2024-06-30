import { useState } from 'react'
import { Button } from 'antd'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Button type='primary'>Button</Button>
      </div>
    </>
  )
}

export default App
