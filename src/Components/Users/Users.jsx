
import User from '../User/User';
import useFetch from './../useFetch/useFetch';
function Users() {

    const {data} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className='users'>
        {
        data && data.map((user)=> <User key={user.id} user={user}/>)
        }
    </div>
  )
}

export default Users