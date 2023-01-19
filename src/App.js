import "./App.css"
import Header from "./Header"
import Main from "./Main"
import { useState } from "react"

function App() {
  const [timeBoard, setTimeBoard] = useState("00:00")
  const [backTime, setBackTime] = useState("00:00")
  const [intervalRef, setIntervalRef] = useState("")

  function func(time) {
    // if there are any interval clear it
    clearInterval(intervalRef)
    display(time)

    const now = Date.now()
    const then = now + Number(time) * 1000
    endTime(then)

    let myInterval = setInterval(() => {
      if (time === 0) {
        setBackTime("00:00")
        return clearInterval(myInterval)
      }
      time -= 1
      display(time)
    }, 1000)
    setIntervalRef(myInterval)
  }

  function display(time) {
    let min = Math.floor(time / 60)
    let sec = time - min * 60
    if (min < 10) min = "0" + min //* To display '00:00'
    if (sec < 10) sec = "0" + sec //* To display '00:00'
    setTimeBoard(`${min}:${sec}`)
    document.title = `${min}:${sec}`
  }

  function endTime(time) {
    const end = new Date(time)
    let hour = end.getHours()
    let min = end.getMinutes()
    let sec = end.getSeconds()

    if (hour > 12) hour -= 12 // to make system 12 o'clock
    if (hour < 10) hour = "0" + hour // '02'
    if (min < 10) min = "0" + min // '03'
    if (sec < 10) sec = "0" + sec // '05'

    setBackTime(`${hour}:${min}:${sec}`)
  }

  return (
    <div className="App">
      <Header func={func} />
      <Main timeBoard={timeBoard} backTime={backTime} />
    </div>
  )
}

export default App
