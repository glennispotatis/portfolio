import { Link } from 'gatsby';
import React from 'react';

import { BsArrowLeft } from 'react-icons/bs';

function BackArrow() {
    return (
        <div className='back-arrow'>
            <Link to='/'>
                <BsArrowLeft size='2em' />
                <p>Go back</p>
            </Link>
        </div>

    );
}

export default BackArrow;