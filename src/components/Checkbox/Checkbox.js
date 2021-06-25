import { Component } from "react";
import { ICON_CHECKMARK } from "../Icons/Icons";
import './Checkbox.css';

class Checkbox extends Component {
    state = {
        value: false,
        isDisable: !!this.props.disabled,
    }

    handleOnClick = () => {
        this.setState ({
            value: !this.state.value
        })
        this.props.onClick && this.props.onClick()
    }

    render () {
        const icon = <svg className="checkbox-icon"><use href={this.state.value?ICON_CHECKMARK:""}/></svg>;
        const label = !!this.props.label && <div className="checkbox-label">{this.props.label}</div>;

        return (
            <div className="checkbox" onClick={this.handleOnClick}>
                {icon}
                {label}
            </div>
        )
    }
}

export default Checkbox;