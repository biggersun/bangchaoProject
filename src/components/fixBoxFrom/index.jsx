import React from 'react'
import { Paper, } from 'material-ui'
import TextFieldItem from '../TextFieldItem'

const style = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
}

const FixBoxFrom = () => <div>
    <Paper style={style}>
        <TextFieldItem
            hintText="请输入您的姓名"
            floatingLabelText="姓名"
            name="name"
        />
        <TextFieldItem
            hintText="请输入您的电话"
            floatingLabelText="电话"
            name="phoneNumbe"
        />
        <TextFieldItem
            hintText="请输入维修地址"
            floatingLabelText="维修地址"
            name="address"
        />
        <TextFieldItem
            hintText="请输入家电品牌"
            floatingLabelText="家电品牌"
            name="brand"
        />
        <TextFieldItem
            hintText="请输入您的要维修的机器类型"
            floatingLabelText="机器类别"
            name="kind"
        />
        <TextFieldItem
            hintText="请输入故障类型"
            floatingLabelText="故障类型"
            name="type"
        />
        <TextFieldItem
            hintText="请输入您的问题描述"
            floatingLabelText="问题描述"
            name="detail"
        /><br />
    </Paper>
</div>

export default FixBoxFrom
