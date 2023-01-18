import { useState, useEffect } from "react"
import Button from "./Button"

function Nav() {
  const [timeBoard, setTimeBoard] = useState("00:00")
  const [backTime, setBackTime] = useState("0:00")
  let myInterval

  // useEffect(() => {
    

  // }, [Button])
  return (
    <div>
      <header>
        <nav className="container">
          <Button
            name="30 secs"
            valueName="30"
            myInterval={myInterval}
            setTimeBoard={setTimeBoard}
            setBackTime={setBackTime}
          />
          <Button
            name="work 5"
            valueName={5 * 60}
            myInterval={myInterval}
            setTimeBoard={setTimeBoard}
            setBackTime={setBackTime}
          />
          <Button
            name="snack 20"
            valueName={20 * 60}
            myInterval={myInterval}
            setTimeBoard={setTimeBoard}
            setBackTime={setBackTime}
          />
          <Button
            name="lunch break"
            valueName={60 * 60}
            myInterval={myInterval}
            setTimeBoard={setTimeBoard}
            setBackTime={setBackTime}
          />
          {/* <input
            type="number"
            min="0"
            max="60"
            placeholder="minutes"
            onSubmit={() => {
              
            }
            }
          /> */}
        </nav>
      </header>

      <main>
        <div id="time">{timeBoard}</div>
        <div id="time-out">
          Be back at <span>{backTime}</span>
        </div>
      </main>
    </div>
  )
}

export default Nav
