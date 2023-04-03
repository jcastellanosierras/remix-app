import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <div>
      <h1>Mi primera aplicación con Remix!</h1>
      <nav>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/posts'>Ver posts</Link></li>
          <li><Link to='/posts/create'>Crear un post</Link></li>
        </ul>
      </nav>
    </div>
  )
}
