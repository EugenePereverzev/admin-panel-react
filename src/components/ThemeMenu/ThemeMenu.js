import React, { Component } from 'react';
import './ThemeMenu.css';
import Button from  '../../lib/Button/Button';
import { ICON_MOON, ICON_SUN } from '../../lib/Icons/Icons';
import SubList from '../../lib/SubList/SubList';

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
            <SubList label="Выберите тему" onClick={this.handleOnClick} {...{style: {width: "10rem", right: 0, top: "2rem", }}}>
                <Button icon={ICON_SUN} label="Светлая" />
                <Button icon={ICON_MOON} label="Тёмная" reversed/>
            </SubList>

        return (
            <div className="theme-menu">
                <Button icon={ICON_SUN} label="Светлая тема" onClick={this.handleOnClick} reversed={this.state.isOpen}/>
                {subMenu}
            </div>
        )
    }
};

export default ThemeMenu;