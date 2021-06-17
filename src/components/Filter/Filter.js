import { Component } from 'react';
import './Filter.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FilterDetail from './FilterDetail';
import { ICON_FILTER, ICON_REFRESH, ICON_SEARCH } from '../Icons/Icons';
import Range from './Range';

class Filter extends Component {

    state = {
        isOpen: false,
    }

    handleOnClick = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }

    render () {
        const filterDetail = this.state.isOpen && (
            <FilterDetail>
                <Range label="Дата оформления" startLabel="c" endLabel="по" hint="dd.mm.yyyy" startValue="20.01.2021"/>
                <Button label="Применить"/>
            </FilterDetail>
        );

        return (
            <div className="filter">
                <div className="filter-main">
                    <Input hint="Номер заказа или ФИО">
                        <Button icon={ICON_SEARCH}/>
                    </Input>
                    <Button icon={ICON_FILTER} label="Фильтр" onClick={this.handleOnClick} reversed={this.state.isOpen}/>   
                    <Button label="Сбросить фильтр" disabled /> 
                    <div className="filter-main-lefted">
                        <Button icon={ICON_REFRESH} label="Обновить"/> 
                    </div>
                </div>
                {filterDetail}
            </div>
        )
    }
};

export default Filter;