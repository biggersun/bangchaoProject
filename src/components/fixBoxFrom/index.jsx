import React, { PropTypes } from 'react'
import { Paper, TextField, } from 'material-ui'

const propTypes = {}

const defaultProps = {}

const style = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
}

const FixBoxFrom = (props) => {
    const { data: { name, phoneNumbe, address, brand, mutionType, errType, qaDes, }, } = props
    return (
        <div>
            <Paper style={style}>
                <TextField
                    hintText="请输入您的姓名"
                    floatingLabelText="姓名"
                    value={name}
                />
                <TextField
                    hintText="请输入您的电话"
                    floatingLabelText="电话"
                    value={phoneNumbe}
                />
                <TextField
                    hintText="请输入维修地址"
                    floatingLabelText="维修地址"
                    value={address}
                />
                <TextField
                    hintText="请输入家电品牌"
                    floatingLabelText="家电品牌"
                    value={brand}
                />
                <TextField
                    hintText="请输入您的要维修的机器类型"
                    floatingLabelText="机器类别"
                    value={mutionType}
                />
                <TextField
                    hintText="请输入故障类型"
                    floatingLabelText="故障类型"
                    value={errType}
                />
                <TextField
                    hintText="请输入您的问题描述"
                    floatingLabelText="问题描述"
                    value={qaDes}
                /><br />
            </Paper>
        </div>
    )
}

FixBoxFrom.propTypes = propTypes

FixBoxFrom.defaultProps = defaultProps

export default FixBoxFrom
