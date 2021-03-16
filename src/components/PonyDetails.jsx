import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardContent,
    CardImage,
} from 'bloomer';
import 'bulma/css/bulma.css';

const PonyDetails = () => {
    const { pony_slug } = useParams();
    const [pony, setPony] = useState([]);

    useEffect(() => {
        (async () => {
            const ponyData = await fetch(`http://127.0.0.1:3000/characters/${pony_slug}`).then(response => response.json());
            setPony(ponyData);
        })();
    }, [pony_slug])

    return (
        <>
            <Card>
                <CardHeader className='is-flex is-justify-content-center'>
                    <h1>
                        {pony.name}
                    </h1>
                </CardHeader>
                <CardContent>
                    <CardImage>
                        <img src={pony.image} alt='a' />
                        <p>has unique attributes that {pony.attribute}</p>
                    </CardImage>
                </CardContent>
            </Card>
        </>
    )
}

export default PonyDetails;