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
                        { project.release_link && <button className='button background-blue' target="_blank" href={project.release_link}>Release</button> }
                        { project.live_demo && <button className='button background-blue' target="_blank" href={project.live_demo}>Live Demo</button> }
                        { project.source_code && <button className='button' target="_blank" href={project.source_code}>Source Code</button> }
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