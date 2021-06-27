import { Component } from 'react';
import './Table.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

import Button from '../Button/Button';
import { ICON_ABORT, ICON_BIN, ICON_CHECKMARK, ICON_DOT, ICON_FILTER, ICON_LOCKED, ICON_MOON, ICON_PENCIL, ICON_REFRESH, ICON_SEARCH, ICON_SUN, ICON_V_ARROW, ICON_X_LARGE, ICON_X_MEDIUN } from '../Icons/Icons';
import { defColumns } from './Columns';

import { store } from '../../store/Store';
import { getOrder } from '../../data/Orders';
import { getPerson } from '../../data/Persons';
import { getGood } from '../../data/Goods';

const orderRows = () => {
    const orders = store.getState().orderList; 
    return orders.list.map((item, index)=>{
        const orderData = getOrder (item.id);
        const personData = getPerson (orderData.bayer);
        const values = {
                id: orderData.id,
                date: orderData.makeDate.toString(),
                status: orderData.status,
                bayer: personData.name,
                count: orderData.goods.length,
                summa: orderData.goods.reduce((sum, item) => sum=+(item.quantity*getGood(item.id).price*(1-item.discount)), 0)
            };
        return <TableRow key={index} columns={defColumns} values={values} selected={item.isSelected}/>;
    })
};

class Table extends Component {


    render () {
        return (
            <div className="table">
                <TableHeader columns={defColumns} />
                <div className="table-body">
                    {orderRows()}
                </div>
                <div className="table-footer">
                    <Button icon={ICON_SUN}/>
                    <Button icon={ICON_MOON}/>
                    <Button icon={ICON_CHECKMARK}/>
                    <Button icon={ICON_ABORT}/>
                    <Button icon={ICON_BIN}/>
                    <Button icon={ICON_FILTER}/>
                    <Button icon={ICON_DOT}/>
                    <Button icon={ICON_LOCKED}/>
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
};

export default Table;