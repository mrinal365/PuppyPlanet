import React from 'react';

//Import Styles Below
import './rightbar.css'

export default function Rightbar(){
    return(
        <div className='rightbar'>
            <div className="rightbarWraper">
                <div className="birthdayContainer">
                    <img src="assets/lab1.jpg" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        {""}
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday tool
                    </span>
                </div>
                <img src="assets/lab1.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">
                    Online Friends
                </h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/lab1.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}