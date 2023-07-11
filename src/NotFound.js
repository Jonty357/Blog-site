import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>This page cannot be found.</p>
            <Link to='/'> Back to homepage... </Link>
        </div>
     );
}
 
export default NotFound;