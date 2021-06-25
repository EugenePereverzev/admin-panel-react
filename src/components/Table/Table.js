import './Table.css';
import TableHeader from './TableHeader';

import Button from '../Button/Button';
import { ICON_ABORT, ICON_BIN, ICON_CHECKMARK, ICON_DOT, ICON_FILTER, ICON_LOCKED, ICON_MOON, ICON_PENCIL, ICON_REFRESH, ICON_SEARCH, ICON_SUN, ICON_V_ARROW, ICON_X_LARGE, ICON_X_MEDIUN } from '../Icons/Icons';
import { defColumns } from './Columns';


export default function Table () {
    return (
        <div className="table">
            <TableHeader columns={defColumns} />
            <div className="table-body">Teлo таблицы</div>
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
    )
};