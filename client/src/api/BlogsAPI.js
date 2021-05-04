import {useState, useEffect} from 'react'
import axios from 'axios'


function BlogsApI() {
    const [blogs, setBlogs] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getBlogs = async () =>{
            const res = await axios.get('/api/blogs')
            setBlogs(res.data)
        }

       getBlogs()
    },[callback])
    return {
        blogs: [blogs, setBlogs],
        callback: [callback, setCallback]
    }
}


export default BlogsApI
