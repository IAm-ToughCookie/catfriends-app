import React from 'react';
import Card from './card';

const CardList = ({ cats }) => {
    return (
        <div className='cards-container'> 
            {
                cats.map((user, i) => {
                    return (
                        <Card 
                            key={cats[i].id}
                            id={cats[i].id}
                            name={cats[i].name}
                            email={cats[i].email}
                            phrase={cats[i].company.catchPhrase} />
                    );
                })
            }
        </div>
    );
}

export default CardList;