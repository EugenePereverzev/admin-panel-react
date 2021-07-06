import style from './TableHeader.module.css';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Button from '../../lib/Button/Button';
import { ICON_V_ARROW } from '../../lib/Icons/Icons';

export default function TableHeader (props) {  
    const cellStyle = {
        flexDirection: "row-reverse", 
        justifyContent: "flex-end", 
        color: "var(--control-back-color)",
    };
    
    return (
        <div className={style._}>
            <Checkbox onClick={props.onAllCheckClick}/>
            {props.columns.map (
                ({ id, field, label, style: { flex, marginRight }}) => (
                    <Button key={id} label={label} onClick={props.onHeaderClick(field)} 
                            icon={(field === props.sort ? ICON_V_ARROW : "#")} 
                            style={{...cellStyle, flex, marginRight}}/>
                )
            )}
        </div>
    )
}