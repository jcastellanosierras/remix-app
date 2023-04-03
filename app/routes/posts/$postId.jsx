import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async ({ params }) => {
  const post = db.post.findUnique({
    where: {
      id: params.postId
    }
  })

  console.log(post)

  return post
}

export default function SinglePost () {
  const data = useLoaderData()
  console.log(data)

  return (
    <>
      <h2>Post Title: {data.title}</h2>
      <p>
        {data.body}
      </p>
    </>
  )
}
