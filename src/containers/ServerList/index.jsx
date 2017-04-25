import React, { Component, } from 'react'
import ServerItem from '../../components/ServerItem'

const propTypes = {}

const defaultProps = {}

class ServerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this.handleFetchData()
    }

    handleFetchData() {
        const res = [
            {
                id: 1,
                title: '电冰箱',
                name: '',
                phoneNumbe: '',
                address: '',
                brand: '',
                kind: '',
                type: '',
                detail: '',
            },
            {
                id: 2,
                title: '电视机',
                name: '',
                phoneNumbe: '',
                address: '',
                brand: '',
                kind: '',
                type: '',
                detail: '',
            },
            {
                id: 3,
                title: '电脑',
                name: '',
                phoneNumbe: '',
                address: '',
                brand: '',
                kind: '',
                type: '',
                detail: '',
            },
        ]
        this.setState({
            list: res,
        })
    }

    render() {
        const { list, } = this.state
        const listData = list.map(item =>
            <ServerItem data={item} key={item.id} title={item.title} />
        )
        return (
            <div>
                {listData}
            </div>
        )
    }
}

ServerList.propTypes = propTypes

ServerList.defaultProps = defaultProps

export default ServerList
