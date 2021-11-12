import React from 'react';
import './style.css';

function FranchiseNav() {
    return(
        <div className='franchise-nav text-right'>
            <a href='/careers'>CAREERS</a>
            <a 
                href='https://transbluefranchise.com/'
                target="_blank"
                rel='noreferrer'
            >
                JOIN OUR FRANCHISE TEAM
            </a>
        </div>
    )
}

export default FranchiseNav;