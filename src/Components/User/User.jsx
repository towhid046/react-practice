
export default function User({user}) {
    const {name, id, username, email} = user;
  return (
    <div className="user">
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{email}</p>
        <button>Delete</button>
    </div>
  )
}
