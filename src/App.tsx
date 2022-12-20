import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
type WebHook = "Delivery" | "user" | "Admin";
type SuperWebHook = `Super ${WebHook}`
function App() {
  const [count, setCount] = useState<number | string>(0)

  const webHooks = (type: SuperWebHook) => {
    if (type === "Super Delivery") {
      console.log(type)
    } else {
      throw "error";

    }

  }

  webHooks("Super Delivery")
  return (
    <>
      <h1>Hello world</h1>
      <h3>This is a counter: {count}</h3>
      <button onClick={() => setCount("hello")}>+</button>
    </>

  )
}

export default App
