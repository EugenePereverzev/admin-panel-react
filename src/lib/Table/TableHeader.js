import './TableHeader.css';
import Checkbox from '../Checkbox/Checkbox';
import Cell from '../Cell/Cell';

export default function TableHeader (props) {
    const headerCells = props.columns.map(column => {
        const style = (!!column.flex?{style: {flex: column.flex}}:{});
        return <Cell key={column.id} label={column.label} style={style} />
        });  
        
    return (
        <div className="table-header">
            <Checkbox onClick={props.onAllCheckClick}/>
            {headerCells}
        </div>
    )
}