import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>{
            robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        username={robots[i].username}
                        email={robots[0].email}
                    />
                );
            })
        }
        </div>
    );
}
export default CardList;