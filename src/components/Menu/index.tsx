import './menu.css'
import Logo from '../../assets/images/logo.svg'
export default function Menu() {
  return (
    <div className='menu'>
        <img src={Logo} alt="logo" />
        <div>
            <ul className='menu-list'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Tranding</li>
                <li>Categories</li>
            </ul>
        </div>
    </div>
  )
}
