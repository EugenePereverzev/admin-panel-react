import React, { Component } from 'react';
import Button from '../Button/Button';
import { ICON_LOCKED, ICON_X_LARGE } from '../Icons/Icons';
import style from './Input.module.css';
import cc from 'classcat';

class Input extends Component {

    state = { 
        value: this.props.convertIn ? 
                (this.props.convertIn (this.props.value) ?? "") :
                (this.props.value ?? "") ,
    };

    handlerConvertOut = (value) => (
        this.props.convertOut ?
        this.props.convertOut (value) :
        value
    );

    handlerConvertIn = (value) => (
        this.props.convertIn ? 
        (this.props.convertIn (value) ?? "") :
        (value ?? "")
    );

    handlerOnChange = (e) => {
        this.setState ({ value: e.target.value });
    };

    handlerClearValue = () => {
        this.setState ({ value: "" });
        this.props.onClear && this.props.onClear (this.props.field);
    };

    handlerOnSubmit = (value) => {
        if (this.props.onSubmit) {
            const outValue = this.handlerConvertOut (value);
            this.props.onSubmit ({ [this.props.field]: outValue });
            this.props.convertIn && this.setState ({ value: this.handlerConvertIn(outValue) });
        }
    };

    handlerOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handlerOnSubmit (this.state.value);
            e.preventDefault ();
        }
    };

    handlerOnBlur = () => {
        if ((this.props.value ?? "") !== (this.state.value ?? "")) {
            this.handlerOnSubmit (this.state.value);
        }
    };
  
    render () {
        const classString = cc ({
            [style._]: true,
            [style.locked]: this.props.locked,
            [style.disabled]: this.props.disabled,
        });

        return (
            <div className={classString} style={this.props.style}>
                {this.props.children}
                {!!this.props.label && <div className={style.label}>{this.props.label}</div>}
                <input 
                    type="text" 
                    className={style.field} 
                    value={this.state.value} 
                    onChange={this.handlerOnChange} 
                    onKeyUp={this.handlerOnKeyUp}
                    onBlur={this.handlerOnBlur}
                    placeholder={this.props.placeHolder} 
                    pattern={this.props.pattern}/>
                {(this.props.locked && <Button icon={ICON_LOCKED}/>) ||
                    (!!this.state.value && !this.props.disabled && <Button icon={ICON_X_LARGE} onClick={this.handlerClearValue} />)}
            </div>
        );
    };
};

export default Input;