import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, hsahHistory, browserHistory, } from 'react-router'
import {
    AppContainer,
} from 'react-hot-loader'
import routes from './routes'

import Container from './app'

injectTapEventPlugin()

function render() {
    ReactDOM.render(
        module.hot ?
            <AppContainer>
                <Router
                    routes={routes}
                    history={browserHistory}
                    key={process.env.NODE_ENV !== 'production' ? Math.random() : false}
                />
            </AppContainer> :
            <Router
                routes={routes}
                history={hsahHistory}
                key={process.env.NODE_ENV !== 'production' ? Math.random() : false}
            />,
        document.getElementById('app-container')
    )
}

render()

if (module.hot) {
    module.hot.accept('./container', render)
}
