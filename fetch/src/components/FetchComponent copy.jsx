import { useState, useEffect } from "react"
import fetchUser from "../helpers/fetchUser"

const FetchComponent = () => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetchUser()
      .then((data) => {
        setUsers(data)  
      })
    console.log(users)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user)=>
          <li key={user.id}>
            UserId: {user.id}.  
            UserName: {user.name}.  
            UserEmail: {user.email}. 
          </li>
        )}
      </ul>
    </div>
  )
}

export default FetchComponent