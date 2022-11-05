import React, { useEffect, useState } from "react";

// containers
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import UserDashboard from "./containers/UserDashboard";
import Friends from "./containers/Friends";
import Groups from "./containers/Groups";
import Playlists from "./containers/Playlists";

// components
import Logo from "./components/_common/Logo";
import NavBar from "./components/_common/NavBar";
import Notification from "./components/_common/Notification";

// third party
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './history';

// config
import { dashboardNavBarTabs } from "./config";

// css
import './css/main.scss';

const App = ({ login }) => {
	const { success } = login;
	return (
		<div className='app'>
			<Router history={history}>
				<Notification />
				{
					!success &&
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Redirect from="*" to="/login" />
					</Switch>
				}
				{
					success &&
					<SecureRoutes 
						location={window.location}
						navTabs={
							dashboardNavBarTabs.slice(0, -2).concat([
								{
									label: 'Profile',
									value: 'profile',
									path: '/profile',
								},
								{
									label: 'Sign Out',
									value: 'signout',
									path: '/',
								}
							])
						} 
					/>
				}
			</Router>
		</div>
	);
}
export default connect((store) => ({
	login: store.login,
}))(App);

const SecureRoutes = ({ location, navTabs }) => {
    const [selectedTab, setSelectedTab] = useState(navTabs[0].value);

	useEffect(() => {
		setSelectedTab(navTabs.find((tab) => tab.path === location.pathname)?.value || navTabs[0].value);
	}, [location.pathname]);

	return (
		<div className="layout-container">
			<div className="site-header">
				<Logo />
				<NavBar 
					tabs={navTabs}
					selectedTab={selectedTab}
					switchTab={(tab) => setSelectedTab(tab.value)}
					classes="secure"
				/>
			</div>
			<Switch>
				<Route exact path="/" component={UserDashboard} />
				<Route exact path="/friends" component={Friends} />
				<Route exact path="/groups" component={Groups} />
				<Route exact path="/playlists" component={Playlists} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
	);
}
