function Button(props) {

  function displayTimeBoard(time) {
    let min = Math.floor(time / 60)
    let sec = time - min * 60

    //* To display '00:00'
    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec

    props.setTimeBoard(`${min}:${sec}`)
  }

  function displayEndTime(time) {
    const end = new Date(time)
    let hour = end.getHours()
    let min = end.getMinutes()
    let sec = end.getSeconds()

    if (hour > 12) hour -= 12 // to make system 12 o'clock
    if (hour < 10) hour = "0" + hour // '02'
    if (min < 10) min = "0" + min // '03'
    if (sec < 10) sec = "0" + sec // '05'

    props.setBackTime(`${hour}:${min}:${sec}`)
  }

  function countDown(time) {
    clearInterval(props.myInterval)
    // the end time =>
    const now = Date.now()
    const then = now + Number(time) * 1000
    displayEndTime(then)
    displayTimeBoard(time)
    // if there are any interval clear it

    props.myInterval = setInterval(() => {
      if (time === 0) return clearInterval(props.myInterval)
      time -= 1
      displayTimeBoard(time)
    }, 1000)
  }

  
  return (
    <button
      onClick={() => {
        countDown(props.valueName)
      }}
    >
      {props.name}
    </button>
  )
}

export default Button
