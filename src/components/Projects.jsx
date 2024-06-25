import '../styles/Projects.css'
import projects from '../assets/projects.json'

const Projects = () => {

    return ( 
        <div className="padding-30">
            <h1>Projects</h1>
            <div className="cards-container">
                {projects.map((project) =>
                    <div key={project.id} className="card card-project">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <span>{project.tags.join(', ')}</span>
                        { project.release_link && <button className='button background-blue' onClick={() => window.open(project.release_link, '_blank')}>Release</button> }
                        { project.live_demo && <button className='button background-blue' onClick={() => window.open(project.live_demo, '_blank')}>Live Demo</button> }
                        { project.source_code && <button className='button' onClick={() => window.open(project.source_code, '_blank')}>Source Code</button> }
                        <video className='fixed-height' controls poster='image' preload='true'>
                            <source src={  '/' + project.demo_video } type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Projects;