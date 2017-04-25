import React, { Component, } from 'react'
import StepperComponent from '../../components/StepperComponent'

const propTypes = {}

const defaultProps = {}

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepper: [],
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        this.setState({
            stepper: [
                {
                    id: 1,
                    index: 0,
                    title: '收到电器',
                    content: '对于真正适合做成 SPA 的应用，SEO 反而通常不是问题。',
                },
                {
                    id: 2,
                    index: 1,
                    title: '修理电器',
                    content: '对于真正适合做成 SPA 的应用，SEO 反而通常不是问题。',
                },
                {
                    id: 3,
                    index: 2,
                    title: '发货',
                    content: '对于真正适合做成 SPA 的应用，SEO 反而通常不是问题。',
                },
                {
                    id: 4,
                    index: 3,
                    title: '发货',
                    content: '对于真正适合做成 SPA 的应用，SEO 反而通常不是问题。',
                },
                {
                    id: 5,
                    index: 4,
                    title: '发货',
                    content: '对于真正适合做成 SPA 的应用，SEO 反而通常不是问题。',
                },
            ],
        })
    }

    render() {
        const { stepper, } = this.state
        return <div><StepperComponent data={stepper} /></div>
    }
}

Schedule.propTypes = propTypes

Schedule.defaultProps = defaultProps

export default Schedule
