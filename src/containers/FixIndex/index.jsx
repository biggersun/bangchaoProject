import React, { Component, PropTypes, } from 'react'
import { AppBar, Paper, TextField, RaisedButton, } from 'material-ui'

import { observer } from 'mobx-react'
import FixBoxForm from '../../components/fixBoxFrom'
import './index.scss'

const propTypes = {}

const defaultProps = {
    name: '',
    phoneNumbe: '',
    address: '',
    brand: '',
    mutionType: '',
    errType: '',
    qaDes: '',
}

const btnStyle = {
    marginTop: '1rem'
}

@observer
class FixIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props,
        }
        this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const params = this.state.data
    }

    handleOnChange(e) {

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <AppBar title="家用电器维修单" />
                <FixBoxForm data={this.state.data} handleOnChange={this.handleOnChange} />
                <RaisedButton
                    style={btnStyle}
                    primary={true}
                    label="提交"
                    fullWidth={true}
                    onTouchTap={this.handleSubmit}
                />
            </div>
        )
    }
}

FixIndex.propTypes = propTypes

FixIndex.defaultProps = defaultProps

export default FixIndex
