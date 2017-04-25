import React, { Component, } from 'react'
import { browserHistory, } from 'react-router'
import { AppBar, Paper, TextField, RaisedButton, } from 'material-ui'
import { toJS, observable, computed } from 'mobx'
import { observer, Provider } from 'mobx-react'
import FixBoxForm from '../../components/FixBoxFrom'

const propTypes = {}

const defaultProps = {
    name: '',
    phoneNumbe: '',
    address: '',
    brand: '',
    kind: '',
    type: '',
    detail: '',
}

const btnStyle = {
    marginTop: '1rem'
}

class orderForm {
    @observable name = ''
    @observable phoneNumbe = ''
    @observable address = ''
    @observable brand = ''
    @observable kind = ''
    @observable type = ''
    @observable detail = ''
}
const form = new orderForm()
class FixIndex extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(form)
        console.log(this.props)
    }
    handleSubmit() {
        console.log(toJS(form))
        browserHistory.push('schedule')
    }

    render() {
        console.log("FixIndex")
        return (
            <div>
                <AppBar title="家用电器维修单" />
                <Provider form={form}>
                    <FixBoxForm />
                </Provider>
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
