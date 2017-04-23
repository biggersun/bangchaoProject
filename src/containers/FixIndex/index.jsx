import React, { Component, PropTypes, } from 'react'
import { AppBar, Paper, TextField, RaisedButton, } from 'material-ui'

import { observer, inject } from 'mobx-react'
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
            data: 'formList',
        }
        this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const { data: params } = this.state
    }

    render() {
        const { store } = this.props
        console.log(store)
        return (
            <div>
                <AppBar title="家用电器维修单" />
                <FixBoxForm formList={formList.formList} handleChange={formList.formList.getFormValue} />
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
