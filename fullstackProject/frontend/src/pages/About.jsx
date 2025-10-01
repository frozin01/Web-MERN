import { Link } from "react-router-dom"

export function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our blog website!</p>
            <p>If you're interested in contributing, feel free to create a new blog by visitting our <Link to="/createBlog">Create Blog</Link> Page</p>
        </div>
    )
}