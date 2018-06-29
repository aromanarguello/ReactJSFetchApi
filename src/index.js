import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './Containers/index';
import ReactDOM from 'react-dom';
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