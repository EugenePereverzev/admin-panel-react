import style from './TableRow.module.css';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Cell from '../../lib/Cell/Cell';

export default function TableRow (props) {
    return (
        <div className={style._}>
            <Checkbox onClick={props.onRowCheckClick} checked={props.selected}/>
            {props.columns.map (({id, field, format, style: cellStyle, valueStyle, children}) => {
                    const value = props.values[field];
                    const superStyle = {...cellStyle, ...( valueStyle ? valueStyle(value) : cellStyle)};
                    return (
                        <Cell key={id} label={format(value)} style={superStyle}>
                            {children && children(value)}
                        </Cell>
                    )
                }
            )}
        </div>
    )
}