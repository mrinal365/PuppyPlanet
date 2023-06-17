import React from 'react';
import { MoreVert } from '@material-ui/icons';

//Import Static data for test
import { Users } from '../../dummyData';

import './post.css'

export default function Post({post}){
    // console.log(post,"post")
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((user)=>user.id===post?.userId)[0].profilePicture} alt="" className="postProfilePicture   " />
                        <span className="postUsername">{Users.filter((user)=>user.id===post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="">
                        <img src="" alt="" className="likeIcon" />
                        <img src="" alt="" className="likeIcon" />
                        <span className="likeCounter">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}