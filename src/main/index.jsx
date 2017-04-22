import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {
    AppContainer,
} from 'react-hot-loader'

import store from './store.js'
import App from './app'

injectTapEventPlugin()

function render() {
    ReactDOM.render(
        module.hot ? <AppContainer><App store={store} /></AppContainer> : <App store={store} />,
        document.getElementById('app-container')
    )
}

render()

if (module.hot) {
    module.hot.accept('./app', render)
}
