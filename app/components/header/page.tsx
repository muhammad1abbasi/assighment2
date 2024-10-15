import style from './header.module.css'
import Link from 'next/link'



const Header = () => {
  return (
    <div>
      <nav>
        <ul className={style.nav}>
            <li> <Link href="/about"> About </Link></li>
            <li> <Link href="/poraTfolio"> Portfolio  </Link></li>
            <li><Link href="/contact">  Contact</Link></li>
            <li><Link href="/services">Services </Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
