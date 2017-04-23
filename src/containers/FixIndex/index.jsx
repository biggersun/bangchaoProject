import React, { Component, PropTypes, } from 'react'
import { AppBar, Paper, TextField, RaisedButton, } from 'material-ui'
import { toJS, observable, computed } from 'mobx'
import { observer, Provider } from 'mobx-react'
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

class orderForm {
    @observable name = ''
    @observable phoneNumbe = ''
    @observable address = ''
    @observable brand = ''
    @observable mutionType = ''
    @observable errType = ''
    @observable qaDes = ''
}

@observer
class FixIndex extends Component {
    form = new orderForm()
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log(toJS(this.form))
    }

    render() {
        return (
            <div>
                <AppBar title="家用电器维修单" />
                <Provider form={this.form}>
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
