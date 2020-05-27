import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SingIn';
import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SingIn} />
        <Route path="/signup" component={Signup} />

        <Route path="dashboard" component={Dashboard} isPrivate />
    </Switch>
);

export default Routes;