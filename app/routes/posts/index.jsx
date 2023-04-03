import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db.js'

export const loader = async () => {
  // Esto es lo que se saca de la base de datos
  // const data = {
  //   posts: [
  //     {
  //       id: 1,
  //       title: 'Post 1',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, tortor vitae lobortis dapibus, nisl purus convallis enim, eget condimentum dolor neque eget massa.'
  //     },
  //     {
  //       id: 2,
  //       title: 'Post 2',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, tortor vitae lobortis dapibus, nisl purus convallis enim, eget condimentum dolor neque eget massa.'
  //     }
  //   ]
  // }

  // return data
  const posts = await db.post.findMany()

  return {
    posts
  }
}

export default function Index () {
  const { posts } = useLoaderData()

  return (
    <div>
      <h2>Lista de Posts</h2>

      {
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}
