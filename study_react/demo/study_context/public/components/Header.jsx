import { useContext } from 'react'
import UserContext from './userContext'


export default function Header() {

  
  const username = useContext(UserContext)

  return (
    <header>
      <p>Welcome, {username}!</p>
    </header>
  )
}