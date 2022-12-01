import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <div>
      <nav><img src={logo} alt="logo" className='nav--logo'/></nav>
    </div>
  )
}