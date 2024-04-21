import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    async function getMessage() {
      try {
        const response = await axios.get(import.meta.env.VITE_BACK_END_URL!)

        setMessage(response.data.message)
      } catch (error) {
        console.error(error)
      }
    }

    getMessage()
  }, [])
  return <div>{message}</div>
}

export default App
