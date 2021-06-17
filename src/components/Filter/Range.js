import { Component } from 'react';
import Input from '../Input/Input';
import './Range.css';

class Range extends Component {

    render () {
        return (
            <div className="range">
                <div className="range-label">{this.props.label}</div>
                <div className="range-values">
                    <Input label={this.props.startLabel} hint={this.props.startHint || this.props.hint} value={this.props.startValue} />
                    <Input label={this.props.endLabel} hint={this.props.endHint || this.props.hint} value={this.props.endValue} />
                </div>
            </div>
        );
    };
};

export default Range;