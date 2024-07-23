import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Preview.css'
import projects from '../assets/projects.json'

const Preview = () => {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)
    const preview_projects = projects.filter(project => project.isPreview === true)
    .map((project, i) => ({
        ...project,
        key: i++
      }));
    const intervalIDRef = useRef(null);

    useEffect(() => {
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
    
    function handleVideoLoad() {
        setLoadedVideos( (prevLoadedVideos)=> {
            if (prevLoadedVideos + 1 > ((projects.length * 2) -1 )){
                setIsLoading(false)
            }
            console.log("Loaded video " + (prevLoadedVideos+1))
            return prevLoadedVideos + 1
        })
        // loadedVideos++
        // // console.log(projects.length)
        // if(loadedVideos > ((projects.length * 2) -1)){
        //     setIsLoading(false)
        //     console.log(loadedVideos)
        //     console.log("Displaying slideshow")
        // }
        // console.log('Vid')
    }

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
                {isLoading ? <p className='center'>Loading...</p> : ''}
                {preview_projects.map((project) =>
                    <div className={'video-container ' 
                    + (isLoading  ? ' ' : (project.key == index ? 'display ' : ' '))}
                    key={project.key}>
                        {/* Preview videos should be of dimension 795 x 1080 */}
                        <video onLoadedData={handleVideoLoad} preload='auto' autoPlay muted loop> 
                            <source src={'/'+project.preview_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <video onLoadedData={handleVideoLoad} preload='auto' autoPlay muted loop
                        className={'video-preview background'}>
                            <source src={'/'+project.preview_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
        </div>
        <button onClick={() => navigate('/projects')}
        className='center mobile-only button bold col-orange'>See More Projects!</button>
        </>
);
}
 
export default Preview;