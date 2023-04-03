import { Form, useActionData, useNavigation } from '@remix-run/react'
import { db } from '../../services/db'
import { json, redirect } from '@remix-run/node'

export const action = async ({ request }) => {
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')

  const fieldErrors = {
    title: title.length < 3 ? 'Title must be at least 3 characters' : null,
    body: body.length < 10 ? 'Body must be at leats 3 characters' : null
  }

  const hasErrors = Object.values(fieldErrors).some(Boolean)

  const fields = { body, title }
  if (hasErrors) {
    return badRequest({ fieldErrors, fields })
  }

  const post = await db.post.create({ data: { title, body } })

  return redirect(`/posts/${post.id}`)
}

const badRequest = data => {
  return json(data, { status: 400 })
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
  const { fieldErrors } = useActionData() ?? {}
  const isSubmitting = transition === 'submitting'

  return (
    <>
      <h2>Create new post</h2>
      <Form method='post' disabled={isSubmitting}>
        <div className='form'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          <br />
          {
            fieldErrors?.title &&
            <small style={{ color: 'red' }}>{fieldErrors?.title}</small>
          }
        </div>

        <div className='form'>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="30" rows="10" />
          <br />
          {
            fieldErrors?.body &&
            <small style={{ color: 'red' }}>{fieldErrors?.body}</small>
          }
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
