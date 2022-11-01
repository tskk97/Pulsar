import React, { useEffect, useRef } from 'react';

const Chat = ({
    user={},
    data=[],
    handleView,
}) => {
    const chatRef = useRef();

    const handleScroll = () => {
        // scroll to the bottom of chat to see latest messages
        if (chatRef?.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        handleScroll();
    }, [user, data]);

    return (
        <div className="chat-container">
            <div className="chat-header-container">
                <div className="user-container">
                    <div className="icon"></div>
                    <div className="name">{user.name}</div>
                </div>
                <div className="view" onClick={() => handleView('commonFavourites')}>Common Favourites</div>
                <div className="view" onClick={() => handleView('recentlyPlayed')}>Recently Played</div>
            </div>
            <div className="messages-container" ref={chatRef}>
                {
                    data.map((message, i) => (
                        <div key={i} className={"message" + (message.id === user.id ? ' right' : ' left')}>{message.message || ''}</div>
                    ))
                }
            </div>
            <div className="input-message-container">
                
            </div>
        </div>
    );
}
export default Chat;