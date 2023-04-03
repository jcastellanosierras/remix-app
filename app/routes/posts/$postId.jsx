import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async ({ params }) => {
  const post = db.post.findUnique({
    where: {
      id: params.postId
    }
  })

  return post
}

export default function SinglePost () {
  const data = useLoaderData()

  return (
    <>
      <h2>Post Title: {data.title}</h2>
      <p>
        {data.body}
      </p>
    </>
  )
}
