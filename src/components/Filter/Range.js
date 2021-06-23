import { Component } from 'react';
import Input from '../Input/Input';
import './Range.css';

class Range extends Component {

    render () {
        return (
            <div className="range">
                <div className="range-label">{this.props.label}</div>
                <div className="range-values">
                    <Input label={this.props.startLabel} placeHolder={this.props.startPlaceHolder || this.props.placeHolder} value={this.props.startValue} width="10rem"/>
                    <Input label={this.props.endLabel} placeHolder={this.props.endPlaceHolder || this.props.placeHolder} value={this.props.endValue} width="10rem"/>
                </div>
            </div>
        );
    };
};

export default Range;