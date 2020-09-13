import React from 'react';

const Card = ({ name, email, id, phrase }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 single-card'>
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt='cat' />
            <div>
                <h2>{name}</h2>
                <p className='sec'><a className='mail' href={`mailto:${email}`}>{email}</a></p>
                <p className='sec'>Catch phrase: <span className='quote'>{phrase}</span></p>
            </div>
        </div>
    );
}

export default Card;