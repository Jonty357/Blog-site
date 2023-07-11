
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home  = () => {
    // let name="mario"

    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(23);
    // const handleClick = () => {
    //     setName("luigi");
    //     setAge(34);

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const handleClickAgain = (name, e) => {
    //     console.log("Hello, " + name, e.target)
    // }
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blogs => blogs.id !== id);
    //     setBlogs (newBlogs);
    // }

    // const [name, setName] = useState("Tim");

    // useEffect(() => {

    //     // setTimeout(() => {
            
    //     // }, 1000);

    //     fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if(!res.ok)
    //                 throw Error('could not fetch the data for that resource')
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null)
    //         })
    //         .catch(err => {
    //             setIsPending(false);
    //             setError(err.message);
    //         });

    //     // console.log("use Effect ran");
    //     // console.log(blogs)
    // //     console.log(name);
    // // }, [name]);
    // }, []);

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={ (e) => handleClickAgain("mario", e)}> Click me again</button> */}   

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title={"All Blogs!"}/>}

            {/* <Bloglist blogs={blogs.filter((blogs) => blogs.author === "Tim")} title={"Tim's Blogs"} /> */}
            {/* <button onClick={() => setName('luigi')}>Change Name</button> */}
            {/* <p>{name}</p> */}
        </div>
        
    );

}

export default Home ;