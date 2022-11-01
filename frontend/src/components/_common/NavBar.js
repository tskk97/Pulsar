import React from 'react';

// third party
import { Link } from "react-router-dom";

const NavBar = ({
    selectedTab,
	switchTab,
	tabs,
	renderTab,
	valueField='value',
	labelField='label',
	classes='',
}) => {
    return (
        <div className={"navbar-container " + (classes)}>
            {
                tabs.map((tab, i) => (
                    <Link key={i} to={tab.path}>
                        <div 
                            className={"tab" + (tab[valueField] === selectedTab ? " selected" : "")}
                            onClick={() => switchTab(tab)}
                        >
                            {
                                renderTab ?
                                renderTab(tab)
                                :
                                <div className="text">{tab[labelField]}</div>
                            }
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}
export default NavBar;