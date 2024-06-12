import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    return ( 
        <nav className='navbar'>
            <h2>Safa Yousif</h2>
            <ul>
                <li><a onClick={() => navigate('/')}>Who Am I</a></li>
                <li><a onClick={() => navigate('/projects')}>Projects</a></li>
                <li><a onClick={() => navigate('/blog')}>Blog</a></li>
            </ul>
            <span className='bold'>Contact Me</span>
        </nav>
     );
}
 
export default Navbar;