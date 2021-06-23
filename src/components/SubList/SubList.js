import React, { Component } from 'react';
import './SubList.css';

class SubList extends Component {
    render () {
        const style = {style: this.props.style};
        return (
            <div className="sub-list" onClick={this.props.onClick} {...style}> 
                <div>{this.props.label}</div>
                {this.props.children}
            </div>
        );
    }
};

export default SubList;