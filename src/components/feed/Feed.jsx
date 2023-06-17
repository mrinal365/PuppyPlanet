import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';

//Import Static data for test
import { Posts } from '../../dummyData';

//Import Styles Below
import './feed.css'

export default function Feed(){
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))}
                {/* <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/> */}
                
            </div>
        </div>
    )
}