'use strict';
import 'public/styles/style.scss';
import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import WebsiteRoutes from './routes';

const AppLayout = (props) => {
	return (
		<div>
			{ props.children }
		</div>
	)
}

render(
	(
        <AppLayout>
            <Router history={ browserHistory } routes={ WebsiteRoutes } />
        </AppLayout>
	),
	document.getElementById('root')
);
