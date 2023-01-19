import {useState} from "react"

export default function Header(props) {
  const [timerInput, setTimerInput] = useState('')
  return (
    <header>
      <nav className="container">
        <button onClick={() => props.func(20)}>20 secs</button>
        <button onClick={() => props.func(300)}>work 5</button>
        <button onClick={() => props.func(900)}>quick 15</button>
        <button onClick={() => props.func(1200)}>snack 20</button>
        <button onClick={() => props.func(3600)}>lunch break</button>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (timerInput !== 0) props.func(timerInput * 60)
          }}
        >
          <input
            type="number"
            value={timerInput}
            onChange={(e) => setTimerInput(e.target.value)}
            min="0"
            max="60"
            placeholder="minutes"
          />
        </form>
      </nav>
    </header>
  )
}
