import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const navigate = useNavigate()
    const toggleShowNav = () => {
        setIsMenuVisible(!isMenuVisible);
    }
    return (
        <nav className='navbar'>
            <FontAwesomeIcon onClick={toggleShowNav} id="navbtn" icon={faBars} className="icon" />
            <h2>Safa Yousif</h2>
            <ul className={!isMenuVisible && 'hide'}>
                <li><a onClick={() => navigate('/')}>Who Am I</a></li>
                <li><a onClick={() => navigate('/projects')}>Projects</a></li>
                <li><a onClick={() => navigate('/blog')}>Blog</a></li>
                <li><a href="/resume-safa-yousif.pdf">Resume</a></li>
            </ul>
            <a className={`bold ${!isMenuVisible && 'hide'}`} href='mailto:safa.yousif@outlook.com'>Contact Me</a>
        </nav>
     );s
}
 
export default Navbar;