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

    initState() {
        setTimeout(() => {
            this.setState({
                initState: 1,
            })
        }, 500)
    }

    render() {
        const { initState, } = this.state
        const { store } = this.props
        if (!initState) {
            return <MuiThemeProvider><Loading /></MuiThemeProvider>
        }
        return (
            <MuiThemeProvider>
                <FixIndex store={store} />
            </MuiThemeProvider>
        )
    }
}

export default App
