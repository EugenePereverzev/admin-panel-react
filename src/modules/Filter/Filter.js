import style from './Filter.module.css';
import Button from '../../lib/Button/Button';
import Input from '../../lib/Input/Input';
import FilterDetail from './FilterDetail';
import { ICON_FILTER, ICON_REFRESH, ICON_SEARCH } from '../../lib/Icons/Icons';
import Range from './Range';

import { useDispatch, useSelector } from 'react-redux';
import { getFilterExpanded, getFilterActivated, getFilter } from '../../store/selectors/filter';
import { actionFilterToggle, actionFilterSetValue, actionFilterApply, actionFilterClear } from '../../store/actions/filter';

function Filter () {
    const filterExpanded = useSelector (getFilterExpanded);
    const filterActivated = useSelector (getFilterActivated);
    const filter = useSelector (getFilter);
    const dispatch = useDispatch ();

    const handleSetValue = (value) => dispatch (actionFilterSetValue (value)); 

    const filterDetail = filterExpanded && (
        <FilterDetail>
            <Range 
                field="date" 
                values={filter["date"]}
                label="Дата оформления" 
                startLabel="c" 
                endLabel="по" 
                placeHolder="dd.mm.yyyy" 
                pattern="(((0?[1-9]|[1,2][0-9])\.(0?[1-9]|1[0-2]))|(30\.(0?[1,3-9]|1[0-2]))|(31\.(0?[1,3,5,7,8]|1[0,2])))\.([0-9]{2}|[0-9]{4})"
                onSubmit={handleSetValue}
            />
            <Button 
                label="Применить" 
                onClick={() => dispatch (actionFilterApply ())}
                disabled={!filter.isUpdate} 
                style={{height: "2rem", border: "solid 1px currentColor"}}
            />
        </FilterDetail>
    );

    return (
        <div className={style._}>
            <div className={style.main}>
                <Input 
                    field="idBayer" 
                    value={filter["idBayer"]}
                    placeHolder="Номер заказа или ФИО" 
                    onSubmit={handleSetValue} 
                    style={{width: "15rem"}}
                >
                    <Button icon={ICON_SEARCH}/>
                </Input>
                <Button 
                    icon={ICON_FILTER} 
                    label="Фильтр" 
                    onClick={() => dispatch (actionFilterToggle ())} 
                    reversed={filterExpanded}
                />   
                <Button 
                    label="Сбросить фильтр" 
                    onClick={() => dispatch (actionFilterClear ())} 
                    disabled={!filterActivated} 
                /> 
                <div className={style.main_lefted}>
                    <Button icon={ICON_REFRESH} label="Обновить"/> 
                </div>
            </div>
            {filterDetail}
        </div>
    )

};

export default Filter;