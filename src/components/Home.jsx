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
                        <a target='_blank' href='https://github.com/Safayy'><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                        <a target='_blank' href='https://www.linkedin.com/in/safa-yousif/'><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                        <a target='_blank' href='mailto:safa.yousif@outlook.com'><FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
                    </div>
                    <h3>Fresh Graduate & Software Developer</h3>
                    <p>Fresh Graduate of Software Engineering, with a passion for Full Stack website development and a deep understanding in React.js and Node.js. This year I worked on a mobile application for translating sign language, it was really enjoyable. I thrive on exploring diverse technologies and  bringing innovative projects to life.</p>
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