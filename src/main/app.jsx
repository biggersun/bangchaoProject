import React, { Component, } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Loading from '../components/Loading'
import FixIndex from '../containers/FixIndex'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initState: null,
        }
        console.log('app')
    }

    componentDidMount() {
        this.initState()
    }

    initState() {
        setTimeout(() => {
            this.setState({
                initState: 1,
            })
        }, 500)
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
