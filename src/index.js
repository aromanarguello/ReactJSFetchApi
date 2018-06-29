import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { App } from './Containers/index';
import Root from './root';

render ( 
    <Root>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);