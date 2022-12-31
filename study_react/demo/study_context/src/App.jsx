import Header from '../public/components/Header'
import UserContext from '..//public/components/userContext'
import { useContext } from 'react';

function App() {

  const username = useContext(UserContext);
  console.log(username);

  return (

    <div>
        <Header />
        <main>
          <p className="main">No new notifications, {username}! 🎉</p>
        </main>
    </div>
  )
}

export default App
