import style from './TableRow.module.css';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Cell from '../../lib/Cell/Cell';

export default function TableRow (props) {
    return (
        <div className={style._}>
            <Checkbox onClick={props.onRowCheckClick} checked={props.selected}/>
            {props.columns.map (({id, name, flex, justifyContent, format}) => (
                    <Cell key={id} label={format(props.values[name])} style={{style: {flex, justifyContent}}} />
                )
            )}
        </div>
    )
}