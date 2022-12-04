import header__logo from '../../src/assets/images/Troll Face.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={header__logo} alt="logo" className='header--image' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  )
}