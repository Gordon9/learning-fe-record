import header__logo from '../../src/assets/images/header__logo.png'

export default function Header() {
  return (
    <header className='Header_Wrapper'>
      <img src={header__logo} alt="" />
      <h1>my travel journal.</h1>
    </header>
  )
}