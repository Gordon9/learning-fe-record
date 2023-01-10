import { Link, Route, Routes } from "react-router-dom"
import Info from "./Info"
import Settings from "./Setting"


function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li><Link to='/profile/info'>Profile Info</Link></li>
        <li><Link to='/profile/settings'>Profile Settings</Link></li>
      </ul>

      <Routes>
        <Route path="/profile/info" element={Info} />
        <Route path="/profile/settings" element={Settings} />
      </Routes>
    </div>
  )
}

export default Profile