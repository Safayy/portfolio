import '../styles/Projects.css'
import projects from '../assets/projects.json'

const Projects = () => {
    // console.log(projects)
    return ( 
        <div className="padding-30">
            <h1>Projects</h1>
            <div className="cards-container">
                {projects.map((project) => 
                    <div key={project.id} className="card card-project">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <span>{project.tags}</span>
                        <button className='button background-blue' href={project.live_demo}>Live Demo</button>
                        <button className='button' href={project.source_code}>Source Code</button>
                        <video controls poster='image' preload='true'>
                            <source src={'/linkedinbannermaker.mp4'} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Projects;