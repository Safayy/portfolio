import '../styles/Blog.css'
import blogs from '../assets/blogs.json'

const Blog = () => {
    return ( 
        <div className='padding-30'>
            <h1>Blog</h1>
            <div className='blogs-container'>
                {blogs.length != 0 ?
                blogs.map((blog) => 
                <div key={blog.id} className='card blog-card'>
                    <div>
                        <span>{blog.date}</span>
                        <h2>{blog.name}</h2>
                        <p>{blog.body.substring(0, 100) + "..."}</p>
                    </div>
                    <img src='https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg'/>
                </div>
                ) : <p>No blog entires yet.</p>
                }
            </div>
        </div>
     );
}
 
export default Blog;