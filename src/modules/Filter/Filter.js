import style from './Filter.module.css';
import Button from '../../lib/Button/Button';
import Input from '../../lib/Input/Input';
import FilterDetail from './FilterDetail';
import { ICON_FILTER, ICON_REFRESH, ICON_SEARCH } from '../../lib/Icons/Icons';
import Range from './Range';

import { useDispatch, useSelector } from 'react-redux';
import { getFilterExpanded, getFilterActivated, getFilter } from '../../store/selectors/filter';
import { actionFilterToggle, actionFilterSetValue, actionFilterApply, actionFilterClear, actionFilterSetWApply } from '../../store/actions/filter';

const LOCAL_DATE_FORMAT = "dd.mm.yyyy";

const strToDateFormat = (value, format) => {
    const values = value.replace(/[^0-9A-Za-z]/g,'|').split('|');
    const formats = format.toLowerCase().replace(/[^0-9a-z]/g,'|').split('|');
    const now = new Date();
    const nowParts = [now.getFullYear(), now.getMonth() + 1, now.getDate(), 0, 0, 0];
    const dateParts = ["yyyy", "mm", "dd", "hh", "ii", "ss"];
    const valueParts = dateParts.map ((part, index) => (values[formats.indexOf(part)] ?? nowParts[index]) - (part === "mm"));
    return new Date (...valueParts);
};

const dateToStrFormat = (value, format) => {
    const values = [value.getFullYear(), value.getMonth() + 1, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds()];
    const formats = format.toLowerCase().replace(/[^0-9a-z]/g,'|').split('|');
    const delimeters = format.toLowerCase().replace(/[0-9a-z]/g,'');
    const dateParts = ["yyyy", "mm", "dd", "hh", "ii", "ss"];
    const valueParts = formats.map ((part, index) => (values[dateParts.indexOf(part)] ?? part) + (delimeters[index] ?? ""));
    return valueParts.join("");
};

function Filter () {
    const filterExpanded = useSelector (getFilterExpanded);
    const filterActivated = useSelector (getFilterActivated);
    const filter = useSelector (getFilter);
    const dispatch = useDispatch ();

    const strToDate = (value) => ((value !== "") && strToDateFormat (value, LOCAL_DATE_FORMAT)) || undefined;
    const dateToStr = (value) => (value && dateToStrFormat (value, LOCAL_DATE_FORMAT)) || "";
    const handleSetValue = (value) => dispatch (actionFilterSetValue (value)); 
    const handleSetWApply = (value) => dispatch (actionFilterSetWApply (value)); 

    const filterDetail = filterExpanded && (
        <FilterDetail>
            <Range 
                field="date" 
                values={filter["date"]}
                label="Дата оформления" 
                startLabel="c" 
                endLabel="по" 
                placeHolder={LOCAL_DATE_FORMAT} 
                convertIn={dateToStr}
                convertOut={strToDate}
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
                    onSubmit={handleSetWApply} 
                    onBlur={handleSetValue}
                    style={{width: "15rem"}}
                >
                    <Button icon={ICON_SEARCH} onClick={() => dispatch (actionFilterApply ())}/>
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