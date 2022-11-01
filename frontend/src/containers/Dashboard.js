import React, { useState } from 'react';

// components
import NavBar from "../components/_common/NavBar";

// config
import { dashboardNavBarTabs } from "../config";

const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState(dashboardNavBarTabs[0].value);
    return (
        <div className="section-container dashboard-container">
            <div className="stock-img">
                <img src="/stock/dashboard2.png" alt="" />
            </div>
            <div className="content">
                <NavBar 
                    tabs={dashboardNavBarTabs}
                    selectedTab={selectedTab}
                    switchTab={(tab) => setSelectedTab(tab.value)}
                />
                <div className="tag-line">
                    <div>Listen and Chat.</div>
                    <div>Anywhere. Anytime.</div>
                </div>
                <div className="description">
                    Chat with your friends, create or join groups and listen to your favourite artists together.
                </div>
            </div>
        </div>
    );
}
export default Dashboard;