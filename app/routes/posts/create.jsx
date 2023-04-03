import { Form, useNavigation } from '@remix-run/react'
import { db } from '../../services/db'
import { json, redirect } from '@remix-run/node'

export const action = async ({ request }) => {
  const form = await request.formData()
  // const title = form.get('title')
  // const body = form.get('body')

  // const fieldErrors = {
  //   title: title.length < 3 ? 'Title must be at least 3 characters' : null,
  //   body: body.length < 10 ? 'Body must be at leats 3 characters' : null
  // }

  console.log(form)

  // const post = await db.post.create({ data: { title, body } })

  // return redirect(`/posts/${post.id}`)
  return null
}

export function ErrorBoundary ({ error }) {
  return (
    <div>
      <strong>Algo salió mal: </strong>
      <span style={{ color: 'red' }}>
        {error.message}
      </span>
    </div>
  )
}

export default function CreatePost () {
  const transition = useNavigation()
  const isSubmitting = transition === 'submitting'

  return (
    <>
      <h2>Create new post</h2>
      <Form method='post' disabled={isSubmitting}>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className="form">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="30" rows="10" />
        </div>

        <button type="submit" value="Enviar">
          {
            isSubmitting
              ? 'Wait for it...'
              : 'Create Post'
          }
        </button>
      </Form>
    </>
  )
}
