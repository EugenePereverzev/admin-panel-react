import './TableRow.css';
import Checkbox from '../Checkbox/Checkbox';
import Cell from '../Cell/Cell';

export default function TableRow (props) {
    const valueCells = props.columns.map(column => {
        const style = (!!column.flex?{style: {flex: column.flex}}:{});
        return <Cell key={column.id} label={props.values[column.name]} style={style} />
        });  
        
    return (
        <div className="table-row">
            <Checkbox onClick={props.onClick}/>
            {valueCells}
        </div>
    )
}