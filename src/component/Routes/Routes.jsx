import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Index from '../index';
import Contact from '../contact';
import history from './history';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
            </Router>
         );
    }
}
 
export default Routes;