import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';

const App = ({ location }) => {
	return (
		<div>
     {/* {location.pathname == '/'   && 	<HomeNavigation/>}
      {(location.pathname !== '/' || location.pathname == '/login')  &&   <Navigation />}*/}
			<Routes />
		</div>
	);
};

export default withRouter(App);