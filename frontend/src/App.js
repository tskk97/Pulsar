import React, { useState } from "react";

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

// third party
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import history from './history';

// utils
import { isLoggedin } from "./utils";

// store
// import { store } from "./redux/store";

// config
import { dashboardNavBarTabs } from "./config";

// css
import './css/main.scss';

function App() {
	return (
		<div className='app'>
			<Router history={history}>
				{
					// !isLoggedin() &&
					<Switch>
						{/* <Route exact path="/" component={Dashboard} /> */}
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						{/* <Route path="/" render={(props) => (
							!isLoggedin() 
							? (
								<Redirect to={{
									pathname: '/login',
									state: props.location
								}} />
							) 
							: (
								<SecureRoutes {...props} />
							)
						)} /> */}
						{/* <Redirect from="*" to="/login" /> */}
					</Switch>
				}
				{
					// isLoggedin() &&
					<SecureRoutes />
				}
			</Router>
		</div>
	);
}
export default App;

const SecureRoutes = () => {
    const [selectedTab, setSelectedTab] = useState(dashboardNavBarTabs[0].value);
	return (
		<div className="layout-container">
			<div className="site-header">
				<Logo />
				<NavBar 
					tabs={
						dashboardNavBarTabs.slice(0, -2).concat([
							{
								label: 'Profile',
								value: 'profile',
								path: '/profile',
							},
							{
								label: 'Sign Out',
								value: 'signout',
								path: '/login',
							}
						])
					}
					selectedTab={selectedTab}
					switchTab={(tab) => setSelectedTab(tab.value)}
					classes="secure"
				/>
			</div>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/friends" component={Friends} />
				<Route exact path="/groups" component={Groups} />
				<Route exact path="/playlists" component={Playlists} />
			</Switch>
		</div>
	);
}