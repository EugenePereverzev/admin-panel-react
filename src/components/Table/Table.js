import style from './Table.module.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Cell from '../../lib/Cell/Cell';
import Button from '../../lib/Button/Button';
import { ICON_ABORT, ICON_BIN, ICON_CHECKMARK, ICON_DOT, ICON_FILTER, ICON_LOCKED, ICON_MOON, ICON_PENCIL, ICON_REFRESH, ICON_SEARCH, ICON_SUN, ICON_V_ARROW, ICON_X_LARGE, ICON_X_MEDIUN } from '../../lib/Icons/Icons';
import { defColumns } from './Columns';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleOrders, getSelectCount, getSort } from '../../store/selectors/orders';
import { actionToggleSelection, actionSetSort } from '../../store/actions/orders';
import { getFullOrderData } from '../../data/orders';



function Table () {
        const viewOrder = useSelector(getVisibleOrders);
        const countSelected = useSelector(getSelectCount);
        const sortMode = useSelector(getSort);
        const dispatch = useDispatch();

        const handlerOnHeaderClick = (sort) => () => dispatch (actionSetSort(sort));
        const handlerOnRowCheckClick = (id) => () => dispatch (actionToggleSelection(id));

        return (
            <div className={style._}>
                <TableHeader columns={defColumns} sort={sortMode} onHeaderClick={handlerOnHeaderClick}/>
                <div className={style.body}>
                    <div className={style.rows_container}>
                        {viewOrder.map(({id, isSelected}, index) => {
                            return <TableRow key={index} columns={defColumns} values={getFullOrderData(id)} selected={isSelected} 
                            onRowCheckClick={handlerOnRowCheckClick(id)}/>;
                        })}
                    </div>
                </div>
                <div className={style.footer}>
                    <Cell label={`Выбрано записей: ${countSelected}`} style={{flex: "1", marginLeft: "0.5rem"}} />
                    <Button icon={ICON_SUN} style={{color: "#F53152"}}/>
                    <Button icon={ICON_MOON}/>
                    <Button icon={ICON_CHECKMARK} style={{color: "#0FB864"}}/>
                    <Button icon={ICON_ABORT}/>
                    <Button icon={ICON_BIN}/>
                    <Button icon={ICON_FILTER}/>
                    <Button icon={ICON_DOT}/>
                    <Button icon={ICON_LOCKED} style={{color: "black"}}/>
                    <Button icon={ICON_PENCIL}/>
                    <Button icon={ICON_REFRESH}/>
                    <Button icon={ICON_SEARCH}/>
                    <Button icon={ICON_V_ARROW}/>
                    <Button icon={ICON_X_LARGE}/>
                    <Button icon={ICON_X_MEDIUN}/>
                </div>
            </div>
        );
};

export default Table;