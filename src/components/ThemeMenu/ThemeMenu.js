import React, { Component } from 'react';
import './ThemeMenu.css';
import Button from '../Button/Button';
import { ICON_MOON, ICON_SUN } from '../Icons/Icons';

class ThemeMenu extends Component {
    state = {
        isOpen: false,
    }

    handleOnClick = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }

    render () {
        const subMenu = this.state.isOpen && 
            <div className="sub-menu">
                <div>Выберите тему</div>
                <Button icon={ICON_SUN} label="Светлая" />
                <Button icon={ICON_MOON} label="Тёмная" reversed/>
            </div>;

        return (
            <div className="theme-menu">
                <Button icon={ICON_SUN} label="Светлая тема" onClick={this.handleOnClick} reversed={this.state.isOpen}/>
                {subMenu}
            </div>
        )
    }
};

export default ThemeMenu;