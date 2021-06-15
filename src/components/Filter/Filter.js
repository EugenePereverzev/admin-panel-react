import './Filter.css';
import Button from '../Button/Button';
import { ICON_FILTER, ICON_REFRESH, ICON_X_LARGE } from '../Icons/Icons';

export default function Filter () {
    return (
        <div className="filter">
            <div className="filter-main">
                <Button icon={ICON_FILTER} label="Фильтр" reversed/>   
                <Button label="Сбросить фильтр" disabled /> 
                <div className="filter-main-lefted">
                    <Button icon={ICON_REFRESH} label="Обновить"/> 
                </div>
            </div>
            <div className="filter-detail">
                
            </div>
        </div>
    )
};