import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContext from '..//public/components/userContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={'Gordon'}>
    <App />
  </UserContext.Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
