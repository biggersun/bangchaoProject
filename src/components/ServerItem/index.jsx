import { List, ListItem, } from 'material-ui/List'
import { Divider, Subheader, } from 'material-ui'

import React, { Component, } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
}

const defaultProps = {}

class ServerItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { data, title, } = this.props
        return (
            <List>
                <Subheader>{title}</Subheader>
                <ListItem primaryText={`家电品牌${data.name}`} />
                <ListItem primaryText={`维修的机器类${data.type}`} />
                <ListItem primaryText={`故障类型${data.name}`} />
                <ListItem primaryText={`报修编号${data.name}`} />
                <ListItem primaryText={`报修时间${data.name}`} />
                <ListItem primaryText={`当前状态${data.name}`} />
                <ListItem primaryText={`报修地址${data.name}`} />
                <Divider />
            </List>
        )
    }
}

ServerItem.propTypes = propTypes

ServerItem.defaultProps = defaultProps

export default ServerItem
