export default function Joke(props) {
  return (
    <div>
      <h3>{props.setup}</h3>
      <p>{props.punchline}</p>
      <hr />
    </div>
  )
}