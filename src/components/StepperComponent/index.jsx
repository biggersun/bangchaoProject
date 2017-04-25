import React, { Component, } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import { FlatButton, RaisedButton, Paper, } from 'material-ui'
import PropTypes from 'prop-types'

const propTypes = {
    data: PropTypes.Object,
}

const defaultProps = {}

class StepperComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finished: false,
            stepIndex: 0,
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    handleNext() {
        const { data, } = this.props
        const { stepIndex, } = this.state
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= data.length - 1,
        })
    }

    handlePrev() {
        const { stepIndex, } = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1, })
        }
    }

    renderStepActions(step) {
        const { data, } = this.props
        const { stepIndex, } = this.state

        return (
            <div style={{ margin: '12px 0', }}>
                <RaisedButton
                    label={stepIndex === data.length - 1 ? '完成' : '下一步'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12, }}
                />
                {step > 0 && (
                <FlatButton
                    label="返回"
                    disabled={stepIndex === 0}
                    disableTouchRipple
                    disableFocusRipple
                    onTouchTap={this.handlePrev}
                />
                )}
            </div>
        )
    }

    render() {
        const { finished, stepIndex, } = this.state
        const { data, } = this.props
        return (
            <Paper style={{ maxWidth: 380, margin: 'auto', }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    {data.map(item => <Step key={item.id}>
                        <StepLabel>{item.title}</StepLabel>
                        <StepContent>
                            <p>{item.content}</p>
                            {this.renderStepActions(item.index)}
                        </StepContent>
                    </Step>
                    )}
                </Stepper>
                {finished && (
                <p style={{ margin: '20px 0', textAlign: 'center', }}>
                    <RaisedButton
                        label="返回首步查看详细进度"
                        onClick={(event) => {
                            event.preventDefault()
                            this.setState({ stepIndex: 0, finished: false, })
                        }}
                    />
                </p>
            )}
            </Paper>
        )
    }
}

StepperComponent.propTypes = propTypes

StepperComponent.defaultProps = defaultProps

export default StepperComponent
