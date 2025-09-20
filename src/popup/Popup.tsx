import { useState } from 'react'

export default function Popup() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Split Soul</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}
