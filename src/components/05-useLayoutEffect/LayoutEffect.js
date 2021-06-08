import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = !!data && data[0];
    const [box, setbox] = useState({})
    const pTag = useRef()
    useLayoutEffect(() => {
        console.log();
        setbox(pTag.current.getBoundingClientRect());
    }, [])
    return <div>
        <h1>Layout Effect</h1>
        <hr />

        <blockquote className="bloxkquote ">
            <p className="mb-0" ref={pTag}>{quote}</p>
            <footer className=" blockquote blockquote-footer"> {author} </footer>
        </blockquote>
        <pre>{JSON.stringify(box, null, 3)}</pre>


        <button className="btn btn-primary" onClick={increment}>Siguiente frase</button>
    </div>;
}
