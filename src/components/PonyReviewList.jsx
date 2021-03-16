import {
    Media,
    MediaLeft,
    Image,
    MediaContent,
    Content,
    Level,
    LevelLeft,
    LevelItem,
    Icon,
    MediaRight,
    Delete
} from 'bloomer';
import 'bulma/css/bulma.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PonyReviewList = ({reload}) => {
    const { pony_slug } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        (async () => {
            const reviewData = await fetch(`http://127.0.0.1:3000/reviews/${pony_slug}`).then(response => response.json());
            console.log("Review Data is: ", reviewData)
            setReviews(reviewData);
        })();
    },[reload])

    return (
        <>
        {!!reviews.length ? (
            <>
                <ul>
                    {reviews.map((review, index) => (
                        <>
                        <li key={index}>
                            <Media>
                                <MediaLeft>
                                    <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                                </MediaLeft>
                                <MediaContent>
                                    <Content>
                                        <p>
                                            <strong>{review.user_id}</strong> <small>@JohnWick</small> <small>31m</small>
                                            <br />
                                            {review.comment}
                                        </p>
                                    </Content>
                                    <Level isMobile>
                                        <LevelLeft>
                                            <LevelItem href='#'>
                                                <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                                            </LevelItem>
                                            <LevelItem href='#'>
                                                <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                                            </LevelItem>
                                            <LevelItem href='#'>
                                                <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                                            </LevelItem>
                                        </LevelLeft>
                                    </Level>
                                </MediaContent>
                                <MediaRight><Delete /></MediaRight>
                            </Media>
                        </li>
                        <hr />
                        </>
                    ))}

                </ul>
            </>
            ) : (
                <p>No Review for pony yet</p>
            )}
        
        </>
    )
}

export default PonyReviewList;