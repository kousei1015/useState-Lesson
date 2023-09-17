import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const addTwoCount = () => {
    // 以下のように書いても、countは2ではなく、1ずつ増えるだけである。
    // setCount(count+1)
    // setCount(count+1)

    // 以下のように書くことで、countは1ずつではなく、2ずつ増えていく。
    setCount((count) => count+1)
    setCount((count) => count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwoCount}>+2</button>
    </div>
  )
}

export default App