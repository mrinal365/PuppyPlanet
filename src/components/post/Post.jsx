import React from 'react';
import { MoreVert } from '@material-ui/icons';


import './post.css'
export default function Post(){
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/lab1.jpg" alt="" className="postProfilePicture   " />
                        <span className="postUsername">Mrinal</span>
                        <span className="postDate">5 Min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my First Post</span>
                    <img className='postImg' src="assets/lab1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="">
                        <img src="" alt="" className="likeIcon" />
                        <img src="" alt="" className="likeIcon" />
                        <span className="likeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}