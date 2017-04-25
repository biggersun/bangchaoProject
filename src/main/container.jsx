import React, { Component, } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './app'

const propTypes = {}

const defaultProps = {}

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        console.log('container')
    }

    render() {
        console.log(this.props)
        const { children, } = this.props
        return (
            <MuiThemeProvider>
                {children}
            </MuiThemeProvider>
        )
    }
}

Container.propTypes = propTypes

Container.defaultProps = defaultProps

export default Container
