import React from 'react';
import './rank.css';

const Rank = ({ name,entries}) => {
    return (
        <div className="container ">
             <div className="myRank">
                {`${name}, your current rank is..`}
            </div>
            <div className="myRank-number">
                {entries}
            </div>
        </div>
       
    );
}

export default Rank;