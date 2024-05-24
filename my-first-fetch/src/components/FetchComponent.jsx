import { useState, useEffect } from 'react';
import fetchUsers from "../helpers/fetchUsers";
import { useForm } from "react-hook-form";
import fetchPosts from '../helpers/fetchPosts';
import { Flex, Text } from "@chakra-ui/react"

export const FetchComponent = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const { register, handleSubmit } = useForm();

  const getUsers = () => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
      });
  };

  const handleUser = (data) =>{
    console.log(data)
    fetchPosts(data.userSelect)
      .then((data) =>{
        setPosts(data)
      })
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(posts)
  
  return (
    <div>
      <Flex align="center" justify="center">
        <div>
          <form onSubmit={handleSubmit(handleUser)}>
          <h2>Selecciona el usuario para ver los Posts</h2>
          <select
            {...register("userSelect")}
          >
            {users && users.map( user => 
              <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
          <input type="submit" value="query" />
          </form>
        </div>
      </Flex>

      <Flex align="center" justify="center">
        <div>
          <h1>Aquí van los posts</h1>
          <ul>
            {posts.map(post =>
              <li key={post.id}>
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
      </Flex>
            

    </div>
  );
};


export default FetchComponent