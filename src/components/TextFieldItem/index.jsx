import React, { Component } from 'react'
import { TextField, } from 'material-ui'
import { observer, inject } from 'mobx-react'

const propTypes = {}

const defaultProps = {}

@inject("form") @observer
class TextFieldItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { form, name } = this.props
        form[name] = e.target.value
    }

    render() {
        const { hintText, floatingLabelText, name, form} = this.props
        return (
            <TextField
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                value={form[name]}
                onChange={this.handleChange}
            />
        )
    }
}

TextFieldItem.propTypes = propTypes

TextFieldItem.defaultProps = defaultProps

export default TextFieldItem

