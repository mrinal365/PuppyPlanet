import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';


//Import Styles Below
import './feed.css'

export default function Feed(){
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                <Post/>
            </div>
        </div>
    )
}