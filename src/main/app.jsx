import React, { Component, } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Loading from '../components/loading'
import FixIndex from '../containers/FixIndex'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initState: null,
        }
    }

    componentDidMount() {
        this.initState()
    }

    async initState() {
        setTimeout(() => {
            this.setState({
                initState: 1,
            })
        }, 2000)
    }

    render() {
        const { initState, } = this.state
        if (!initState) {
            return <MuiThemeProvider><Loading /></MuiThemeProvider>
        }
        return (
            <MuiThemeProvider>
                <FixIndex />
            </MuiThemeProvider>
        )
    }
}

export default App