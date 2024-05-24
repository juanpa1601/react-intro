import { useState, useEffect, useCallback } from "react"
import fetchUser from "../helpers/fetchUser"
import fetchPosts from "../helpers/fetchPosts"
import { Text } from '@chakra-ui/react'

const FetchComponent = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  const getUser = () => {
    fetchUser()
      .then((data) => {
        setUser(data)  
      })
  }

  const getPosts = useCallback(() => {
    fetchPosts(user.id)
      .then((data) => {
        setPosts(data)
      })
  },[user.id])

  useEffect(() => {
    getUser();
  }, [])

  useEffect(()=>{
    getPosts();
  }, [user, getPosts])

  return (
    <div>
      <button onClick={getUser}>
        ask for new user
      </button>
      <h1>User: {user.id}</h1>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <ul>
        {posts.map(post =>
          <li key={post.id}>
              postId: {post.id}.
              <Text 
                as='b'
                fontSize='1.5rem'
              >
                Title: 
              </Text>
              {post.title}.
              <Text
                as='b'
                fontSize='1.5rem'
              >
                Body: 
              </Text>
              {post.body}.
          </li>  
        )}
      </ul>
    </div>
  )
}

export default FetchComponent;