import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import PonyDetails from './PonyDetails';
import PonyReviewForm from './PonyReviewForm';
import PonyReviewList from './PonyReviewList';

const PonyList = ({reload}) => {
    const [ponies, setPonies] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ponyData = await fetch('http://127.0.0.1:3000/characters').then(response => response.json());
            console.log("pony Data is: ", ponyData)
            setPonies(ponyData);
        })();
    },[reload])

    return (
        <>
            {!!ponies.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {ponies.map((pony, index) => (
                                <li key={index}>
                                    <Link to={`/pony/${pony.slug}`}>{pony.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
                    <Route path='/pony/:pony_slug'>
                        <PonyDetails ponies={ponies} />
                        <button type="button" onClick={() => history.goBack()}>Go Back</button>
                        <hr />
                        <PonyReviewForm />
                        <hr />
                        <PonyReviewList ponies={ponies}/>
                    </Route>
                </>
            ) : (
                <p>Loading Pony List...</p>
            )}
        </>
    )
}

export default PonyList;