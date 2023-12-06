
export default function Error({error}) {
    const {message} = error
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}
