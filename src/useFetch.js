import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        // setTimeout(() => {
            
        // }, 1000);

        const abortConst = new AbortController();

        fetch(url, {signal: abortConst.signal})
            .then(res => {
                if(!res.ok)
                    throw Error('could not fetch the data for that resource')
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
                
            });

        return () => abortConst.abort();

        // console.log("use Effect ran");
        // console.log(blogs)
    //     console.log(name);
    // }, [name]);
    }, [url]);

    return { data, isPending, error};
}

export default useFetch;