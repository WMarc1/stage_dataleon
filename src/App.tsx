import './App.css'
import { quizData } from './api.ts'
import { useState } from 'react';

function App() {
  const [res, setRes] = useState<string | null>();

  function handleRes(answer: 'yes' | 'no') {
    setRes(quizData.reply[answer]);
  }

  return (
    <>
      <h1>{quizData.question}</h1>
      <button onClick={() => handleRes('yes')}>Yes</button>
      <button onClick={() => handleRes('no')}>No</button>
      {res && <h2>{res}</h2>}

    </>
  )
}

export default App
