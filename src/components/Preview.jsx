import { useEffect, useState, useRef } from 'react'
import '../styles/Preview.css'
import projects from '../assets/projects.json'

const Preview = () => {
    const [index, setIndex] = useState(0)
    let i = 0;
    const preview_projects = projects.filter(project => project.isPreview === true)
    .map((project, i) => ({
        ...project,
        key: i++
      }));
    const intervalIDRef = useRef(null);

    useEffect(() => {
        console.log("Use Effect")
            const id = setInterval(() => {
                setIndex( prevIndex => {
                    if (prevIndex < preview_projects.length - 1)
                        return prevIndex + 1;
                    else
                        return 0;
                });
            }, 2000);
            intervalIDRef.current = id;
        
        return () => {
            clearInterval(intervalIDRef.current);
            console.log("Interval cleared");
        };
    }, []);

    return (
        <>
        <div className='padding-30'>
            <h2>Check out my Projects</h2>
            <div className="card-previews">
                {preview_projects.map((project) => 
                    <div key={project.key} className={'card-preview ' + (project.key == index ? 'active_preview' : '') }>
                        <h3>{project.name}</h3>
                        <p>{project.short_description}</p>
                    </div>
                )}
            </div>
        </div>
        <div className='accent'>
            <video poster='image' key={index} preload='true' autoPlay muted> {/* Preview videos should be of dimension 795 x 1080 */}
                <source src={'/'+preview_projects[index].preview_video} type="video/mp4"/>
                {/* <source src={'/linkedinbannermaker.mp4'} type="video/mp4"/> */}
                {/* <source src="where the video is" type="video/mp4" />
                <source src="where the video is" type="video/oog" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
        </>
);
}
 
export default Preview;