import React, { useState } from 'react';

// components
import SideBar from "../components/_common/SideBar";

// friends components
import Chat from "../components/Friends/Chat";
import CommonFavourites from "../components/Friends/CommonFavourites";
import RecentlyPlayed from "../components/Friends/RecentlyPlayed";

// config
import { friendsViews } from "../config";
import { dummyFriends, dummyChat } from "../dummy";

const Friends = () => {
    const [currView, setCurrView] = useState(friendsViews[0].value);
    const [currUser, setCurrUser] = useState({});
    return (
        <div className="friends-container">
            <SideBar 
                sections={dummyFriends}
                handleSelect={(user) => setCurrUser(user)}
                selected={currUser}
                page="friends"
            />
            <div className="main-view">
                {
                    currView === friendsViews[0].value && currUser.id &&
                    <Chat 
                        user={currUser}
                        data={dummyChat.user.id === currUser.id ? dummyChat.messages : []}
                        handleView={(view) => setCurrView(view)}
                    />
                }
                {
                    currView === friendsViews[1].value && currUser.id &&
                    <CommonFavourites 
                        user={currUser}
                        handleView={(view) => setCurrView(view)}
                    />
                }
                {
                    currView === friendsViews[2].value && currUser.id &&
                    <RecentlyPlayed 
                        user={currUser}
                        handleView={(view) => setCurrView(view)}
                    />
                }
            </div>
        </div>
    );
}
export default Friends;