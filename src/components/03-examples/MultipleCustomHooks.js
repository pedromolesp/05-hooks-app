import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    const state = useFetch("https://www.breakingbadapi.com/api/quotes/1");
    console.log(state);

    return <></>;
}
