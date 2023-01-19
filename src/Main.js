export default function Main(props) {
  return (
    <main>
      <div id="time">{props.timeBoard}</div>
      <div id="time-out">
        Be back at <span>{props.backTime}</span>
      </div>
    </main>
  )
}
