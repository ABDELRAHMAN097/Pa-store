import { Link } from "react-router-dom"
import {useLocation} from 'react-router-dom'
const HomeNavigation = () => {
  const location = useLocation()

  return (
    <div className="bg-white">
      <nav id="navigation !bg-white">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav flex mx-auto w-full justify-center items-center !flex-row-reverse !font-bold !text-xl md:!text-2xl    nav navbar-nav">
              <li className={`${location.pathname == '/' && 'active'}  `}><Link to={'/'}>الصفحة الرئيسية</Link></li>
              <li className={`mx-[20px] ${location.pathname === "/store" && 'active'} `}><Link to="/store">منتجاتنا</Link></li>
              <li className={`${location.pathname == '/jobs' && 'active'} ml-[20px] `}><Link to="/jobs">عرض الوظائف</Link></li>
              <li className={`${location.pathname == '/start-work' && 'active'}  `}><Link to="/start-work">Start Work</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavigation