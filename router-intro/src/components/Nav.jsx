import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <div className = "nav">
            <Link to= "/componentA">
                <h2>Component A</h2>
            </Link>

            <Link to= "/componentB">
                <h2>Component B</h2>
            </Link>

            <Link to= "/">
                <h2>Home</h2>
            </Link>

        </div>)
    }