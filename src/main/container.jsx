import React, { Component, } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.object,
}

const defaultProps = {}

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
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
