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
                {preview_projects.map((project) =>
                    <div className={'video-container ' + (project.key == index ? 'display' : '')} key={project.key}>
                        {/* Preview videos should be of dimension 795 x 1080 */}
                        <video poster='image' preload='true' autoPlay muted loop> 
                            <source src={'/'+project.preview_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <video className='background' poster='image' preload='true' autoPlay muted loop>
                            <source src={'/'+project.preview_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
        </div>
            {/* <div className="flex">
                <button className='button bold col-orange margin-btm'>See More Projects!</button>
            </div> */}
        </>
);
}
 
export default Preview;