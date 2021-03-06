import React from 'react'
import { Route, IndexRoute, } from 'react-router'

import Container from './container'
import App from './app'
import Schedule from '../containers/Schedule'
import ServerList from '../containers/ServerList'

export default (
    <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route path="schedule" component={Schedule} />
        <Route path="serverList" component={ServerList} />
    </Route>
)
