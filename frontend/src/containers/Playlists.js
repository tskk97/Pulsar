import React, { useState } from 'react';

// components
import SideBar from "../components/_common/SideBar";

// config
import { dummyPlaylists } from "../dummy";

const Playlists = () => {
    const [selectedTab, setSelectedTab] = useState(dummyPlaylists[0].default[0])
    return (
        <div className="playlists-container">
             <SideBar 
                sections={dummyPlaylists}
                handleSelect={(tab) => setSelectedTab(tab)}
                selected={selectedTab}
                page="playlists"
            />
            <div className="main-view">
                
            </div>
        </div>
    );
}
export default Playlists;