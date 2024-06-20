import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Home.css'
import Preview from '../components/Preview';

const Home = () => {
    const skills = ['Git', 'ReactJS', 'Android Studio', 'Java', 'PHP', 'HTML', 'CSS', 'Python', 'JavaScript', 'Docker', 'JUnit'];

    return ( 
        <div className='home'>
            <div className='padding-30 content'>
                <div id="introduction">
                    <p>Hello, I am</p>
                    <h1>Safa Yousif</h1>
                    <div className="socials">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    </div>
                    <h3>Fresh Graduate & Software Developer</h3>
                    <p>As a final year student deeply  passionate about Full Stack Development, my focus lies in mastering  React.js and Node.js. I thrive on exploring diverse technologies and  bringing innovative projects to life. I take.</p>
                </div>
                <div id="skills">
                    <span>What I Do</span>
                    <ul>
                    {skills.map((skill) =>
                        <li className='tag' key={skill}>{skill}</li>
                    )}
                    </ul>
                </div>
            </div>
            <Preview/>
        </div>
);
}
 
export default Home;