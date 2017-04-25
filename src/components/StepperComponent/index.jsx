import React, { Component, } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const propTypes = {}

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
                    label={stepIndex === data.length - 1 ? 'Finish' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12, }}
                />
                {step > 0 && (
                <FlatButton
                    label="Back"
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
            <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto', }}>
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
                    <a
                        href="#"
                        onClick={(event) => {
                            event.preventDefault()
                            this.setState({ stepIndex: 0, finished: false, })
                        }}
                    >
                点击
                </a> 返回首步查看详细进度
            </p>
            )}
            </div>
        )
    }
}

StepperComponent.propTypes = propTypes

StepperComponent.defaultProps = defaultProps

export default StepperComponent
