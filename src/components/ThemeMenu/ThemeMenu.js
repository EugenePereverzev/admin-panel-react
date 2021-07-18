import React, { Component } from 'react';
import './ThemeMenu.css';
import Button from  '../../lib/Button/Button';
import { ICON_MOON, ICON_SUN } from '../../lib/Icons/Icons';
import SubList from '../../lib/SubList/SubList';

const CLASS_DARK = "dark";

class ThemeMenu extends Component {
    state = {
        isOpen: false,
        isDark: this.props.html.classList.contains(CLASS_DARK),
    }

    handleToggleOpen = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }

    handleSetDark = (html, isDark) => {
        this.setState ({
            isOpen: !this.state.isOpen,
            isDark
        });
        if (isDark) {
            html.classList.add (CLASS_DARK)
        } else {
            html.classList.remove (CLASS_DARK)
        }
    }

    render () {
        const html = this.props.html;
        const subMenu = this.state.isOpen && 
            <SubList label="Выберите тему" onClick={this.handleToggleOpen} style={{width: "10rem", right: 0, top: "2rem", }}>
                <Button icon={ICON_SUN} label="Светлая" onClick={() => this.handleSetDark(html, false)}/>
                <Button icon={ICON_MOON} label="Тёмная" onClick={() => this.handleSetDark(html, true)} reversed/>
            </SubList>

        return (
            <div className="theme-menu">
                <Button 
                    icon={this.state.isDark ? ICON_MOON : ICON_SUN} 
                    label={this.state.isDark ? "Тёмная тема" : "Светлая тема"} 
                    onClick={this.handleToggleOpen} 
                    reversed={this.state.isOpen}/>
                {subMenu}
            </div>
        )
    }
};

export default ThemeMenu;