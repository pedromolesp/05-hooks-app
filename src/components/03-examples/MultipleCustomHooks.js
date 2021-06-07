import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = (!loading && data.length > 0) && data[0];
    return <div>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {loading ?
            (<div className="alert alert-info">Loading...</div>)
            :
            (
                <blockquote className="bloxkquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer"> {author} </footer>
                </blockquote>
            )
        }

        <button className="btn btn-primary" onClick={increment}>Siguiente frase</button>
    </div>;
}
