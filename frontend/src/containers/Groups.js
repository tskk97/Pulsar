import React, { useState, useEffect, useCallback } from 'react';

// components
import SideBar from "../components/_common/SideBar";

// friends components
import Chat from "../components/Friends/Chat";

// third party
import { connect } from "react-redux";

// config
import { friendsViews } from "../config";
import { dummyGroups, dummyChat } from "../dummy";

const Groups = ({ theme, user }) => {
    const [currView, setCurrView] = useState(friendsViews[0].value);
    const [currGroup, setCurrGroup] = useState(dummyGroups[0].content[1]);
    const [currChat, setCurrChat] = useState([]);

    useEffect(() => {
        setCurrChat(dummyChat.user.id === currGroup.id ? dummyChat.messages : []);
    }, [currGroup]);

    const handleChat = useCallback((newMessage) => {
        setCurrChat([
            ...currChat,
            {
                name: user.fullname,
                username: user.username,
                id: user.id,
                message: newMessage,
            },
        ]);
    }, [currChat, user]);

    return (
        <div className="groups-container">
            <SideBar 
                sections={dummyGroups}
                handleSelect={(group) => setCurrGroup(group)}
                selected={currGroup}
                page="groups"
            />
            <div className="main-view">
                {
                    currView === friendsViews[0].value && currGroup.id &&
                    <Chat 
                        page="groups"
                        theme={theme}
                        user={currGroup}
                        data={currChat}
                        handleView={(view) => setCurrView(view)}
                        handleChat={handleChat}
                        showTabs={false}
                    />
                }
            </div>
        </div>
    );
}
export default connect((store) => ({
	theme: store.theme,
    user: store.login.user,
}))(Groups);
