import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PonyDetails = () => {
    const { pony_slug } = useParams();
    const [pony, setPony] = useState([]);

    useEffect(() => {
        (async () => {
            const ponyData = await fetch(`http://127.0.0.1:3000/ponies/${pony_slug}`).then(response => response.json());
            setPony(ponyData);
        })();
    }, [])

    return (
        <>
            <p>{pony.name} has unique attributes that {pony.attribute}</p>
            <img src={pony.image} alt=""/>
        </>
    )
}

export default PonyDetails;